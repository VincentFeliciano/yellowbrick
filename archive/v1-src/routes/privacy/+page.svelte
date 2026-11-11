<script lang="ts">
	import { SITE } from '#lib';
	import LegalPage from '#lib/components/LegalPage.svelte';
</script>

<!-- Starter policy written in plain language. Have it reviewed before launch. -->
<LegalPage title="Privacy policy" updated="November 2026">
	<p>
		This policy explains what information {SITE.name} collects through this website and how it is
		used. We keep it simple: we collect as little as possible and never sell your information.
	</p>

	<h2>What we collect</h2>
	<ul>
		<li>
			<strong>Information you send us.</strong> When you use the contact form or email us, we receive
			your name, email address, and whatever you tell us about your project.
		</li>
		<li>
			<strong>Basic usage statistics.</strong> We may use privacy-friendly analytics that count page
			visits without cookies or personal profiles.
		</li>
	</ul>

	<h2>How we use it</h2>
	<p>
		We use your information only to respond to your inquiry, provide the services you ask for, and
		understand how the website is used so we can improve it.
	</p>

	<h2>Sharing</h2>
	<p>
		We do not sell or rent your information. We share it only with services that help us run the
		website and handle inquiries (such as our form and email providers), and only as needed for
		that purpose.
	</p>

	<h2>Your choices</h2>
	<p>
		You can ask us to see, correct, or delete the information we hold about you at any time by
		emailing <a href="mailto:{SITE.email}">{SITE.email}</a>.
	</p>

	<h2>Contact</h2>
	<p>
		Questions about this policy? Email <a href="mailto:{SITE.email}">{SITE.email}</a>.
	</p>
</LegalPage>
