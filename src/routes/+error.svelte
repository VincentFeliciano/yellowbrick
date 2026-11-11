<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Any unknown address goes back to the home page.
	onMount(() => {
		goto(resolve('/'), { replaceState: true });
	});
</script>
