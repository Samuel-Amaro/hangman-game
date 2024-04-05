<script lang="ts">
	export let letter: string | undefined = undefined;
</script>

<span class:disabled={!letter ? true : false}>
	{#if letter}
		{letter}
	{/if}
</span>

<style>
	span,
	.disabled {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 9px 12.5px;
		border-radius: 12px;
		font-size: 40px;
		line-height: 19.2px;
		letter-spacing: 0.8px;
		width: 40px;
		height: 66px;
		text-transform: uppercase;
	}

	span {
		background-color: var(--blue);
		color: white;
		box-shadow:
			inset 0 -2px 0 3px var(--color02),
			inset 0 1px 0 6px var(--color08);
	}

	.disabled {
		opacity: 0.25;
	}
</style>
