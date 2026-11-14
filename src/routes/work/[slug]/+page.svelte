<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import type { AssetPath } from '$app/types';
	import { SERVICES, T2, T3, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import ProjectImage from '#lib/components/ProjectImage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const project = $derived(data.project);
	const next = $derived(data.next);
	const service = $derived(SERVICES.find((s) => s.category === project.category));

	// A page for a type of work shows all its pieces, two to a screen, and words its copy as a service.
	const gallery = $derived(project.gallery ?? []);
	const pairs = $derived(
		Array.from({ length: Math.ceil(gallery.length / 2) }, (_, i) => gallery.slice(i * 2, i * 2 + 2))
	);
	const headings = $derived(
		gallery.length
			? ['What it is for', 'How we work', 'What you get', 'Shown here']
			: ['The problem', 'Our approach', 'The solution', 'Results']
	);
</script>

<svelte:head>
	<title>{project.title} — Yellowbrick</title>
	<meta name="description" content="{project.summary} {project.client.startsWith('Demo') ? 'A demo project by Yellowbrick.' : 'By Yellowbrick.'}" />
</svelte:head>

<!-- screen4.png: the problem, the approach, and the solution. -->
<Frame id="top">
	<div class="at stack fill" style={T4.a}>
		<p class="t-kicker"><a href={resolve('/work')} class="underline">Work</a> / {project.category}</p>
		<h1 class="t-title">{project.title}</h1>
		<p class="t-small muted">{project.client}</p>
		<ProjectImage {project} />
	</div>

	<div class="at stack gap-l" style={T4.b}>
		<div class="stack gap-s">
			<h2 class="t-kicker">{headings[0]}</h2>
			<p class="t-body">{project.problem}</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">{headings[1]}</h2>
			<p class="t-body">{project.approach}</p>
		</div>
	</div>

	<div class="at stack gap-l" style={T4.c}>
		<div class="stack gap-s">
			<h2 class="t-kicker">{headings[2]}</h2>
			<p class="t-body">{project.solution}</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">{headings[3]}</h2>
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

{#each pairs as pair, n (n)}
	<!-- screeen2.png: two pieces side by side, each under its name. -->
	<Frame id="pieces-{n + 1}">
		<div class="at stack gap-s" style={T2.lead}>
			<h2 class="t-kicker">{project.title} — {n + 1} of {pairs.length}</h2>
			{#if n === 0}
				<p class="t-lead">{project.summary}</p>
			{/if}
		</div>

		{#each pair as piece, i (piece.src)}
			<div class="at stack gap-s fill" style={i === 0 ? T2.a : T2.b}>
				<p class="t-small">
					<strong class="text-ink">{piece.title}.</strong>
					{piece.note}
					{#if piece.live}
						<a href={piece.live} class="underline" target="_blank" rel="noopener">See it live</a>
					{/if}
				</p>
				<Picture
					src={asset(piece.src as AssetPath)}
					alt={piece.alt}
					width={piece.width ?? 1200}
					height={piece.height ?? 750}
					paper={piece.paper}
				/>
			</div>
		{/each}
	</Frame>
{/each}

{#if project.images?.length}
	<!-- screen3.png: a closer look at the finished work, with a link to it if it is online. -->
	<Frame id="look">
		<div class="at stack gap-s" style={T3.lead}>
			<h2 class="t-kicker">A closer look</h2>
			<p class="t-lead">{project.summary}</p>
			{#if project.live}
				<a href={project.live} class="more t-body" target="_blank" rel="noopener">See the live site</a>
			{/if}
		</div>

		{#each project.images.slice(0, 2) as image, i (image.src)}
			<div class="at" style={i === 0 ? T3.a : T3.b}>
				<Picture
					src={asset(image.src as AssetPath)}
					alt={image.alt}
					width={image.width ?? 1200}
					height={image.height ?? 750}
					paper={image.paper}
				/>
			</div>
		{/each}
	</Frame>
{/if}

<!-- screen3.png: the next project, and an invitation to start one. -->
<Frame id="next">
	<div class="at stack gap-s" style={T3.lead}>
		<h2 class="t-kicker">Next project</h2>
		<p class="t-lead">{next.summary}</p>
		<a href={resolve('/work')} class="more t-body">All work</a>
	</div>

	<div class="at" style={T3.a}>
		<a href={resolve('/work/[slug]', { slug: next.slug })} class="project">
			<ProjectImage project={next} />
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
