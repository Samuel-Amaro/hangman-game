import { browser } from '$app/environment';
import type { JsonValue } from '$types';
import { writable } from 'svelte/store';

export const categorys = [
	{ label: 'FILMES', route: 'filmes' },
	{ label: 'PROGRAMAS DE TELEVISÃO', route: 'programas-de-televisao' },
	{ label: 'PAÍSES', route: 'paises' },
	{ label: 'CIDADES CAPITAIS', route: 'cidades-capitais' },
	{ label: 'ANIMAIS', route: 'animais' },
	{ label: 'ESPORTES', route: 'esportes' }
];

export function randomIdx(max: number) {
	return Math.floor(Math.random() * max);
}

export const alphabet = [
	'A',
	'Á',
	'À',
	'Â',
	'Ã',
	'B',
	'C',
	'Ç',
	'D',
	'E',
	'É',
	'È',
	'Ê',
	'F',
	'G',
	'H',
	'I',
	'Í',
	'Ì',
	'Î',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'Ó',
	'Ò',
	'Ô',
	'Õ',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'Ú',
	'Ù',
	'Û',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

export function localStore<T extends JsonValue>(key: string, initial: T) {
	const toString = (value: T) => JSON.stringify(value, null, 2);
	const toObj = JSON.parse;
	let saved: any = initial;

	if (browser) {
		if (localStorage.getItem(key) === null) {
			localStorage.setItem(key, toString(initial));
		}

		saved = toObj(localStorage.getItem(key) as string);
	}

	const { subscribe, set, update } = writable<T>(saved);

	return {
		subscribe,
		set: (value: T) => {
			localStorage.setItem(key, toString(value));
			return set(value);
		},
		update
	};
}
