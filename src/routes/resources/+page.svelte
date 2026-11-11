<script lang="ts">
	import { SITE, T2 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';

	// Nothing is published yet. Replace "Coming soon" with a link as each one goes live.
	const resources = [
		{
			title: 'Templates',
			text: 'Starter files for brand guides, proposals, and simple websites.'
		},
		{
			title: 'Guides',
			text: 'Plain how-tos on websites, branding, and automation for small businesses.'
		},
		{
			title: 'Experiments',
			text: '3D prints, code sketches, and other things we’re trying out.'
		}
	];
</script>

<svelte:head>
	<title>Resources — Yellowbrick</title>
	<meta
		name="description"
		content="Templates, guides, and experiments from Yellowbrick, a creative technology studio in Schenectady, NY."
	/>
</svelte:head>

<!-- screeen2.png: what's coming. -->
<Frame id="top">
	<div class="at stack gap-s" style={T2.lead}>
		<p class="t-kicker">Resources</p>
		<h1 class="t-head">Templates, guides, and experiments.</h1>
	</div>

	<div class="at" style={T2.a}>
		<Placeholder label="Templates and downloads" />
	</div>

	<ol class="at index" style={T2.b}>
		{#each resources as resource, i (resource.title)}
			<li>
				<span class="t-kicker">0{i + 1}</span>
				<span class="stack gap-s">
					<span class="t-sub">{resource.title}</span>
					<span class="t-body muted">{resource.text}</span>
				</span>
				<span class="t-small">Coming soon</span>
			</li>
		{/each}
	</ol>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body">Want to know when they’re ready? Send us a note.</p>
		<a href="mailto:{SITE.email}?subject=Resources" class="more t-body">{SITE.email}</a>
	</div>
</Frame>

<style>
	/* Its height comes from the .at region. */
	.index {
		display: flex;
		flex-direction: column;
	}

	.index li {
		display: grid;
		flex: 1;
		grid-template-columns: 3em 1fr auto;
		align-items: center;
		gap: var(--g-m);
		padding: var(--g-m) var(--g-s);
		border-top: 2px solid var(--color-ink);
	}
</style>
