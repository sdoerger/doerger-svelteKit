<script lang="ts">
	const codingLanguages = [
		{
			label: 'JavaScript',
			icon: 'js',
			level: '3'
		},
		{
			label: 'TypeScript',
			icon: 'ts',
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
			icon: 'mongo',
			level: '1'
		},
		{
			label: 'MySql',
			icon: 'sql',
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
