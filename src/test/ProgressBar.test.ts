import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ProgressBar from '$lib/ProgressBar.svelte';
import { calculatePercentFill } from '$lib/utils';

describe('ProgressBar.svelte', () => {
	afterEach(() => cleanup());

	test('renderiza ProgressBar componente corretamente', () => {
		render(ProgressBar, { min: 1, max: 3, value: 2 });

		expect(screen.queryByRole('progressbar')).toBeInTheDocument();
	});

	test('testa preenchimento barra progresso', () => {
		render(ProgressBar, { min: 1, max: 3, value: 2 });

		expect(screen.getByTestId('bar')).toHaveStyle(`width: ${calculatePercentFill(1, 3, 2)}%;`);
	});
});
