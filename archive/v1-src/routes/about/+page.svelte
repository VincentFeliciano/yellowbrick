<script lang="ts">
	import { SITE } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const values = [
		{
			title: 'Clean design',
			text: 'Clear, confident work that is easy to use and easy to understand. Nothing added just for decoration.'
		},
		{
			title: 'Solid code',
			text: 'Fast, accessible, and built to last, so what we make keeps working long after launch.'
		},
		{
			title: 'Practical solutions',
			text: 'We start from the problem, not the trend, and recommend only what will actually help.'
		}
	];

	const skills = [
		'Brand identity',
		'Web design',
		'Front-end development',
		'Web applications',
		'Automation',
		'Dashboards',
		'Integrations',
		'3D modeling',
		'3D printing'
	];
</script>

<Seo
	title="About"
	description="Yellowbrick is an independent creative technology studio in Schenectady, NY, working with businesses locally and worldwide."
/>

<section class="container-yb pt-14 pb-16 sm:pt-20">
	<div>
		<p class="kicker text-muted">About</p>
		<h1 class="display mt-2 text-5xl sm:text-7xl">About Yellowbrick</h1>
		<div class="mt-6 max-w-xl space-y-4 text-lg text-muted">
			<p>
				We’re an independent creative technology studio based in {SITE.location}. We work with
				businesses and organizations of all sizes—locally and worldwide.
			</p>
			<p>We care about clean design, solid code, and practical solutions.</p>
		</div>
		<a
			href="/process"
			class="kicker group mt-8 inline-flex items-center gap-1.5 text-brick-dark hover:text-charcoal"
		>
			Our process <Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
		</a>
	</div>
</section>

<section class="bg-charcoal text-warm">
	<div class="container-yb py-16 sm:py-20">
		<h2 class="display max-w-2xl text-4xl sm:text-5xl">
			Design thinking and technical execution, under one roof.
		</h2>
		<p class="mt-5 max-w-2xl text-warm/80">
			Most businesses end up hiring a designer, then a developer, then someone to connect it all.
			Yellowbrick does all three, so the brand, the website, and the systems behind them are planned
			together and work together.
		</p>
		<ul class="mt-12 grid gap-8 sm:grid-cols-3">
			{#each values as v, i (v.title)}
				<li class="border-t-2 border-brick pt-5">
					<p class="display text-2xl text-brick">0{i + 1}</p>
					<h3 class="display mt-1 text-3xl">{v.title}</h3>
					<p class="mt-2 text-sm text-warm/75">{v.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="container-yb py-16 sm:py-20">
	<h2 class="display text-3xl sm:text-4xl">Skills</h2>
	<ul class="mt-6 flex flex-wrap gap-2">
		{#each skills as skill (skill)}
			<li class="border border-charcoal bg-white px-4 py-2 text-sm font-medium">{skill}</li>
		{/each}
	</ul>
</section>

<CtaBanner />
