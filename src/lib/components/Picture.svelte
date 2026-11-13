<script lang="ts">
	// A finished image in a box, with a black outline. Takes the same spots as Placeholder.
	// The box takes the shape of the image: it is as large as fits in its spot, and the outline
	// sits right on the image's edges. `paper` shows behind the image while it loads.
	// With `fill` the box fills its spot instead, and the image covers it and is trimmed to fit.
	let {
		src,
		alt,
		width,
		height,
		paper = 'white',
		fill = false
	}: {
		src: string;
		alt: string;
		width: number;
		height: number;
		paper?: string;
		fill?: boolean;
	} = $props();
</script>

<div class="spot" class:fill>
	<div class="picture" style:background={paper} style:--ratio={width / height}>
		<img {src} {alt} {width} {height} decoding="async" />
	</div>
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
		.spot {
			height: 100%;
			container-type: size;
		}

		/* As wide as the spot, or as wide as the spot's height allows, whichever is smaller. */
		.picture {
			width: min(100cqw, 100cqh * var(--ratio));
			aspect-ratio: var(--ratio);
		}

		img {
			height: 100%;
			object-fit: cover;
		}

		.fill .picture {
			width: 100%;
			height: 100%;
			aspect-ratio: auto;
		}
	}
</style>
