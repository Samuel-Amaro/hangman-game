<script lang="ts">
	import { calculatePercentFill } from '$lib/utils';

	export let min: number;
	export let max: number;
	export let value: number;
</script>

<div
	role="progressbar"
	aria-label="Barra de vida"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	title="Barra de vida"
>
	<span data-testid="bar" style="width: {calculatePercentFill(min, max, value)}%;"></span>
</div>

<style>
	div {
		height: 16px;
		min-width: 57px;
		border-radius: 96px;
		padding: 4px;
		background-color: white;
		overflow: hidden;
	}

	span {
		display: block;
		border-radius: 96px;
		background-color: var(--dark-navy);
		height: 8px;
		transition: width ease-in-out 0.3s;
	}

	@media screen and (min-width: 680px) {
		div {
			height: 31px;
			min-width: 160px;
			padding: 9px 11px;
		}

		span {
			height: 13px;
		}
	}

	@media screen and (min-width: 950px) {
		div {
			min-width: 240px;
		}
	}
</style>
