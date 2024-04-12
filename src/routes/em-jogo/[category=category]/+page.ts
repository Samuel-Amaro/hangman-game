import type { Data } from '$types';
import { categorys } from '$lib/utils';
import type { PageLoad } from './$types';

function getTitle(param: string) {
	return categorys.find((item) => item.route.toLowerCase() === param.toLowerCase());
}

function getCategory(datas: Data, param: string) {
	return datas.categories.find((cat) => cat.category.toLowerCase() === param.toLowerCase());
}

export const load: PageLoad = async ({ params, fetch }) => {
	const response = await fetch('/data.json');
	const dts: Data = await response.json();

	return {
		title: getTitle(params.category)?.label,
		category: getCategory(dts, params.category)
	};
};
