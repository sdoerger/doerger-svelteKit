<script lang="ts">
	import '../app.postcss';
	// STORE
	import { dynamicTitle, dynamicSubTitle, dynamicComponent } from '$stores/dynamicTitle';

	// COMPONENTS
	import TheTopNavigation from '$lib/components/Navigation/TheTopNavigation.svelte';
	import TheBottomNavigation from '$lib/components/Navigation/TheBottomNavigation.svelte';

	// DYNAMICS COMPONENTS
	import IntroSVG from '$lib/components/Home/DynamicSVGs/IntroSVG.svelte';
	import ServiceSVG from '$lib/components/Home/DynamicSVGs/ServiceSVG.svelte';
	import SkillLanguagesSVG from '$lib/components/Home/DynamicSVGs/SkillLanguagesSVG.svelte';
	import SkillFrameworksSVG from '$lib/components/Home/DynamicSVGs/SkillFrameworksSVG.svelte';
	import WorksSVG from '$lib/components/Home/DynamicSVGs/WorksSVG.svelte';

	const dynamicsCompoenents = {
		IntroSVG,
		ServiceSVG,
		SkillLanguagesSVG,
		SkillFrameworksSVG,
		WorksSVG
	};
	$: $dynamicComponent;

	let screenWidth;

	export const title = 'Stefan Dörger';
	export const subTitle = 'Software Development';
	const svgColor = 'text-sdDarkGrey-400';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svelte:head>
	<title>Stefan Dörger: JavaScript Entwickler, Vue.js-Experte</title>
	<meta
		name="description"
		content="Stefan Dörger Entwickler aus Berlin. Mit Vue.js baut er aus JavaScript und TypeScript, Landing Pages und Apps für Web und ist Teil der Open Source Community."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="de" />
</svelte:head>

<div class="relative">
	<div class="bg-sdGreen-400 fixed w-full invisible lg:visible lg:w-1/2 lg:min-h-screen lg:inset-0">
		<div
			class="lg:absolute px-12 pt-6 lg:pt-12 xl:pt-36 lg:top-16 lg:left-0 lg:p-20 text-white  h-full"
		>
			<div class="flex flex-col justify-between h-full pb-10">
				<div
					class="tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-sdDarkGrey-400"
				>
					<h1 class="lg:text-7xl pb-4 drop-shadow-md">
						<!-- {title} -->
						{$dynamicTitle}
					</h1>
					<!-- {sub-title} -->
					<h2 class="text-4xl lg:mt-5 drop-shadow-md">
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
		<div class="py-16 lg:py-32">
			<slot />
		</div>
		<div class="py-2 px-10 lg:px-24 h-16">
			<TheBottomNavigation />
		</div>
	</div>
</div>
