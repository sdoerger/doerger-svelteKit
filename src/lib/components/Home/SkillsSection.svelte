<script lang="ts">
	// Components
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import SkillsLanguages from '$lib/components/Home/SkillsSection/SkillsLanguages.svelte';
	import SkillsFrameworks from '$lib/components/Home/SkillsSection/SkillsFrameworks.svelte';
	import SkillsTechnology from './SkillsSection/SkillsTechnology.svelte';

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
				Mit diesen <span class="sd-skew">Programmiersprachen</span> (Auszeichnungs-, Style-Sprachen)
				arbietet er <span class="sd-skew">täglich</span> bis sehr häufig.
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
				Diese <span class="sd-skew">Frameworks</span>
				<span class="sd-skew">Libraries und Tools</span>
				werden dabei
				<span class="sd-skew">täglich</span> bis sehr häufig eingesetzt.
			</p>

			<SkillsFrameworks />
		</div>
	</section>
</ScrollSpy>

<ScrollSpy {sectionTitle} sectionSubtitle="Weitere Technologien" dynamicSVGs="SkillFrameworksSVG">
	<section class="index-section">
		<div class="mt-28 mb-6">
			<h2>Weitere <wbr />Technologien</h2>
			<p class="mb-16 text-xl">
				Mit folgenden <span class="sd-skew">Technologien</span> wird
				<span class="sd-skew">gelegendlich</span> gearbeitet oder wurden ausprobiert.
			</p>

			<SkillsTechnology />
		</div>
	</section>
</ScrollSpy>
