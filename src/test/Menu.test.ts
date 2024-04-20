import { afterEach, describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import Menu from './Menu.test.svelte';

describe('Menu.svelte', () => {
	afterEach(() => cleanup());

	test('renderiza Menu componente corretamente com titulo', () => {
    render(Menu);

		expect(screen.getByTestId('dia')).toBeInTheDocument();
    expect(screen.getByText('Teste Menu')).toBeInTheDocument()
	});

  test('menu com slot buttons', () => {
    render(Menu);

    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
  })

  test('fecha menu com esc', () => {
    render(Menu);

    expect(screen.getByTestId('dia')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByTestId('dia'), {key: 'Esc'})
    
    expect(screen.getByTestId('dia')).not.toBeVisible()
  })
});
