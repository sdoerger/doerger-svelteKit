<script lang="ts">
	// Inview / Scroll spying
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {};

	// Props
	export let sectionTitle: string, sectionSubtitle: string, sectionComponent: string = '';
</script>

<pre>
  {isInView}
</pre>

<div
	use:inview={options}
	on:change={(event) => {
		const { inView, entry, scrollDirection, observe, unobserve } = event.detail;
		isInView = inView;
	}}
	on:enter={(event) => {
		const { inView, entry, scrollDirection, observe, unobserve } = event.detail;
		isInView = inView;
	}}
	on:leave={(event) => {
		const { inView, entry, scrollDirection, observe, unobserve } = event.detail;
		isInView = inView;
	}}
>
	>{isInView ? 'Hey I am in the viewport' : 'Bye, Bye'}
	<!-- <IntroSection /> -->
	<slot />
</div>
