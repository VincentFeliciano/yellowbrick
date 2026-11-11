<script lang="ts">
	import type { Snippet } from 'svelte';
	import Seo from './Seo.svelte';

	let {
		title,
		updated,
		children
	}: { title: string; updated: string; children: Snippet } = $props();
</script>

<Seo {title} description="{title} for the Yellowbrick website." />

<article class="container-yb max-w-3xl py-14 sm:py-20">
	<h1 class="display text-5xl sm:text-6xl">{title}</h1>
	<p class="mt-2 text-sm text-muted">Last updated {updated}</p>
	<div
		class="mt-10 space-y-4 leading-relaxed text-charcoal/85 [&_a]:font-semibold [&_a]:underline [&_h2]:font-display [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:pt-6 [&_h2]:text-3xl [&_h2]:text-charcoal [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6"
	>
		{@render children()}
	</div>
</article>
