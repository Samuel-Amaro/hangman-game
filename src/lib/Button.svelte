<script lang="ts">
	export let text: string;
	export let secondary = false;
	export let route: string | undefined = undefined;
</script>

<a href={route} class="button" class:secondary on:click on:keydown>
	{text}
</a>

<style>
	.button {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 40px;
		padding: 12px 64px;
		font-size: 32px;
		text-transform: uppercase;
		cursor: pointer;
		color: white;
		background: linear-gradient(var(--blue) 0%, var(--blue) 100%);
		box-shadow:
			inset 0 -2px 0 3px var(--color02),
			inset 0 1px 0 6px var(--color08);
	}

	.button:is(:hover, :focus) {
		background-color: var(--color07);
		background-blend-mode: color;
	}

	.secondary {
		background: linear-gradient(var(--color03) 0%, var(--color04) 100%);
		box-shadow:
			inset 0 -2px 0 3px var(--color02),
			inset 0 1px 0 6px var(--color09);
	}

	.secondary:is(:hover, :focus) {
		background-color: var(--color07);
		background-blend-mode: color;
	}
</style>
