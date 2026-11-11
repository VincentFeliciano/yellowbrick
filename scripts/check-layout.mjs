// Layout check for the Yellowbrick site.
//
//   npm run check:layout                     check http://localhost:5173 (starts a dev server if none)
//   npm run check:layout -- <url> [outDir]   check another server, e.g. the preview on :4173
//
// Visits every page linked from the home page, at desktop (1920×1080) and phone (390×844)
// size, saves a screenshot of every frame, and reports:
//   - content reaching the bottom 10% of the screen (it can be hidden behind the taskbar)
//   - content under the wordmark, the corner brick, or the links
//   - content spilling out of its region, or two regions overlapping
//   - sideways scrolling on phones
//   - errors in the browser console
// Exits with code 1 if anything is found. Set CHROME_PATH if Chrome isn't in the default place.

import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import puppeteer from 'puppeteer-core';

const DEFAULT_URL = 'http://localhost:5173';
const base = (process.argv[2] ?? DEFAULT_URL).replace(/\/$/, '');
const out = resolve(process.argv[3] ?? join(tmpdir(), 'yellowbrick-layout'));
const chrome = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

/** Content must end above this fraction of the frame's height. */
const SAFE_BOTTOM = 0.9;

const DESKTOP = { width: 1920, height: 1080 };
const PHONE = { width: 390, height: 844, isMobile: true, hasTouch: true };

const up = async (url) => {
	try {
		return (await fetch(url)).ok;
	} catch {
		return false;
	}
};

/** Starts a throwaway dev server when the default one isn't running. */
async function ensureServer() {
	if (await up(base)) return { url: base, stop: () => {} };
	if (process.argv[2]) throw new Error(`Nothing is answering at ${base}.`);

	const port = 5199;
	const url = `http://localhost:${port}`;
	const server = spawn(
		process.execPath,
		['node_modules/vite/bin/vite.js', 'dev', '--port', String(port), '--strictPort'],
		{ stdio: 'ignore' }
	);
	for (let i = 0; i < 60; i++) {
		if (await up(url)) return { url, stop: () => server.kill() };
		await new Promise((r) => setTimeout(r, 500));
	}
	server.kill();
	throw new Error('Could not start a dev server. Run `npm run dev` and try again.');
}

/** Every page reachable from the home page through on-site links. */
async function findPages(page, url) {
	const seen = new Set(['/']);
	const queue = ['/'];
	while (queue.length) {
		const path = queue.shift();
		await page.goto(url + path, { waitUntil: 'networkidle0' });
		const links = await page.$$eval('a[href^="/"]', (as) => as.map((a) => a.pathname));
		for (const link of links) {
			if (!seen.has(link) && !link.includes('.')) {
				seen.add(link);
				queue.push(link);
			}
		}
	}
	return [...seen];
}

/** Runs in the browser: measures one frame and returns a list of problems. */
function measureFrame({ index, safeBottom }) {
	const frame = document.querySelectorAll('main > section')[index];
	const stage = frame.querySelector('.stage').getBoundingClientRect();
	const pct = (y) => Math.round(((y - stage.top) / stage.height) * 1000) / 10;
	const hit = (a, b) =>
		a.right > b.left + 1 && a.left < b.right - 1 && a.bottom > b.top + 1 && a.top < b.bottom - 1;
	const label = (el) =>
		(el.textContent.trim().slice(0, 40) || el.getAttribute('aria-label') || el.className || el.tagName)
			.replace(/\s+/g, ' ');
	const visible = (el) => {
		const r = el.getBoundingClientRect();
		return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden';
	};
	// The smallest things that draw something: text-only elements and placeholder images.
	const leaves = (root) =>
		[...root.querySelectorAll('*')].filter(
			(el) => visible(el) && (!el.children.length || el.getAttribute('role') === 'img')
		);

	const problems = [];
	const keepOut = [
		['the wordmark', document.querySelector('.wordmark')],
		['the corner brick', document.querySelector('[data-brick-spot]')],
		...[...document.querySelectorAll('.chrome nav')].map((n) => ['the links', n])
	].filter(([, el]) => el && visible(el));

	const regions = [...frame.querySelectorAll('.at')];
	let lowest = 0;
	const boxes = [];

	for (const region of regions) {
		const r = region.getBoundingClientRect();
		const parts = leaves(region);
		let box = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
		for (const el of parts) {
			const e = el.getBoundingClientRect();
			lowest = Math.max(lowest, e.bottom);
			box = {
				left: Math.min(box.left, e.left),
				top: Math.min(box.top, e.top),
				right: Math.max(box.right, e.right),
				bottom: Math.max(box.bottom, e.bottom)
			};
			for (const [name, other] of keepOut) {
				if (hit(e, other.getBoundingClientRect())) problems.push(`"${label(el)}" is under ${name}`);
			}
		}
		// Regions with a fixed height (--h) must hold their content.
		if (region.style.getPropertyValue('--h') && box.bottom > r.bottom + 2) {
			problems.push(
				`"${label(region)}" spills ${Math.round(box.bottom - r.bottom)}px below its region`
			);
		}
		boxes.push({ region, box });
	}

	for (let i = 0; i < boxes.length; i++) {
		for (let j = i + 1; j < boxes.length; j++) {
			if (hit(boxes[i].box, boxes[j].box)) {
				problems.push(
					`"${label(boxes[i].region)}" overlaps "${label(boxes[j].region)}"`
				);
			}
		}
	}

	if (lowest && pct(lowest) > safeBottom * 100) {
		problems.push(`content reaches ${pct(lowest)}% of the height (keep it above ${safeBottom * 100}%)`);
	}
	return { problems: [...new Set(problems)], lowest: lowest ? pct(lowest) : 0 };
}

const slug = (path) => (path === '/' ? 'home' : path.slice(1).replace(/\//g, '-'));

const { url, stop } = await ensureServer();
mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({
	executablePath: chrome,
	headless: true,
	args: ['--hide-scrollbars']
});

let failures = 0;
const report = (where, problems) => {
	if (!problems.length) return console.log(`  ok    ${where}`);
	failures += problems.length;
	for (const p of problems) console.log(`  FAIL  ${where}: ${p}`);
};

try {
	const page = await browser.newPage();
	const errors = [];
	page.on('pageerror', (e) => errors.push(e.message));
	page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
	// The motion only plays without reduced motion; snapping and smooth scroll would fight the jumps.
	await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
	const settle = async () => {
		await page.addStyleTag({
			content: 'html { scroll-snap-type: none !important; scroll-behavior: auto !important; }'
		});
		await page.evaluate(() => document.fonts.ready);
	};

	await page.setViewport(DESKTOP);
	const pages = await findPages(page, url);
	console.log(`Checking ${pages.join(', ')} on ${url}\nScreenshots: ${out}\n`);

	console.log(`Desktop ${DESKTOP.width}×${DESKTOP.height}`);
	for (const path of pages) {
		errors.length = 0;
		await page.goto(url + path, { waitUntil: 'networkidle0' });
		await settle();
		const count = await page.$$eval('main > section', (s) => s.length);
		for (let i = 0; i < count; i++) {
			await page.evaluate((i) => {
				const s = document.querySelectorAll('main > section')[i];
				window.scrollTo(0, s.getBoundingClientRect().top + window.scrollY);
			}, i);
			await new Promise((r) => setTimeout(r, 250));
			const file = join(out, `desktop-${slug(path)}-${i + 1}.png`);
			await page.screenshot({ path: file });
			const { problems, lowest } = await page.evaluate(measureFrame, {
				index: i,
				safeBottom: SAFE_BOTTOM
			});
			report(`${path} frame ${i + 1} (ends at ${lowest}%)`, problems);
		}
		report(`${path} console`, [...new Set(errors)]);
	}

	console.log(`\nPhone ${PHONE.width}×${PHONE.height}`);
	await page.setViewport(PHONE);
	for (const path of pages) {
		await page.goto(url + path, { waitUntil: 'networkidle0' });
		await settle();
		await page.screenshot({ path: join(out, `phone-${slug(path)}.png`), fullPage: true });
		const width = await page.evaluate(() => document.documentElement.scrollWidth);
		report(
			path,
			width > PHONE.width ? [`page is ${width}px wide, so it scrolls sideways`] : []
		);
	}
} finally {
	await browser.close();
	stop();
}

console.log(failures ? `\n${failures} problem(s) found.` : '\nNo problems found.');
process.exit(failures ? 1 : 0);
