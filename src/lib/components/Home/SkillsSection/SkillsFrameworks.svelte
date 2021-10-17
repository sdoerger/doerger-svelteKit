<script lang="ts">
	import iconVue from '$lib/assets/img/icons/vue.svg';
	import iconNuxt from '$lib/assets/img/icons/nuxt.svg';
	import iconTailwindcss from '$lib/assets/img/icons/tailwindcss.svg';
	import iconVite from '$lib/assets/img/icons/vitejs.svg';
	import iconNodejs from '$lib/assets/img/icons/nodejs.svg';
	import iconGit from '$lib/assets/img/icons/git.svg';
	import iconBootstrap from '$lib/assets/img/icons/bootstrap.svg';
	import iconLinux from '$lib/assets/img/icons/ubuntu.svg';
	import iconSvelte from '$lib/assets/img/icons/svelte.svg';

	const frameworkIcons = {
		vue: iconVue,
		nuxt: iconNuxt,
		svelte: iconSvelte,
		tailwindcss: iconTailwindcss,
		vitejs: iconVite,
		nodejs: iconNodejs,
		git: iconGit,
		bootstrap: iconBootstrap,
		ubuntu: iconLinux
	};

	const codingFrameworks = [
		{
			label: 'Vue.js',
			icon: 'vue',
			level: '3',
			link: ''
		},
		{
			label: 'Nuxt.js',
			icon: 'nuxt',
			level: '2',
			link: ''
		},
		{
			label: 'TailwindCSS',
			icon: 'tailwindcss',
			level: '2',
			link: ''
		},
		{
			label: 'Svelte',
			icon: 'svelte',
			level: '1',
			link: ''
		},
		{
			label: 'Node.js',
			icon: 'nodejs',
			level: '2',
			link: ''
		},
		{
			label: 'Git (+ GitLab)',
			icon: 'git',
			level: '2',
			link: ''
		},
		{
			label: 'Bootstrap',
			icon: 'bootstrap',
			level: '3',
			link: ''
		},
		{
			label: 'Linux/Ubuntu',
			icon: 'ubuntu',
			level: '2',
			link: ''
		},
		{
			label: 'Vite',
			icon: 'vitejs',
			level: '1',
			link: ''
		}
	];
</script>

<div class="grid grid-cols-3 justify-items-center gap-4">
	{#each codingFrameworks as codingFramework}
		<!-- <div class="bg-red-400 border border-blue-400">
			{codingFramework.label}
		</div> -->
		<div class="text-center">
			<img
				src={frameworkIcons[codingFramework.icon]}
				alt=""
				class="object-contain h-36 w-full p-3 mb-5"
			/>
			<small class="text-sdlightGrey-50">{codingFramework.label}</small>
		</div>
	{/each}
</div>
