<script lang="ts">
	import { resolve } from '$app/paths';
	import { PILLARS, PROCESS, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
</script>

<svelte:head>
	<title>Process — Yellowbrick</title>
	<meta
		name="description"
		content="How a Yellowbrick project works: five clear steps, a fixed quote before any work begins, and support after launch."
	/>
</svelte:head>

{#snippet step(s: (typeof PROCESS)[number])}
	<li class="stack gap-s">
		<span class="t-kicker">{s.number}</span>
		<span class="t-sub">{s.title}</span>
		<span class="t-body muted">{s.detail}</span>
	</li>
{/snippet}

<!-- screen4.png: the five steps. -->
<Frame id="top">
	<div class="at stack" style={T4.a}>
		<p class="t-kicker">Process</p>
		<h1 class="t-head">How it works</h1>
		<p class="t-body muted">Five clear steps, with a fixed quote before any work begins.</p>
	</div>

	<ol class="at stack gap-l" style={T4.b}>
		{#each PROCESS.slice(0, 3) as s (s.number)}
			{@render step(s)}
		{/each}
	</ol>

	<ol class="at stack gap-l" style={T4.c}>
		{#each PROCESS.slice(3) as s (s.number)}
			{@render step(s)}
		{/each}
		<li><a href={resolve('/contact')} class="btn">Start with step one</a></li>
	</ol>
</Frame>

<!-- screen4.png: timeline, communication, payment, and delivery. -->
<Frame id="expect">
	<div class="at stack" style={T4.a}>
		<p class="t-kicker">Working together</p>
		<h2 class="t-title">What to expect.</h2>
		<p class="t-body muted">Plain terms, written down before we start.</p>
	</div>

	<div class="at stack gap-l" style={T4.b}>
		<div class="stack gap-s">
			<h3 class="t-kicker">Timeline</h3>
			<dl class="timeline t-body">
				{#each PILLARS as service (service.slug)}
					<dt class="font-semibold">{service.title}</dt>
					<dd class="muted">{service.timeline}</dd>
				{/each}
			</dl>
			<p class="t-small muted">Your proposal sets the exact dates.</p>
		</div>
		<div class="stack gap-s">
			<h3 class="t-kicker">Communication</h3>
			<p class="t-body">
				We share designs early, send updates and a preview link while we build, and reply to
				messages within one business day.
			</p>
		</div>
	</div>

	<div class="at stack gap-l" style={T4.c}>
		<div class="stack gap-s">
			<h3 class="t-kicker">Payment</h3>
			<p class="t-body">
				You get a fixed quote in writing before any work begins. The proposal sets out what’s
				included and when payment is due.
			</p>
		</div>
		<div class="stack gap-s">
			<h3 class="t-kicker">Delivery</h3>
			<p class="t-body">
				We launch, walk you through everything, and hand over the files and documentation. Once
				the project is paid in full, the files are yours. Ongoing support is available if you
				want it.
			</p>
		</div>
		<a href={resolve('/contact')} class="btn">Start a project</a>
	</div>
</Frame>

<style>
	.timeline {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--g-s) var(--g-m);
		padding-top: var(--g-s);
		border-top: 2px solid var(--color-ink);
	}
</style>
