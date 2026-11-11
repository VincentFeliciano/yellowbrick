<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import BrickStage from '#lib/components/BrickStage.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Set VITE_PLAUSIBLE_DOMAIN in .env to turn on privacy-friendly analytics.
	const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#F5F2EB" />
	{#if plausibleDomain}
		<script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<a
	href="#main"
	class="sr-only z-50 bg-brick px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>Skip to content</a
>

<!-- The big brick and YB mark live behind the page and move as you scroll. -->
<BrickStage />

<Header />

<main id="main" class="relative z-10">
	{@render children()}
</main>

<div class="relative z-10">
	<Footer />
</div>
