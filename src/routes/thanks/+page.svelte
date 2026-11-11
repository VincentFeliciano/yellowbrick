<script lang="ts">
	import { resolve } from '$app/paths';
	import { PROCESS, SITE, T2 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
</script>

<svelte:head>
	<title>Thanks — Yellowbrick</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- screeen2.png: confirmation and what happens next. The contact form sends people here. -->
<Frame id="top">
	<div class="at stack gap-s" style={T2.lead}>
		<p class="t-kicker">Message sent</p>
		<h1 class="t-head">Thanks, we’ve got it.</h1>
	</div>

	<div class="at stack cta" style={T2.a}>
		<p class="t-title">We usually reply within one business day.</p>
		<p class="t-body">
			Something to add? Email
			<a href="mailto:{SITE.email}" class="underline">{SITE.email}</a>.
		</p>
	</div>

	<div class="at stack gap-l" style={T2.b}>
		<h2 class="t-kicker">What happens next</h2>
		<ol class="stack gap-l">
			{#each PROCESS.slice(0, 2) as s (s.number)}
				<li class="step">
					<span class="t-kicker">{s.number}</span>
					<span class="stack gap-s">
						<span class="t-sub">{s.title}</span>
						<span class="t-body muted">{s.detail}</span>
					</span>
				</li>
			{/each}
		</ol>
		<a href={resolve('/process')} class="more t-body">The full process</a>
	</div>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body">In the meantime, take a look around.</p>
		<p class="t-body flex gap-x-6">
			<a href={resolve('/work')} class="more">Work</a>
			<a href={resolve('/services')} class="more">Services</a>
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
