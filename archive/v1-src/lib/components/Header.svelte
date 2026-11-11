<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { NAV } from '#lib';
	import Logo from './Logo.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';

	let { tone = 'light' }: { tone?: 'light' | 'dark' } = $props();

	let open = $state(false);

	afterNavigate(() => (open = false));

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header
	class="sticky top-0 z-40 border-b {tone === 'dark'
		? 'border-warm/10 bg-charcoal text-warm'
		: 'border-line bg-warm/95 text-charcoal backdrop-blur'}"
>
	<div class="container-yb flex h-18 items-center justify-between gap-6">
		<Logo {tone} />

		<nav aria-label="Main" class="hidden items-center gap-8 md:flex">
			{#each NAV as item (item.href)}
				<a
					href={item.href}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class="relative py-2 text-[0.7rem] font-bold tracking-[0.14em] uppercase transition-opacity hover:opacity-70
						after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-brick after:transition-transform
						{isActive(item.href) ? 'after:scale-x-100' : 'after:scale-x-0'}"
				>
					{item.label}
				</a>
			{/each}
			<Button href="/contact" class="!px-4 !py-2.5">Let’s talk</Button>
		</nav>

		<button
			class="-mr-2 p-2 md:hidden"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<Icon name={open ? 'close' : 'menu'} size={26} />
		</button>
	</div>

	{#if open}
		<nav
			id="mobile-nav"
			aria-label="Main"
			class="border-t md:hidden {tone === 'dark' ? 'border-warm/10' : 'border-line'}"
		>
			<ul class="container-yb flex flex-col py-4">
				{#each NAV as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="display block py-2.5 text-3xl {isActive(item.href) ? 'text-brick' : ''}"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="pt-4"><Button href="/contact" class="w-full">Let’s talk</Button></li>
			</ul>
		</nav>
	{/if}
</header>
