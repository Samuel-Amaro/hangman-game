<script lang="ts">
	import RoundedButton from '$lib/RoundedButton.svelte';
	import type { PageData } from './$types';
	import ProgressBar from '$lib/ProgressBar.svelte';
	import { alphabet, randomIdx } from '$lib/utils/index';
	import { onDestroy } from 'svelte';
	import { alert, datas } from '$lib/stores/data';
	import type { Category, Letter } from '$types';
	import PlayableLetter from '$lib/PlayableLetter.svelte';
	import KeyboardLetter from '$lib/KeyboardLetter.svelte';
	import Menu from '$lib/Menu.svelte';
	import Button from '$lib/Button.svelte';
	import { page } from '$app/stores';
	import GenerateOgImage from '$lib/GenerateOgImage.svelte';

	export let data: PageData;

	let letterSelecteds = alphabet.map((al, i) => {
		return { id: i + 1, text: al, selected: false };
	});
	let healthMeter: number = 8;
	let wrongGuessCounter: number = 0;
	let showMenuPause: boolean = false;
	let showMenuWinner: boolean = false;
	let showMenuLoser: boolean = false;

	$: name = getName(data.category as Category) as string;
	$: splitName = name.split(' ');

	function getRandomName(category: number | Category) {
		if (typeof category === 'number') {
			const namesNotSelecteds = $datas[category].names.filter((c) => !c.selected);
			const idxRandomName = randomIdx(namesNotSelecteds.length - 1);
			$datas[category].names = $datas[category].names.map((n) => {
				if (n.name.toLowerCase() === namesNotSelecteds[idxRandomName].name.toLowerCase()) {
					return {
						...n,
						selected: true
					};
				}
				return n;
			});
			return namesNotSelecteds[idxRandomName];
		} else {
			const namesNotSelecteds = category.names.filter((c) => !c.selected);
			const idxRandomName = randomIdx(namesNotSelecteds.length - 1);
			category.names = category.names.map((n, i) => {
				if (n.name.toLowerCase() === namesNotSelecteds[idxRandomName].name.toLowerCase()) {
					return {
						...n,
						selected: true
					};
				}
				return n;
			});
			datas.update((d) => [...d, category]);
			return namesNotSelecteds[idxRandomName];
		}
	}

	function getName(category: Category) {
		const findIdxCat = $datas.findIndex((cat) => cat.id === category.id);
		if (findIdxCat > -1) {
			const idxCategory = $datas.findIndex((c) => c.id === category.id);
			if (idxCategory > -1) {
				return getRandomName(idxCategory).name;
			}
		} else {
			return getRandomName(category).name;
		}
	}

	onDestroy(() => {
		$alert = null;
	});

	function selectLetter(idLetter: number) {
		letterSelecteds = letterSelecteds.map((letter) => {
			if (letter.id === idLetter) {
				return {
					...letter,
					selected: true
				};
			}
			return letter;
		});
	}

	function letterIsVisible(letter: string, letterSelecteds: Letter[]) {
		return letterSelecteds
			.filter((letSel) => letSel.selected)
			.map((letSel) => letSel.text)
			.includes(letter.toUpperCase());
	}

	function checkLetter(splitName: string[], letter: string) {
		const joinedLetters: string[] = [];
		splitName.forEach((word) => {
			word.split('').filter((w) => {
				if (![':', '.', '-'].includes(w)) {
					joinedLetters.push(w.toUpperCase());
					return true;
				}
				return false;
			});
		});
		const letterFiltered = joinedLetters.filter((ltrs) => ltrs === letter);
		if (letterFiltered.length === 0) {
			wrongGuessCounter += 1;
			healthMeter -= 1;
		}
		if (wrongGuessCounter <= 8) {
			showMenuLoser = true;
			showMenuPause = false;
			showMenuWinner = false;
		}
	}

	function checkPlayerWon(splitName: string[], letterSelecteds: Letter[]) {
		const joinedLetters: string[] = [];
		splitName.forEach((word) => {
			word.split('').filter((w) => {
				if (![':', '.', '-'].includes(w)) {
					joinedLetters.push(w.toUpperCase());
					return true;
				}
				return false;
			});
		});
		const filteredLetterSelecteds = letterSelecteds.filter((ltrs) => ltrs.selected);
		const letterFounds = joinedLetters.filter((ltrs) => {
			const fls = filteredLetterSelecteds.map((fls) => fls.text).filter((lf) => lf === ltrs);
			return fls.length > 0 ? true : false;
		});
		if (wrongGuessCounter < 8) {
			showMenuWinner = letterFounds.length === joinedLetters.length ? true : false;
			showMenuLoser = false;
			showMenuPause = false;
		}
	}

	function handleClickLetter(data: Letter) {
		selectLetter(data.id);
		checkLetter(splitName, data.text);
		checkPlayerWon(splitName, letterSelecteds);
	}

	function handleKeydownLetter(e: KeyboardEvent, data: Letter) {
		if (e.key === 'Enter' || e.key === ' ') {
			selectLetter(data.id);
			checkLetter(splitName, data.text);
			checkPlayerWon(splitName, letterSelecteds);
		}
	}

	$: if (healthMeter < 8 && healthMeter >= 1) {
		$alert = { message: `Você perdeu uma tentativa, possui: ${healthMeter}`, ms: 4000 };
	}
</script>

<svelte:head>
	<title>Em Jogo categoria {data.title?.toLowerCase()}</title>
	<meta
		name="description"
		content="Desafie sua mente com nosso emocionante jogo da forca online! Teste suas habilidades de adivinhação enquanto desvenda palavras e frases. Divirta-se sozinho ou desafie amigos para ver quem é o mestre da forca. Jogue agora gratuitamente!"
	/>
	<meta
		name="keywords"
		content="Jogo da forca, Palavras cruzadas, Jogos de palavras, Desafio mental, Adivinhação de palavras, Passatempo educativo, Entretenimento cerebral, Diversão com palavras, Desafio de vocabulário, Jogos online gratuitos"
	/>
	<meta property="og:title" content={`Em Jogo categoria ${data.title?.toLowerCase()}`} />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Desafie sua mente com nosso emocionante jogo da forca online! Teste suas habilidades de adivinhação enquanto desvenda palavras e frases."
	/>
	<meta property="og:url" content={$page.url.href} />
	<GenerateOgImage title={`Em Jogo categoria ${data.title?.toLowerCase()}`} path={$page.url.href} />
</svelte:head>

<header>
	<div class="wrapper">
		<RoundedButton
			as="button"
			variation="menu"
			secondary
			props={{ type: 'button', title: 'Abrir Menu', 'aria-label': 'Abrir Menu' }}
			on:click={() => (showMenuPause = true)}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') showMenuPause = true;
			}}
		/>
		<h2>{data.title?.toLowerCase()}</h2>
	</div>
	<div class="wrapper">
		<ProgressBar min={0} max={8} bind:value={healthMeter} />
		<picture>
			<source
				srcset="/assets/images/heart-mobile.svg"
				media="(max-width: 679px)"
				type="image/svg+xml"
			/>
			<source
				srcset="/assets/images/heart-desktop.svg"
				media="(min-width: 680px)"
				type="image/svg+xml"
			/>
			<img src="/assets/images/heart-desktop.svg" alt="" />
		</picture>
	</div>
</header>
<main>
	{#if splitName}
		<div class="letters" aria-label="Letras descorbertas">
			{#each splitName as word}
				{@const splitWord = word.split('').filter((w) => {
					if (![':', '.', '-'].includes(w)) {
						return true;
					}
					return false;
				})}
				<div class="line">
					{#each splitWord as letter}
						<PlayableLetter
							letter={letterIsVisible(letter, letterSelecteds) ? letter : undefined}
						/>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
	<ul class="keys" aria-label="Letras disponiveis Para Escolher">
		{#each letterSelecteds as letter (letter.id)}
			<li class="key">
				<KeyboardLetter
					letter={letter.text}
					bind:disabled={letter.selected}
					on:click={() => handleClickLetter(letter)}
					on:keydown={(e) => handleKeydownLetter(e, letter)}
				/>
			</li>
		{/each}
	</ul>
</main>
{#if showMenuWinner || showMenuLoser || showMenuPause}
	<Menu
		title={showMenuWinner
			? 'Você Ganha'
			: showMenuLoser
				? 'Você Perdeu'
				: showMenuPause
					? 'Jogo Pausado'
					: ''}
	>
		<svelte:fragment slot="buttons">
			{#if showMenuWinner || showMenuLoser}
				<Button
					text="Jogar de novo!"
					props={{
						href: `${$page.url.pathname}`,
						title: 'Jogar de novo!',
						'aria-label': 'Jogar de novo!',
						'data-sveltekit-reload': true
					}}
				/>
			{/if}
			{#if showMenuPause}
				<Button
					text="Continuar"
					props={{
						href: `${$page.url.pathname}`,
						title: 'Continuar',
						'aria-label': 'Continuar'
					}}
					on:click={() => (showMenuPause = false)}
				/>
			{/if}
			<Button
				text="Nova categoria"
				props={{ href: '/em-jogo', title: 'Nova Categoria', 'aria-label': 'Jogar de novo!' }}
			/>
			<Button
				text="Desistir jogo"
				secondary
				props={{ href: '/', title: 'Desistir jogo', 'aria-label': 'Desistir jogo' }}
			/>
		</svelte:fragment>
	</Menu>
{/if}

<style>
	header {
		padding: 46px 26px 0 25px;
		margin-bottom: 78px;
		display: flex;
		flex-flow: row wrap;
		gap: 10px;
		align-items: center;
		justify-content: space-between;
	}

	h2 {
		font-size: 40px;
		line-height: 120%;
		letter-spacing: -0.8px;
		color: white;
		text-transform: capitalize;
	}

	.wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 16px;
	}

	picture {
		display: flex;
	}

	main {
		padding: 0 26px 0 25px;
		margin-bottom: 162px;
	}

	.keys {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-flow: row wrap;
		gap: 24px 8px;
		justify-content: center;
	}

	.line {
		display: flex;
		flex-flow: row wrap;
		gap: 8px;
		justify-content: center;
	}

	.line:not(:last-of-type) {
		margin-bottom: 12px;
	}

	.letters {
		margin-bottom: 118px;
	}

	@media screen and (min-width: 680px) {
		header {
			padding: 61px 48px 0 40px;
			margin-bottom: 111px;
		}

		.wrapper:first-of-type {
			gap: 32px;
		}

		.wrapper:last-of-type {
			gap: 40px;
		}

		h2 {
			font-size: 48px;
			letter-spacing: 0.8px;
		}

		main {
			padding: 0 48px 0 40px;
			margin-bottom: 114px;
		}

		.letters {
			margin-bottom: 134px;
		}

		.line {
			gap: 12px;
		}

		.line:not(:last-of-type) {
			margin-bottom: 16px;
		}

		.keys {
			gap: 24px 16px;
		}
	}

	@media screen and (min-width: 950px) {
		header {
			padding: 60px 48px 0 40px;
			margin-bottom: 88px;
		}

		.wrapper:first-of-type {
			gap: 57px;
		}

		h2 {
			font-size: 88px;
			letter-spacing: normal;
		}

		main {
			padding: 0 48px 0 40px;
			margin-bottom: 78px;
		}

		.letters {
			margin-bottom: 120px;
		}

		.line {
			gap: 16px;
		}

		.keys {
			gap: 24px;
		}
	}

	@media screen and (min-width: 1250px) {
		header {
			padding: 60px 0 0 0;
			max-width: 1216px;
			margin-bottom: 0px;
			margin: 0 auto 88px auto;
		}

		main {
			padding: 0;
			max-width: 1216px;
			margin-bottom: 0px;
			margin: 0 auto 78px auto;
		}
	}
</style>
