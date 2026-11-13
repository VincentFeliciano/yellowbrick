<script lang="ts">
	import { onMount } from 'svelte';

	// A short muted recording of a website in a small browser window. Takes the same spots as
	// Placeholder. It only loads and plays while it's on screen; with reduced motion it stays on
	// the poster image.
	let { src, poster, alt, address }: { src: string; poster: string; alt: string; address: string } =
		$props();

	let video: HTMLVideoElement;

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const seen = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !motion.matches) video.play().catch(() => {});
			else video.pause();
		});
		seen.observe(video);
		return () => seen.disconnect();
	});
</script>

<div class="window">
	<div class="bar" aria-hidden="true">
		<span class="dots"><i></i><i></i><i></i></span>
		<span class="address">{address}</span>
	</div>
	<video bind:this={video} {src} {poster} aria-label={alt} muted loop playsinline preload="none"
	></video>
</div>

<style>
	.window {
		display: flex;
		flex-direction: column;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border: 2px solid var(--color-ink);
		background: white;
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 0.75em;
		padding: 0.5em 0.75em;
		border-bottom: 2px solid var(--color-ink);
		font-size: var(--fs-kicker);
	}

	.dots {
		display: flex;
		gap: 0.35em;
	}

	.dots i {
		width: 0.6em;
		height: 0.6em;
		border: 1.5px solid var(--color-ink);
		border-radius: 50%;
	}

	.dots i:first-child {
		background: var(--color-brick);
	}

	.address {
		overflow: hidden;
		color: var(--color-muted);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	video {
		flex: 1;
		width: 100%;
		min-height: 0;
		object-fit: cover;
		object-position: top;
	}

	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.window {
			height: 100%;
			aspect-ratio: auto;
		}
	}
</style>
