<script lang="ts">
	import '../styles/index.css';
	import Alert from '$lib/Alert.svelte';
	import { onMount } from 'svelte';
	import { visitCounter } from '$lib/stores/data';

	onMount(() => {
		$visitCounter = $visitCounter + 1
	})
</script>

<slot />
<Alert />