<script lang="ts">
	import { onMount } from 'svelte';

	/*
	 * A pre-rendered 3D scene in a Picture-style box that tilts as the page scrolls.
	 *
	 * `frames` are renders of the scene from a camera that goes from above (looking down at the
	 * floor) to below (looking up at the ceiling). The frame follows the box's place on screen: the
	 * first as the box comes in at the bottom, the last as it leaves at the top.
	 *
	 * While the view is moving the picture is blended from the two frames around it. It always
	 * comes to rest on a whole frame.
	 *
	 * The middle frame is a plain <img>, so the box looks right before the script runs and when
	 * reduced motion is on. The rest only start loading when the box comes near the screen, and
	 * are drawn onto a canvas laid over the image.
	 */
	let {
		frames,
		alt,
		width,
		height,
		paper = 'white'
	}: { frames: string[]; alt: string; width: number; height: number; paper?: string } = $props();

	const count = $derived(frames.length);
	const middle = $derived(frames[Math.floor(count / 2)]);

	let box: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const ctx = canvas.getContext('2d');
		const images: HTMLImageElement[] = [];
		let wanted = Math.floor(count / 2); // frame wanted by the box's place on screen
		let at = wanted; // where the picture is now
		let frame = 0;
		let drawn = '';

		const loaded = (i: number) => images[i]?.complete && images[i].naturalWidth > 0;
		const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

		/** Draws the picture at `at`, blended from the two frames around it. */
		function draw() {
			if (!ctx || motion.matches) return;
			const i0 = Math.min(Math.floor(at), count - 1);
			const i1 = Math.min(i0 + 1, count - 1);
			const f = Math.round((at - i0) * 50) / 50;
			if (!loaded(i0) || !loaded(i1)) return;
			const key = `${i0},${f}`;
			if (key === drawn) return;
			drawn = key;
			ctx.globalAlpha = 1;
			ctx.drawImage(images[i0], 0, 0, canvas.width, canvas.height);
			if (f > 0) {
				ctx.globalAlpha = f;
				ctx.drawImage(images[i1], 0, 0, canvas.width, canvas.height);
				ctx.globalAlpha = 1;
			}
		}

		/** Eases the picture towards the wanted frame. */
		function step() {
			frame = 0;
			at += (wanted - at) * 0.18;
			if (Math.abs(wanted - at) < 0.01) at = wanted;
			else frame = requestAnimationFrame(step);
			draw();
		}

		function place() {
			const r = box.getBoundingClientRect();
			const vh = window.innerHeight;
			// 0 as the box comes in at the bottom of the screen, 1 as it leaves at the top.
			// Always a whole frame: a blend of two is soft and doubles the edges.
			wanted = Math.round(clamp((vh - r.top) / (vh + r.height), 0, 1) * (count - 1));
			if (!frame) frame = requestAnimationFrame(step);
		}

		/** Loads every frame, the ones next to the middle first. */
		function load() {
			const mid = Math.floor(count / 2);
			const order = [...frames.keys()].sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid));
			for (const i of order) {
				const img = new Image();
				img.decoding = 'async';
				img.onload = draw;
				img.src = frames[i];
				images[i] = img;
			}
		}

		// Start loading when the box is within a screen of being visible.
		const near = new IntersectionObserver(
			(entries) => {
				if (!entries.some((e) => e.isIntersecting)) return;
				near.disconnect();
				if (!motion.matches) load();
			},
			{ rootMargin: '100% 0px' }
		);
		near.observe(box);

		const onMotion = () => {
			if (motion.matches) {
				ctx?.clearRect(0, 0, canvas.width, canvas.height);
				drawn = '';
			} else {
				if (!images.length) load();
				place();
			}
		};

		place();
		window.addEventListener('scroll', place, { passive: true });
		window.addEventListener('resize', place);
		motion.addEventListener('change', onMotion);
		return () => {
			near.disconnect();
			window.removeEventListener('scroll', place);
			window.removeEventListener('resize', place);
			motion.removeEventListener('change', onMotion);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="scene" style:background={paper} bind:this={box}>
	<img src={middle} {alt} {width} {height} decoding="async" draggable="false" />
	<canvas bind:this={canvas} {width} {height} aria-hidden="true"></canvas>
</div>

<style>
	/* Same box as Picture: black outline. */
	.scene {
		position: relative;
		display: flex;
		overflow: hidden;
		border: 2px solid var(--color-ink);
	}

	img,
	canvas {
		width: 100%;
		height: auto;
	}

	canvas {
		position: absolute;
		inset: 0;
		height: 100%;
		object-fit: cover;
	}

	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.scene {
			height: 100%;
		}

		/* The box is a touch wider than the renders: fill it and trim a sliver top and bottom. */
		img {
			height: 100%;
			object-fit: cover;
		}
	}
</style>
