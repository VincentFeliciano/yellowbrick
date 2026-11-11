import { error } from '@sveltejs/kit';
import { PROJECTS } from '#lib';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => PROJECTS.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const i = PROJECTS.findIndex((p) => p.slug === params.slug);
	if (i < 0) error(404, 'Not found');
	return { project: PROJECTS[i], next: PROJECTS[(i + 1) % PROJECTS.length] };
};
