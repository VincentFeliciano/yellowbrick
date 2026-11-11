<script lang="ts">
	import { resolve } from '$app/paths';
	import { SERVICES, T3, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const project = $derived(data.project);
	const next = $derived(data.next);
	const service = $derived(SERVICES.find((s) => s.category === project.category));
</script>

<svelte:head>
	<title>{project.title} — Yellowbrick</title>
	<meta name="description" content="{project.summary} A demo project by Yellowbrick." />
</svelte:head>

<!-- screen4.png: the problem, the approach, and the solution. -->
<Frame id="top">
	<div class="at stack fill" style={T4.a}>
		<p class="t-kicker"><a href={resolve('/work')} class="underline">Work</a> / {project.category}</p>
		<h1 class="t-title">{project.title}</h1>
		<p class="t-small muted">{project.client}</p>
		<Placeholder label={project.title} />
	</div>

	<div class="at stack gap-l" style={T4.b}>
		<div class="stack gap-s">
			<h2 class="t-kicker">The problem</h2>
			<p class="t-body">{project.problem}</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Our approach</h2>
			<p class="t-body">{project.approach}</p>
		</div>
	</div>

	<div class="at stack gap-l" style={T4.c}>
		<div class="stack gap-s">
			<h2 class="t-kicker">The solution</h2>
			<p class="t-body">{project.solution}</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Results</h2>
			<ul class="bullets t-body">
				{#each project.results as result (result)}
					<li>{result}</li>
				{/each}
			</ul>
		</div>
	</div>

	<p class="at t-small muted" style={T4.foot}>
		<strong class="text-ink">Deliverables:</strong>
		{project.deliverables.join(', ')}
	</p>
</Frame>

<!-- screen3.png: the next project, and an invitation to start one. -->
<Frame id="next">
	<div class="at stack gap-s" style={T3.lead}>
		<h2 class="t-kicker">Next project</h2>
		<p class="t-lead">{next.summary}</p>
		<a href={resolve('/work')} class="more t-body">All work</a>
	</div>

	<div class="at" style={T3.a}>
		<a href={resolve('/work/[slug]', { slug: next.slug })} class="project">
			<Placeholder label={next.title} />
			<span class="t-kicker">{next.category}</span>
			<span class="t-sub">{next.title}</span>
		</a>
	</div>

	<div class="at stack cta" style={T3.b}>
		<h2 class="t-head">Need something like this?</h2>
		<p class="t-body">Tell us about the problem and we’ll send a fixed quote.</p>
		<a href="{resolve('/contact')}?need={encodeURIComponent(service?.need ?? 'Something else')}" class="btn"
			>Start a project</a
		>
		{#if service}
			<a href={resolve('/services/[slug]', { slug: service.slug })} class="more t-body">About {service.title.toLowerCase()}</a>
		{/if}
	</div>
</Frame>
