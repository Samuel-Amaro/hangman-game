<script lang="ts">
	export let letter: string | undefined = undefined;
</script>

<span data-testid="letter" class:disabled={!letter ? true : false}>
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

	@media screen and (min-width: 680px) {
		span,
		.disabled {
			padding: 0;
			border-radius: 32px;
			font-size: 64px;
			line-height: 120%;
			width: 88px;
			height: 112px;
		}
	}

	@media screen and (min-width: 950px) {
		span,
		.disabled {
			border-radius: 40px;
			font-size: 88px;
			letter-spacing: normal;
			width: 112px;
			height: 128px;
		}
	}
</style>
