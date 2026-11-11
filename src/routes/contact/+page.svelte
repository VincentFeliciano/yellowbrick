<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE, T2 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';
	import ContactForm from '#lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact — Yellowbrick</title>
	<meta
		name="description"
		content="Tell Yellowbrick about your project. We usually reply within one business day."
	/>
</svelte:head>

<!-- screeen2.png: details on the left, the form on the right. -->
<Frame id="top">
	<div class="at stack gap-s" style={T2.lead}>
		<p class="t-kicker">Contact</p>
		<h1 class="t-head">Start a project.</h1>
	</div>

	<div class="at stack fill gap-l" style={T2.a}>
		<dl class="details t-body">
			<dt class="t-kicker">Email</dt>
			<dd><a href="mailto:{SITE.email}" class="underline">{SITE.email}</a></dd>
			<dt class="t-kicker">Phone</dt>
			<dd><a href={SITE.phoneHref}>{SITE.phone}</a></dd>
			<dt class="t-kicker">Studio</dt>
			<dd>{SITE.location} · {SITE.locationNote}</dd>
			<dt class="t-kicker">Follow</dt>
			<dd class="flex flex-wrap gap-x-4">
				{#each SITE.social as social (social.label)}
					<a href={social.href} class="underline">{social.label}</a>
				{/each}
			</dd>
		</dl>
		<Placeholder label="Coffee on the workbench" />
	</div>

	<div class="at" style={T2.b}>
		<ContactForm />
	</div>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body muted">We usually reply within one business day.</p>
		<p class="t-small muted flex flex-wrap gap-x-4">
			<a href={resolve('/resources')} class="underline">Resources</a>
			<a href={resolve('/privacy')} class="underline">Privacy policy</a>
			<a href={resolve('/terms')} class="underline">Terms</a>
		</p>
	</div>
</Frame>

<style>
	.details {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: baseline;
		gap: var(--g-s) var(--g-l);
	}
</style>
