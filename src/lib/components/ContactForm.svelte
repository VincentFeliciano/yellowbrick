<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { BUDGETS, NEEDS, SITE } from '#lib';

	// Set VITE_FORMSPREE_ID in .env (see .env.example) to deliver inquiries to your inbox.
	// Without it, submitting opens the visitor's email app with the inquiry pre-filled.
	const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
	const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined;

	let need = $state('');
	let status = $state<'idle' | 'sending' | 'error'>('idle');

	// Service pages link here with ?need=… so the right option is preselected.
	onMount(() => {
		const requested = new URLSearchParams(window.location.search).get('need');
		if (requested && NEEDS.includes(requested)) need = requested;
	});

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		if (!endpoint) {
			const body = [
				`What do you need? ${data.get('need')}`,
				`Estimated budget: ${data.get('budget')}`,
				`Name: ${data.get('name')}`,
				`Email: ${data.get('email')}`,
				'',
				String(data.get('message'))
			].join('\n');
			window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
				'Project inquiry'
			)}&body=${encodeURIComponent(body)}`;
			return;
		}

		status = 'sending';
		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});
			if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
			await goto(resolve('/thanks'));
		} catch {
			status = 'error';
		}
	}
</script>

<form action={endpoint} method="POST" onsubmit={submit} class="form t-body">
	<label>
		<span class="t-kicker">What do you need?</span>
		<select name="need" required bind:value={need}>
			<option value="" disabled>Choose one</option>
			{#each NEEDS as option (option)}
				<option>{option}</option>
			{/each}
		</select>
	</label>

	<label>
		<span class="t-kicker">Estimated budget</span>
		<select name="budget" required>
			<option value="" disabled selected>Choose one</option>
			{#each BUDGETS as budget (budget)}
				<option>{budget}</option>
			{/each}
		</select>
	</label>

	<label>
		<span class="t-kicker">Your name</span>
		<input name="name" autocomplete="name" required />
	</label>

	<label>
		<span class="t-kicker">Email address</span>
		<input name="email" type="email" autocomplete="email" required />
	</label>

	<label class="wide">
		<span class="t-kicker">Tell us about your project</span>
		<textarea
			name="message"
			rows="3"
			required
			placeholder="What are you hoping to build, and by when?"
		></textarea>
	</label>

	<!-- Spam honeypot: hidden from people, filled in by bots. -->
	<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" />

	<div class="wide">
		<button type="submit" class="btn" disabled={status === 'sending'}>
			{status === 'sending' ? 'Sending…' : 'Send message'}
		</button>
	</div>

	{#if status === 'error'}
		<p role="alert" class="wide t-small">
			Something went wrong sending your message. Please try again, or email us at
			<a href="mailto:{SITE.email}" class="font-semibold underline">{SITE.email}</a>.
		</p>
	{/if}
</form>

<style>
	.form {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--g-m);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: var(--g-s);
	}

	.wide {
		grid-column: 1 / -1;
	}

	select,
	input,
	textarea {
		width: 100%;
		padding: 0.45em 0.7em;
		border: 1px solid #a9adb3;
		background: white;
		font: inherit;
	}

	textarea {
		resize: vertical;
	}

	select:focus,
	input:focus,
	textarea:focus {
		border-color: var(--color-ink);
		outline: 2px solid var(--color-brick);
		outline-offset: 1px;
	}

	@media not ((width >= 900px) and (aspect-ratio >= 5/4)) {
		.form {
			grid-template-columns: 1fr;
		}
	}
</style>
