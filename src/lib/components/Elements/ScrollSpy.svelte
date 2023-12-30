<script lang="ts">
	// Inview / Scroll spying
	import { inview } from 'svelte-inview';

	// Import store
	import { updateTitle, updateSubTitle, updateComponent } from '$stores/dynamicTitle';

	let isInView;
	const options = {};

	// Props
	export let sectionTitle: string,
		sectionSubtitle: string,
		dynamicSVGs: string = '';

	// Mutate titles
	function updateTitles() {
		updateTitle(sectionTitle);
		updateSubTitle(sectionSubtitle);
		updateComponent(dynamicSVGs);
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
	}}
	on:leave={(event) => {
		const { scrollDirection } = event.detail;
		// Weird correction for mobile not updatiing intro component

		if (
			dynamicSVGs === 'ServiceSVG' &&
			event.detail.scrollDirection.vertical === 'down'
		) {
			updateTitle('Stefan Dörger');
			updateSubTitle('JavaScript Developer');
			updateComponent('IntroSVG');
		}
	}}
>
	<slot />
</div>
