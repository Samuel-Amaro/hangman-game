import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import PlayableLetter from '$lib/PlayableLetter.svelte';

describe('PlayableLetter.svelte', () => {
	afterEach(() => cleanup());

	test('renderiza Playable componente corretamente', () => {
		render(PlayableLetter, { letter: 'A' });

		expect(screen.getByText('A')).toBeInTheDocument();
	});

	test('estilo desabilitado', () => {
		render(PlayableLetter);

		expect(screen.getByTestId('letter')).toHaveClass('disabled');
	});
});
