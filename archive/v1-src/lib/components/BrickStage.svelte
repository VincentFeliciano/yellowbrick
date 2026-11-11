<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	/*
	 * The big background brick from the "yellowbrick ui" mockups.
	 *
	 * The page is divided into stops. Each stop has its own pose for the brick and the YB
	 * mark, randomised on every page load. Between stops the brick glides from one pose
	 * to the next as you scroll; the YB mark and callout fade out and reappear.
	 *
	 * Pages built from full-screen panels mark each one, and each panel is a stop:
	 *
	 *   data-panel="Name"            label shown in the callout
	 *   data-brick="hero|left|right" where the brick should sit
	 *   data-yb="tl|tr|bl|br"        which corner the YB mark goes to
	 *
	 * Other pages get a stop every screen height, with a smaller brick kept mostly in
	 * the side margins and a faint YB mark, so neither competes with body text.
	 */

	type Corner = 'tl' | 'tr' | 'bl' | 'br';
	type Stop = {
		/** Scroll position (px) at which this stop's pose is fully reached. */
		at: number;
		name: string;
		brick: 'hero' | 'left' | 'right';
		corner: Corner;
		rand: [number, number, number, number];
	};
	/** Brick centre (bx, by) and YB top-left (yx, yy) are in px relative to the viewport. */
	type Pose = {
		bx: number;
		by: number;
		s: number;
		r: number;
		o: number;
		yx: number;
		yy: number;
		yo: number;
		/** Callout opacity. */
		co: number;
	};
	const KEYS = ['bx', 'by', 's', 'r', 'o', 'yx', 'yy', 'yo', 'co'] as const;
	const CORNERS: Corner[] = ['tl', 'tr', 'bl', 'br'];

	const HEADER = 72;
	const BRICK_RATIO = 836 / 992;

	let brickEl: HTMLImageElement;
	let ybEl: HTMLElement;
	let calloutEl: HTMLElement;
	let ready = $state(false);
	let label = $state('');

	let panelEls: HTMLElement[] = [];
	let marked = false;
	let stops: Stop[] = [];
	let poses: Pose[] = [];
	/** Random choices for unmarked pages, kept across resizes so the brick doesn't reshuffle. */
	let freeStops: Omit<Stop, 'at'>[] = [];
	const panelRand = new WeakMap<HTMLElement, Stop['rand']>();
	let vw = 0;
	let vh = 0;
	let mobile = false;
	let brickW = 0;
	let reduced = false;

	let current: Pose | null = null;
	let target: Pose | null = null;
	let raf = 0;

	// Reduced-motion state: which stop's pose is showing, and the fade used to swap poses.
	let shown = -1;
	let hidden = $state(false);
	let swapTimer: ReturnType<typeof setTimeout> | undefined;

	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
	const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
	const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];
	const rand4 = (): Stop['rand'] => [Math.random(), Math.random(), Math.random(), Math.random()];

	/** Random side and corner for an unmarked stop, avoiding repeats. */
	function freeStop(prev?: Omit<Stop, 'at'>): Omit<Stop, 'at'> {
		const side = prev?.brick === 'left' ? 'right' : prev ? 'left' : pick(['left', 'right'] as const);
		return {
			name: '',
			brick: Math.random() < 0.75 ? side : (prev?.brick ?? side),
			corner: pick(CORNERS.filter((c) => c !== prev?.corner)),
			rand: rand4()
		};
	}

	function buildStops() {
		const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
		let at: number[];
		let base: Omit<Stop, 'at'>[];

		if (marked) {
			at = panelEls.map((el) => el.getBoundingClientRect().top + window.scrollY - HEADER);
			base = panelEls.map((el) => ({
				name: el.dataset.panel ?? '',
				brick: (el.dataset.brick as Stop['brick']) ?? 'right',
				corner: (el.dataset.yb as Corner) ?? 'br',
				rand: panelRand.get(el) ?? rand4()
			}));
		} else {
			const count = Math.max(2, Math.ceil(maxScroll / vh) + 1);
			while (freeStops.length < count) freeStops.push(freeStop(freeStops.at(-1)));
			at = Array.from({ length: count }, (_, i) => (i * maxScroll) / (count - 1));
			base = freeStops.slice(0, count);
		}

		// Keep stops in order and reachable.
		let prev = -1;
		stops = base.map((b, i) => {
			const s = Math.max(clamp(at[i], 0, maxScroll), prev + 1);
			prev = s;
			return { ...b, at: s };
		});
		poses = stops.map(poseFor);
	}

	function poseFor(stop: Stop): Pose {
		const [a, b, c, d] = stop.rand;
		let x: number, y: number, s: number, r: number, o: number;

		if (stop.brick === 'hero') {
			x = mobile ? 0.5 : lerp(0.64, 0.7, a);
			y = mobile ? 0.3 : lerp(0.5, 0.56, b);
			s = mobile ? 0.8 : lerp(1.05, 1.15, c);
			r = lerp(-5, 5, d);
			o = 1;
		} else if (marked) {
			// Cropped off the edge, as in the mockups.
			const edge = lerp(0.86, 1.0, a);
			x = stop.brick === 'right' ? edge : 1 - edge;
			y = lerp(0.42, 0.74, b);
			s = lerp(0.9, 1.3, c);
			r = lerp(-16, 14, d);
			o = mobile ? 0.18 : 1;
		} else {
			// Text pages: smaller and further out, so it stays in the margins.
			const edge = lerp(1.08, 1.13, a);
			x = stop.brick === 'right' ? edge : 1 - edge;
			y = lerp(0.35, 0.8, b);
			s = lerp(0.7, 0.85, c);
			r = lerp(-18, 16, d);
			o = mobile ? 0.15 : 1;
		}

		const yw = ybEl.offsetWidth;
		const yh = ybEl.offsetHeight;
		const pad = mobile ? 12 : 28;
		const left = stop.corner.endsWith('l');
		const top = stop.corner.startsWith('t');

		return {
			bx: x * vw,
			by: y * vh,
			s,
			r,
			o,
			yx: left ? pad : vw - yw - pad,
			yy: top ? HEADER + pad * 0.5 : vh - yh - pad * 0.5,
			// The YB mark is solid charcoal, so keep it faint wherever it could sit behind text.
			yo: marked && !mobile ? 1 : 0.08,
			co: marked && !mobile ? 1 : 0
		};
	}

	function measure() {
		vw = window.innerWidth;
		vh = window.innerHeight;
		mobile = vw < 768;
		brickW = mobile ? vw * 0.85 : Math.min(vw * 0.48, 760);
		brickEl.style.width = `${brickW}px`;
		buildStops();
	}

	function computeTarget() {
		if (!poses.length) return;
		const y = window.scrollY;
		const last = poses.length - 1;
		let i = 0;
		let t = 0;

		if (y <= stops[0].at) {
			i = 0;
		} else if (y >= stops[last].at) {
			i = last;
		} else {
			while (i < last - 1 && y >= stops[i + 1].at) i++;
			// Rest near each stop and move in between, so each panel feels settled.
			const raw = clamp(((y - stops[i].at) / (stops[i + 1].at - stops[i].at) - 0.15) / 0.7, 0, 1);
			t = raw * raw * (3 - 2 * raw);
		}

		const nearest = t < 0.5 ? i : Math.min(i + 1, last);
		label = stops[nearest].name;

		if (reduced) {
			// Reduced motion: no gliding. Fade out, jump to the stop's pose, fade back in.
			if (shown !== nearest) {
				shown = nearest;
				target = poses[nearest];
				if (!current) {
					current = { ...target };
					apply(current);
					return;
				}
				hidden = true;
				clearTimeout(swapTimer);
				swapTimer = setTimeout(() => {
					current = { ...poses[shown] };
					apply(current);
					hidden = false;
				}, 250);
			}
			return;
		}

		shown = -1;
		const from = poses[i];
		const to = poses[Math.min(i + 1, last)];
		const next = Object.fromEntries(KEYS.map((k) => [k, lerp(from[k], to[k], t)])) as Pose;
		// On text pages the brick never crosses the content: it slides out one edge and
		// back in from the other (frame() snaps across while it's off-screen).
		if (!marked && from.bx < vw / 2 !== to.bx < vw / 2) {
			const out = (p: Pose) => (p.bx < vw / 2 ? -0.5 : 1.5) * vw;
			next.bx = t < 0.5 ? lerp(from.bx, out(from), t * 2) : lerp(out(to), to.bx, t * 2 - 1);
		}
		// The YB mark and callout don't travel across the content: they fade out mid-way,
		// switch position, and fade back in.
		const settled = t < 0.5 ? from : to;
		const fade = clamp((Math.abs(t - 0.5) - 0.1) / 0.4, 0, 1);
		next.yx = settled.yx;
		next.yy = settled.yy;
		next.yo = settled.yo * fade;
		next.co = settled.co * fade;
		target = next;
		kick();
	}

	function apply(p: Pose) {
		const w = brickW;
		const h = w * BRICK_RATIO;
		brickEl.style.transform = `translate3d(${p.bx - w / 2}px, ${p.by - h / 2}px, 0) rotate(${p.r}deg) scale(${p.s})`;
		brickEl.style.opacity = String(p.o);
		ybEl.style.transform = `translate3d(${p.yx}px, ${p.yy}px, 0)`;
		ybEl.style.opacity = String(p.yo);

		// Callout sits above the brick's top-right, kept on screen.
		const cw = calloutEl.offsetWidth;
		const cx = clamp(p.bx + w * p.s * 0.22, 16, vw - cw - 16);
		const cy = clamp(p.by - h * p.s * 0.62 - 40, HEADER + 16, vh - 120);
		calloutEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
		calloutEl.style.opacity = String(p.co);
	}

	function frame() {
		raf = 0;
		if (!target) return;
		if (!current) current = { ...target };
		current.yx = target.yx;
		current.yy = target.yy;
		// A jump wider than the screen means switching edges while off-screen: snap, don't glide.
		if (Math.abs(target.bx - current.bx) > vw) current.bx = target.bx;
		let moving = false;
		for (const k of KEYS) {
			const diff = target[k] - current[k];
			if (Math.abs(diff) > 0.001 * (1 + Math.abs(target[k]))) {
				current[k] += diff * 0.09;
				moving = true;
			} else {
				current[k] = target[k];
			}
		}
		apply(current);
		if (moving) raf = requestAnimationFrame(frame);
	}

	function kick() {
		if (!raf) raf = requestAnimationFrame(frame);
	}

	function setup() {
		const main = document.getElementById('main');
		panelEls = main ? [...main.querySelectorAll<HTMLElement>('[data-panel]')] : [];
		marked = panelEls.length > 0;
		// Fresh random poses for every page visit.
		for (const el of panelEls) panelRand.set(el, rand4());
		freeStops = [];
		shown = -1;
		measure();
		computeTarget();
		ready = true;
	}

	afterNavigate(() => setup());

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduced = motion.matches;
		const onMotion = () => {
			reduced = motion.matches;
			clearTimeout(swapTimer);
			hidden = false;
			shown = -1;
			computeTarget();
		};
		const onScroll = () => computeTarget();
		const onResize = () => {
			measure();
			// Poses depend on the viewport size, so re-apply even if the stop hasn't changed.
			if (reduced && shown >= 0 && poses[shown]) {
				current = { ...poses[shown] };
				apply(current);
			}
			computeTarget();
		};
		// Re-measure when content changes height (filters, fonts, images).
		const observer = new ResizeObserver(onResize);
		observer.observe(document.body);

		motion.addEventListener('change', onMotion);
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);
		return () => {
			observer.disconnect();
			motion.removeEventListener('change', onMotion);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(raf);
			clearTimeout(swapTimer);
		};
	});
</script>

<div
	class="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity {hidden
		? 'opacity-0 duration-200'
		: ready
			? 'opacity-100 duration-500'
			: 'opacity-0'}"
	aria-hidden="true"
>
	<img
		bind:this={brickEl}
		src="/brand/brick.svg"
		alt=""
		width="992"
		height="836"
		class="absolute top-0 left-0 max-w-none origin-center will-change-transform"
	/>

	<p
		bind:this={ybEl}
		class="display absolute top-0 left-0 text-[5rem] text-charcoal will-change-transform sm:text-[8rem] lg:text-[10rem]"
	>
		YB
	</p>

	<!-- "PAGE NAME" callout from the mockup: a rounded label with a hand-drawn arrow to the brick. -->
	<div bind:this={calloutEl} class="absolute top-0 left-0 opacity-0 will-change-transform">
		<p
			class="rounded-lg border-2 border-charcoal bg-warm px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] whitespace-nowrap uppercase"
		>
			{label}
		</p>
		<svg
			width="56"
			height="44"
			viewBox="0 0 56 44"
			fill="none"
			stroke="#111316"
			stroke-width="1.5"
			stroke-linecap="round"
			class="mt-1 -ml-10"
		>
			<path d="M48 2C30 2 14 10 10 34" />
			<path d="M4 28l6 7 6-6" />
		</svg>
	</div>
</div>
