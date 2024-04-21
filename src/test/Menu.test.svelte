<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Menu from '$lib/Menu.svelte';
</script>

<Menu title="Teste Menu">
	<svelte:fragment slot="buttons">
		<Button text="Button 1" props={{ title: 'Button 1', 'aria-label': 'Button 1' }} />
		<Button text="Button 2" secondary props={{ title: 'Button 2', 'aria-label': 'Button 2' }} />
	</svelte:fragment>
</Menu>
