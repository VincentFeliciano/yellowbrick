<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { BUDGETS, NEEDS, SITE } from '#lib';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';

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
			await goto('/contact/thanks');
		} catch {
			status = 'error';
		}
	}

	const field =
		'w-full border border-line bg-white px-4 py-3 text-sm text-charcoal placeholder:text-steel focus:border-charcoal focus:outline-none';
	const label = 'kicker mb-2 block';
</script>

<form action={endpoint} method="POST" onsubmit={submit} class="space-y-5">
	<div>
		<label for="need" class={label}>What do you need?</label>
		<div class="relative">
			<select id="need" name="need" required bind:value={need} class="{field} appearance-none pr-10">
				<option value="" disabled>Choose one</option>
				{#each NEEDS as option (option)}
					<option>{option}</option>
				{/each}
			</select>
			<Icon
				name="arrow"
				size={16}
				class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 rotate-90"
			/>
		</div>
	</div>

	<fieldset>
		<legend class={label}>Estimated budget</legend>
		<div class="flex flex-wrap gap-2">
			{#each BUDGETS as budget, i (budget)}
				<label class="cursor-pointer">
					<input type="radio" name="budget" value={budget} required={i === 0} class="peer sr-only" />
					<span
						class="inline-block border border-line bg-white px-3.5 py-2 text-sm transition-colors peer-checked:border-charcoal peer-checked:bg-brick peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brick hover:border-charcoal"
						>{budget}</span
					>
				</label>
			{/each}
		</div>
	</fieldset>

	<div class="grid gap-5 sm:grid-cols-2">
		<div>
			<label for="name" class={label}>Your name</label>
			<input id="name" name="name" autocomplete="name" required class={field} />
		</div>
		<div>
			<label for="email" class={label}>Email address</label>
			<input id="email" name="email" type="email" autocomplete="email" required class={field} />
		</div>
	</div>

	<div>
		<label for="message" class={label}>Tell us about your project</label>
		<textarea
			id="message"
			name="message"
			rows="5"
			required
			placeholder="What are you hoping to build, and by when?"
			class={field}
		></textarea>
	</div>

	<!-- Spam honeypot: hidden from people, filled in by bots. -->
	<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" />

	<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
		<Button type="submit" disabled={status === 'sending'}>
			{status === 'sending' ? 'Sending…' : 'Send message'}
			<Icon name="arrow" size={14} />
		</Button>
		<p class="text-xs text-muted">We usually reply within one business day.</p>
	</div>

	{#if status === 'error'}
		<p role="alert" class="border-l-4 border-brick bg-white px-4 py-3 text-sm">
			Something went wrong sending your message. Please try again, or email us at
			<a href="mailto:{SITE.email}" class="font-semibold underline">{SITE.email}</a>.
		</p>
	{/if}
</form>
