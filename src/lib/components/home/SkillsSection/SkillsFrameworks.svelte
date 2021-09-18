<script lang="ts">
	import iconVue from '$lib/assets/img/icons/vue.svg';
	import iconNuxt from '$lib/assets/img/icons/nuxt.svg';
	import iconTailwindcss from '$lib/assets/img/icons/tailwind.svg';
	// import iconVite from '$lib/assets/img/icons/vite.svg';
	import iconNodejs from '$lib/assets/img/icons/nodejs.svg';
	import iconGit from '$lib/assets/img/icons/git.svg';
	import iconBootstrap from '$lib/assets/img/icons/bootstrap.svg';
	import iconLinux from '$lib/assets/img/icons/ubuntu.svg';
	import iconPuppeteer from '$lib/assets/img/icons/puppeteer.svg';
	import iconSvelte from '$lib/assets/img/icons/svelte.svg';

	const frameworkIcons = {
		vue: iconVue,
		nuxt: iconNuxt,
		svelte: iconSvelte,
		tailwindcss: iconTailwindcss,
		// vite: iconVite,
		nodejs: iconNodejs,
		git: iconGit,
		boot: iconBootstrap,
		linux: iconLinux,
		puppeteer: iconPuppeteer
	};

	const codingFrameworks = [
		{
			label: 'Vue.js',
			icon: 'vue',
			level: '3'
		},
		{
			label: 'Nuxt.js',
			icon: 'nuxt',
			level: '2'
		},
		{
			label: 'Svelte',
			icon: 'svelte',
			level: '1'
		},
		{
			label: 'TailwindCSS',
			icon: 'tailwind',
			level: '2'
		},
		{
			label: 'Vite',
			icon: 'vite',
			level: '1'
		},
		{
			label: 'Node.js',
			icon: 'nodejs',
			level: '2'
		},
		{
			label: 'Git (+ GitLab)',
			icon: 'git',
			level: '2'
		},
		{
			label: 'Bootstrap',
			icon: 'bootstrap',
			level: '3'
		},
		{
			label: 'Linux/Ubuntu',
			icon: 'linux',
			level: '2'
		},
		{
			label: 'Puppeteer/Playwright',
			icon: 'puppeteer',
			level: '1'
		}
	];
</script>

<div class="grid grid-cols-3 justify-items-center gap-4">
	{#each codingFrameworks as codingFramework}
		<!-- <div class="bg-red-400 border border-blue-400">
			{codingFramework.label}
		</div> -->
		<img src={frameworkIcons[codingFramework.icon]} alt="" class="object-contain h-36 w-full p-3" />
	{/each}
</div>
