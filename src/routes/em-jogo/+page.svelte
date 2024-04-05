<script lang="ts">
	import RoundedButton from '$lib/RoundedButton.svelte';
	import SquareButton from '$lib/SquareButton.svelte';
	import { categorys } from '../../utils';
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
		line-height: 58px;
		letter-spacing: 0.08px;
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
</style>
