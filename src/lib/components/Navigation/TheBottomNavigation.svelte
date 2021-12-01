<script lang="ts">
	import { page } from '$app/stores';
	const ghostedMail = ['info', '@', 'doerger', '.', 'net'];

	const menuItems = [
		{
			label: 'Impressum',
			path: '/legal'
		},
		{
			label: 'Datenschutz',
			path: '/privacy'
		}
	];
</script>

<div
	class="flex flex-col lg:flex-row justify-items-start space-y-3 lg:space-x-6 lg:space-y-0 text-center mt-6 text-xl text-sdGreen-400"
>
	{#each menuItems as item}
		<div class:active={$page.path === item.path}>
			<a sveltekit:prefetch href={item.path}>{item.label}</a>
		</div>
	{/each}
	<a href="mailto:{ghostedMail.join('')}">{ghostedMail.join('')}</a>
	<!-- <p class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></p>
		<p class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></p> -->
</div>
<div class="h-12" />

<style lang="postcss">
	.active {
		@apply text-sdGreen-400 font-bold border-b-2 border-sdGreen-400;
	}
</style>
