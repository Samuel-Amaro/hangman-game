<script lang="ts">
	import LogoMobile from '$lib/icons/LogoMobile.svelte';
	import LogoDesktop from '$lib/icons/LogoDesktop.svelte';
	import Button from '$lib/Button.svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';
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
		<RoundedButton
			as="a"
			variation="play"
			props={{
				href: '/em-jogo',
				title: 'Ir para Jogo',
				rel: 'next',
				'aria-label': 'Ir para Jogo',
				style: 'margin-bottom: 57px'
			}}
		/>
		<Button
			text="Como jogar"
			props={{
				href: '/como-jogar',
				rel: 'next',
				title: 'Visualizar instruções de como Jogar',
				'aria-label': 'Visualizar instruções de como Jogar'
			}}
		/>
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
		display: flex;
		flex-direction: column;
		align-items: center;
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
	.logoDesktop {
		display: flex;
	}

	.logo {
		position: absolute;
		top: -50px;
	}

	.logoDesktop {
		display: none;
	}

	@media screen and (min-width: 500px) {
		.logoMobile {
			display: none;
		}

		.logoDesktop {
			display: block;
		}
	}
</style>
