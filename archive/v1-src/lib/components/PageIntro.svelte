<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		kicker,
		title,
		children
	}: { kicker?: string; title: string; children?: Snippet } = $props();
</script>

<section class="container-yb pt-14 pb-10 sm:pt-20">
	{#if kicker}<p class="kicker text-muted">{kicker}</p>{/if}
	<h1 class="display mt-2 text-5xl sm:text-7xl">{title}</h1>
	{#if children}
		<div class="mt-5 max-w-xl text-base text-muted sm:text-lg">{@render children()}</div>
	{/if}
</section>
