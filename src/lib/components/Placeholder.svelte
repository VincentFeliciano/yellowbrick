<script lang="ts">
	import { asset } from '$app/paths';
	// Stand-in for a photo until the real one is ready. `label` says what the photo should show.
	let { label }: { label: string } = $props();
</script>

<div class="placeholder" role="img" aria-label="Placeholder image: {label}">
	<img src={asset('brand/brick.svg')} alt="" width="992" height="836" />
	<span>{label}</span>
</div>

<style>
	.placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--g-m);
		aspect-ratio: 4 / 3;
		padding: var(--g-m);
		overflow: hidden;
		background: var(--color-brick-soft);
		text-align: center;
	}

	img {
		width: min(28%, 7rem);
		opacity: 0.35;
	}

	span {
		font-size: var(--fs-kicker);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #8a7426;
	}

	@media (width >= 900px) and (aspect-ratio >= 5/4) {
		.placeholder {
			height: 100%;
			aspect-ratio: auto;
		}
	}
</style>
