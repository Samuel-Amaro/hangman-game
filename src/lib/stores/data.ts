import type { Category, Data } from '$types';
import { writable } from 'svelte/store';
import { localStore } from '../utils';

export const datas = writable<Category[]>([]);

export const alert = writable<{ message?: string; ms: number } | null>(null);

export const visitCounter = localStore('visit-counter', 0);
