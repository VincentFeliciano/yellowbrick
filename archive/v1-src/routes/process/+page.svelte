<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import ProcessSteps from '#lib/components/ProcessSteps.svelte';
	import Button from '#lib/components/Button.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	// Typical terms — adjust to match how you actually run projects.
	const terms = [
		{
			title: 'Timeline',
			text: 'Most projects take 1–4 weeks depending on scope. Your proposal includes a schedule with clear milestones.'
		},
		{
			title: 'Communication',
			text: 'One point of contact, regular progress updates, and a preview link so you can see the work as it develops.'
		},
		{
			title: 'Payment',
			text: 'A fixed quote agreed up front. Typically 50% to begin and 50% at launch, with no surprise charges.'
		},
		{
			title: 'Delivery',
			text: 'You own the finished work. We hand over all files and access, walk you through everything, and stay available for support.'
		}
	];
</script>

<Seo
	title="Process"
	description="How a Yellowbrick project works: Discover, Plan, Design, Build, Deliver. Clear expectations and straightforward terms."
/>

<PageIntro kicker="Process" title="How it works">
	A simple, five-step process with clear expectations at every stage. You always know what is
	happening next.
</PageIntro>

<section class="container-yb pb-16 sm:pb-20">
	<ProcessSteps detailed />
	<div class="mt-12 text-center">
		<Button href="/contact">Start a project</Button>
	</div>
</section>

<section class="border-t border-line bg-white">
	<div class="container-yb py-16 sm:py-20">
		<h2 class="display text-3xl sm:text-4xl">Straightforward terms</h2>
		<dl class="mt-8 grid gap-8 sm:grid-cols-2">
			{#each terms as t (t.title)}
				<div class="border-l-4 border-brick pl-5">
					<dt class="display text-2xl">{t.title}</dt>
					<dd class="mt-1.5 text-muted">{t.text}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<CtaBanner />
