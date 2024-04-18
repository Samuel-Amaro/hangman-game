import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import RoundedButton from '$lib/RoundedButton.svelte';

describe('RoundedButton.svelte', () => {
	afterEach(() => cleanup());

	test('renderiza RoundedButton componente corretamente', () => {
		render(RoundedButton, {
			props: { props: { title: 'titulo', href: '#' }, as: 'a', variation: 'play' }
		});

		expect(screen.queryByTitle('titulo')).toBeInTheDocument();
	});

  test('variation play', () => {
    render(RoundedButton, {
			props: { props: { title: 'titulo', type: "button" }, as: 'button', variation: 'play' }
		});

    const elemImg = screen.queryByTestId('play') as HTMLImageElement

    expect(elemImg.src).toBe('http://localhost:3000/assets/images/icon-play.svg')
  })

  test('variation back', () => {
    render(RoundedButton, {
			props: { props: { title: 'titulo', type: "button" }, as: 'button', variation: 'back' }
		});

    const elemImg = screen.queryByTestId('back') as HTMLImageElement

    expect(elemImg.src).toBe('http://localhost:3000/assets/images/icon-back.svg')
  })

  test('variation menu', () => {
    render(RoundedButton, {
			props: { props: { title: 'titulo', type: "button" }, as: 'button', variation: 'menu' }
		});

    const elemImg = screen.queryByTestId('menu') as HTMLImageElement

    expect(elemImg.src).toBe('http://localhost:3000/assets/images/icon-menu.svg')
  })

  test('variation close', () => {
    render(RoundedButton, {
			props: { props: { title: 'titulo', type: "button" }, as: 'button', variation: 'close' }
		});

    expect(screen.queryByTitle('titulo')?.innerHTML).toBe('Χ')
  })

  test('estilo secundario', () => {
    render(RoundedButton, {
			props: { props: { title: 'titulo', type: "button" }, as: 'button', variation: 'close', secondary: true }
		});

    expect(screen.queryByTitle('titulo')).toHaveClass('secondary');
  })
});
