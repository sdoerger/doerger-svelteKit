<script lang="ts">
	// STORE
	import { dynamicTitle, dynamicSubTitle, dynamicComponent } from '$stores/dynamicTitle';

	// COMPONENTS
	import TheTopNavigation from '$lib/components/Navigation/TheTopNavigation.svelte';

	// DYNAMICS COMPONENTS
	import IntroSectionCustom from '$lib/components/Home/DynamicComponents/IntroSectionCustom.svelte';
	import ServiceSectionCustom from '$lib/components/Home/DynamicComponents/ServiceSectionCustom.svelte';
	import SkillSectionLanguagesCustom from '$lib/components/Home/DynamicComponents/SkillSectionLanguagesCustom.svelte';
	import SkillSectionFrameworksCustom from '$lib/components/Home/DynamicComponents/SkillSectionFrameworksCustom.svelte';

	const dynamicsCompoenents = {
		IntroSectionCustom,
		ServiceSectionCustom,
		SkillSectionLanguagesCustom,
		SkillSectionFrameworksCustom
	};
	$: $dynamicComponent;

	let screenWidth;

	export const title = 'Stefan Dörger';
	export const subTitle = 'Software Development';
	const svgColor = 'text-sdDarkGrey-400';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="relative">
	<div class="bg-sdGreen-400 fixed w-full invisible lg:visible lg:w-1/2 lg:min-h-screen lg:inset-0">
		<div
			class="lg:absolute px-12 pt-6 lg:pt-12 xl:pt-36 lg:top-16 lg:left-0 lg:p-20 text-white  h-full"
		>
			<div class="flex flex-col justify-between h-full pb-10">
				<div
					class="tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-sdDarkGrey-400"
				>
					<h1 class="lg:text-7xl pb-8">
						<!-- {title} -->
						{$dynamicTitle}
					</h1>
					<!-- {sub-title} -->
					<h2 class="text-4xl">
						{$dynamicSubTitle}
					</h2>
				</div>
				<div class="">
					<!-- <div class="absolute top-52"> -->
					{#if screenWidth >= 1024}
						<svelte:component this={dynamicsCompoenents[$dynamicComponent]} {svgColor} />
					{/if}
				</div>
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
