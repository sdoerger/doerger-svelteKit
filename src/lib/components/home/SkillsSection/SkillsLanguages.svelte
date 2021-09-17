<script lang="ts">
	// import javascript from '$assets/img/icons/javascript';
	// import typescript from '$assets/img/icons/typescript';
	// import html from '$assets/img/icons/html';
	// import css from '$assets/img/icons/css';
	// import sass from '$assets/img/icons/sass';
	// import bash from '$assets/img/icons/bash';
	// import mongodb from '$assets/img/icons/mongodb';
	// import mysql from '$assets/img/icons/mysql';

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
	{/each}
</div>
