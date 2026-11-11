<script lang="ts">
	import { PROCESS } from '#lib';
	import Icon from './Icon.svelte';

	let { detailed = false }: { detailed?: boolean } = $props();
</script>

<!-- Yellow numbered stops on a line, like the "How it works" strip in the blueprint. -->
<ol class="relative grid gap-8 sm:grid-cols-5 sm:gap-4">
	<span
		class="absolute top-6 right-[10%] left-[10%] hidden h-0.5 bg-charcoal/80 sm:block"
		aria-hidden="true"
	></span>
	{#each PROCESS as step (step.number)}
		<li class="relative flex gap-4 sm:flex-col sm:items-center sm:text-center">
			<span
				class="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-2 border-charcoal bg-brick"
			>
				<Icon name={step.icon} size={22} />
			</span>
			<div>
				<h3 class="kicker sm:mt-4">{step.number} {step.title}</h3>
				<p class="mt-1.5 text-sm text-muted">{detailed ? step.detail : step.short}</p>
			</div>
		</li>
	{/each}
</ol>
