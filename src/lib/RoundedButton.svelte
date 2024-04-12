<script lang="ts">
	import type { HTMLAttributes, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export let as: 'a' | 'button' = 'button';
	export let variation: 'play' | 'back' | 'menu' | 'close';
	export let props:
		| HTMLAnchorAttributes
		| HTMLButtonAttributes
		| HTMLAttributes<HTMLElement>
		| undefined = undefined;
	export let secondary = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	class="button"
	class:secondary
	on:click
	on:keydown
	{...props}
	class:close={variation === 'close'}
>
	{#if variation === 'play'}
		<picture class="icon">
			<source
				srcset="/assets/images/play-mobile.svg"
				media="(max-width: 600px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/icon-play.svg"
				media="(min-width: 600px)"
				type="image/svg+xml"
			/>
			<img src="/assets/images/icon-play.svg" alt="" />
		</picture>
	{:else if variation === 'back'}
		<picture class="icon">
			<source
				srcset="/assets/images/back-mobile.svg"
				media="(min-width: 0px) and (max-width: 400px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/back-tablet.svg"
				media="(min-width: 400px) and (max-width: 900px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/icon-back.svg"
				media="(min-width: 900px)"
				type="image/svg+xml"
			/>
			<img src="/assets/images/icon-back.svg" alt="" />
		</picture>
	{:else if variation === 'menu'}
		<picture class="icon">
			<source
				srcset="/assets/images/menu-mobile.svg"
				media="(min-width: 0px) and (max-width: 400px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/menu-tablet.svg"
				media="(min-width: 400px) and (max-width: 900px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/icon-menu.svg"
				media="(min-width: 900px)"
				type="image/svg+xml"
			/>
			<img src="/assets/images/icon-menu.svg" alt="" />
		</picture>
	{:else if variation === 'close'}
		&Chi;
	{/if}
</svelte:element>

<style>
	button {
		appearance: none;
		box-sizing: border-box;
		font-family: inherit;
		border: none;
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	a,
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160px;
		height: 160px;
		background: linear-gradient(var(--color03) 0%, var(--color04) 100%);
		border-radius: 50%;
		box-shadow:
			inset 0 -4px 0 5px var(--color05),
			inset 0 -12px 0 11px var(--color06);
	}

	a:is(:hover, :focus),
	button:is(:hover, :focus) {
		background-color: var(--color07);
		background-blend-mode: color;
		box-shadow:
			inset 0 -4px 0 0px var(--color05),
			inset 0 -12px 0 0px var(--color06);
	}

	.secondary {
		width: 40px;
		height: 40px;
		background: linear-gradient(var(--color10) 0%, var(--color04) 100%);
		box-shadow: inset 0 -5px 0 -1px var(--color11);
	}

	.secondary:is(:hover, :focus) {
		box-shadow: inset 0 -5px 0 -1px var(--color11);
	}

	.icon {
		display: flex;
	}

	.close {
		color: white;
		font-size: 16px;
		line-height: 120%;
		letter-spacing: 0.8px;
		width: 25px;
		height: 25px;
	}
</style>
