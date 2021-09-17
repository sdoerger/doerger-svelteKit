<script lang="ts">
	// import vue from '$lib/assets/img/icons/vue';
	// import nuxt from '$lib/assets/img/icons/nuxt';
	// import tailwindcss from '$lib/assets/img/icons/tailwind';
	// import vite from '$lib/assets/img/icons/vite';
	// import nodejs from '$lib/assets/img/icons/nodejs';
	// import git from '$lib/assets/img/icons/git';
	// import boot from '$lib/assets/img/icons/boot';
	// import linux from '$lib/assets/img/icons/linux';
	// import puppeteer from '$lib/assets/img/icons/puppeteer';

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
			icon: 'nuxt',
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
			icon: 'boot',
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
		<div class="bg-red-400 border border-blue-400">
			{codingFramework.label}
		</div>
	{/each}
</div>
