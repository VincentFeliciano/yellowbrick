<script lang="ts">
	import { page } from '$app/state';
	import { SITE } from '#lib';

	let { title, description = SITE.description }: { title?: string; description?: string } =
		$props();

	const fullTitle = $derived(
		title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`
	);
	const canonical = $derived(new URL(page.url.pathname, SITE.url).href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta name="twitter:card" content="summary" />
</svelte:head>
