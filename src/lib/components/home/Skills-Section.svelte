<script lang="ts">
	// Components
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import SkillsLanguages from './SkillsSection/SkillsLanguages.svelte';
	import SkillsFrameworks from './SkillsSection/SkillsFrameworks.svelte';

	const sectionTitle = 'Skills';
</script>

<ScrollSpy {sectionTitle} sectionSubtitle="Programmiersprachen">
	<section
		class="index-section px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 lg:pt-36 text-sdlightGrey-50 lg:text-2xl"
	>
		<div class="mb-10">
			<p>Hier eine Auswahl der Programmiersprachen die ich täglich nutze.</p>
			<SkillsLanguages />
		</div>
	</section>
</ScrollSpy>

<ScrollSpy {sectionTitle} sectionSubtitle="Frameworks/Libraries">
	<section
		class="index-section px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 lg:pt-36 text-sdlightGrey-50 lg:text-2xl"
	>
		<div class="mb-10">
			<p>Hier eine Auswahl der Programmiersprachen die ich täglich nutze.</p>

			<SkillsFrameworks />
		</div>
	</section>
</ScrollSpy>
