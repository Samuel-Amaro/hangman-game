<script lang="ts">
	import LogoMobile from '$lib/icons/LogoMobile.svelte';
	import LogoDesktop from '$lib/icons/LogoDesktop.svelte';
	import PlayMobile from '$lib/icons/PlayMobile.svelte';
	import PlayDesktop from '$lib/icons/PlayDesktop.svelte';
	import Button from '$lib/Button.svelte';
</script>

<svelte:head>
	<title>O Jogo Da Forca</title>
	<meta
		name="description"
		content="O jogo da forca oferece uma experiência envolvente e educativa, onde os usuários podem desfrutar de desafios de palavras enquanto aprimoram suas habilidades linguísticas. Com uma interface intuitiva e recursos bem projetados, proporciona uma experiência de jogo fluida e imersiva."
	/>
	<meta name="keywords" content="Jogo, Hangman Game, Jogo Forca, Forca Game" />
</svelte:head>

<div class="wrapper">
	<div class="menu">
		<div class="logo">
			<span class="logoMobile"><LogoMobile /></span>
			<span class="logoDesktop"><LogoDesktop /></span>
		</div>
		<a href="#" rel="next" title="Jogar" aria-label="Jogar" class="play">
			<span class="playMobile"><PlayMobile /></span>
			<span class="playDesktop"><PlayDesktop /></span>
		</a>
		<Button route="#" text="Como jogar" />
	</div>
</div>

<style>
	.wrapper {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 25px 0 26px;
	}

	.menu {
		background: linear-gradient(var(--linear) 0%, var(--color01) 100%);
		min-width: 324px;
		border-radius: 48px;
		padding: 138px 31px 64px 30px;
		position: relative;
		box-shadow:
			inset 0 -8px var(--color02),
			inset 0 6px var(--blue);
	}

	.logoMobile,
	.logoDesktop,
	.playMobile,
	.playDesktop {
		display: flex;
	}

	.logo {
		position: absolute;
		top: -50px;
	}

	.logoDesktop,
	.playDesktop {
		display: none;
	}

	.play {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 160px;
		height: 160px;
		margin: 0 auto 57px auto;
		background: linear-gradient(var(--color03) 0%, var(--color04) 100%);
		border-radius: 50%;
		box-shadow:
			inset 0 -4px 0 5px var(--color05),
			inset 0 -12px 0 11px var(--color06);
	}

	.play:is(:hover, :focus) {
		background-color: var(--color07);
		background-blend-mode: color;
		box-shadow:
			inset 0 -4px 0 0px var(--color05),
			inset 0 -12px 0 0px var(--color06);
	}

	@media screen and (min-width: 500px) {
		.logoMobile,
		.playMobile {
			display: none;
		}

		.logoDesktop,
		.playDesktop {
			display: block;
		}
	}
</style>
