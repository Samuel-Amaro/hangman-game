<script lang="ts">
	import { page } from '$app/stores';
	import GenerateOgImage from '$lib/GenerateOgImage.svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';
	import SquareButton from '$lib/SquareButton.svelte';
	import { categorys } from '$lib/utils/index';
</script>

<svelte:head>
	<title>Escolha uma categoria</title>
	<meta
		name="description"
		content="Escolha sua categoria favorita e desafie seus conhecimentos com o clássico jogo da forca! Explore uma variedade de temas e divirta-se enquanto testa suas habilidades de adivinhação. Desde palavras comuns até desafios específicos, há uma categoria para todos os gostos. Prepare-se para horas de diversão e aprendizado enquanto joga o jogo da forca online. Descubra novas palavras e desafie seus amigos neste emocionante passatempo!"
	/>
	<meta
		name="keywords"
		content="Jogo da Forca, Categoria, Palavras, Adivinhação, Diversão, Desafio, Passatempo, Entretenimento, Jogos online, Habilidades, Conhecimentos, Palavras comuns, Temas variados, Aprendizado, Amigos"
	/>
	<meta property="og:title" content="Escolha uma categoria" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Escolha sua categoria favorita e desafie seus conhecimentos com o clássico jogo da forca! Explore uma variedade de temas e divirta-se enquanto testa suas habilidades de adivinhação."
	/>
	<meta property="og:url" content={$page.url.href} />
	<GenerateOgImage title="Escolha uma categoria" path={$page.url.href} />
</svelte:head>

<header class="header">
	<RoundedButton
		variation="back"
		as="a"
		props={{
			title: 'Voltar para o menu principal',
			href: '/',
			'aria-label': 'Voltar para o menu principal'
		}}
		secondary
	/>
	<h1 data-text="Escolha uma categoria">Escolha uma categoria</h1>
</header>
<main>
	<ul>
		{#each categorys as category}
			<li>
				<SquareButton props={{ href: `/em-jogo/${category.route}` }} text={category.label} />
			</li>
		{/each}
	</ul>
</main>

<style>
	header {
		padding: 32px 26px 0 25px;
		margin-bottom: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5px;
		flex-flow: row wrap;
	}

	h1::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		z-index: -1;
		-webkit-text-stroke-width: 8px;
		-webkit-text-stroke-color: var(--color12);
		top: 0;
	}

	h1 {
		position: relative;
		margin: 0;
		padding: 0;
		font-size: 48px;
		line-height: 120%;
		letter-spacing: 0.8px;
		font-weight: 400;
		text-transform: uppercase;
		background: linear-gradient(var(--color13), white);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	main {
		padding: 0 26px 80px 25px;
	}

	ul {
		list-style: none;
	}

	li:not(:last-child) {
		margin-bottom: 32px;
	}

	@media screen and (min-width: 680px) {
		header {
			padding: 61px 48px 0 40px;
			margin-bottom: 114px;
			justify-content: flex-start;
		}

		h1::after {
			-webkit-text-stroke-width: 14px;
			text-align: center;
			width: 100%;
		}

		h1 {
			font-size: 104px;
			letter-spacing: -0.8px;
			flex: 0 0 calc(100% - 74px);
			text-align: center;
		}

		main {
			padding: 0 48px 112px 40px;
		}

		ul {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			gap: 32px;
			justify-content: center;
		}

		li:not(:last-child) {
			margin-bottom: 0px;
		}
	}
</style>
