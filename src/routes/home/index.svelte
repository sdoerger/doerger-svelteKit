<script lang="ts">
	import IntroSection from '$lib/components/home/Intro-Section.svelte';
	import ServiceSection from '$lib/components/home/Service-Section.svelte';

	// Inview / Scroll spying
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {};
</script>

<!-- <IntroSection />
<ServiceSection /> -->

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
	<IntroSection />
</div>
