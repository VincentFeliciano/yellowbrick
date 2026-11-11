<script lang="ts">
	import { SITE } from '#lib';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ContactForm from '#lib/components/ContactForm.svelte';
</script>

<Seo
	title="Contact"
	description="Start a project with Yellowbrick. Tell us what you need and we’ll be in touch, usually within one business day."
/>

<section class="container-yb grid gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.6fr_1fr]">
	<div>
		<p class="kicker text-muted">Contact</p>
		<h1 class="display mt-2 text-5xl sm:text-7xl">Let’s talk</h1>
		<p class="mt-4 mb-10 text-lg text-muted">Tell us about your project and we’ll be in touch.</p>
		<ContactForm />
	</div>

	<aside class="lg:pt-32">
		<ul class="space-y-7">
			<li class="flex gap-4">
				<Icon name="mail" class="mt-0.5 shrink-0" />
				<div>
					<h2 class="kicker">Email</h2>
					<a href="mailto:{SITE.email}" class="mt-1 block text-muted hover:text-charcoal"
						>{SITE.email}</a
					>
				</div>
			</li>
			<li class="flex gap-4">
				<Icon name="phone" class="mt-0.5 shrink-0" />
				<div>
					<h2 class="kicker">Phone</h2>
					<a href={SITE.phoneHref} class="mt-1 block text-muted hover:text-charcoal">{SITE.phone}</a>
				</div>
			</li>
			<li class="flex gap-4">
				<Icon name="pin" class="mt-0.5 shrink-0" />
				<div>
					<h2 class="kicker">Location</h2>
					<p class="mt-1 text-muted">{SITE.location}<br />{SITE.locationNote}</p>
				</div>
			</li>
		</ul>
	</aside>
</section>
