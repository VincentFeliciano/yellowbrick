<script lang="ts">
	import type { Project } from '#lib';
	import ProjectThumb from './ProjectThumb.svelte';

	let { project }: { project: Project } = $props();
</script>

<a href="/work/{project.slug}" class="group block">
	<ProjectThumb kind={project.kind} />
	<h3 class="kicker mt-4 text-charcoal group-hover:underline group-hover:decoration-brick group-hover:decoration-2 group-hover:underline-offset-4">
		{project.title}
	</h3>
	<p class="mt-1 text-sm text-muted">{project.category}</p>
</a>
