<script lang="ts">
	import { NEEDS, PROJECTS, usd } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const service = $derived(data.service);
	const related = $derived(PROJECTS.filter((p) => p.category === service.category));

	// Map each service to the matching contact-form option so it can be preselected.
	const needFor: Record<string, string> = {
		'web-design': NEEDS[0],
		branding: NEEDS[1],
		automation: NEEDS[2],
		'3d-products': NEEDS[3]
	};
</script>

<Seo title={service.title} description="{service.summary} Starting from {usd(service.from)}." />

<section class="container-yb pt-14 pb-12 sm:pt-20">
	<a href="/services" class="kicker group inline-flex items-center gap-1.5 text-muted hover:text-charcoal">
		<Icon name="arrow" size={14} class="rotate-180 transition-transform group-hover:-translate-x-1" />
		All services
	</a>
	<div class="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
		<div>
			<p class="kicker text-muted">{service.number} — {service.pillar}</p>
			<h1 class="display mt-2 text-5xl sm:text-7xl">{service.title}</h1>
			<p class="mt-5 max-w-xl text-lg text-muted">{service.summary}</p>
		</div>
		<div class="border-2 border-charcoal bg-white p-6">
			<p class="text-xs text-muted">Starting from</p>
			<p class="display text-6xl">{usd(service.from)}</p>
			<p class="mt-1 text-sm text-muted">{service.timeline}</p>
			<Button href="/contact?need={encodeURIComponent(needFor[service.slug])}" class="mt-5 w-full">
				Start a project
			</Button>
		</div>
	</div>
</section>

<section class="border-y border-line bg-white">
	<div class="container-yb grid gap-12 py-14 md:grid-cols-2">
		<div>
			<h2 class="display text-3xl">What’s included</h2>
			<ul class="mt-6 space-y-3">
				{#each service.includes as item (item)}
					<li class="flex gap-3">
						<span class="mt-0.5 grid size-5 shrink-0 place-items-center bg-brick">
							<Icon name="check" size={14} stroke={3} />
						</span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="display text-3xl">A good fit for</h2>
			<ul class="mt-6 space-y-3">
				{#each service.idealFor as item (item)}
					<li class="flex gap-3">
						<Icon name="arrow" size={18} class="mt-0.5 shrink-0 text-brick-dark" />
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

{#if related.length}
	<section class="container-yb py-14">
		<h2 class="display text-3xl">Examples</h2>
		<div class="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each related as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
{/if}

<section class="container-yb py-14">
	<h2 class="display text-3xl">Questions</h2>
	<div class="mt-6 divide-y divide-line border-y border-line">
		{#each service.faqs as faq (faq.q)}
			<details class="group py-5">
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden"
				>
					{faq.q}
					<span
						class="grid size-7 shrink-0 place-items-center border-2 border-charcoal text-lg leading-none transition-transform group-open:rotate-45"
						aria-hidden="true">+</span
					>
				</summary>
				<p class="mt-3 max-w-2xl text-muted">{faq.a}</p>
			</details>
		{/each}
	</div>
</section>

<CtaBanner />
