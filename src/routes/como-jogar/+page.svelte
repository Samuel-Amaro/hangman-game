<script lang="ts">
	import RoundedButton from '$lib/RoundedButton.svelte';
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
			<header class="headerCard">
				<span class="number">01</span>
				<h2>Escolha uma categoria</h2>
			</header>
			<p>
				Primeiro, escolha uma categoria de palavras, como animais ou filmes. O computador então
				seleciona aleatoriamente uma palavra secreta desse tópico e mostra espaços em branco para
				cada letra da palavra.
			</p>
		</li>
		<li>
			<header class="headerCard">
				<span class="number">02</span>
				<h2>Adivinhe as letras</h2>
			</header>
			<p>
				Revezem-se para adivinhar as letras. O computador preenche os espaços em branco relevantes
				se o seu palpite estiver correto. Se estiver errado, você perde um pouco de saúde, que se
				esgota após oito palpites incorretos.
			</p>
		</li>
		<li>
			<header class="headerCard">
				<span class="number">03</span>
				<h2>Ganhar ou perder</h2>
			</header>
			<p>
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
	}

	h1::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		z-index: -1;
		-webkit-text-stroke-width: 8px;
		-webkit-text-stroke-color: var(--color12);
	}

	h1 {
		position: relative;
		margin: 0;
		padding: 0;
		font-size: 48px;
		line-height: 58px;
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
	}

	li:not(:last-child) {
		margin-bottom: 24px;
	}

	.headerCard {
		display: flex;
		align-items: center;
		gap: 16px;
		margin: 0 0 16px 0;
	}

	.number,
	h2 {
		font-size: 25px;
		line-height: 19.2px;
		letter-spacing: 0.8px;
	}

	.number {
		color: var(--blue);
	}

	h2 {
		color: var(--dark-navy);
		text-transform: uppercase;
		font-weight: 400;
	}

	p {
		font-size: 16px;
		line-height: 19.2px;
		letter-spacing: 0.8px;
		color: var(--color14);
	}
</style>
