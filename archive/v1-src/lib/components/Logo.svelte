<script lang="ts">
	let {
		tone = 'light',
		showTagline = false,
		class: className = ''
	}: { tone?: 'light' | 'dark'; showTagline?: boolean; class?: string } = $props();
</script>

<!-- Wordmark: "YELLOWBRICK" in Bebas Neue, yellow on dark and charcoal on light per the style guide. -->
<a href="/" class="group inline-flex items-center gap-2.5 {className}" aria-label="Yellowbrick home">
	<img
		src="/brand/brick.svg"
		alt=""
		width="40"
		height="34"
		class="h-8 w-auto transition-transform duration-300 group-hover:-rotate-6"
	/>
	<span class="flex flex-col leading-none">
		<span
			class="font-display text-[1.65rem] tracking-wide {tone === 'dark'
				? 'text-brick'
				: 'text-charcoal'}">Yellowbrick</span
		>
		{#if showTagline}
			<span
				class="mt-0.5 text-[0.6rem] font-semibold tracking-[0.3em] uppercase {tone === 'dark'
					? 'text-warm/70'
					: 'text-muted'}">Design. Build. Make.</span
			>
		{/if}
	</span>
</a>
