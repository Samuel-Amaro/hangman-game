<script lang="ts">
	import { page } from '$app/stores';
	import GenerateOgImage from '$lib/GenerateOgImage.svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';
	import { alert } from '$lib/stores/data';
	import { onMount } from 'svelte';

	onMount(() => {
		$alert = { message: 'Você possui 8 tentativas para adivinhar um nome, divirta-se!', ms: 5000 };

		return () => {
			$alert = null;
		};
	});
</script>

<svelte:head>
	<title>Instruções de Como Jogar</title>
	<meta
		name="description"
		content="Desafie-se a adivinhar palavras secretas em diferentes categorias! Teste suas habilidades em um jogo divertido onde você e o computador alternam para adivinhar letras. Ganhe ao descobrir a palavra secreta antes de perder sua saúde após oito palpites incorretos. Escolha entre diversas categorias, como animais ou filmes, e mergulhe nesta emocionante competição de palavras!"
	/>
	<meta
		name="keywords"
		content="Jogo de palavras, Adivinhação de letras, Categoria de palavras, Desafio mental, Diversão interativa, Palavra secreta, Competição de palavras, Estratégia de adivinhação, Saúde do jogador, Entretenimento educativo, Jogo de letras, Aprendizado divertido, Palavras-chave, Exercício cognitivo, Quebra-cabeças de palavras"
	/>
	<meta property="og:title" content="Instruções de Como Jogar" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Desafie-se a adivinhar palavras secretas em diferentes categorias! Teste suas habilidades em um jogo divertido onde você e o computador alternam para adivinhar letras."
	/>
	<meta property="og:url" content={$page.url.href} />
	<GenerateOgImage title="Instruções de Como Jogar" path={$page.url.href} />
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
	<h1 data-text="Como Jogar">Como jogar</h1>
</header>
<main>
	<ul>
		<li>
			<span class="number">01</span>
			<h2 class="title">Escolha uma categoria</h2>
			<p class="text">
				Primeiro, escolha uma categoria de palavras, como animais ou filmes. O computador então
				seleciona aleatoriamente uma palavra secreta desse tópico e mostra espaços em branco para
				cada letra da palavra.
			</p>
		</li>
		<li>
			<span class="number">02</span>
			<h2 class="title">Adivinhe as letras</h2>
			<p class="text">
				Revezem-se para adivinhar as letras. O computador preenche os espaços em branco relevantes
				se o seu palpite estiver correto. Se estiver errado, você perde um pouco de saúde, que se
				esgota após oito palpites incorretos.
			</p>
		</li>
		<li>
			<span class="number">03</span>
			<h2 class="title">Ganhar ou perder</h2>
			<p class="text">
				Você ganha adivinhando todas as letras da palavra antes que sua saúde acabe. Se a barra de
				saúde esvaziar antes de você adivinhar a palavra, você perde.
			</p>
		</li>
	</ul>
</main>

<style>
	.header {
		padding: 32px 26px 0 25px;
		margin-bottom: 79px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row wrap;
		gap: 10px;
	}

	h1::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		z-index: -1;
		top: 0;
		-webkit-text-stroke-width: 8px;
		-webkit-text-stroke-color: var(--color12);
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
		padding: 0 26px 59px 25px;
	}

	ul {
		list-style-type: none;
	}

	li {
		background-color: white;
		padding: 32px;
		border-radius: 20px;
		display: grid;
		grid-template-columns: minmax(auto, min-content) minmax(auto, 1fr);
		grid-template-areas:
			'a b'
			'c c';
		gap: 16px;
		justify-content: flex-start;
	}

	li:not(:last-child) {
		margin-bottom: 24px;
	}

	.number,
	h2 {
		font-size: 24px;
		line-height: 120%;
		letter-spacing: 0.8px;
	}

	.number {
		color: var(--blue);
		grid-area: a;
	}

	h2 {
		color: var(--dark-navy);
		text-transform: uppercase;
		font-weight: 400;
		grid-area: b;
	}

	p {
		font-size: 16px;
		line-height: 120%;
		letter-spacing: 0.8px;
		color: var(--color14);
		grid-area: c;
	}

	@media screen and (min-width: 680px) {
		.header {
			padding: 61px 48px 0 40px;
			margin-bottom: 100px;
			justify-content: flex-start;
		}

		h1::after {
			-webkit-text-stroke-width: 14px;
			width: 100%;
			text-align: center;
		}

		h1 {
			font-size: 104px;
			letter-spacing: -0.8px;
			flex: 0 0 calc(100% - 74px);
			text-align: center;
		}

		main {
			padding: 0 48px 98px 40px;
		}

		li {
			padding: 32px 40px;
			border-radius: 40px;
			grid-template-areas:
				'a b'
				'a c';
			gap: 16px 40px;
			align-items: center;
		}

		li:not(:last-child) {
			margin-bottom: 32px;
		}

		.number {
			font-size: 88px;
			line-height: 120%;
			letter-spacing: normal;
		}

		h2 {
			font-size: 40px;
		}

		p {
			font-size: 20px;
		}
	}

	@media screen and (min-width: 950px) {
		h1::after {
			-webkit-text-stroke-width: 16px;
		}

		h1 {
			font-size: 136px;
			flex: 0 0 calc(100% - 104px);
		}

		.header {
			padding: 80px 48px 0 40px;
		}

		main {
			padding: 0 48px 167px 40px;
		}

		ul {
			display: flex;
			flex-flow: row wrap;
			gap: 32px;
		}

		li:not(:last-child) {
			margin-bottom: 0px;
		}

		li {
			padding: 0;
			display: flex;
			flex-flow: column wrap;
			gap: 40px;
			align-items: center;
			justify-content: flex-start;
			flex: 0 0 384px;
			height: 550px;
			padding: 59px 17px;
		}

		h2 {
			font-size: 48px;
			text-align: center;
		}

		p {
			font-size: 26px;
			text-align: center;
		}
	}

	@media screen and (min-width: 1250px) {
		.header {
			padding: 80px 0 0 0;
			max-width: 1216px;
			margin-bottom: 0px;
			margin: 0 auto 64px auto;
		}

		main {
			padding: 0;
			max-width: 1216px;
			margin-bottom: 0px;
			margin: 0 auto 167px auto;
		}
	}
</style>
