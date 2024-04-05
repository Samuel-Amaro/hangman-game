<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	export let props: HTMLAttributes<HTMLElement> | HTMLAnchorAttributes | undefined = undefined;
	export let text: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...props}>
	{text}
</a>

<style>
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-radius: 20px;
		padding: 24px 0;
		font-size: 24px;
		line-height: 19.2px;
		letter-spacing: 0.08px;
		font-weight: 400;
		color: white;
		box-shadow:
			0 -2px 0 3px var(--color08),
			0 1px 0 6px var(--color02);
		text-align: center;
		background: linear-gradient(var(--blue), var(--blue));
	}

	a:is(:hover, :focus) {
		background-color: var(--color07);
		background-blend-mode: color;
	}
</style>
