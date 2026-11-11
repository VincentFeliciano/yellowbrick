<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ProjectThumb from '#lib/components/ProjectThumb.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);

	const story = $derived([
		{ label: 'The problem', text: project.problem },
		{ label: 'Our approach', text: project.approach },
		{ label: 'The solution', text: project.solution }
	]);
</script>

<Seo title={project.title} description={project.summary} />

<section class="container-yb pt-14 sm:pt-20">
	<a href="/work" class="kicker group inline-flex items-center gap-1.5 text-muted hover:text-charcoal">
		<Icon name="arrow" size={14} class="rotate-180 transition-transform group-hover:-translate-x-1" />
		All work
	</a>
	<p class="kicker mt-6 text-muted">{project.category}</p>
	<h1 class="display mt-2 text-5xl sm:text-7xl">{project.title}</h1>
	<p class="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>
</section>

<section class="container-yb py-10">
	<ProjectThumb kind={project.kind} class="aspect-[16/9] border-2 border-charcoal sm:aspect-[21/9]" />
</section>

<section class="container-yb grid gap-12 pb-16 lg:grid-cols-[1fr_2fr]">
	<aside class="space-y-6 text-sm">
		<div>
			<h2 class="kicker text-muted">Client</h2>
			<p class="mt-1.5">{project.client}</p>
		</div>
		<div>
			<h2 class="kicker text-muted">Deliverables</h2>
			<ul class="mt-1.5 space-y-1">
				{#each project.deliverables as d (d)}<li>{d}</li>{/each}
			</ul>
		</div>
	</aside>

	<div class="space-y-10">
		{#each story as block, i (block.label)}
			<div>
				<h2 class="display flex items-baseline gap-3 text-3xl">
					<span class="text-brick-dark">0{i + 1}</span>{block.label}
				</h2>
				<p class="mt-3 max-w-2xl leading-relaxed text-muted">{block.text}</p>
			</div>
		{/each}

		<div class="bg-charcoal p-8 text-warm">
			<h2 class="display flex items-baseline gap-3 text-3xl">
				<span class="text-brick">04</span>Results
			</h2>
			<ul class="mt-5 space-y-3">
				{#each project.results as r (r)}
					<li class="flex gap-3">
						<span class="mt-0.5 grid size-5 shrink-0 place-items-center bg-brick text-charcoal">
							<Icon name="check" size={14} stroke={3} />
						</span>
						{r}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="border-t border-line">
	<a
		href="/work/{data.next.slug}"
		class="group container-yb flex items-center justify-between gap-6 py-10"
	>
		<span>
			<span class="kicker text-muted">Next project</span>
			<span class="display mt-1 block text-4xl group-hover:text-brick-dark">{data.next.title}</span>
		</span>
		<Icon name="arrow" size={32} class="shrink-0 transition-transform group-hover:translate-x-2" />
	</a>
</section>

<CtaBanner title="Want results like these?" />
