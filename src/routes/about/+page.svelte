<script lang="ts">
	import { PILLARS, SITE, T2, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';

	const values = [
		{
			title: 'Clean design',
			text: 'Clear work that’s easy to use and easy to understand. Nothing added just for decoration.'
		},
		{
			title: 'Solid code',
			text: 'Fast, accessible, and built to last, so what we make keeps working long after launch.'
		},
		{
			title: 'Practical solutions',
			text: 'We start from the problem, not the trend, and recommend only what will actually help.'
		}
	];

	const skills = [
		'Brand identity',
		'Web design',
		'Front-end development',
		'Web applications',
		'Automation',
		'Dashboards',
		'Integrations',
		'3D modeling',
		'3D printing'
	];
</script>

<svelte:head>
	<title>About — Yellowbrick</title>
	<meta
		name="description"
		content="Yellowbrick is an independent creative technology studio in Schenectady, NY, working with local and remote clients."
	/>
</svelte:head>

<!-- screeen2.png: who we are. -->
<Frame id="top">
	<div class="at stack gap-s" style={T2.lead}>
		<p class="t-kicker">About</p>
		<h1 class="t-head">Idea to launch</h1>
	</div>

	<div class="at" style={T2.a}>
		<Placeholder label="The studio in {SITE.location}" />
	</div>

	<div class="at stack gap-l" style={T2.b}>
		<p class="t-lead">
			We’re an independent creative technology studio based in {SITE.location}. We work with
			local businesses and remote clients alike. We care about clean design,
			solid code, and practical solutions.
		</p>
		<ul class="pillars">
			{#each PILLARS as service (service.slug)}
				<li class="stack gap-s">
					<span class="t-sub">{service.pillar}</span>
					<span class="t-small muted">{service.short}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body">Based in {SITE.location}. {SITE.locationNote}.</p>
		<a href="mailto:{SITE.email}" class="more t-body">{SITE.email}</a>
	</div>
</Frame>

<!-- screen4.png: how we think. -->
<Frame id="approach">
	<div class="at stack" style={T4.a}>
		<h2 class="t-title">Design and build, under one roof.</h2>
		<p class="t-body muted">
			Most businesses end up hiring a designer, then a developer, then someone to connect it all.
			Yellowbrick does all three, so the brand, the website, and the systems behind them are planned
			together and work together.
		</p>
	</div>

	<ol class="at stack gap-l" style={T4.b}>
		{#each values as value, i (value.title)}
			<li class="stack gap-s value">
				<span class="t-kicker">0{i + 1}</span>
				<span class="t-sub">{value.title}</span>
				<span class="t-body muted">{value.text}</span>
			</li>
		{/each}
	</ol>

	<div class="at stack fill" style={T4.c}>
		<div class="stack">
			<h3 class="t-kicker">Skills</h3>
			<ul class="skills t-small">
				{#each skills as skill (skill)}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
		<Placeholder label="Workbench and 3D printer" />
	</div>
</Frame>

<style>
	.pillars {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--g-m);
	}

	.pillars li,
	.value {
		padding-top: var(--g-s);
		border-top: 2px solid var(--color-ink);
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--g-s);
	}

	.skills li {
		padding: 0.3em 0.75em;
		border: 1px solid var(--color-ink);
	}

	@media not ((width >= 900px) and (aspect-ratio >= 5/4)) {
		.pillars {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
