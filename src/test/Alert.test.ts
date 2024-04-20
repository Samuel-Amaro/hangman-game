import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Alert from '$lib/Alert.svelte';
import { alert } from '$lib/stores/data';

describe('Alert.svelte', () => {
	afterEach(() => cleanup());

	test('renderiza Alert componente corretamente', () => {
		alert.set({message: "teste alert", ms: 3000})

    render(Alert);

		expect(screen.getByRole('alert')).toBeInTheDocument();
	});

	test('fecha alert com click event corretamente', async () => {
		alert.set({message: "teste alert", ms: 5000})

    render(Alert);

		expect(screen.getByRole('alert')).toBeVisible();

		setTimeout(async () => {
			await fireEvent.click(screen.getByTitle('Fechar Alerta'))
			expect(screen.getByRole('alert')).not.toBeVisible();
		}, 1000)
	});

	test('fecha alert com keydown event corretamente', async () => {
		alert.set({message: "teste alert", ms: 5000})

    render(Alert);

		expect(screen.getByRole('alert')).toBeVisible();

		setTimeout(async () => {
			await fireEvent.keyDown(screen.getByTitle('Fechar Alerta'), { key: 'Enter' });
			expect(screen.getByRole('alert')).not.toBeVisible();
		}, 1000)
	});

	test('testa timeout do alert', () => {
		alert.set({message: "teste alert", ms: 5000})

    render(Alert);

		expect(screen.getByRole('alert')).toBeVisible();

		setTimeout(async () => {
			expect(screen.getByRole('alert')).not.toBeVisible();
		}, 5000)
	})
});
