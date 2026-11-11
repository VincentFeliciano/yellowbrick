<script lang="ts">
	import { NAV, SERVICES, SITE } from '#lib';
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="bg-charcoal text-warm">
	<div class="container-yb grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
		<div>
			<Logo tone="dark" showTagline />
			<p class="mt-5 max-w-xs text-sm text-warm/70">
				An independent creative technology studio. Good ideas deserve to become real things.
			</p>
		</div>

		<div>
			<h2 class="kicker text-brick">Studio</h2>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each NAV as item (item.href)}
					<li><a href={item.href} class="text-warm/80 hover:text-brick">{item.label}</a></li>
				{/each}
				<li><a href="/resources" class="text-warm/80 hover:text-brick">Resources</a></li>
			</ul>
		</div>

		<div>
			<h2 class="kicker text-brick">Services</h2>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each SERVICES as s (s.slug)}
					<li>
						<a href="/services/{s.slug}" class="text-warm/80 hover:text-brick">{s.title}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h2 class="kicker text-brick">Get in touch</h2>
			<ul class="mt-4 space-y-3 text-sm">
				<li class="flex items-center gap-3">
					<Icon name="mail" size={18} class="shrink-0 text-brick" />
					<a href="mailto:{SITE.email}" class="text-warm/80 hover:text-brick">{SITE.email}</a>
				</li>
				<li class="flex items-center gap-3">
					<Icon name="phone" size={18} class="shrink-0 text-brick" />
					<a href={SITE.phoneHref} class="text-warm/80 hover:text-brick">{SITE.phone}</a>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="pin" size={18} class="mt-0.5 shrink-0 text-brick" />
					<span class="text-warm/80">{SITE.location}<br />{SITE.locationNote}</span>
				</li>
			</ul>
			<ul class="mt-6 flex gap-4">
				{#each SITE.social as s (s.label)}
					<li>
						<a href={s.href} aria-label={s.label} class="text-warm/70 hover:text-brick">
							<Icon name={s.icon} size={20} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-warm/10">
		<div
			class="container-yb flex flex-col gap-3 py-6 text-xs text-warm/60 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} {SITE.name}. All rights reserved.</p>
			<ul class="flex gap-6">
				<li><a href="/privacy" class="hover:text-brick">Privacy policy</a></li>
				<li><a href="/terms" class="hover:text-brick">Terms</a></li>
			</ul>
		</div>
	</div>
</footer>
