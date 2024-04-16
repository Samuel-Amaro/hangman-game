<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;

	let dialogEl: HTMLDialogElement;

	onMount(() => {
		dialogEl.showModal();
	});
</script>

<svelte:window
	on:keydown={(e) => {
		let flag = false;

		if (e.code === 'Escape' || e.code === 'Esc') {
			flag = true;
		}

		if (flag) {
			e.stopPropagation();
			e.preventDefault();
		}
	}}
/>

<dialog bind:this={dialogEl}>
	<div>
		<h3 data-text={title}>{title}</h3>
		<nav>
			<slot name="buttons" />
		</nav>
	</div>
</dialog>

<style>
	dialog {
		background-color: transparent;
		border: none;
		margin: 0;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: auto;
	}

	div {
		background: linear-gradient(var(--linear) 0%, var(--color01) 100%);
		box-shadow:
			inset 0 -8px 0 4px var(--color02),
			inset 0 6px 0 8px var(--blue);
		border-radius: 48px;
		padding: 0 23px 87px 26px;
		margin: auto 0;
		z-index: -1;
	}

	dialog::backdrop {
		background: linear-gradient(var(--color15) 0%, var(--color16) 50%, var(--color17) 100%);
		opacity: 0.75;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 34px;
	}

	h3::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		z-index: -1;
		-webkit-text-stroke-width: 15px;
		-webkit-text-stroke-color: var(--color12);
		top: 0;
		text-align: center;
	}

	h3 {
		position: relative;
		top: -52px;
		margin: 0;
		padding: 0;
		font-size: 94px;
		line-height: 120%;
		letter-spacing: -0.8px;
		font-weight: 400;
		background: linear-gradient(var(--color13), white);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}

	@media screen and (min-width: 680px) {
		div {
			border-radius: 72px;
			padding: 0 0 71px 0;
			min-width: 592px;
		}

		h3::after {
			width: 100%;
			-webkit-text-stroke-width: 15px;
		}

		h3 {
			top: -89px;
			font-size: 134px;
		}

		nav {
			max-width: 290px;
			margin: 0 auto;
		}
	}
</style>
