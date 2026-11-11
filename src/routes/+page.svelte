<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { PILLARS, PROJECTS, SITE, usd, T2, T3, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Placeholder from '#lib/components/Placeholder.svelte';

	const [featured, ...others] = PROJECTS;
</script>

<svelte:head>
	<title>Yellowbrick — {SITE.tagline}</title>
	<meta name="description" content={SITE.description} />
</svelte:head>

<!-- screen1.png: just the big brick. -->
<Frame id="home" class="hero">
	<h1 class="sr-only">Yellowbrick — {SITE.tagline}</h1>
	<div class="hero-spot" data-brick-hero></div>
</Frame>

<!-- screeen2.png: what we do. -->
<Frame id="what-we-do">
	<div class="at stack gap-s" style={T2.lead}>
		<h2 class="t-kicker">What we do</h2>
		<p class="t-lead">
			We help businesses get a credible website, a professional brand, and less manual
			work.
		</p>
	</div>

	<div class="at" style={T2.a}>
		<Picture
			src={asset('images/studio-at-work.png')}
			alt="Drawing of the studio at work: a desk set up, people building at their computers, and a call coming in."
			width={1920}
			height={1080}
		/>
	</div>

	<ul class="at cards" style={T2.b}>
		{#each PILLARS as service (service.slug)}
			<li>
				<a href={resolve('/services/[slug]', { slug: service.slug })} class="card">
					<span class="t-kicker">{service.number} — {service.pillar}</span>
					<span class="t-sub">{service.title}</span>
					<span class="t-body muted">{service.short}</span>
					<span class="t-small">From <strong>{usd(service.from)}</strong></span>
				</a>
			</li>
		{/each}
	</ul>

	<div class="at stack gap-s" style={T2.foot}>
		<p class="t-body">
			An independent creative technology studio in {SITE.location}, working with clients nearby
			and remotely.
		</p>
		<a href={resolve('/services')} class="more t-body">All services</a>
	</div>
</Frame>

<!-- screen3.png: selected work. -->
<Frame id="work">
	<div class="at stack gap-s" style={T3.lead}>
		<h2 class="t-kicker">Selected work</h2>
		<p class="t-lead">Demo projects showing how we solve everyday problems.</p>
		<a href={resolve('/work')} class="more t-body">All work</a>
	</div>

	<div class="at" style={T3.a}>
		<a href={resolve('/work/[slug]', { slug: featured.slug })} class="project">
			<Placeholder label={featured.title} />
			<span class="t-kicker">{featured.category}</span>
			<span class="t-sub">{featured.title}</span>
			<span class="t-body muted">{featured.summary}</span>
		</a>
	</div>

	<ul class="at stack gap-l" style={T3.b}>
		{#each others as project (project.slug)}
			<li>
				<a href={resolve('/work/[slug]', { slug: project.slug })} class="project">
					<Placeholder label={project.title} />
					<span class="t-kicker">{project.category}</span>
					<span class="t-sub">{project.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</Frame>

<!-- screen4.png: about, and an invitation to get in touch. -->
<Frame id="about">
	<div class="at" style={T4.a}>
		<Picture
			src={asset('images/office-portrait.png')}
			alt="Drawing of two people waving in the Yellowbrick office, under the brick and the yellow brick sign."
			width={709}
			height={1001}
		/>
	</div>

	<div class="at stack" style={T4.b}>
		<p class="t-kicker">About</p>
		<h2 class="t-head">We design it and we build it.</h2>
		<p class="t-body muted">
			We’re an independent studio based in {SITE.location}. Looking good is half the job. We make
			sure the brand, the site, and the systems behind it work.
		</p>
		<a href={resolve('/about')} class="more t-body">About the studio</a>
	</div>

	<div class="at stack cta" style={T4.c}>
		<h2 class="t-head">Have a project in mind?</h2>
		<p class="t-body">We reply within one business day.</p>
		<a href={resolve('/contact')} class="btn">Let’s talk</a>
		<a href="mailto:{SITE.email}" class="t-body underline">{SITE.email}</a>
	</div>

	<div class="at stack gap-s" style={T4.foot}>
		<p class="t-body">Five clear steps, with a fixed quote before any work begins.</p>
		<a href={resolve('/process')} class="more t-body">How it works</a>
	</div>
</Frame>

