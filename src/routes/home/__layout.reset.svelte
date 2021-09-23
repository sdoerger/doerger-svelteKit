<script lang="ts">
	// SVELTE
	// import { onMount } from 'svelte';

	// STORE
	import { dynamicTitle, dynamicSubTitle, dynamicComponent } from '$stores/dynamicTitle';

	// COMPONENTS
	import TheTopNavigation from '$lib/components/Navigation/TheTopNavigation.svelte';

	// DYNAMICS COMPONENTS
	import IntroSectionCustom from '$lib/components/Home/DynamicComponents/IntroSectionCustom.svelte';
	const dynamicsCompoenents = {
		IntroSectionCustom: IntroSectionCustom
	};
	$: $dynamicComponent;

	export const title = 'Stefan Dörger';
	export const subTitle = 'Software Development';
</script>

<div class="relative">
	<div class="bg-sdGreen-400 relative lg:fixed w-full lg:w-1/2 lg:min-h-screen inset-0">
		<div class="absolute px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 text-white">
			<div
				class="tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-sdDarkGrey-400"
			>
				<h1 class="text-7xl mb-12">
					<!-- {title} -->
					{$dynamicTitle}
				</h1>
				<!-- {sub-title} -->
				<h2 class="text-4xl">
					{$dynamicSubTitle}
				</h2>

				<svelte:component this={dynamicsCompoenents[$dynamicComponent]} />
				<!-- <svelte:component this={asdf} /> -->
			</div>
		</div>
	</div>
	<div class="w-full bg-sdDarkGrey-400 lg:min-h-screen lg:w-1/2 ml-auto inset-0">
		<TheTopNavigation />
		<div class="py-36">
			<slot />
		</div>
	</div>
</div>
