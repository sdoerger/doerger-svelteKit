<script lang="ts">
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
			label: 'Node.js',
			icon: 'node',
			level: '2'
		},
		{
			label: 'Git',
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
			label: 'Playwright',
			icon: 'play',
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
