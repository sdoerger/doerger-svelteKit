<script lang="ts">
	// CONTENT
	import { useSkills, useFrameworkIcons } from '$lib/hooks/useSkills';
</script>

<div class="px-10 grid grid-cols-3 justify-items-center gap-4">
	{#each useSkills as codingLanguage}
		{#if codingLanguage.type === 'language' && codingLanguage.visibleToType === true}
			<div class="text-center">
				<img
					src={useFrameworkIcons[codingLanguage.icon]}
					alt=""
					class="object-contain h-36 w-36 p-3 mb-5"
				/>
				<small class="text-sdlightGrey-50">{codingLanguage.label}</small>
			</div>
		{/if}
	{/each}
</div>
