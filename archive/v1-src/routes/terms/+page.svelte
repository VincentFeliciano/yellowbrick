<script lang="ts">
	import { SITE } from '#lib';
	import LegalPage from '#lib/components/LegalPage.svelte';
</script>

<!-- Starter terms written in plain language. Have them reviewed before launch. -->
<LegalPage title="Terms" updated="November 2026">
	<p>
		These terms cover your use of the {SITE.name} website. Project work is governed by the written
		proposal or agreement for that project.
	</p>

	<h2>Using this website</h2>
	<p>
		You are welcome to browse and share this website. Please don’t copy or reuse our designs, text,
		or images without permission.
	</p>

	<h2>Pricing</h2>
	<p>
		Prices shown on this website are starting points. The final price for any project is set out in
		a written quote before work begins.
	</p>

	<h2>Projects</h2>
	<p>
		Scope, timeline, payment schedule, and ownership of finished work are agreed in writing for
		each project.
	</p>

	<h2>Liability</h2>
	<p>
		We work hard to keep this website accurate and available, but it is provided as is. We are not
		responsible for losses arising from its use.
	</p>

	<h2>Contact</h2>
	<p>Questions? Email <a href="mailto:{SITE.email}">{SITE.email}</a>.</p>
</LegalPage>
