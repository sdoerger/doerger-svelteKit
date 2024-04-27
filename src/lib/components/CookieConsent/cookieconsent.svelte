<script>
	import { onMount } from 'svelte';
	import { run, showPreferences } from 'vanilla-cookieconsent';
	import config from '$lib/components/CookieConsent/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		run(config);
	});
</script>

<button on:click={showPreferences}>Open consent preferences</button>