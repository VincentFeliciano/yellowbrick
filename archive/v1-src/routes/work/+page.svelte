<script lang="ts">
	import { PROJECTS, type Category } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	// Only show filters for categories that have projects in them.
	const categories = [...new Set(PROJECTS.map((p) => p.category))];
	const options: (Category | 'All')[] = ['All', ...categories];

	let filter = $state<Category | 'All'>('All');
	const visible = $derived(
		filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
	);
</script>

<Seo
	title="Work"
	description="Selected projects across web design, branding, and systems from Yellowbrick."
/>

<PageIntro kicker="Portfolio" title="Our work">
	A selection of projects across design, development, and systems.
</PageIntro>

<section class="container-yb pb-20">
	{#if categories.length > 1}
		<div class="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
			{#each options as option (option)}
				<button
					type="button"
					aria-pressed={filter === option}
					onclick={() => (filter = option)}
					class="kicker border px-3.5 py-2 transition-colors {filter === option
						? 'border-brick bg-brick'
						: 'border-line bg-white text-muted hover:border-charcoal hover:text-charcoal'}"
				>
					{option}
				</button>
			{/each}
		</div>
	{/if}

	<div class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
		{#each visible as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<CtaBanner title="Have a project in mind?" />
