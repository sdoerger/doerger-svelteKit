<script lang="ts">
	import { page } from '$app/stores';
	import { dynamicComponent } from '$stores/dynamicTitle';

	$: $dynamicComponent;
	console.log($page);

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

<div class="ml-8 lg:ml-0">
	<div
		class="
          flex
          justify-between
          w-full
          h-14
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
            z-20
            md:z-10
            fixed
            w-full
            mt-14
            sm:mt-0
            lg:w-1/2
            ml-auto
            py-3
            sm:py-2
            px-12
            sm:px-24
            sm:h-12
          "
		>
			<div
				class="flex flex-col sm:flex-row justify-items-start space-y-3 lg:space-x-6 sm:space-y-0
            "
			>
				<!-- <p class="text-sdGreen-400">sd</p>
				<p class:active={$page.path === '/home#skill-section'}>
					<a sveltekit:prefetch href="/home#skill-section">Home</a>
				</p> -->
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
