<script lang="ts" module>
	// Simple 24px line icons in the bold, minimal style from the brand guide.
	const PATHS = {
		pen: 'M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20zM14 7l3 3',
		browser: 'M3 5h18v14H3zM3 9h18M6.5 7h.01M9 7h.01',
		chart: 'M3 17l5.5-5.5 4 4L21 7M15 7h6v6',
		cube: 'M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5zM12 12l8.5-4.75M12 12v9.5M12 12L3.5 7.25',
		search: 'M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM15.5 15.5L21 21',
		clipboard: 'M8 4h8v3H8zM6 5.5H5v15h14v-15h-1M8.5 12l2 2 4-4',
		compass: 'M12 3l3.5 18L12 17l-3.5 4zM6 11h12',
		wrench: 'M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2zM4 4l4 4M3 7l3-3',
		rocket: 'M5 19l3-1 8-8a5 5 0 0 0 3-6 5 5 0 0 0-6 3l-8 8-1 3zM9 11l4 4M14.5 9.5h.01M4 14l3 3',
		mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
		phone: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z',
		pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
		arrow: 'M5 12h14M13 6l6 6-6 6',
		'arrow-up-right': 'M7 17L17 7M8 7h9v9',
		check: 'M4 12.5l5 5L20 6.5',
		menu: 'M3 7h18M3 12h18M3 17h18',
		close: 'M5 5l14 14M19 5L5 19',
		download: 'M12 3v12M7 10l5 5 5-5M4 20h16',
		instagram:
			'M4 4h16v16H4zM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM17 7h.01',
		linkedin: 'M4 9h3.5v11H4zM5.75 4.5h.01M10.5 9H14v1.5a3.5 3.5 0 0 1 6 2.5v7h-3.5v-6a1.75 1.75 0 0 0-3.5 0v6h-3.5z',
		github:
			'M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.1 5.4 2.4 5.4 2.4a4.4 4.4 0 0 0-.1 3.3A4.8 4.8 0 0 0 4 9c0 4.8 3 5.9 5.8 6.2A3 3 0 0 0 9 17.5V21'
	} as const;

	export type IconName = keyof typeof PATHS;
</script>

<script lang="ts">
	let {
		name,
		size = 24,
		stroke = 2,
		class: className = ''
	}: { name: IconName; size?: number; stroke?: number; class?: string } = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d={PATHS[name]} />
</svg>
