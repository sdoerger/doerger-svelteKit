<script lang="ts">
	import iconJavascript from '$lib/assets/img/icons/javascript.svg';
	import iconTypescript from '$lib/assets/img/icons/typescript.svg';
	import iconHtml from '$lib/assets/img/icons/html.svg';
	import iconCss from '$lib/assets/img/icons/css.svg';
	import iconSass from '$lib/assets/img/icons/sass.svg';
	import iconBash from '$lib/assets/img/icons/bash.svg';
	import iconMongodb from '$lib/assets/img/icons/mongodb.svg';
	import iconMysql from '$lib/assets/img/icons/mysql.svg';

	const languageIcons = {
		javascript: iconJavascript,
		typescript: iconTypescript,
		html: iconHtml,
		css: iconCss,
		sass: iconSass,
		bash: iconBash,
		mongodb: iconMongodb,
		mysql: iconMysql
	};

	const codingLanguages = [
		{
			label: 'JavaScript',
			icon: 'javascript',
			level: '3',
			link: ''
		},
		{
			label: 'TypeScript',
			icon: 'typescript',
			level: '2',
			link: ''
		},
		{
			label: 'HTML',
			icon: 'html',
			level: '3',
			link: ''
		},
		{
			label: 'CSS',
			icon: 'css',
			level: '3',
			link: ''
		},
		{
			label: 'SASS',
			icon: 'sass',
			level: '2',
			link: ''
		},
		{
			label: 'Bash',
			icon: 'bash',
			level: '1',
			link: ''
		},
		{
			label: 'MongoDB',
			icon: 'mongodb',
			level: '1',
			link: ''
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
		<div class="text-center">
			<img
				src={languageIcons[codingLanguage.icon]}
				alt=""
				class="object-contain h-36 w-full p-3 mb-5"
			/>
			<small class="text-sdlightGrey-50">{codingLanguage.label}</small>
		</div>
	{/each}
</div>
