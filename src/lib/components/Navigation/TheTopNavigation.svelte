<script lang="ts">
	import { page } from '$app/stores';
	import { dynamicComponent } from '$stores/dynamicTitle';

	$: $dynamicComponent;
	console.log($page);

	// let toggleState = false;
	$: toggleState = false;
	function toggleMenu(toggleTo: boolean) {
		toggleState = toggleTo;
	}

	const menuItems = [
		{
			label: 'Home',
			path: '/home#intro-section',
			dynamicComponent: ['IntroSectionCustom']
		},
		{
			label: 'Services',
			path: '/home#skill-section',
			dynamicComponent: ['ServiceSectionCustom']
		},
		{
			label: 'Skills',
			path: '/home#skill-section',
			dynamicComponent: ['SkillSectionLanguagesCustom', 'SkillSectionFrameworksCustom']
		}
	];

	function currentSection(currenPath: string, dynamicComponents: Array<string>): boolean {
		for (const component of dynamicComponents) {
			if (currenPath == component) {
				return true;
			}
		}
	}
</script>

<div class="lg:invisible flex justify-end items-center flex-wrap z-30 fixed top-4 right-4">
	{#if toggleState === false}
		<div class="h-8" on:click={() => toggleMenu(true)}>
			<div class="w-8 border-b-4 mb-1 border-sdGreen-800" />
			<div class="w-6 border-b-4 mb-1 border-sdGreen-800" />
			<div class="w-8 border-b-4 mb-1 border-sdGreen-800" />
		</div>
	{/if}
	{#if toggleState === true}
		<div class="h-8" on:click={() => toggleMenu(false)}>
			<div class="w-8 border-b-4 mb-1 border-sdGreen-800 transform -rotate-45 relative top-4" />
			<div class="w-8 border-b-4 mb-1 border-sdGreen-800 transform rotate-45 relative top-2" />
		</div>
	{/if}
</div>

<div class="lg:ml-0 transition-all duration-1500 ease-in-out">
	<div
		class="lg:bg-transparent
	flex
	justify-between
	w-full
	h-16
	pt-3
	px-6
	fixed
	z-20
	sm:hidden
	"
	/>
	<div class="relative justify-end">
		<div class="w-full lg:w-1/2 ml-auto" />
		<pre>
			{toggleState}
		</pre>
		<div
			class="
			bg-gradient-to-b
			from-sdDarkGrey-400
			via-sdDarkGrey-400 to-transparent
			z-20
			md:z-10
			fixed
			w-full
			pt-5
			md:mt-2
			xl:mt-0
			lg:w-1/2
			ml-auto
			px-12
			lg:px-24
			h-full
			lg:h-24
			{toggleState ? 'visible' : 'invisible'}
			lg:visible
		"
		>
			<div
				class="flex flex-col lg:flex-row justify-items-start space-y-3 lg:space-x-6 lg:space-y-0 text-center mt-6 text-xl"
			>
				{#each menuItems as item}
					<div class:active={currentSection($dynamicComponent, item.dynamicComponent)}>
						<a sveltekit:prefetch href="/home#skill-section">{item.label}</a>
					</div>
				{/each}
				<!-- <p class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></p>
				<p class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></p> -->
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply text-sdGreen-400 font-bold;
	}
</style>
