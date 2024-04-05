<script lang="ts">
	export let min: number;
	export let max: number;
	export let value: number;

	function calculatePercentFill(min: number, max: number, value: number) {
		return (100 * (value - min)) / (max - min);
	}
</script>

<div
	role="progressbar"
	aria-label="Barra de vida"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	title="Barra de vida"
>
	<span style="width: {calculatePercentFill(min, max, value)}%;"></span>
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
</style>
