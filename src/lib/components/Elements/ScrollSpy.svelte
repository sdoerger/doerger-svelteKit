<script lang="ts">
	// Inview / Scroll spying
	import { inview } from 'svelte-inview';

	// Import store
	import { dynamicTitle, dynamicSubTitle, updateTitle, updateSubTitle } from '$stores/dynamicTitle';

	let isInView;
	const options = {};

	// Props
	export let sectionTitle: string,
		sectionSubtitle: string,
		sectionComponent: string = '';

	// Mutate titles
	function updateTitles() {
		updateTitle(sectionTitle);
		updateSubTitle(sectionSubtitle);
	}
</script>

<div
	use:inview={{ threshold: 0.5 }}
	on:enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
		updateTitles();
	}}
	on:change={(event) => {
		const { scrollDirection } = event.detail;
		console.log(scrollDirection);
	}}
>
	<slot />
</div>
