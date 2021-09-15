<script lang="ts">
	import TheTopNavigation from '$lib/header/TheTopNavigation.svelte';
	import { dynamicTitle } from '$lib/stores/dynamicTitle';

	// Var to assign from store
	let dynamicTitle_value;

	// Like computed to get value from store
	const unsubscribe = dynamicTitle.subscribe((value) => {
		dynamicTitle_value = value;
	});

	function updateDynamicTitle(newText: string) {
		dynamicTitle.set(newText);
	}

	export const title = 'Stefan Dörger';
	export const subTitle = 'Software Development';
</script>

<TheTopNavigation />

<div class="relative">
	<div class="bg-sdGreen-400 relative lg:fixed w-full lg:w-1/2 lg:min-h-screen inset-0">
		<div class="absolute px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 text-white">
			<div
				class="tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-sdDarkGrey-400"
			>
				<p class="text-7xl mb-12">
					<!-- {title} -->
					{dynamicTitle_value}
				</p>
				<p class="text-4xl">
					{subTitle}
				</p>
				<button class="bg-red-400 p-3 mt-10" on:click={() => updateDynamicTitle('Software Development')}>
					UPDATE
				</button>
			</div>
		</div>
	</div>
	<div class="w-full bg-sdDarkGrey-400 lg:min-h-screen lg:w-1/2 ml-auto inset-0">
		<div class="px-12 pt-36 lg:top-16 lg:left-0 lg:p-20">
			<main>
				<slot />
			</main>
		</div>
	</div>
</div>
