<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Button from '#lib/components/Button.svelte';
</script>

<Seo title="Thank you" description="Your message has been sent to Yellowbrick." />
<svelte:head><meta name="robots" content="noindex" /></svelte:head>

<section class="container-yb flex flex-col items-center py-24 text-center sm:py-32">
	<h1 class="display text-5xl sm:text-7xl">Thanks<span class="text-brick-dark">!</span></h1>
	<p class="mt-4 max-w-md text-lg text-muted">
		Your message is on its way. We usually reply within one business day.
	</p>
	<div class="mt-10 flex flex-wrap justify-center gap-3">
		<Button href="/work" variant="outline-dark">View our work</Button>
		<Button href="/">Back to home</Button>
	</div>
</section>
