<script lang="ts">
	import { page } from '$app/stores';
	import { dynamicComponent } from '$stores/dynamicTitle';

	$: $dynamicComponent;

	// let toggleState = false;
	$: toggleState = false;
	function toggleMenu(toggleTo: boolean) {
		toggleState = toggleTo;
	}

	const menuItems = [
		{
			label: 'Home',
			path: '/#intro-section',
			dynamicComponent: ['IntroSVG']
		},
		{
			label: 'Services',
			path: '/#services-section',
			dynamicComponent: ['ServiceSVG']
		},
		{
			label: 'Skills',
			path: '/#skill-section',
			dynamicComponent: ['SkillLanguagesSVG', 'SkillFrameworksSVG']
		},
		{
			label: 'Arbeiten',
			path: '/#work-section',
			dynamicComponent: ['WorksSVG']
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

<div
	class="lg:invisible flex justify-between pl-10 pr-2 py-2 items-center flex-wrap z-30 fixed h-16 w-full 			bg-gradient-to-b
	from-sdDarkGrey-400
	via-sdDarkGrey-400 to-transparent"
>
	<h1
		class="text-xl tracking-tighter font-bold uppercase leading-none font-josefinSans text-sdGreen-400"
	>
		<!-- {title} -->
		Stefan Dörger
	</h1>
	<div>
		{#if toggleState === false}
			<div class="h-8" on:click={() => toggleMenu(true)}>
				<div class="w-8 border-b-4 mb-1 border-sdGreen-400" />
				<div class="w-6 border-b-4 mb-1 border-sdGreen-400" />
				<div class="w-8 border-b-4 mb-1 border-sdGreen-400" />
			</div>
		{/if}
		{#if toggleState === true}
			<div class="h-8" on:click={() => toggleMenu(false)}>
				<div class="w-8 border-b-4 mb-1 border-sdGreen-400 transform -rotate-45 relative top-2" />
				<div class="w-8 border-b-4 mb-1 border-sdGreen-400 transform rotate-45 relative" />
			</div>
		{/if}
	</div>
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
		<div
			class="
			bg-gradient-to-b
			from-sdDarkGrey-400
			via-sdDarkGrey-400 to-transparent
			z-20
			md:z-10
			fixed
			w-full
			pt-10
			lg:pt-1
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
				class="flex flex-col lg:flex-row justify-items-start space-y-3 lg:space-x-6 lg:space-y-0 text-center mt-6 text-xl text-sdGreen-400"
			>
				{#each menuItems as item}
					<div
						class:active={currentSection($dynamicComponent, item.dynamicComponent)}
						on:click={() => toggleMenu(false)}
					>
						<a sveltekit:prefetch href={item.path}>{item.label}</a>
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
		@apply text-sdGreen-400 font-bold border-b-2 border-sdGreen-400;
	}
</style>
