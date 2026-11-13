<script lang="ts">
	import { asset } from '$app/paths';
	import type { AssetPath } from '$app/types';
	import type { Project } from '#lib';
	import Picture from './Picture.svelte';
	import Placeholder from './Placeholder.svelte';
	import SiteVideo from './SiteVideo.svelte';

	// The picture for a project: a recording of the real site or a photo of the work when it has one, a placeholder until then.
	// `wide` is for the short, wide boxes in a list of projects.
	let { project, wide = false }: { project: Project; wide?: boolean } = $props();

	const video = $derived(project.video);
	const cover = $derived(project.cover);
</script>

{#if video}
	<SiteVideo
		src={asset(video.src as AssetPath)}
		poster={asset(video.poster as AssetPath)}
		alt={video.alt}
		address={video.address}
	/>
{:else if cover}
	{#if wide && cover.wide}
		<Picture src={asset(cover.wide as AssetPath)} alt={cover.alt} width={1200} height={300} fill />
	{:else}
		<Picture src={asset(cover.src as AssetPath)} alt={cover.alt} width={1200} height={750} />
	{/if}
{:else}
	<Placeholder label={project.title} />
{/if}
