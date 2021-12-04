<script lang="ts">
	// SVELTE
	import { page } from '$app/stores';

	// ASSETS
	import iconGitHub from '$lib/assets/img/icons/github.svg';
	import iconFaceBook from '$lib/assets/img/icons/facebook.svg';
	import iconLinkedIn from '$lib/assets/img/icons/linkedin.svg';

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

	const socialMedia = [
		{
			label: 'GitHub',
			link: 'https://github.com/sdoerger/',
			icon: iconGitHub
		},
		{
			label: 'Facebook',
			link: 'https://www.facebook.com/StefanDoergerWebDev',
			icon: iconFaceBook
		},
		{
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/stefan-d-195b4a47/',
			icon: iconLinkedIn
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
<div
	class="flex flex-row justify-center lg:justify-start items-center space-x-6 space-y-0 text-center mt-6 text-xl text-sdGreen-400"
>
	{#each socialMedia as media}
		<a target="_blank" href={media.link}>
			<img src={media.icon} alt="" class="object-contain h-7 w-full mb-5" />
		</a>
	{/each}
	<!-- <p class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></p>
		<p class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></p> -->
</div>
<div class="h-12" />

<style lang="postcss">
	.active {
		@apply text-sdGreen-400 font-bold border-b-2 border-sdGreen-400;
	}
</style>
