<script lang="ts">
	import type { Project } from '#lib';

	// Placeholder artwork for demo projects: a simple line drawing of each project type,
	// in the instruction-manual style. Swap for real screenshots once they exist.
	let { kind, class: className = '' }: { kind: Project['kind']; class?: string } = $props();
</script>

<div class="relative aspect-[4/3] overflow-hidden bg-placeholder {className}">
	<svg
		viewBox="0 0 400 300"
		class="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
		fill="none"
		stroke="#111316"
		stroke-width="3"
		stroke-linejoin="round"
		stroke-linecap="round"
		aria-hidden="true"
	>
		{#if kind === 'website'}
			<!-- Browser window with hero, button, and three cards; phone in front. -->
			<rect x="60" y="50" width="250" height="180" rx="6" fill="#F5F2EB" />
			<path d="M60 74h250" />
			<circle cx="76" cy="62" r="3" fill="#111316" /><circle cx="88" cy="62" r="3" fill="#111316" />
			<rect x="80" y="90" width="100" height="10" fill="#111316" stroke="none" />
			<rect x="80" y="106" width="70" height="10" fill="#111316" stroke="none" />
			<rect x="80" y="128" width="44" height="14" fill="#FFC600" />
			<rect x="80" y="160" width="62" height="50" /><rect x="154" y="160" width="62" height="50" />
			<rect x="228" y="160" width="62" height="50" />
			<rect x="270" y="110" width="76" height="140" rx="10" fill="#F5F2EB" />
			<rect x="282" y="132" width="40" height="7" fill="#111316" stroke="none" />
			<rect x="282" y="146" width="52" height="40" />
			<rect x="282" y="196" width="52" height="12" fill="#FFC600" />
			<path d="M300 238h16" />
		{:else if kind === 'dashboard'}
			<!-- Dashboard: KPI tiles, bar chart, and a trend line. -->
			<rect x="50" y="45" width="300" height="210" rx="6" fill="#F5F2EB" />
			<rect x="70" y="65" width="76" height="40" /><rect x="162" y="65" width="76" height="40" />
			<rect x="254" y="65" width="76" height="40" fill="#FFC600" />
			<path d="M80 92h30M172 92h40M264 92h24" />
			<path d="M70 235V125M70 235h140" />
			<rect x="84" y="195" width="18" height="40" fill="#111316" />
			<rect x="112" y="170" width="18" height="65" fill="#111316" />
			<rect x="140" y="150" width="18" height="85" fill="#FFC600" />
			<rect x="168" y="180" width="18" height="55" fill="#111316" />
			<rect x="230" y="125" width="100" height="110" />
			<path d="M240 215l20-25 20 12 20-34 20-10" />
		{:else}
			<!-- Automation: form → process → email + list, connected by arrows. -->
			<rect x="40" y="110" width="80" height="80" rx="6" fill="#F5F2EB" />
			<path d="M56 132h48M56 148h48M56 164h28" />
			<path d="M120 150h38M150 142l8 8-8 8" />
			<circle cx="200" cy="150" r="40" fill="#FFC600" />
			<path d="M200 128v8M200 164v8M178 150h8M214 150h8M185 135l5 5M210 160l5 5M185 165l5-5M210 140l5-5" />
			<circle cx="200" cy="150" r="9" fill="#F5F2EB" />
			<path d="M240 130l40-35M272 95h8v8M240 170l40 35M272 205h8v-8" />
			<rect x="285" y="60" width="80" height="56" rx="4" fill="#F5F2EB" />
			<path d="M285 64l40 28 40-28" />
			<rect x="285" y="180" width="80" height="64" rx="4" fill="#F5F2EB" />
			<path d="M297 198l5 5 9-9M318 199h36M297 222l5 5 9-9M318 223h36" />
		{/if}
	</svg>
</div>
