<script lang="ts">
	import { alert } from '$lib/stores/data';
	import { fly } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';

	let visible: boolean = true;
	let timeout: ReturnType<typeof setTimeout>;

	const onMessageChange = (config: { message?: string; ms: number } | null) => {
		if (config === null) {
			visible = false;
		} else {
			visible = true;
			if (config.ms > 0) timeout = setTimeout(() => (visible = false), config.ms);
		}
	};

	$: onMessageChange($alert);

	onDestroy(() => clearTimeout(timeout));
</script>

{#if visible}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		role="alert"
		on:click={() => (visible = false)}
		transition:fly={{ delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5 }}
	>
		<span class="button">
			<RoundedButton
				variation="close"
				props={{ type: 'button', title: 'Fechar Alerta', 'aria-label': 'Fechar Alerta' }}
				secondary
				on:click={() => (visible = false)}
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') visible = false;
				}}
			/>
		</span>
		<p>{$alert?.message}</p>
		<div class="bar">
			<span style:animation-duration="{$alert?.ms}ms" class="progress" />
		</div>
	</div>
{/if}

<style>
	div[role='alert'] {
		position: fixed;
		cursor: pointer;
		top: 1.3rem;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		border-radius: 0.2rem;
		background-color: white;
		font-weight: 400;
		margin: 0 1.5rem;
		padding: 0;
		padding: 12px 0 0 0;
		max-width: 350px;
		font-size: 1.4rem;
		z-index: 100;
		border-radius: 4px;
	}

	div p {
		color: var(--dark-navy);
		margin: 0 15px 0 15px;
	}

	.progress {
		content: '';
		display: block;
		background-color: var(--color04);
		height: 3px;
		animation: timer;
		animation-direction: normal;
	}

	.bar {
		background-color: var(--color03);
		height: 3px;
		width: 100%;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		padding: 0 15px;
	}

	@keyframes timer {
		from {
			width: 100%;
		}
		to {
			width: 0%;
		}
	}
</style>
