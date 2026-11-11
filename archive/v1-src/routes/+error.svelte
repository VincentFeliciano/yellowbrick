<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/Button.svelte';
</script>

<svelte:head><title>{page.status} — Yellowbrick</title></svelte:head>

<section class="container-yb flex flex-col items-center py-24 text-center sm:py-32">
	<p class="display text-9xl text-brick-dark">{page.status}</p>
	<h1 class="display mt-2 text-4xl sm:text-5xl">
		{page.status === 404 ? 'This brick is missing' : 'Something went wrong'}
	</h1>
	<p class="mt-3 text-muted">
		{page.status === 404 ? 'The page you’re looking for doesn’t exist.' : page.error?.message}
	</p>
	<Button href="/" class="mt-8">Back to home</Button>
</section>
