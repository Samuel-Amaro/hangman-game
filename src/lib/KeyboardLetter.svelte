<script lang="ts">
	export let letter: string;
	export let disabled = false;
</script>

<button
	type="button"
	title={`Letra ${letter}`}
	aria-label={`Letra ${letter}`}
	on:click|preventDefault
	on:keydown
	class:disabled
	{disabled}>{letter}</button
>

<style>
	button {
		appearance: none;
		font-family: inherit;
		box-sizing: border-box;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		width: 28px;
		height: 56px;
		background-color: white;
		color: var(--dark-navy);
		font-size: 24px;
		line-height: 24px;
		letter-spacing: -0.32px;
		cursor: pointer;
	}

	.disabled,
	button:disabled {
		opacity: 0.25;
		pointer-events: none;
	}

	button:is(:hover, :focus) {
		background-color: var(--blue);
		color: white;
	}

	@media screen and (min-width: 680px) {
		button {
			border-radius: 24px;
			width: 64px;
			height: 84px;
			font-size: 48px;
			line-height: 120%;
			letter-spacing: -0.8px;
		}
	}

	@media screen and (min-width: 950px) {
		button {
			width: 109px;
			height: 84px;
			letter-spacing: 0.8px;
		}
	}
</style>
