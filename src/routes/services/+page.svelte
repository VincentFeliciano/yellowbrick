<script lang="ts">
	import { resolve } from '$app/paths';
	import { PILLARS, SITE, usd, T2, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';

	const faqs = PILLARS.flatMap((s) => s.faqs);
	const half = Math.ceil(faqs.length / 2);
</script>

<svelte:head>
	<title>Services — Yellowbrick</title>
	<meta
		name="description"
		content="Branding from $199, websites from $399, automation from $299, and 3D from $99. Yellowbrick, Schenectady, NY."
	/>
</svelte:head>

{#snippet faqList(items: typeof faqs)}
	<dl class="stack gap-l">
		{#each items as faq (faq.q)}
			<div class="stack gap-s">
				<dt class="t-body font-semibold">{faq.q}</dt>
				<dd class="t-small muted">{faq.a}</dd>
			</div>
		{/each}
	</dl>
{/snippet}

<!-- screeen2.png: the list of services. -->
<Frame id="top">
	<div class="at stack gap-s" style={T2.lead}>
		<p class="t-kicker">Services</p>
		<h1 class="t-head">What we do, and what it costs.</h1>
	</div>

	<div class="at" style={T2.a}>
		<Placeholder label="Sketches, samples and screens" />
	</div>

	<ol class="at index" style={T2.b}>
		{#each PILLARS as service (service.slug)}
			<li>
				<a href={resolve('/services/[slug]', { slug: service.slug })}>
					<span class="t-kicker">{service.number}</span>
					<span class="stack gap-s">
						<span class="t-sub">{service.title}</span>
						<span class="t-body muted">{service.summary}</span>
					</span>
					<span class="t-small">From <strong>{usd(service.from)}</strong></span>
				</a>
			</li>
		{/each}
	</ol>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body">
			Every project starts with a short call and a fixed quote. No jargon, no surprises.
		</p>
		<a href={resolve('/process')} class="more t-body">How it works</a>
	</div>
</Frame>

<!-- screen4.png: questions. -->
<Frame id="faq">
	<div class="at stack" style={T4.a}>
		<p class="t-kicker">Questions</p>
		<h2 class="t-title">Good questions, straight answers.</h2>
		<p class="t-body muted">
			Don’t see yours? Email <a href="mailto:{SITE.email}" class="underline">{SITE.email}</a> and we’ll
			get back to you within a business day.
		</p>
	</div>

	<div class="at" style={T4.b}>
		{@render faqList(faqs.slice(0, half))}
	</div>

	<div class="at" style={T4.c}>
		{@render faqList(faqs.slice(half))}
	</div>
</Frame>

<style>
	/* Its height comes from the .at region. */
	.index {
		display: flex;
		flex-direction: column;
	}

	.index li {
		flex: 1;
		border-top: 2px solid var(--color-ink);
	}

	.index a {
		display: grid;
		grid-template-columns: 3em 1fr auto;
		align-items: center;
		gap: var(--g-m);
		height: 100%;
		padding: var(--g-m) var(--g-s);
		transition: background-color 0.2s;
	}

	.index a:hover {
		background: var(--color-brick);
	}
</style>
