<script lang="ts">
	import { SERVICES, usd } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
</script>

<Seo
	title="Services"
	description="Web design, branding, automation, and 3D products from Yellowbrick. Clear starting prices for every service."
/>

<PageIntro kicker="Services" title="What we do">
	We help businesses with design, technology, and creative solutions that drive results.
</PageIntro>

<section class="container-yb pb-20">
	<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each SERVICES as s (s.slug)}
			<li>
				<a
					href="/services/{s.slug}"
					class="group flex h-full flex-col border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-charcoal"
				>
					<span
						class="grid size-11 place-items-center border-2 border-charcoal transition-colors group-hover:bg-brick"
					>
						<Icon name={s.icon} size={20} />
					</span>
					<h2 class="kicker mt-6">{s.title}</h2>
					<p class="mt-2 text-sm text-muted">{s.summary}</p>
					<p class="mt-auto pt-6 text-sm">
						from <span class="font-bold">{usd(s.from)}</span>
					</p>
					<span class="kicker mt-4 inline-flex items-center gap-1.5 text-muted group-hover:text-charcoal">
						Details <Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
					</span>
				</a>
			</li>
		{/each}
	</ul>

	<p class="mt-8 max-w-2xl text-sm text-muted">
		Prices are starting points for a focused project. Every project gets a clear written scope and
		fixed quote before work begins, so you always know what you are paying for.
	</p>
</section>

<CtaBanner title="Not sure what you need?" text="Tell us about the problem and we’ll suggest the right approach." />
