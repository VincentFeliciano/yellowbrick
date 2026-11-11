<script lang="ts">
	import Button from './Button.svelte';

	let {
		title = 'Ready to build something great?',
		text = 'Let’s turn your idea into something real.'
	}: { title?: string; text?: string } = $props();
</script>

<section class="bg-brick">
	<div
		class="container-yb flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between"
	>
		<div>
			<h2 class="display text-4xl sm:text-5xl">{title}</h2>
			<p class="mt-2 text-sm font-medium">{text}</p>
		</div>
		<Button href="/contact" variant="dark" class="shrink-0 sm:min-w-48">Let’s talk</Button>
	</div>
</section>
