<script lang="ts">
	import { resolve } from '$app/paths';
	import { PROJECTS, T3 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import ProjectImage from '#lib/components/ProjectImage.svelte';

	const [featured] = PROJECTS;

	// The list holds three projects a screen. Each further screen leads with a picture of its first.
	const PER_SCREEN = 3;
	const screens = Array.from({ length: Math.ceil(PROJECTS.length / PER_SCREEN) }, (_, i) =>
		PROJECTS.slice(i * PER_SCREEN, (i + 1) * PER_SCREEN)
	);
	const [first, ...more] = screens;
</script>

<svelte:head>
	<title>Work — Yellowbrick</title>
	<meta
		name="description"
		content="Branding, packaging, websites, and systems by Yellowbrick."
	/>
</svelte:head>

<!-- screen3.png: the list of projects. -->
<Frame id="top">
	<div class="at stack gap-s" style={T3.lead}>
		<p class="t-kicker">Work</p>
		<h1 class="t-head">Selected work</h1>
		<p class="t-body muted">
			Brands, products, websites, and systems. Demonstration projects are marked as demos.
		</p>
	</div>

	<div class="at" style={T3.a}>
		<a href={resolve('/work/[slug]', { slug: featured.slug })} class="project">
			<ProjectImage project={featured} />
			<span class="t-kicker">{featured.category}</span>
			<span class="t-sub">{featured.title}</span>
			<span class="t-body muted">{featured.summary}</span>
		</a>
	</div>

	<ol class="at index" style={T3.b}>
		{#each first as project, i (project.slug)}
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

<!-- screen3.png again: the projects that did not fit on the first screen. -->
{#each more as projects, n (projects[0].slug)}
	<Frame id="more-{n + 1}">
		<div class="at stack gap-s" style={T3.lead}>
			<h2 class="t-kicker">More work</h2>
			<p class="t-lead">{projects[0].summary}</p>
		</div>

		<div class="at" style={T3.a}>
			<a href={resolve('/work/[slug]', { slug: projects[0].slug })} class="project">
				<ProjectImage project={projects[0]} />
				<span class="t-kicker">{projects[0].category}</span>
				<span class="t-sub">{projects[0].title}</span>
			</a>
		</div>

		<ol class="at index" style={T3.b}>
			{#each projects as project, i (project.slug)}
				<li>
					<a href={resolve('/work/[slug]', { slug: project.slug })} class="stack gap-s">
						<span class="t-kicker">0{(n + 1) * PER_SCREEN + i + 1} — {project.category}</span>
						<span class="t-sub">{project.title}</span>
						<span class="t-body muted">{project.summary}</span>
					</a>
				</li>
			{/each}
		</ol>
	</Frame>
{/each}

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
