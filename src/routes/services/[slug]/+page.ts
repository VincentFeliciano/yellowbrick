import { error } from '@sveltejs/kit';
import { SERVICES } from '#lib';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => SERVICES.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const service = SERVICES.find((s) => s.slug === params.slug);
	if (!service) error(404, 'Not found');
	return { service };
};
