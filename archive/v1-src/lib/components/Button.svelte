<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'dark' | 'outline-light' | 'outline-dark';

	let {
		href,
		type = 'button',
		variant = 'primary',
		disabled = false,
		class: className = '',
		children
	}: {
		href?: string;
		type?: 'button' | 'submit';
		variant?: Variant;
		disabled?: boolean;
		class?: string;
		children: Snippet;
	} = $props();

	const styles: Record<Variant, string> = {
		primary: 'bg-brick text-charcoal hover:bg-brick-dark',
		dark: 'bg-charcoal text-warm hover:bg-charcoal-soft',
		'outline-light': 'border-2 border-warm/80 text-warm hover:bg-warm hover:text-charcoal',
		'outline-dark': 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-warm'
	};

	const base =
		'inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';
</script>

{#if href}
	<a {href} class="{base} {styles[variant]} {className}">{@render children()}</a>
{:else}
	<button {type} {disabled} class="{base} {styles[variant]} {className}">{@render children()}</button>
{/if}
