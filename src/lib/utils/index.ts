import { browser } from '$app/environment';
import type { JsonValue } from '$types';
import { writable } from 'svelte/store';

export function calculatePercentFill(min: number, max: number, value: number) {
	return (100 * (value - min)) / (max - min);
}

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

export function getTemplateOgImage(title: string, path: string) {
	return `
	<div style="background-color: #261676; padding: 10px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px;">
		<span
			style="
				display: flex; 
				align-items: flex;
				justify-content: center;
			"
		>
			<svg
				width="263"
				height="131"
				viewBox="0 0 263 131"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M42.2986 3.48145L42.1238 19.0375L45.27 18.8628C45.27 25.5788 44.5709 32.2581 44.5709 38.9633C47.2727 38.3201 50.5362 38.7886 53.3102 38.7886C52.2332 39.3077 50.9501 39.4089 49.8145 39.8479C47.2269 40.8486 44.6493 42.4719 42.823 44.5566C43.0231 39.8964 43.3919 35.2287 43.7126 30.5735C43.8782 28.1683 44.2213 25.8331 44.2213 23.4072H0C0 26.5697 0.379464 29.6937 0.517546 32.8458C0.680623 36.5714 0.542891 40.3054 0.705968 44.0322C0.807694 46.3535 1.02041 48.7008 1.04803 51.0237C1.19765 63.599 1.17912 76.2144 0.871317 88.7778C0.780077 92.5069 0.524363 96.2257 0.524363 99.9642H42.823V97.692C46.0347 99.8569 49.2672 100.756 53.1355 100.473C54.6388 100.363 55.967 99.9018 57.5051 99.9711C63.3749 100.235 69.2822 101.009 75.1587 101.013V98.3912H87.3938C87.2738 99.0379 87.2208 99.6561 87.219 100.314C93.4602 100.314 99.6832 99.4406 105.921 99.4399C105.921 104.344 105.397 109.22 105.397 114.122C107.43 114.505 109.485 114.774 111.515 115.171C115.676 115.985 120.058 115.999 124.274 115.711C130.612 115.277 137.181 114.007 140.839 108.179C141.632 106.915 142.19 105.579 142.631 104.159C143.174 102.412 143.771 100.58 143.85 98.7407C147.721 98.4352 151.679 97.7027 155.561 97.692C155.073 98.8425 154.122 99.7393 153.518 100.838C152.289 103.075 151.526 105.472 151.218 108.004C150.371 114.995 151.157 125.184 158.183 128.923C161.862 130.881 166.118 129.613 170.068 129.679C170.801 129.691 171.444 129.997 172.168 130.024C173.264 130.065 174.405 129.779 175.48 129.878C176.088 129.934 176.609 130.198 177.235 130.201C180.774 130.218 184.363 129.704 187.897 129.52C188.685 129.479 189.382 129.839 190.169 129.852C192.265 129.888 194.359 129.678 196.461 129.678V130.203C198.91 130.152 201.355 129.741 203.802 129.681C208.123 129.575 212.43 129.853 216.737 129.853V114.122L214.639 114.472V110.626L216.387 110.976L216.212 100.489C219.717 100.489 223.2 101.011 226.7 101.013V98.3912H238.935C238.814 99.038 238.762 99.6561 238.76 100.314C246.223 100.314 253.671 99.2651 261.133 99.2651C261.133 95.3542 261.724 91.4509 261.991 87.5543C262.704 77.2099 263.807 66.3956 262.078 56.0925C261.037 49.878 258.549 42.5386 252.044 40.2026C249.055 39.1294 245.591 39.3217 242.605 40.3041C241.34 40.7208 240.048 41.676 238.76 41.8954C236.353 42.3055 233.85 42.0525 231.419 42.1121C227.93 42.1976 224.424 42.4591 220.932 42.4591V43.1582C215.316 37.7872 206.202 37.2277 199.433 40.6686C197.306 41.75 194.616 43.4356 193.49 45.6053H193.14C191.337 39.4749 182.975 37.9721 177.584 39.1408C176.511 39.3732 175.424 39.7525 174.438 40.2321C173.868 40.5095 173.162 41.1131 172.515 41.1403C172.003 41.162 171.538 40.7532 171.117 40.5142C170.287 40.0423 169.416 39.6475 168.495 39.3877C165.323 38.4925 161.99 38.6517 158.882 39.6625V38.6138C156.309 38.9938 153.884 40.333 151.366 40.9772C148.656 41.6706 145.586 41.6729 142.802 41.6358C140.228 41.6016 137.676 41.3548 135.111 41.2424C133.313 41.1637 131.28 41.3677 129.518 41.0122C128.712 40.8498 127.975 40.2454 127.245 39.8806C126.086 39.3009 124.857 38.8782 123.575 38.6638C117.127 37.5846 110.544 41.4946 108.019 47.5279C107.039 45.8505 106.1 44.1907 104.695 42.8155C101.404 39.595 96.7972 39.0296 92.4627 39.9159C91.3113 40.1514 90.185 40.57 89.1417 41.1061C88.4614 41.4556 87.8203 41.9858 87.0443 42.0863C85.5011 42.2859 83.8794 42.0483 82.325 42.1163C78.0189 42.3049 73.7074 42.4591 69.3907 42.4591V43.333C66.835 40.7984 63.395 39.0764 59.7774 38.7886C60.8282 38.478 62.0079 38.6138 63.0984 38.6138H69.2159V39.3129C71.665 39.2624 74.1103 38.8511 76.557 38.7912C80.8769 38.6853 85.1838 38.9633 89.4913 38.9633V23.2325L87.3938 23.582V19.7367L89.1417 20.0863V3.48145C86.0506 3.49001 82.9672 4.10229 79.878 4.17797C76.2616 4.26659 72.647 3.63631 69.0411 3.48145C69.0411 3.79554 69.0436 3.7473 69.2159 4.00581C66.6133 4.00581 63.9331 3.7258 61.3505 3.83784C55.0777 4.11016 48.5198 4.63644 42.2986 3.48145Z"
					fill="#0B1524"
				/>
				<path
					d="M42.2986 0L42.1238 15.5561L45.27 15.3813C45.27 22.0974 44.5709 28.7767 44.5709 35.4819C47.2727 34.8387 50.5362 35.3071 53.3102 35.3071C52.2332 35.8262 50.9501 35.9274 49.8145 36.3665C47.2269 37.3672 44.6493 38.9904 42.823 41.0751C43.0231 36.4149 43.3919 31.7472 43.7126 27.0921C43.8782 24.6868 44.2213 22.3517 44.2213 19.9258H0C0 23.0882 0.379464 26.2122 0.517546 29.3643C0.680623 33.0899 0.542891 36.8239 0.705968 40.5507C0.807694 42.8721 1.02041 45.2193 1.04803 47.5423C1.19765 60.1175 1.17912 72.733 0.871317 85.2964C0.780077 89.0255 0.524363 92.7443 0.524363 96.4828H42.823V94.2106C46.0347 96.3755 49.2672 97.2749 53.1355 96.9914C54.6388 96.8811 55.967 96.4204 57.5051 96.4896C63.3749 96.7539 69.2822 97.5277 75.1587 97.5315V94.9097H87.3938C87.2738 95.5564 87.2208 96.1747 87.219 96.8324C93.4602 96.8324 99.6832 95.9591 105.921 95.9584C105.921 100.862 105.397 105.739 105.397 110.641C107.43 111.024 109.485 111.293 111.515 111.689C115.676 112.503 120.058 112.518 124.274 112.229C130.612 111.795 137.181 110.525 140.839 104.698C141.632 103.433 142.19 102.098 142.631 100.678C143.174 98.9305 143.771 97.0984 143.85 95.2593C147.721 94.9538 151.679 94.2212 155.561 94.2106C155.073 95.361 154.122 96.2579 153.518 97.3567C152.289 99.5935 151.526 101.991 151.218 104.523C150.371 111.514 151.157 121.702 158.183 125.441C161.862 127.399 166.118 126.131 170.068 126.198C170.801 126.21 171.444 126.516 172.168 126.543C173.264 126.584 174.405 126.298 175.48 126.397C176.088 126.452 176.609 126.717 177.235 126.72C180.774 126.737 184.363 126.222 187.897 126.038C188.685 125.997 189.382 126.357 190.169 126.371C192.265 126.406 194.359 126.197 196.461 126.197V126.721C198.91 126.671 201.355 126.259 203.802 126.199C208.123 126.093 212.43 126.371 216.737 126.371V110.641L214.639 110.99V107.145L216.387 107.494L216.212 97.0072C219.717 97.0072 223.2 97.5293 226.7 97.5315V94.9097H238.935C238.814 95.5566 238.762 96.1747 238.76 96.8324C246.223 96.8324 253.671 95.7837 261.133 95.7837C261.133 91.8728 261.724 87.9694 261.991 84.0729C262.704 73.7284 263.807 62.9141 262.078 52.6111C261.037 46.3965 258.549 39.0572 252.044 36.7211C249.055 35.6479 245.591 35.8402 242.605 36.8227C241.34 37.2394 240.048 38.1946 238.76 38.414C236.353 38.824 233.85 38.5711 231.419 38.6307C227.93 38.7162 224.424 38.9777 220.932 38.9777V39.6768C215.316 34.3058 206.202 33.7463 199.433 37.1871C197.306 38.2685 194.616 39.9542 193.49 42.1238H193.14C191.337 35.9935 182.975 34.4907 177.584 35.6593C176.511 35.8918 175.424 36.2711 174.438 36.7507C173.868 37.0281 173.162 37.6316 172.515 37.6589C172.003 37.6806 171.538 37.2717 171.117 37.0328C170.287 36.5609 169.416 36.166 168.495 35.9063C165.323 35.011 161.99 35.1703 158.882 36.181V35.1323C156.309 35.5123 153.884 36.8515 151.366 37.4958C148.656 38.1892 145.586 38.1915 142.802 38.1544C140.228 38.1201 137.676 37.8733 135.111 37.761C133.313 37.6823 131.28 37.8863 129.518 37.5308C128.712 37.3684 127.975 36.764 127.245 36.3992C126.086 35.8194 124.857 35.3968 123.575 35.1823C117.127 34.1032 110.544 38.0132 108.019 44.0465C107.039 42.3691 106.1 40.7093 104.695 39.334C101.404 36.1136 96.7972 35.5481 92.4627 36.4345C91.3113 36.6699 90.185 37.0886 89.1417 37.6246C88.4614 37.9742 87.8203 38.5043 87.0443 38.6048C85.5011 38.8044 83.8794 38.5669 82.325 38.6349C78.0189 38.8235 73.7074 38.9777 69.3907 38.9777V39.8516C66.835 37.317 63.395 35.595 59.7774 35.3071C60.8282 34.9965 62.0079 35.1323 63.0984 35.1323H69.2159V35.8315C71.665 35.781 74.1103 35.3697 76.557 35.3097C80.8769 35.2038 85.1838 35.4819 89.4913 35.4819V19.751L87.3938 20.1006V16.2553L89.1417 16.6048V0C86.0506 0.0085646 82.9672 0.620846 79.878 0.696529C76.2616 0.785146 72.647 0.154862 69.0411 0C69.0411 0.314093 69.0436 0.265852 69.2159 0.524363C66.6133 0.524363 63.9331 0.244353 61.3505 0.356392C55.0777 0.628712 48.5198 1.155 42.2986 0Z"
					fill="#243041"
				/>
				<path
					d="M19.2928 25.8486C18.9889 31.8663 18.7306 37.8385 18.5178 43.765C18.3051 49.6611 18.1531 55.5877 18.062 61.5446C18.8218 61.6054 19.5816 61.6357 20.3414 61.6357C21.1316 61.6357 21.9066 61.6357 22.6664 61.6357C23.639 61.6357 24.6267 61.6206 25.6297 61.5902C26.663 61.5598 27.6964 61.5142 28.7297 61.4534C28.7905 60.1161 28.8209 58.8092 28.8209 57.5328C28.8209 56.2259 28.8209 54.8886 28.8209 53.521C28.8209 48.9013 28.7753 44.2969 28.6841 39.7076C28.5929 35.1183 28.441 30.4987 28.2282 25.8486H39.443C38.896 33.1732 38.4705 40.4522 38.1666 47.6856C37.893 54.8886 37.7563 62.1524 37.7563 69.477C37.7563 73.0633 37.8019 76.6344 37.893 80.1903C37.9842 83.7463 38.1058 87.3326 38.2577 90.9493H27.8635C28.0155 87.3326 28.1523 83.7311 28.2738 80.1448C28.3954 76.5584 28.517 72.9721 28.6385 69.3858C26.9062 69.2946 25.1738 69.2187 23.4414 69.1579C21.7394 69.0667 20.0375 69.0211 18.3355 69.0211H17.9708V78.4124C17.9708 80.5399 17.9708 82.6369 17.9708 84.7036C17.9708 86.7703 18.0012 88.8522 18.062 90.9493H7.62215C7.77411 86.5728 7.86529 82.257 7.89568 78.0021C7.95646 73.7168 7.98686 69.4162 7.98686 65.1005C7.98686 52.0317 7.71332 38.9478 7.16626 25.8486H19.2928Z"
					fill="url(#paint0_linear_69_3077)"
				/>
				<path
					d="M71.1162 62.274C71.1162 67.076 71.0858 71.878 71.0251 76.68C70.9947 81.482 70.9035 86.4816 70.7515 91.6787L62.8191 91.2228V85.0683C61.9073 86.7095 60.874 87.9708 59.7191 88.8522C58.5642 89.7032 57.47 90.3414 56.4367 90.7669C55.221 91.2532 54.0205 91.5267 52.8352 91.5875C51.3763 91.5875 50.0087 91.2684 48.7322 90.6301C47.4557 89.9615 46.3464 89.0801 45.4042 87.986C44.4621 86.8919 43.7174 85.6458 43.1704 84.2477C42.6537 82.8193 42.3954 81.3453 42.3954 79.8256C42.3954 78.0933 42.7601 76.3913 43.4895 74.7197C44.2493 73.0177 45.5258 71.4829 47.319 70.1152C49.72 68.2613 51.8018 66.7113 53.5646 65.4652C55.3274 64.2191 56.7862 63.0946 57.9411 62.0916C59.1264 61.0583 59.9926 60.0857 60.5397 59.174C61.1171 58.2318 61.4059 57.1529 61.4059 55.9372C61.4059 53.9313 61.0715 52.442 60.4029 51.4695C59.7343 50.4665 58.8529 49.965 57.7588 49.965C57.0901 49.965 56.5127 50.1474 56.0264 50.5121C55.5705 50.8464 55.1906 51.3023 54.8867 51.8798C54.6131 52.4268 54.4004 53.0499 54.2484 53.7489C54.1269 54.4175 54.0661 55.0862 54.0661 55.7548C54.0661 56.2107 54.0813 56.7122 54.1117 57.2592C54.1724 57.8063 54.2788 58.3838 54.4308 58.9916L43.9454 59.174C43.8846 58.6573 43.839 58.171 43.8086 57.7151C43.7782 57.2288 43.763 56.7578 43.763 56.3019C43.763 54.4175 44.0822 52.5636 44.7204 50.7401C45.3586 48.8861 46.2856 47.2449 47.5013 45.8165C48.7474 44.3576 50.2518 43.1875 52.0146 42.3061C53.7773 41.4248 55.7984 40.9841 58.0779 40.9841C61.0259 40.9841 63.351 41.6071 65.0529 42.8532C66.7853 44.0689 68.0922 45.6797 68.9736 47.6856C69.8853 49.6915 70.4628 51.9709 70.7059 54.5239C70.9795 57.0465 71.1162 59.6298 71.1162 62.274ZM60.8588 75.1756C61.0107 74.4158 61.1475 73.5496 61.2691 72.577C61.3907 71.7564 61.497 70.7687 61.5882 69.6138C61.6794 68.4285 61.7554 67.1064 61.8162 65.6476C61.3299 66.3162 60.8588 66.9088 60.4029 67.4255C59.947 67.9422 59.5215 68.3981 59.1264 68.7932C58.6705 69.2491 58.245 69.6594 57.8499 70.0241C57.1509 70.6015 56.4063 71.255 55.6161 71.9844C54.8259 72.6834 54.0965 73.428 53.4278 74.2182C52.7896 75.0084 52.2425 75.829 51.7866 76.68C51.3611 77.5006 51.1484 78.306 51.1484 79.0962C51.1484 79.9472 51.4371 80.7374 52.0146 81.4668C52.592 82.1659 53.3063 82.5154 54.1573 82.5154C54.7955 82.5154 55.4489 82.333 56.1176 81.9683C56.8166 81.6036 57.47 81.0869 58.0779 80.4183C58.7161 79.7497 59.2784 78.9746 59.7647 78.0933C60.2509 77.2119 60.6156 76.2393 60.8588 75.1756Z"
					fill="url(#paint1_linear_69_3077)"
				/>
				<path
					d="M94.5379 91.0405C95.2065 86.1473 95.6776 81.1933 95.9511 76.1785C96.2551 71.1638 96.407 65.9059 96.407 60.4049C96.407 58.5509 96.2855 57.0769 96.0423 55.9828C95.7992 54.8582 95.4801 54.0072 95.085 53.4298C94.6898 52.8219 94.2644 52.442 93.8085 52.2901C93.3526 52.1077 92.9119 52.0165 92.4864 52.0165C91.8785 52.0165 91.3011 52.1229 90.754 52.3357C90.2374 52.5484 89.7511 52.9587 89.2952 53.5666C88.8393 54.1744 88.4138 55.0254 88.0187 56.1195C87.654 57.2136 87.3349 58.6573 87.0613 60.4504C86.7878 62.2436 86.5751 64.4319 86.4231 67.0152C86.3015 69.5682 86.2407 72.6226 86.2407 76.1785C86.2407 77.455 86.2407 78.7923 86.2407 80.1903C86.2407 81.558 86.2407 82.8649 86.2407 84.111C86.2711 85.3571 86.2863 86.4664 86.2863 87.4389C86.3167 88.3811 86.3623 89.0497 86.4231 89.4448L76.1201 89.3537C76.2112 86.588 76.272 84.1262 76.3024 81.9683C76.3632 79.78 76.4088 77.7741 76.4392 75.9506C76.4696 74.127 76.4848 72.4251 76.4848 70.8447C76.5152 69.2339 76.5304 67.6535 76.5304 66.1034C76.5304 64.7054 76.5152 63.2769 76.4848 61.8181C76.4848 60.3289 76.4696 58.7333 76.4392 57.0313C76.4392 55.3293 76.4088 53.4754 76.348 51.4695C76.3176 49.4332 76.272 47.1841 76.2112 44.7223L86.879 44.4488L86.6966 49.0989C87.5172 47.5488 88.3986 46.318 89.3408 45.4062C90.2829 44.464 91.2099 43.7346 92.1217 43.2179C93.0639 42.7013 93.9756 42.3669 94.857 42.215C95.7384 42.0326 96.5286 41.9414 97.2276 41.9414C99.1119 41.9414 100.662 42.5949 101.878 43.9018C103.093 45.2086 104.051 46.9562 104.75 49.1444C105.479 51.3023 105.981 53.7793 106.254 56.5754C106.528 59.3715 106.664 62.274 106.664 65.2828C106.664 67.4711 106.604 69.6898 106.482 71.9388C106.391 74.1878 106.269 76.4065 106.117 78.5947C105.996 80.7526 105.844 82.8497 105.662 84.886C105.51 86.8919 105.373 88.761 105.251 90.4934L94.5379 91.0405Z"
					fill="url(#paint2_linear_69_3077)"
				/>
				<path
					d="M140.07 79.0962C139.948 82.6825 139.827 85.8585 139.705 88.6242C139.584 91.3596 139.341 93.7606 138.976 95.8273C138.611 97.894 138.064 99.6263 137.335 101.024C136.605 102.422 135.587 103.547 134.28 104.398C133.004 105.249 131.363 105.857 129.357 106.221C127.381 106.617 124.95 106.814 122.063 106.814C120.634 106.814 119.099 106.753 117.458 106.632C115.817 106.541 114.054 106.328 112.17 105.994L112.534 95.964C114.784 96.116 116.759 96.2376 118.461 96.3287C120.193 96.4199 121.637 96.4959 122.792 96.5567C124.16 96.6479 125.345 96.7086 126.348 96.739C127.807 96.739 128.901 95.8881 129.63 94.1861C130.39 92.4841 130.816 90.1287 130.907 87.1198C130.36 88.3355 129.737 89.3233 129.038 90.0831C128.369 90.8429 127.67 91.4356 126.94 91.861C126.241 92.3169 125.542 92.6209 124.843 92.7728C124.175 92.9248 123.552 93.0008 122.974 93.0008C121.424 93.0008 119.889 92.5297 118.37 91.5875C116.85 90.6453 115.483 89.0953 114.267 86.9375C113.082 84.7492 112.109 81.9075 111.349 78.4124C110.589 74.8869 110.209 70.5407 110.209 65.374C110.209 61.3622 110.529 57.8367 111.167 54.7974C111.835 51.7582 112.717 49.2052 113.811 47.1385C114.905 45.0719 116.166 43.5218 117.595 42.4885C119.023 41.4248 120.512 40.8929 122.063 40.8929C122.792 40.8929 123.567 41.0145 124.388 41.2576C125.239 41.5007 126.09 41.9414 126.94 42.5797C127.791 43.1875 128.597 44.0233 129.357 45.0871C130.147 46.1204 130.831 47.4577 131.408 49.0989L131.317 43.4915L139.432 43.9018L140.07 79.0962ZM130.086 69.7505C130.086 68.8084 130.071 67.699 130.041 66.4226C130.041 65.1157 129.995 63.7784 129.904 62.4108C129.843 61.0127 129.706 59.645 129.493 58.3078C129.281 56.9705 128.977 55.77 128.582 54.7063C128.217 53.6425 127.731 52.7915 127.123 52.1533C126.515 51.4847 125.755 51.1504 124.843 51.1504C123.689 51.1504 122.777 51.6366 122.108 52.6092C121.47 53.5817 120.984 54.8278 120.649 56.3475C120.345 57.8671 120.163 59.5387 120.102 61.3622C120.041 63.1858 120.011 64.9485 120.011 66.6505C120.011 67.8358 120.026 69.0819 120.057 70.3888C120.117 71.6957 120.209 73.0025 120.33 74.3094C120.452 75.5859 120.634 76.8016 120.877 77.9565C121.12 79.1114 121.424 80.1448 121.789 81.0565C122.154 81.9379 122.594 82.6369 123.111 83.1536C123.658 83.6703 124.296 83.9286 125.026 83.9286C125.938 83.9286 126.713 83.5639 127.351 82.8345C127.989 82.0747 128.506 81.0565 128.901 79.78C129.326 78.5036 129.63 77.0143 129.813 75.3124C129.995 73.58 130.086 71.726 130.086 69.7505Z"
					fill="url(#paint3_linear_69_3077)"
				/>
				<path
					d="M173.339 62.3652C173.217 66.0123 173.096 69.5378 172.974 72.9417C172.913 74.4006 172.853 75.905 172.792 77.455C172.731 79.005 172.655 80.5247 172.564 82.0139C172.503 83.4727 172.442 84.886 172.381 86.2536C172.321 87.5909 172.26 88.7762 172.199 89.8096L162.215 90.7669C162.458 86.7551 162.656 83.2448 162.808 80.2359C162.96 77.1967 163.066 74.5981 163.127 72.4403C163.218 70.252 163.279 68.4285 163.309 66.9696C163.34 65.5108 163.34 64.3407 163.309 63.4593C163.309 62.5779 163.294 61.9245 163.264 61.499C163.264 61.0735 163.264 60.8 163.264 60.6784C163.264 58.9764 163.188 57.5936 163.036 56.5298C162.914 55.4661 162.732 54.6303 162.489 54.0224C162.246 53.4146 161.942 53.0043 161.577 52.7915C161.243 52.5788 160.863 52.4724 160.437 52.4724C159.89 52.4724 159.328 52.5788 158.75 52.7915C158.203 52.9739 157.702 53.369 157.246 53.9769C156.821 54.5543 156.471 55.3901 156.197 56.4842C155.924 57.5784 155.787 59.0372 155.787 60.8607C155.787 64.3255 155.787 67.7142 155.787 71.027C155.818 74.3094 155.863 77.2727 155.924 79.9168C155.954 82.9865 156 85.9193 156.061 88.7154L145.211 89.7184C145.454 86.4968 145.606 83.3512 145.667 80.2815C145.758 77.2119 145.803 74.4462 145.803 71.9844C145.803 67.3647 145.697 62.7907 145.484 58.2622C145.302 53.7033 144.967 48.9773 144.481 44.0841C146.426 44.0233 148.022 43.9473 149.268 43.8562C150.514 43.765 151.502 43.6586 152.231 43.537C153.082 43.4155 153.736 43.2787 154.192 43.1267L154.283 48.643C154.921 47.6096 155.62 46.6371 156.38 45.7253C157.17 44.8135 157.991 44.0385 158.842 43.4003C159.693 42.7316 160.574 42.215 161.486 41.8503C162.428 41.4552 163.385 41.2576 164.358 41.2576C165.452 41.2576 166.409 41.3488 167.23 41.5311C168.081 41.6831 168.81 42.0022 169.418 42.4885C170.056 42.9444 170.588 43.5978 171.014 44.4488C171.439 45.2694 171.804 46.3331 172.108 47.64C172.655 46.789 173.248 45.9836 173.886 45.2238C174.555 44.4336 175.269 43.7498 176.029 43.1723C176.819 42.5645 177.655 42.0934 178.536 41.7591C179.417 41.4248 180.39 41.2576 181.454 41.2576C183.125 41.2576 184.538 41.4552 185.693 41.8503C186.848 42.2454 187.775 43.0508 188.474 44.2665C189.204 45.4518 189.72 47.1537 190.024 49.3724C190.359 51.5606 190.526 54.4631 190.526 58.0798C190.526 63.2769 190.404 68.4893 190.161 73.7168C189.918 78.9139 189.66 84.2781 189.386 89.8096L179.402 90.7669C179.767 85.1747 180.01 80.4791 180.132 76.68C180.284 72.8506 180.375 69.7657 180.405 67.4255C180.435 65.0853 180.435 63.3985 180.405 62.3652C180.375 61.3014 180.359 60.7088 180.359 60.5872C180.359 58.9156 180.268 57.548 180.086 56.4842C179.934 55.4205 179.706 54.5999 179.402 54.0224C179.129 53.4146 178.794 53.0043 178.399 52.7915C178.034 52.5788 177.624 52.4724 177.168 52.4724C176.895 52.4724 176.591 52.5028 176.257 52.5636C175.922 52.594 175.573 52.746 175.208 53.0195C174.843 53.2626 174.479 53.6577 174.114 54.2048C173.78 54.7519 173.46 55.5117 173.156 56.4842C173.248 57.8519 173.293 59.0676 173.293 60.1313C173.324 61.1951 173.339 61.9397 173.339 62.3652Z"
					fill="url(#paint4_linear_69_3077)"
				/>
				<path
					d="M222.153 62.274C222.153 67.076 222.123 71.878 222.062 76.68C222.032 81.482 221.941 86.4816 221.789 91.6787L213.856 91.2228V85.0683C212.944 86.7095 211.911 87.9708 210.756 88.8522C209.601 89.7032 208.507 90.3414 207.474 90.7669C206.258 91.2532 205.058 91.5267 203.872 91.5875C202.413 91.5875 201.046 91.2684 199.769 90.6301C198.493 89.9615 197.383 89.0801 196.441 87.986C195.499 86.8919 194.755 85.6458 194.207 84.2477C193.691 82.8193 193.432 81.3453 193.432 79.8256C193.432 78.0933 193.797 76.3913 194.527 74.7197C195.286 73.0177 196.563 71.4829 198.356 70.1152C200.757 68.2613 202.839 66.7113 204.602 65.4652C206.364 64.2191 207.823 63.0946 208.978 62.0916C210.164 61.0583 211.03 60.0857 211.577 59.174C212.154 58.2318 212.443 57.1529 212.443 55.9372C212.443 53.9313 212.109 52.442 211.44 51.4695C210.771 50.4665 209.89 49.965 208.796 49.965C208.127 49.965 207.55 50.1474 207.063 50.5121C206.608 50.8464 206.228 51.3023 205.924 51.8798C205.65 52.4268 205.438 53.0499 205.286 53.7489C205.164 54.4175 205.103 55.0862 205.103 55.7548C205.103 56.2107 205.118 56.7122 205.149 57.2592C205.21 57.8063 205.316 58.3838 205.468 58.9916L194.982 59.174C194.922 58.6573 194.876 58.171 194.846 57.7151C194.815 57.2288 194.8 56.7578 194.8 56.3019C194.8 54.4175 195.119 52.5636 195.758 50.7401C196.396 48.8861 197.323 47.2449 198.538 45.8165C199.785 44.3576 201.289 43.1875 203.052 42.3061C204.814 41.4248 206.836 40.9841 209.115 40.9841C212.063 40.9841 214.388 41.6071 216.09 42.8532C217.822 44.0689 219.129 45.6797 220.011 47.6856C220.922 49.6915 221.5 51.9709 221.743 54.5239C222.017 57.0465 222.153 59.6298 222.153 62.274ZM211.896 75.1756C212.048 74.4158 212.185 73.5496 212.306 72.577C212.428 71.7564 212.534 70.7687 212.625 69.6138C212.716 68.4285 212.792 67.1064 212.853 65.6476C212.367 66.3162 211.896 66.9088 211.44 67.4255C210.984 67.9422 210.559 68.3981 210.164 68.7932C209.708 69.2491 209.282 69.6594 208.887 70.0241C208.188 70.6015 207.443 71.255 206.653 71.9844C205.863 72.6834 205.134 73.428 204.465 74.2182C203.827 75.0084 203.28 75.829 202.824 76.68C202.398 77.5006 202.186 78.306 202.186 79.0962C202.186 79.9472 202.474 80.7374 203.052 81.4668C203.629 82.1659 204.343 82.5154 205.194 82.5154C205.833 82.5154 206.486 82.333 207.155 81.9683C207.854 81.6036 208.507 81.0869 209.115 80.4183C209.753 79.7497 210.315 78.9746 210.802 78.0933C211.288 77.2119 211.653 76.2393 211.896 75.1756Z"
					fill="url(#paint5_linear_69_3077)"
				/>
				<path
					d="M245.575 91.0405C246.244 86.1473 246.715 81.1933 246.988 76.1785C247.292 71.1638 247.444 65.9059 247.444 60.4049C247.444 58.5509 247.323 57.0769 247.079 55.9828C246.836 54.8582 246.517 54.0072 246.122 53.4298C245.727 52.8219 245.301 52.442 244.846 52.2901C244.39 52.1077 243.949 52.0165 243.524 52.0165C242.916 52.0165 242.338 52.1229 241.791 52.3357C241.274 52.5484 240.788 52.9587 240.332 53.5666C239.876 54.1744 239.451 55.0254 239.056 56.1195C238.691 57.2136 238.372 58.6573 238.098 60.4504C237.825 62.2436 237.612 64.4319 237.46 67.0152C237.339 69.5682 237.278 72.6226 237.278 76.1785C237.278 77.455 237.278 78.7923 237.278 80.1903C237.278 81.558 237.278 82.8649 237.278 84.111C237.308 85.3571 237.323 86.4664 237.323 87.4389C237.354 88.3811 237.399 89.0497 237.46 89.4448L227.157 89.3537C227.248 86.588 227.309 84.1262 227.34 81.9683C227.4 79.78 227.446 77.7741 227.476 75.9506C227.507 74.127 227.522 72.4251 227.522 70.8447C227.552 69.2339 227.567 67.6535 227.567 66.1034C227.567 64.7054 227.552 63.2769 227.522 61.8181C227.522 60.3289 227.507 58.7333 227.476 57.0313C227.476 55.3293 227.446 53.4754 227.385 51.4695C227.355 49.4332 227.309 47.1841 227.248 44.7223L237.916 44.4488L237.734 49.0989C238.554 47.5488 239.436 46.318 240.378 45.4062C241.32 44.464 242.247 43.7346 243.159 43.2179C244.101 42.7013 245.013 42.3669 245.894 42.215C246.775 42.0326 247.566 41.9414 248.265 41.9414C250.149 41.9414 251.699 42.5949 252.915 43.9018C254.13 45.2086 255.088 46.9562 255.787 49.1444C256.516 51.3023 257.018 53.7793 257.291 56.5754C257.565 59.3715 257.702 62.274 257.702 65.2828C257.702 67.4711 257.641 69.6898 257.519 71.9388C257.428 74.1878 257.306 76.4065 257.155 78.5947C257.033 80.7526 256.881 82.8497 256.699 84.886C256.547 86.8919 256.41 88.761 256.288 90.4934L245.575 91.0405Z"
					fill="url(#paint6_linear_69_3077)"
				/>
				<path
					d="M57.3815 9.0721C57.0331 9.05032 56.6303 9.03399 56.173 9.02311C55.7267 9.01222 55.2476 9.00678 54.736 9.00678C54.6597 10.0193 54.5944 11.0698 54.54 12.1585C54.4964 13.2363 54.4583 14.3359 54.4257 15.4572C54.393 16.5677 54.3712 17.689 54.3604 18.8213C54.3495 19.9426 54.344 21.0531 54.344 22.1526C54.344 23.4046 54.3495 24.6185 54.3604 25.7943C54.3821 26.9592 54.4202 28.086 54.4747 29.1747H50.9963C51.0943 27.3239 51.1705 25.3534 51.2249 23.2631C51.2794 21.1728 51.3066 19.0662 51.3066 16.9433C51.3066 15.5607 51.2903 14.2107 51.2576 12.8934C51.2249 11.5761 51.1923 10.2914 51.1596 9.03944C50.6371 9.03944 50.1417 9.04488 49.6736 9.05577C49.2054 9.06665 48.7863 9.08298 48.4161 9.10476L48.4488 5.69173C48.8407 5.72439 49.2816 5.75161 49.7716 5.77338C50.2615 5.78427 50.7731 5.79516 51.3066 5.80604C51.8509 5.81693 52.4062 5.82782 52.9723 5.8387C53.5384 5.8387 54.0936 5.8387 54.638 5.8387C55.1823 5.8387 55.694 5.8387 56.173 5.8387C56.6629 5.8387 57.0984 5.82782 57.4794 5.80604L57.3815 9.0721Z"
					fill="white"
				/>
				<path
					d="M64.7856 5.65907C64.6767 7.81467 64.5842 9.95393 64.508 12.0769C64.4318 14.1889 64.3773 16.3119 64.3447 18.4457C64.6169 18.4674 64.889 18.4783 65.1612 18.4783C65.4443 18.4783 65.7219 18.4783 65.994 18.4783C66.3424 18.4783 66.6962 18.4729 67.0555 18.462C67.4257 18.4511 67.7958 18.4348 68.166 18.413C68.1877 17.934 68.1986 17.4659 68.1986 17.0086C68.1986 16.5405 68.1986 16.0615 68.1986 15.5715C68.1986 13.9167 68.1823 12.2674 68.1496 10.6235C68.117 8.97956 68.0625 7.32476 67.9863 5.65907H72.0036C71.8076 8.2828 71.6552 10.8902 71.5463 13.4813C71.4484 16.0615 71.3994 18.6634 71.3994 21.2871C71.3994 22.5718 71.4157 23.851 71.4484 25.1248C71.481 26.3985 71.5246 27.6832 71.579 28.9787H67.8557C67.9101 27.6832 67.9591 26.3931 68.0027 25.1084C68.0462 23.8238 68.0898 22.5391 68.1333 21.2545C67.5128 21.2218 66.8922 21.1946 66.2717 21.1728C65.662 21.1402 65.0523 21.1238 64.4427 21.1238H64.312V24.4879C64.312 25.25 64.312 26.0011 64.312 26.7415C64.312 27.4818 64.3229 28.2275 64.3447 28.9787H60.6051C60.6595 27.411 60.6922 25.8651 60.703 24.3409C60.7248 22.8059 60.7357 21.2654 60.7357 19.7194C60.7357 15.0381 60.6377 10.3513 60.4418 5.65907H64.7856Z"
					fill="white"
				/>
				<path
					d="M82.2492 20.3726C81.9117 20.3509 81.5688 20.3345 81.2204 20.3237C80.872 20.3128 80.5236 20.3073 80.1753 20.3073C79.9793 20.3073 79.7724 20.3128 79.5547 20.3237C79.3479 20.3345 79.141 20.34 78.9342 20.34L78.8688 26.1699C79.7616 26.1481 80.6271 26.1046 81.4654 26.0393C82.3145 25.9739 83.2127 25.8705 84.1598 25.729V29.142C83.5502 29.1202 82.9569 29.1039 82.3798 29.093C81.8137 29.0821 81.2476 29.0767 80.6815 29.0767C79.8323 29.0767 78.994 29.0876 78.1666 29.1093C77.3392 29.142 76.4846 29.1856 75.6028 29.24C75.7008 27.215 75.777 25.2119 75.8314 23.2304C75.8967 21.2382 75.9294 19.2295 75.9294 17.2046C75.9294 15.2667 75.9022 13.3452 75.8477 11.44C75.8042 9.5239 75.7225 7.59693 75.6028 5.65907C76.8874 5.75705 78.1122 5.80604 79.2771 5.80604C80.0174 5.80604 80.7523 5.78971 81.4817 5.75705C82.222 5.71351 83.0113 5.65907 83.8496 5.59375V9.34971C83.1746 9.22996 82.505 9.13742 81.841 9.0721C81.1877 9.00678 80.5345 8.97412 79.8813 8.97412H79.2444C79.1356 10.335 79.0594 11.6904 79.0158 13.0404C78.9832 14.3903 78.9559 15.7457 78.9342 17.1066C79.2172 17.1284 79.5003 17.1393 79.7833 17.1393C80.0773 17.1393 80.3767 17.1393 80.6815 17.1393C80.9319 17.1393 81.1877 17.1393 81.449 17.1393C81.7103 17.1393 81.977 17.1284 82.2492 17.1066V20.3726Z"
					fill="white"
				/>
				<path
					d="M167.156 108.869C167.102 109.261 167.042 109.707 166.977 110.208C166.922 110.709 166.873 111.248 166.83 111.825C166.786 112.391 166.748 112.99 166.715 113.621C166.694 114.242 166.683 114.868 166.683 115.499C166.683 115.64 166.688 115.847 166.699 116.119C166.721 116.381 166.743 116.675 166.764 117.001C166.786 117.317 166.808 117.649 166.83 117.997C166.862 118.335 166.89 118.656 166.911 118.961C166.944 119.255 166.971 119.511 166.993 119.728C167.015 119.946 167.037 120.093 167.058 120.169C166.634 120.365 166.215 120.512 165.801 120.61C165.387 120.719 165.017 120.801 164.69 120.855C164.309 120.91 163.939 120.942 163.58 120.953C163.188 120.953 162.763 120.882 162.306 120.741C161.86 120.599 161.408 120.36 160.951 120.022C160.494 119.674 160.053 119.206 159.628 118.618C159.203 118.019 158.828 117.274 158.501 116.381C158.175 115.477 157.913 114.399 157.717 113.147C157.521 111.895 157.423 110.437 157.423 108.771C157.423 107.105 157.538 105.652 157.766 104.411C158.006 103.17 158.311 102.108 158.681 101.226C159.062 100.334 159.487 99.6041 159.955 99.038C160.434 98.461 160.918 98.0092 161.408 97.6826C161.898 97.3451 162.372 97.1165 162.829 96.9967C163.297 96.8661 163.7 96.8008 164.037 96.8008C164.353 96.8117 164.663 96.8443 164.968 96.8988C165.229 96.9532 165.502 97.0348 165.785 97.1437C166.079 97.2526 166.334 97.405 166.552 97.601L166.225 100.883C165.921 100.731 165.632 100.622 165.36 100.557C165.099 100.481 164.848 100.442 164.609 100.442C164.152 100.442 163.743 100.568 163.384 100.818C163.036 101.058 162.731 101.379 162.47 101.782C162.219 102.184 162.001 102.642 161.816 103.153C161.642 103.665 161.501 104.188 161.392 104.721C161.12 105.973 160.967 107.399 160.934 108.999C160.967 110.382 161.092 111.65 161.31 112.804C161.408 113.294 161.528 113.784 161.669 114.274C161.822 114.764 162.001 115.221 162.208 115.646C162.426 116.06 162.676 116.419 162.959 116.724C163.253 117.029 163.591 117.241 163.972 117.361C163.95 115.945 163.879 114.541 163.76 113.147C163.651 111.754 163.487 110.349 163.27 108.934L167.156 108.869Z"
					fill="white"
				/>
				<path
					d="M177.157 120.708C177.103 119.957 177.048 119.2 176.994 118.438C176.95 117.676 176.896 116.909 176.83 116.136C176.351 116.103 175.889 116.071 175.442 116.038C174.996 116.005 174.544 115.989 174.087 115.989H173.875C173.82 116.773 173.771 117.546 173.728 118.308C173.684 119.07 173.646 119.826 173.613 120.578L169.531 120.512C170.206 116.626 170.815 112.75 171.36 108.885C171.904 105.02 172.367 101.123 172.748 97.1927L177.663 97.2744C178.077 101.161 178.572 105.026 179.149 108.869C179.737 112.701 180.423 116.56 181.207 120.447L177.157 120.708ZM175.246 101.308C175.029 103.311 174.822 105.309 174.626 107.301C174.43 109.293 174.25 111.302 174.087 113.327C174.315 113.349 174.55 113.36 174.789 113.36C175.029 113.36 175.274 113.36 175.524 113.36H176.585C176.4 111.335 176.193 109.326 175.965 107.334C175.736 105.342 175.497 103.333 175.246 101.308Z"
					fill="white"
				/>
				<path
					d="M195.502 120.61C195.535 118.945 195.573 117.252 195.617 115.532C195.628 114.802 195.638 114.029 195.649 113.213C195.671 112.396 195.687 111.569 195.698 110.731C195.709 109.892 195.715 109.054 195.715 108.216C195.726 107.377 195.731 106.572 195.731 105.799C195.731 105.287 195.731 104.803 195.731 104.345C195.731 103.877 195.72 103.436 195.698 103.023C195.568 103.828 195.399 104.868 195.192 106.142C194.996 107.405 194.789 108.804 194.572 110.339C194.354 111.863 194.136 113.479 193.918 115.189C193.712 116.898 193.526 118.596 193.363 120.284L190.26 120.202C189.999 118.504 189.743 116.833 189.493 115.189C189.253 113.545 189.019 111.982 188.791 110.502C188.573 109.021 188.372 107.65 188.186 106.387C188.001 105.124 187.843 104.024 187.713 103.088V108.771C187.713 109.947 187.718 111.133 187.729 112.331C187.74 113.518 187.751 114.639 187.762 115.695C187.784 116.751 187.811 117.704 187.843 118.553C187.876 119.391 187.92 120.044 187.974 120.512L183.532 120.774C183.696 119.848 183.826 118.809 183.924 117.655C184.033 116.501 184.115 115.292 184.169 114.029C184.235 112.766 184.278 111.482 184.3 110.175C184.322 108.869 184.332 107.601 184.332 106.37C184.332 105.107 184.322 103.926 184.3 102.827C184.289 101.727 184.273 100.764 184.251 99.9362C184.218 98.9673 184.191 98.08 184.169 97.2744C184.518 97.3288 184.882 97.3778 185.263 97.4213C185.644 97.454 186.02 97.4812 186.39 97.503C186.76 97.5248 187.12 97.5411 187.468 97.552C187.816 97.5629 188.132 97.5683 188.415 97.5683C188.6 97.5683 188.769 97.5683 188.921 97.5683C189.085 97.5683 189.226 97.5629 189.346 97.552C189.477 97.552 189.591 97.5465 189.689 97.5356C190.211 101.15 190.652 104.198 191.012 106.681C191.371 109.163 191.654 111.052 191.861 112.347C191.98 111.52 192.095 110.671 192.204 109.8C192.323 108.918 192.432 108.047 192.53 107.187C192.628 106.327 192.715 105.488 192.792 104.672C192.879 103.845 192.955 103.066 193.02 102.337C193.173 100.617 193.309 98.9509 193.428 97.3397C193.668 97.3615 193.929 97.3832 194.212 97.405C194.463 97.4268 194.757 97.4431 195.094 97.454C195.443 97.4649 195.824 97.4703 196.237 97.4703C196.651 97.4703 197.097 97.4649 197.576 97.454C198.055 97.4322 198.556 97.3941 199.079 97.3397C198.948 101.411 198.883 104.933 198.883 107.905C198.883 110.094 198.905 111.977 198.948 113.556C199.003 115.134 199.057 116.441 199.111 117.475C199.177 118.694 199.258 119.707 199.356 120.512L195.502 120.61Z"
					fill="white"
				/>
				<path
					d="M209.7 111.841C209.362 111.819 209.02 111.803 208.671 111.792C208.323 111.781 207.974 111.776 207.626 111.776C207.43 111.776 207.223 111.781 207.005 111.792C206.799 111.803 206.592 111.808 206.385 111.808L206.32 117.638C207.212 117.616 208.078 117.573 208.916 117.508C209.765 117.442 210.663 117.339 211.611 117.197V120.61C211.001 120.589 210.408 120.572 209.831 120.561C209.264 120.55 208.698 120.545 208.132 120.545C207.283 120.545 206.445 120.556 205.617 120.578C204.79 120.61 203.935 120.654 203.054 120.708C203.151 118.683 203.228 116.68 203.282 114.699C203.347 112.706 203.38 110.698 203.38 108.673C203.38 106.735 203.353 104.814 203.298 102.908C203.255 100.992 203.173 99.0652 203.054 97.1274C204.338 97.2254 205.563 97.2744 206.728 97.2744C207.468 97.2744 208.203 97.258 208.932 97.2254C209.673 97.1818 210.462 97.1274 211.3 97.0621V100.818C210.625 100.698 209.956 100.606 209.292 100.54C208.638 100.475 207.985 100.442 207.332 100.442H206.695C206.586 101.803 206.51 103.159 206.467 104.509C206.434 105.859 206.407 107.214 206.385 108.575C206.668 108.597 206.951 108.608 207.234 108.608C207.528 108.608 207.827 108.608 208.132 108.608C208.383 108.608 208.638 108.608 208.9 108.608C209.161 108.608 209.428 108.597 209.7 108.575V111.841Z"
					fill="white"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_69_3077"
						x1="132.138"
						y1="19.8495"
						x2="132.138"
						y2="113.61"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#67B6FF" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
				</defs></svg
			>
		</span>
		<h2
			style="color: white; font-size: 32px; line-height: 120%; letter-spacing: 0.8px;"
		>
			${title}
		</h2>
		<span style="color: white; font-size: 16px;">${path}</span>
	</div>
	`;
}
