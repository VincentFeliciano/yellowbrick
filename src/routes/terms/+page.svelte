<script lang="ts">
	import { SITE, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
</script>

<svelte:head>
	<title>Terms of use — Yellowbrick</title>
	<meta name="description" content="The terms for using the Yellowbrick website." />
</svelte:head>

<!-- screen4.png: the terms in three columns. -->
<Frame id="top">
	<div class="at stack" style={T4.a}>
		<p class="t-kicker">Terms</p>
		<h1 class="t-title">Terms of use</h1>
		<p class="t-small muted">Last updated November 11, 2026</p>
		<p class="t-body">
			These terms cover your use of this website. Project work is covered by the written proposal
			we agree with you.
		</p>
	</div>

	<div class="at stack gap-l" style={T4.b}>
		<div class="stack gap-s">
			<h2 class="t-kicker">Using this site</h2>
			<p class="t-small">
				You’re welcome to browse, share links, and get in touch. Please don’t copy the site’s
				design, text, or images for your own use without asking.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Prices and quotes</h2>
			<p class="t-small">
				Prices on this site are starting points, not offers. The price, scope, and timeline for
				your project are set in a written proposal before any work begins.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Demo projects</h2>
			<p class="t-small">
				Projects marked as a demo project are demonstrations, made to show how we work. They are
				not client work.
			</p>
		</div>
	</div>

	<div class="at stack gap-l" style={T4.c}>
		<div class="stack gap-s">
			<h2 class="t-kicker">Ownership</h2>
			<p class="t-small">
				Once a project is paid in full, the final files we make for you are yours. The details
				are in your proposal.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">No warranty</h2>
			<p class="t-small">
				We work to keep this site accurate and running, but it’s provided as is. We’re not
				responsible for losses from using it, or for the sites we link to.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Questions</h2>
			<p class="t-small">
				Email <a href="mailto:{SITE.email}" class="underline">{SITE.email}</a>. If these terms
				change, we’ll update the date on this page.
			</p>
		</div>
	</div>
</Frame>
