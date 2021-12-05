<script lang="ts">
	// Components
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import SkillsLanguages from '$lib/components/Home/SkillsSection/SkillsLanguages.svelte';
	import SkillsFrameworks from '$lib/components/Home/SkillsSection/SkillsFrameworks.svelte';

	const sectionTitle = 'Skills';
</script>

<ScrollSpy {sectionTitle} sectionSubtitle="Programmiersprachen" dynamicSVGs="SkillLanguagesSVG">
	<section id="skill-section" class="index-section">
		<div class="mb-6">
			<h2
				class="pb-4 tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-3xl mt-20 break-words"
			>
				Programmier<wbr />sprachen
			</h2>
			<p class="mb-16 text-xl">
				Mit diesen Programmiersprachen (Auszeichnungs-, Style-Sprachen) arbietet er <span
					class="sd-skew">täglich</span
				> bis häufig.
			</p>
			<SkillsLanguages />
		</div>
	</section>
</ScrollSpy>

<ScrollSpy {sectionTitle} sectionSubtitle="Frameworks/Libraries" dynamicSVGs="SkillFrameworksSVG">
	<section class="index-section">
		<div class="mt-28 mb-6">
			<h2>Frame<wbr />works</h2>
			<p class="mb-16 text-xl">
				Diese Frameworks <span class="sd-skew">Libraries und Tools</span> werden dabei eingesetzt.
			</p>

			<SkillsFrameworks />
		</div>
	</section>
</ScrollSpy>
