<script lang="ts">
	import Icon from './Icon.svelte';

	let {
		title,
		link,
		linkLabel
	}: { title: string; link?: string; linkLabel?: string } = $props();
</script>

<div class="flex items-end justify-between gap-4">
	<h2 class="display text-3xl sm:text-4xl">{title}</h2>
	{#if link && linkLabel}
		<a
			href={link}
			class="kicker group inline-flex shrink-0 items-center gap-1.5 text-muted hover:text-charcoal"
		>
			{linkLabel}
			<Icon name="arrow" size={14} class="transition-transform group-hover:translate-x-1" />
		</a>
	{/if}
</div>
