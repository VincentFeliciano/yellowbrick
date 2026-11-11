<script lang="ts">
	import { resolve } from '$app/paths';
	import { PILLARS, PROCESS, PROJECTS, usd, T3, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const service = $derived(data.service);
	const related = $derived(PROJECTS.filter((p) => p.category === service.category));
	const others = $derived(PILLARS.filter((s) => s.slug !== service.slug));
	const start = $derived(`${resolve('/contact')}?need=${encodeURIComponent(service.need)}`);
</script>

<svelte:head>
	<title>{service.title} — Yellowbrick</title>
	<meta
		name="description"
		content="{service.summary} From {usd(service.from)}. Yellowbrick, Schenectady, NY."
	/>
</svelte:head>

<!-- screen3.png: what it is and what's included. -->
<Frame id="top">
	<div class="at stack gap-s" style={T3.lead}>
		<p class="t-kicker"><a href={resolve('/services')} class="underline">Services</a> / {service.pillar}</p>
		<h1 class="t-head">{service.title}</h1>
		<p class="t-body muted">{service.summary}</p>
		<p class="t-small">From <strong>{usd(service.from)}</strong> · {service.timeline}</p>
	</div>

	<div class="at" style={T3.a}>
		<Placeholder label="{service.title} example" />
	</div>

	<div class="at stack gap-l" style={T3.b}>
		<div class="stack">
			<h2 class="t-kicker">What’s included</h2>
			<ul class="bullets t-body">
				{#each service.includes as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<div class="stack">
			<h2 class="t-kicker">Ideal for</h2>
			<ul class="bullets t-body">
				{#each service.idealFor as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
		<a href={start} class="btn">Start a project</a>
	</div>
</Frame>

<!-- screen4.png: questions, how it works, and next steps. -->
<Frame id="details">
	<div class="at stack" style={T4.a}>
		<h2 class="t-kicker">Questions</h2>
		<dl class="stack gap-l">
			{#each service.faqs as faq (faq.q)}
				<div class="stack gap-s">
					<dt class="t-body font-semibold">{faq.q}</dt>
					<dd class="t-small muted">{faq.a}</dd>
				</div>
			{/each}
		</dl>
	</div>

	<div class="at stack" style={T4.b}>
		<h2 class="t-kicker">How it works</h2>
		<ol class="stack">
			{#each PROCESS as step (step.number)}
				<li class="step">
					<span class="t-kicker">{step.number}</span>
					<span class="stack gap-s">
						<span class="t-sub">{step.title}</span>
						<span class="t-small muted">{step.short}</span>
					</span>
				</li>
			{/each}
		</ol>
		<a href={resolve('/process')} class="more t-body">The full process</a>
	</div>

	<div class="at stack cta" style={T4.c}>
		<h2 class="t-head">Have a project in mind?</h2>
		<p class="t-body">Tell us what you need and we’ll send a fixed quote.</p>
		<a href={start} class="btn">Start a project</a>
		{#each related as project (project.slug)}
			<a href={resolve('/work/[slug]', { slug: project.slug })} class="more t-body">See: {project.title}</a>
		{/each}
		<p class="t-small">
			Also:
			{#each others as other, i (other.slug)}
				<a href={resolve('/services/[slug]', { slug: other.slug })} class="underline">{other.title}</a>{i < others.length - 1
					? ', '
					: ''}
			{/each}
		</p>
	</div>
</Frame>

<style>
	.step {
		display: grid;
		grid-template-columns: 2.5em 1fr;
		align-items: baseline;
		padding-top: var(--g-s);
		border-top: 2px solid var(--color-ink);
	}
</style>
