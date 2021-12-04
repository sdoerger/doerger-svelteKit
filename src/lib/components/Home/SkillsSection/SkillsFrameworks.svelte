<script lang="ts">
	// CONTENT
	import { useSkills, useFrameworkIcons } from '$lib/hooks/useSkills';
</script>

<div class="px-10 grid grid-cols-3 justify-items-center gap-4">
	{#each useSkills as codingFramework}
		{#if codingFramework.type === 'library' && codingFramework.visibleToType === true}
			<div class="text-center">
				<img
					src={useFrameworkIcons[codingFramework.icon]}
					alt=""
					class="object-contain h-36 w-36 p-3 mb-5"
				/>
				<small class="text-sdlightGrey-50">{codingFramework.label}</small>
			</div>
		{/if}
	{/each}
</div>
