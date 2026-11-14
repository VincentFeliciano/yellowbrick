<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { SITE } from '#lib';
	import Brick from '#lib/components/Brick.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	/** False while the home frame is on screen: hides the top right links, like the mockups. */
	let inside = $state(true);

	const MAIN = [
		{ label: 'Services', href: resolve('/services') },
		{ label: 'Work', href: resolve('/work') },
		{ label: 'About', href: resolve('/about') }
	];

	/** `href` is a resolved link, so it includes the base path like the page's own URL does. */
	const current = (href: string) => (page.url.pathname === href ? 'page' : undefined);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- The wordmark sits behind everything on wide screens: the page's content floats over it as it scrolls. -->
<div class="backdrop" aria-hidden="true">
	<div class="backdrop-stage">
		<img class="wordmark" src={asset('brand/wordmark.svg')} alt="" width="628" height="95" />
	</div>
</div>

<main>
	{@render children()}
</main>

<!-- On phones the wordmark sits at the end of the page instead of fixed in the corner. -->
<footer class="phone-footer">
	<a href={resolve('/')}><img src={asset('brand/wordmark.svg')} alt="Yellowbrick home" width="628" height="95" /></a>
	<p class="t-small muted">{SITE.location} · <a href="mailto:{SITE.email}">{SITE.email}</a></p>
	<p class="t-small muted flex flex-wrap gap-x-4">
		<a href={resolve('/process')} class="underline">Process</a>
		<a href={resolve('/resources')} class="underline">Resources</a>
		<a href={resolve('/privacy')} class="underline">Privacy</a>
		<a href={resolve('/terms')} class="underline">Terms</a>
	</p>
</footer>

<Brick bind:inside />

<!-- A plain white bar behind the links and the top of the brick; the page scrolls away under it. -->
<div class="topbar"></div>

<!-- Links: fixed to the screen, on top of the content. -->
<div class="chrome">
	<div class="chrome-stage">
		<!-- The brick itself ignores clicks, so the spot under it is the link home. -->
		<a href={resolve('/')} class="brick-spot" class:away={!inside} data-brick-spot aria-label="Yellowbrick home"
		></a>

		<nav class="nav-main" aria-label="Main">
			{#each MAIN as link (link.href)}
				<a href={link.href} aria-current={current(link.href)}>{link.label}</a>
			{/each}
		</nav>

		<nav class="nav-side" class:away={!inside} aria-label="Contact">
			<a href={resolve('/process')} class="wide-only" aria-current={current(resolve('/process'))}>Process</a>
			<a href={resolve('/contact')} aria-current={current(resolve('/contact'))}>Contact</a>
			<a href="mailto:{SITE.email}" class="wide-only">{SITE.email}</a>
		</nav>
	</div>
</div>

<style>
	/* Phones: a white header bar, with the small brick at the start of it. */
	.chrome {
		position: fixed;
		inset: 0 0 auto;
		z-index: 30;
		height: 3.5rem;
		background: white;
	}

	.chrome-stage {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 100%;
		padding: 0 1rem;
	}

	.brick-spot {
		display: block;
		flex: none;
		width: 2.75rem;
		aspect-ratio: 992 / 836;
	}

	/* On the home frame the small brick is off screen, so its spot shouldn't catch clicks. */
	.brick-spot.away {
		pointer-events: none;
	}

	nav {
		display: flex;
		gap: 0.9rem;
		font-size: 0.8125rem;
		white-space: nowrap;
	}

	.nav-main {
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.nav-side {
		margin-left: auto;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		text-decoration: underline;
		text-decoration-color: var(--color-brick);
		text-decoration-thickness: 0.2em;
		text-underline-offset: 0.3em;
	}

	.wide-only,
	.backdrop,
	.topbar {
		display: none;
	}

	.phone-footer {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 3rem 1rem 2rem;
	}

	.phone-footer img {
		width: 100%;
		max-width: 28rem;
	}

	/* Wide screens: everything placed on a 16:9 stage like the mockups. */
	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.chrome {
			display: grid;
			inset: 0;
			height: auto;
			border: 0;
			background: none;
			place-items: center;
			pointer-events: none;
		}

		.chrome-stage {
			display: block;
			position: relative;
			width: min(100%, 100svh * 16 / 9);
			height: auto;
			padding: 0;
			aspect-ratio: 16 / 9;
			container-type: size;
		}

		.chrome-stage > * {
			position: absolute;
			pointer-events: auto;
		}

		.brick-spot {
			left: 4.06%;
			top: 3.98%;
			width: 14.38%;
		}

		.brick-spot.away {
			pointer-events: none;
		}

		.nav-main {
			left: 1.27%;
			top: 2.26%;
			gap: 0.9em;
			font-size: max(1.48cqh, 12px);
		}

		.nav-side {
			right: 2.29%;
			top: 3.06%;
			gap: 1.1em;
			margin: 0;
			font-size: max(1.85cqh, 13px);
			transition: opacity 0.3s;
		}

		.nav-side.away {
			opacity: 0;
			pointer-events: none;
		}

		.wide-only {
			display: inline;
		}

		/* The frames are see-through, so the wordmark shows wherever a frame leaves the corner empty. */
		main {
			position: relative;
			z-index: 1;
		}

		.backdrop {
			display: grid;
			position: fixed;
			inset: 0;
			z-index: 0;
			place-items: center;
			pointer-events: none;
		}

		.backdrop-stage {
			position: relative;
			width: min(100%, 100svh * 16 / 9);
			aspect-ratio: 16 / 9;
		}

		/* Moved up from the mockups' 90% so the bottom of the screen stays clear. */
		.wordmark {
			display: block;
			position: absolute;
			left: 66.56%;
			top: 81%;
			width: 32.71%;
		}

		/* From the top of the screen to just under the links, whatever the stage's size. */
		.topbar {
			--stage-h: min(100svh, 100vw * 9 / 16);

			display: block;
			position: fixed;
			inset: 0 0 auto;
			z-index: 29;
			height: calc((100svh - var(--stage-h)) / 2 + var(--stage-h) * 0.08);
			background: white;
		}

		.phone-footer {
			display: none;
		}
	}
</style>
