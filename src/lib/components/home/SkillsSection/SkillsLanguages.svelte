<script lang="ts">
	import javascript from '$lib/assets/img/icons/javascript.svg';
	// import typescript from '$lib/assets/img/icons/typescript.svg';
	// import html from '$lib/assets/img/icons/html.svg';
	// import css from '$lib/assets/img/icons/css.svg';
	// import sass from '$lib/assets/img/icons/sass.svg';
	// import bash from '$lib/assets/img/icons/bash.svg';
	// import mongodb from '$lib/assets/img/icons/mongodb.svg';
	// import mysql from '$lib/assets/img/icons/mysql.svg';

	const codingLanguages = [
		{
			label: 'JavaScript',
			icon: 'javascript',
			level: '3'
		},
		{
			label: 'TypeScript',
			icon: 'typescript',
			level: '2'
		},
		{
			label: 'HTML',
			icon: 'html',
			level: '3'
		},
		{
			label: 'CSS',
			icon: 'css',
			level: '3'
		},
		{
			label: 'SASS',
			icon: 'sass',
			level: '2'
		},
		{
			label: 'Bash',
			icon: 'bash',
			level: '1'
		},
		{
			label: 'MongoDB',
			icon: 'mongodb',
			level: '1'
		},
		{
			label: 'MySql',
			icon: 'mysql',
			level: '1'
		}
	];
</script>

<div class="grid grid-cols-3 justify-items-center gap-4">
	{#each codingLanguages as codingLanguage}
		<div class="bg-red-400 border border-blue-400">
			{codingLanguage.label}
		</div>
		<!-- <img src={javascript} alt="" /> -->
	{/each}
</div>
