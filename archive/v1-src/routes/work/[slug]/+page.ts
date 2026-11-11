import { error } from '@sveltejs/kit';
import { PROJECTS } from '#lib';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => PROJECTS.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const index = PROJECTS.findIndex((p) => p.slug === params.slug);
	if (index === -1) error(404, 'Project not found');
	return {
		project: PROJECTS[index],
		next: PROJECTS[(index + 1) % PROJECTS.length]
	};
};
