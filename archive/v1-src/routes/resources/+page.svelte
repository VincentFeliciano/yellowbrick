<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Button from '#lib/components/Button.svelte';

	// Placeholder shelves for digital products — fill in as resources are released.
	const shelves = [
		{ icon: 'browser', title: 'Templates', text: 'Website and document templates for small businesses.' },
		{ icon: 'download', title: 'Downloads', text: 'Brand assets, checklists, and useful tools.' },
		{ icon: 'cube', title: '3D models', text: 'Printable models and objects from the studio.' },
		{ icon: 'compass', title: 'Experiments', text: 'Side projects, prototypes, and ideas in progress.' }
	] as const;
</script>

<Seo
	title="Resources"
	description="Digital products, templates, 3D models, and experiments from the Yellowbrick studio."
/>

<PageIntro kicker="Resources" title="From the studio">
	Digital products, templates, 3D models, experiments, and useful tools. The first releases are on
	the way.
</PageIntro>

<section class="container-yb pb-20">
	<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each shelves as s (s.title)}
			<li class="flex h-full flex-col border border-dashed border-steel p-6">
				<Icon name={s.icon} />
				<h2 class="kicker mt-6">{s.title}</h2>
				<p class="mt-2 text-sm text-muted">{s.text}</p>
				<p class="kicker mt-auto pt-6 text-steel">Coming soon</p>
			</li>
		{/each}
	</ul>
	<div class="mt-10 flex flex-col gap-4 bg-charcoal p-8 text-warm sm:flex-row sm:items-center sm:justify-between">
		<p class="max-w-md">Want to know when new resources are released? Send us a note and we’ll let you know.</p>
		<Button href="/contact">Get in touch</Button>
	</div>
</section>
