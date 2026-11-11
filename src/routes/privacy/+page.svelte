<script lang="ts">
	import { SITE, T4 } from '#lib';
	import Frame from '#lib/components/Frame.svelte';
</script>

<svelte:head>
	<title>Privacy policy — Yellowbrick</title>
	<meta
		name="description"
		content="What Yellowbrick collects when you get in touch, how it’s used, and how to ask for it to be deleted."
	/>
</svelte:head>

<!-- screen4.png: the policy in three columns. -->
<Frame id="top">
	<div class="at stack" style={T4.a}>
		<p class="t-kicker">Privacy</p>
		<h1 class="t-title">Privacy policy</h1>
		<p class="t-small muted">Last updated November 11, 2026</p>
		<p class="t-body">
			We keep this simple. We only collect what you send us, and we only use it to reply and do the
			work.
		</p>
	</div>

	<div class="at stack gap-l" style={T4.b}>
		<div class="stack gap-s">
			<h2 class="t-kicker">What we collect</h2>
			<p class="t-small">
				When you use the contact form or email us, we receive what you include: your name, email
				address, project details, and budget range.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">How we use it</h2>
			<p class="t-small">
				To reply to your inquiry, prepare a quote, and deliver your project. We don’t sell your
				information or use it for advertising.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">How the form works</h2>
			<p class="t-small">
				Messages from the contact form are delivered to our inbox through Formspree, a form
				service. If the form opens your email app instead, your message goes from your email
				provider straight to ours.
			</p>
		</div>
	</div>

	<div class="at stack gap-l" style={T4.c}>
		<div class="stack gap-s">
			<h2 class="t-kicker">Analytics and cookies</h2>
			<p class="t-small">
				We may use Plausible to count visits. It doesn’t use cookies or collect personal
				information. This site has no advertising or tracking cookies.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">How long we keep it</h2>
			<p class="t-small">
				We keep inquiry and project emails for as long as they’re useful for your project and our
				records.
			</p>
		</div>
		<div class="stack gap-s">
			<h2 class="t-kicker">Your choices</h2>
			<p class="t-small">
				Ask us at any time to see, correct, or delete the information we hold about you. Email
				<a href="mailto:{SITE.email}" class="underline">{SITE.email}</a>. If this policy changes,
				we’ll update the date on this page.
			</p>
		</div>
	</div>
</Frame>
