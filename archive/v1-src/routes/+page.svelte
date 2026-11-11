<script lang="ts">
	import { PROJECTS, SERVICES, SITE, usd } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import ProcessSteps from '#lib/components/ProcessSteps.svelte';

	const featured = SERVICES.filter((s) => s.featured);

	// Each panel fills the screen below the header. The background brick (BrickStage)
	// reads data-panel / data-brick / data-yb to decide where to move as you scroll.
	const panel = 'relative flex min-h-[calc(100svh-4.5rem)] flex-col py-16';
</script>

<Seo />

<!-- Landing: big brick, page-name callout, YB bottom right (mockup frame 1). -->
<section data-panel="Home" data-brick="hero" data-yb="br" class="{panel} justify-end pb-24 md:justify-center">
	<div class="container-yb">
		<div class="max-w-md">
			<p class="kicker text-muted">Independent creative technology studio</p>
			<h1 class="display mt-3 text-5xl sm:text-6xl lg:text-7xl">
				Good ideas deserve to become real things<span class="text-brick-dark">.</span>
			</h1>
			<p class="mt-5 text-muted">
				We design brands, build websites, and create digital systems that help businesses move
				forward.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="/contact">Start a project <Icon name="arrow-up-right" size={14} /></Button>
				<Button href="#work" variant="outline-dark">View our work</Button>
			</div>
		</div>
	</div>
	<a
		href="#services"
		class="kicker absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-charcoal md:flex"
	>
		Scroll
		<Icon name="arrow" size={16} class="scroll-cue rotate-90" />
	</a>
</section>

<!-- Services: title, row of tiles, brick cropped on the right, YB bottom left (frame 3). -->
<section id="services" data-panel="Services" data-brick="right" data-yb="bl" class="{panel} justify-center">
	<div class="container-yb">
		<h2 class="display text-center text-5xl sm:text-6xl">What we do</h2>
		<p class="mx-auto mt-3 max-w-md text-center text-muted">
			Design, technology, and creative solutions that drive results.
		</p>
		<ul class="mt-12 grid gap-4 sm:grid-cols-3 lg:max-w-[70%]">
			{#each featured as s (s.slug)}
				<li>
					<a
						href="/services/{s.slug}"
						class="group flex aspect-square flex-col bg-placeholder p-6 transition-colors hover:bg-brick"
					>
						<Icon name={s.icon} size={28} />
						<span class="display mt-auto text-3xl">{s.title}</span>
						<span class="mt-1 text-sm text-charcoal/70">{s.short}</span>
						<span class="mt-3 text-sm">from <strong>{usd(s.from)}</strong></span>
					</a>
				</li>
			{/each}
		</ul>
		<a
			href="/services"
			class="kicker group mt-6 inline-flex items-center gap-1.5 text-muted hover:text-charcoal"
		>
			All services, including 3D &amp; products
			<Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
		</a>
	</div>
</section>

<!-- Work: title, tiles stacked bottom right, brick cropped on the left, YB top right (frame 4). -->
<section id="work" data-panel="Work" data-brick="left" data-yb="tr" class="{panel} justify-center">
	<div class="container-yb">
		<h2 class="display text-center text-5xl sm:text-6xl">Selected work</h2>
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:ml-auto lg:max-w-[48%]">
			<div class="hidden sm:block" aria-hidden="true"></div>
			{#each PROJECTS as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
		<div class="mt-8 text-right">
			<a href="/work" class="kicker group inline-flex items-center gap-1.5 text-muted hover:text-charcoal">
				View all work
				<Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

<!-- About: outlined box top left, brick on the right, YB bottom right (frame 2). -->
<section data-panel="About" data-brick="right" data-yb="br" class="{panel} justify-center md:justify-start md:pt-24">
	<div class="container-yb">
		<div class="max-w-md rounded-xl border-2 border-charcoal bg-warm p-8">
			<p class="kicker text-muted">About</p>
			<h2 class="display mt-2 text-4xl sm:text-5xl">Design thinking, technical execution.</h2>
			<p class="mt-4 text-muted">
				We’re an independent studio based in {SITE.location}, working with businesses of all
				sizes—locally and worldwide. We don’t just make things look good. We solve problems,
				streamline processes, and deliver results that matter.
			</p>
			<a
				href="/about"
				class="kicker group mt-6 inline-flex items-center gap-1.5 text-brick-dark hover:text-charcoal"
			>
				About the studio
				<Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

<!-- Process: title and steps on the right, brick on the left, YB top left. -->
<section data-panel="Process" data-brick="left" data-yb="tl" class="{panel} justify-center">
	<div class="container-yb">
		<h2 class="display text-center text-5xl sm:text-6xl">How it works</h2>
		<p class="mx-auto mt-3 max-w-md text-center text-muted">
			Five clear steps, with a fixed quote before any work begins.
		</p>
		<div class="mt-14 lg:ml-auto lg:max-w-[72%]">
			<ProcessSteps />
		</div>
	</div>
</section>

<!-- Contact: the brick returns big, as a bookend to the landing panel. -->
<section data-panel="Contact" data-brick="hero" data-yb="tl" class="{panel} justify-end pb-24 md:justify-center">
	<div class="container-yb">
		<div class="max-w-md">
			<h2 class="display text-5xl sm:text-7xl">Ready to build something great?</h2>
			<p class="mt-4 text-muted">Let’s turn your idea into something real.</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="/contact">Let’s talk</Button>
				<Button href="mailto:{SITE.email}" variant="outline-dark">{SITE.email}</Button>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes nudge {
		50% {
			/* Tailwind's rotate-90 is applied first, so translateX moves along the arrow. */
			transform: translateX(4px);
		}
	}
	:global(.scroll-cue) {
		animation: nudge 2.4s ease-in-out infinite;
	}
</style>
