<script lang="ts">
	import type { Snippet } from 'svelte';

	// One full-screen frame. Position its contents with `.at` and a template from #lib/layout.
	let { id, class: className = '', children }: { id?: string; class?: string; children: Snippet } =
		$props();
</script>

<section {id} class="panel {className}">
	<div class="stage">
		{@render children()}
	</div>
</section>
