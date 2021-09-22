<script lang="ts">
	// Components
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import SkillsLanguages from '$lib/components/Home/SkillsSection/SkillsLanguages.svelte';
	import SkillsFrameworks from '$lib/components/Home/SkillsSection/SkillsFrameworks.svelte';

	const sectionTitle = 'Skills';
</script>

<ScrollSpy {sectionTitle} sectionSubtitle="Programmiersprachen">
	<section
		class="index-section"
	>
		<div class="mb-10">
			<p>Hier eine Auswahl der Programmiersprachen die ich täglich nutze.</p>
			<SkillsLanguages />
		</div>
	</section>
</ScrollSpy>

<ScrollSpy {sectionTitle} sectionSubtitle="Frameworks/Libraries">
	<section
		class="index-section"
	>
		<div class="mb-10">
			<p>Hier eine Auswahl der Programmiersprachen die ich täglich nutze.</p>

			<SkillsFrameworks />
		</div>
	</section>
</ScrollSpy>
