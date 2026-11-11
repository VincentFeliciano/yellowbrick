<script lang="ts">
	// A finished image in a box, with a black outline. Takes the same spots as Placeholder.
	// The whole image always shows; `paper` fills any space around it so it blends in.
	let {
		src,
		alt,
		width,
		height,
		paper = 'white'
	}: { src: string; alt: string; width: number; height: number; paper?: string } = $props();
</script>

<div class="picture" style:background={paper}>
	<img {src} {alt} {width} {height} decoding="async" />
</div>

<style>
	.picture {
		display: flex;
		overflow: hidden;
		border: 2px solid var(--color-ink);
	}

	img {
		width: 100%;
		height: auto;
	}

	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.picture {
			height: 100%;
		}

		img {
			height: 100%;
			object-fit: contain;
		}
	}
</style>
