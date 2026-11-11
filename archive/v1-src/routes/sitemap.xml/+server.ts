import { PROJECTS, SERVICES, SITE } from '#lib';

export const prerender = true;

const pages = [
	'/',
	'/services',
	...SERVICES.map((s) => `/services/${s.slug}`),
	'/work',
	...PROJECTS.map((p) => `/work/${p.slug}`),
	'/about',
	'/process',
	'/contact',
	'/resources',
	'/privacy',
	'/terms'
];

export function GET() {
	const urls = pages
		.map((path) => `\t<url><loc>${new URL(path, SITE.url).href}</loc></url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
