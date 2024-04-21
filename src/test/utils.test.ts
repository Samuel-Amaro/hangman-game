import { afterEach, describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/svelte';
import { calculatePercentFill, getTemplateOgImage } from '$lib/utils';
import LocalStorage from './LocalStorage.test.svelte';

describe('utils', () => {
	afterEach(() => {
		localStorage.clear();
		cleanup();
	});

	test('testa function getTemplateOgImage', () => {
		const template = getTemplateOgImage('Teste Título', '/test');

		expect(template).toMatch(/Teste Título/);
		expect(template).toMatch(/\/test/);
	});

	test('testa function calculatePercentFill', () => {
		expect(calculatePercentFill(0, 2, 1)).toBe(50);
	});

	test('testa function localStore', () => {
		render(LocalStorage);

		expect(screen.getByText('0')).toBe('0');
	});
});
