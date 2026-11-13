<script lang="ts">
	import { onMount } from 'svelte';

	/*
	 * A pre-rendered 3D model in a Picture-style box that turns when it is dragged.
	 *
	 * `frames` is a grid of renders: one row per camera height (lowest first), and in each row one
	 * frame per step of a full turn. Dragging sideways steps through a row, dragging up and down
	 * moves between rows. The arrow keys do the same.
	 *
	 * The starting frame is a plain <img>, so the box looks right before the script runs. The rest
	 * only start loading when the box comes near the screen, and are drawn onto a canvas over it.
	 * On a touch screen a vertical swipe still scrolls the page, so only sideways turning works there.
	 */
	let {
		frames,
		alt,
		size,
		start = [1, 2],
		paper = 'white'
	}: { frames: string[][]; alt: string; size: number; start?: [number, number]; paper?: string } =
		$props();

	let box: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let dragging = $state(false);
	let turned = $state(false);

	onMount(() => {
		const ctx = canvas.getContext('2d');
		const rows = frames.length;
		const cols = frames[0].length;
		const images: HTMLImageElement[][] = [];
		let row = start[0];
		let col = start[1];
		let shown = '';
		let from = { x: 0, y: 0, row, col };

		const loaded = (r: number, c: number) => images[r]?.[c]?.complete && images[r][c].naturalWidth > 0;

		/** Draws the wanted frame, or leaves the last one up until it has loaded. */
		function draw() {
			if (!ctx || !loaded(row, col) || shown === `${row},${col}`) return;
			ctx.clearRect(0, 0, size, size);
			ctx.drawImage(images[row][col], 0, 0, size, size);
			shown = `${row},${col}`;
		}

		function turn(r: number, c: number) {
			row = Math.min(rows - 1, Math.max(0, r));
			col = ((c % cols) + cols) % cols;
			turned = true;
			draw();
		}

		/** Loads every frame, the starting row first. */
		function load() {
			const order = [...frames.keys()].sort((a, b) => Math.abs(a - start[0]) - Math.abs(b - start[0]));
			for (const r of order) {
				images[r] = frames[r].map((src) => {
					const img = new Image();
					img.decoding = 'async';
					img.onload = draw;
					img.src = src;
					return img;
				});
			}
		}

		const near = new IntersectionObserver(
			(entries) => {
				if (!entries.some((e) => e.isIntersecting)) return;
				near.disconnect();
				load();
			},
			{ rootMargin: '100% 0px' }
		);
		near.observe(box);

		function down(e: PointerEvent) {
			if (e.button !== 0) return;
			box.setPointerCapture(e.pointerId);
			from = { x: e.clientX, y: e.clientY, row, col };
			dragging = true;
		}

		function move(e: PointerEvent) {
			if (!dragging) return;
			const r = box.getBoundingClientRect();
			// A full turn takes a drag of about one and a half box widths; the heights span one box height.
			const dc = Math.round(((e.clientX - from.x) / r.width) * cols * 0.66);
			const dr = Math.round(((e.clientY - from.y) / r.height) * rows);
			turn(from.row + dr, from.col + dc);
		}

		function up() {
			dragging = false;
		}

		function key(e: KeyboardEvent) {
			const step: Record<string, [number, number]> = {
				ArrowLeft: [0, -1],
				ArrowRight: [0, 1],
				ArrowUp: [-1, 0],
				ArrowDown: [1, 0]
			};
			const s = step[e.key];
			if (!s) return;
			e.preventDefault();
			turn(row + s[0], col + s[1]);
		}

		box.addEventListener('pointerdown', down);
		box.addEventListener('pointermove', move);
		box.addEventListener('pointerup', up);
		box.addEventListener('pointercancel', up);
		box.addEventListener('keydown', key);
		return () => {
			near.disconnect();
			box.removeEventListener('pointerdown', down);
			box.removeEventListener('pointermove', move);
			box.removeEventListener('pointerup', up);
			box.removeEventListener('pointercancel', up);
			box.removeEventListener('keydown', key);
		};
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	class="scene"
	class:dragging
	style:background={paper}
	bind:this={box}
	role="img"
	aria-label="{alt} Drag or use the arrow keys to turn it."
	tabindex="0"
>
	<img src={frames[start[0]][start[1]]} alt="" width={size} height={size} decoding="async" draggable="false" />
	<canvas bind:this={canvas} width={size} height={size} aria-hidden="true"></canvas>
	{#if !turned}
		<span class="hint t-small">Drag to turn</span>
	{/if}
</div>

<style>
	/* Same box as Picture: black outline. */
	.scene {
		position: relative;
		display: flex;
		overflow: hidden;
		border: 2px solid var(--color-ink);
		cursor: grab;
		touch-action: pan-y;
		user-select: none;
	}

	.scene.dragging {
		cursor: grabbing;
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
		object-fit: contain;
	}

	.hint {
		position: absolute;
		right: var(--g-s);
		bottom: var(--g-s);
		padding: 0.2em 0.6em;
		background: var(--color-brick);
		pointer-events: none;
	}

	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.scene {
			height: 100%;
		}

		img {
			height: 100%;
			object-fit: contain;
		}
	}
</style>
