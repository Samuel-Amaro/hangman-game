import type { Category, Data } from '$types';
import { writable } from 'svelte/store';

export const datas = writable<Category[]>([]);
