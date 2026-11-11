<script lang="ts">
	import { asset } from '$app/paths';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	/*
	 * The brick, on top of everything.
	 *
	 * It has two resting spots, both marked in the page so CSS decides where they are:
	 *   [data-brick-hero]  the big spot on the home frame (only on the home page)
	 *   [data-brick-spot]  the small spot in the top left corner (in the layout)
	 *
	 * On the home page, scrolling off the first frame slides the big brick out to the right,
	 * then the small one slides in from the left into the corner. Everywhere else it just
	 * sits in the corner.
	 */

	/** Past the home frame (or not on the home page at all). */
	let { inside = $bindable(true) }: { inside?: boolean } = $props();

	type Spot = { x: number; y: number; w: number };

	const RATIO = 836 / 992;
	/** How far past the edge of the screen the brick goes when it's off screen, in px. */
	const OFFSCREEN_GAP = 24;

	let brick: HTMLImageElement;
	let ready = $state(false);

	/** The big spot as it sits on screen when the home frame is scrolled to the top. */
	let hero: Spot | null = null;
	let corner: Spot = { x: 0, y: 0, w: 0 };
	/** Scroll positions of the home frame and the frame after it. */
	let from = 0;
	let to = 0;
	let vw = 0;
	let reduced = false;

	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
	const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
	const spotOf = (r: DOMRect, dy = 0): Spot => ({
		x: r.left + r.width / 2,
		y: r.top + r.height / 2 + dy,
		w: r.width
	});

	function measure() {
		const y = window.scrollY;
		vw = document.documentElement.clientWidth;

		const spot = document.querySelector('[data-brick-spot]');
		if (spot) corner = spotOf(spot.getBoundingClientRect());

		const heroSpot = document.querySelector('[data-brick-hero]');
		const frame = heroSpot?.closest('section');
		if (!heroSpot || !frame) {
			hero = null;
			return;
		}
		const r = frame.getBoundingClientRect();
		from = r.top + y;
		to = frame.nextElementSibling
			? frame.nextElementSibling.getBoundingClientRect().top + y
			: from + r.height;
		hero = spotOf(heroSpot.getBoundingClientRect(), y - from);
	}

	function place() {
		const y = window.scrollY;
		let s = corner;

		if (hero) {
			const t = clamp01((y - from) / (to - from || 1));
			inside = t >= 0.5;
			if (reduced) {
				// No travel: the big brick scrolls away with the home frame, then the small one appears.
				s = t < 0.5 ? { ...hero, y: hero.y + from - y } : corner;
			} else if (t < 0.5) {
				// First half of the scroll: the big brick speeds up and slides out to the right.
				const u = (t * 2) ** 2;
				s = { ...hero, x: lerp(hero.x, vw + hero.w / 2 + OFFSCREEN_GAP, u) };
			} else {
				// Second half: the small brick slides in from the left and slows down into the corner.
				const u = ((1 - t) * 2) ** 2;
				s = { ...corner, x: lerp(corner.x, -corner.w / 2 - OFFSCREEN_GAP, u) };
			}
		} else {
			inside = true;
		}

		const h = s.w * RATIO;
		brick.style.width = `${s.w}px`;
		brick.style.transform = `translate3d(${s.x - s.w / 2}px, ${s.y - h / 2}px, 0)`;
	}

	function update() {
		measure();
		place();
	}

	afterNavigate(update);

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduced = motion.matches;

		let frame = 0;
		const onScroll = () => {
			if (!frame)
				frame = requestAnimationFrame(() => {
					frame = 0;
					place();
				});
		};
		const onMotion = () => {
			reduced = motion.matches;
			place();
		};

		update();
		ready = true;

		const observer = new ResizeObserver(update);
		observer.observe(document.body);
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', update);
		motion.addEventListener('change', onMotion);
		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', update);
			motion.removeEventListener('change', onMotion);
			cancelAnimationFrame(frame);
		};
	});
</script>

<img
	bind:this={brick}
	src={asset('brand/brick.svg')}
	alt=""
	width="992"
	height="836"
	class="pointer-events-none fixed top-0 left-0 z-40 max-w-none transition-opacity duration-500 will-change-transform {ready
		? 'opacity-100'
		: 'opacity-0'}"
/>
