<script lang="ts">
	import type { HTMLAttributes, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import PlayMobile from '$lib/icons/PlayMobile.svelte';
	import PlayDesktop from '$lib/icons/PlayDesktop.svelte';
	import BackSmall from '$lib/icons/BackSmall.svelte';
	import BackMedium from '$lib/icons/BackMedium.svelte';
	import BackLarge from '$lib/icons/BackLarge.svelte';
	import MenuSmall from '$lib/icons/MenuSmall.svelte';
	import MenuMedium from '$lib/icons/MenuMedium.svelte';
	import MenuLarge from '$lib/icons/MenuLarge.svelte';

	export let as: 'a' | 'button' = 'button';
	export let variation: 'play' | 'back' | 'menu';
	export let props:
		| HTMLAnchorAttributes
		| HTMLButtonAttributes
		| HTMLAttributes<HTMLElement>
		| undefined = undefined;
	export let secondary = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element this={as} class="button" class:secondary on:click on:keydown {...props}>
	{#if variation === 'play'}
		<span class="playMobile"><PlayMobile /></span>
		<span class="playDesktop"><PlayDesktop /></span>
	{:else if variation === 'back'}
		<span class="backSmall"><BackSmall /></span>
		<span class="backMedium"><BackMedium /></span>
		<span class="backLarge"><BackLarge /></span>
	{:else if variation === 'menu'}
		<span class="menuSmall"><MenuSmall /></span>
		<span class="menuMedium"><MenuMedium /></span>
		<span class="menuLarge"><MenuLarge /></span>
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

	.playDesktop,
	.backMedium,
	.backLarge,
	.menuMedium,
	.menuLarge {
		display: none;
	}

	.playMobile,
	.backSmall,
	.menuSmall {
		display: flex;
	}

	@media screen and (min-width: 500px) {
		.playMobile,
		.backSmall,
		.menuSmall {
			display: none;
		}

		.playDesktop,
		.backMedium,
		.menuMedium {
			display: flex;
		}
	}

	@media screen and (min-width: 900px) {
		.backMedium,
		.backSmall,
		.menuMedium {
			display: none;
		}

		.backLarge,
		.menuLarge {
			display: flex;
		}
	}
</style>
