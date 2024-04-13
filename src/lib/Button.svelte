<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	export let text: string;
	export let secondary = false;
	export let props: HTMLAttributes<HTMLElement> | HTMLAnchorAttributes | undefined = undefined;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<a class="button" class:secondary on:click on:keydown {...props}>
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
		line-height: 120%;
		letter-spacing: 0.8px;
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
