<script lang="ts">
	import { resolve } from '$app/paths';
	import { PROJECTS, T3 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';

	const [featured] = PROJECTS;
</script>

<svelte:head>
	<title>Work — Yellowbrick</title>
	<meta
		name="description"
		content="Demo websites, dashboards, and automations by Yellowbrick."
	/>
</svelte:head>

<!-- screen3.png: the list of projects. -->
<Frame id="top">
	<div class="at stack gap-s" style={T3.lead}>
		<p class="t-kicker">Work</p>
		<h1 class="t-head">Demo projects</h1>
		<p class="t-body muted">
			Built as demonstrations to show how we work. Client work will follow.
		</p>
	</div>

	<div class="at" style={T3.a}>
		<a href={resolve('/work/[slug]', { slug: featured.slug })} class="project">
			<Placeholder label={featured.title} />
			<span class="t-kicker">{featured.category}</span>
			<span class="t-sub">{featured.title}</span>
			<span class="t-body muted">{featured.summary}</span>
		</a>
	</div>

	<ol class="at index" style={T3.b}>
		{#each PROJECTS as project, i (project.slug)}
			<li>
				<a href={resolve('/work/[slug]', { slug: project.slug })} class="stack gap-s">
					<span class="t-kicker">0{i + 1} — {project.category}</span>
					<span class="t-sub">{project.title}</span>
					<span class="t-body muted">{project.summary}</span>
				</a>
			</li>
		{/each}
	</ol>
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
		height: 100%;
		padding: var(--g-m) var(--g-s);
		transition: background-color 0.2s;
	}

	.index a:hover {
		background: var(--color-brick);
	}
</style>
