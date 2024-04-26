<script lang="ts">
	import Button from '$lib/Button.svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';
	import { onMount } from 'svelte';
	import { alert, visitCounter } from '$lib/stores/data';
	import { page } from '$app/stores';
	import GenerateOgImage from '$lib/GenerateOgImage.svelte';

	onMount(() => {
		if ($visitCounter === 0) {
			$alert = { message: 'Bem-vindo ao Jogo da Forca.', ms: 8000 };
		}

		return () => {
			$alert = null;
		};
	});
</script>

<svelte:head>
	<title>O Jogo Da Forca</title>
	<meta
		name="description"
		content="O jogo da forca oferece uma experiência envolvente e educativa, onde os usuários podem desfrutar de desafios de palavras enquanto aprimoram suas habilidades linguísticas. Com uma interface intuitiva e recursos bem projetados, proporciona uma experiência de jogo fluida e imersiva."
	/>
	<meta name="keywords" content="Jogo, Hangman Game, Jogo Forca, Forca Game" />
	<meta property="og:title" content="O Jogo Da Forca" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="O jogo da forca oferece uma experiência envolvente e educativa, onde os usuários podem desfrutar de desafios de palavras enquanto aprimoram suas habilidades linguísticas."
	/>
	<meta property="og:url" content={$page.url.href} />
	<GenerateOgImage title="O Jogo Da Forca" path={$page.url.href} />
</svelte:head>

<div class="wrapper">
	<div class="menu">
		<picture class="logo">
			<source
				srcset="/assets/images/logo-mobile.svg"
				media="(max-width: 1249px)"
				type="image/svg+xml"
			/>
			<source srcset="/assets/images/logo.svg" media="(min-width: 1250px)" type="image/svg+xml" />
			<img src="/assets/images/logo.svg" alt="" />
		</picture>
		<RoundedButton
			as="a"
			variation="play"
			props={{
				href: '/em-jogo',
				title: 'Ir para Jogo',
				rel: 'next',
				'aria-label': 'Ir para Jogo'
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
		max-width: 592px;
		width: 100%;
		border-radius: 48px;
		padding: 138px 31px 64px 30px;
		position: relative;
		box-shadow:
			inset 0 -8px var(--color02),
			inset 0 6px var(--blue);
		gap: 57px;
	}

	.logo {
		position: absolute;
		top: -50px;
	}

	@media screen and (min-width: 680px) {
		.wrapper {
			padding: 0;
		}

		.menu {
			border-radius: 72px;
			padding: 129px 0 51px 0;
			box-shadow:
				inset 0 -8px 0 4px var(--color02),
				inset 0 6px 0 8px var(--blue);
			gap: 58px;
		}

		.logo {
			position: absolute;	
		}
	}

	@media screen and (min-width: 1250px) {
		.logo {
			top: -110px;
		}
	}
</style>
