<script lang="ts">
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';
	import IntroSVG from './DynamicSVGs/IntroSVG.svelte';

	let screenWidth;
	const svgColor = 'text-sdGreen-400';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<ScrollSpy
	sectionTitle="Stefan Dörger"
	sectionSubtitle="JavaScript Developer"
	dynamicSVGs="IntroSVG"
>
	<section class="index-section">
		<div>
			{#if screenWidth <= 1024}
				<h2
					class="tracking-tighter font-bold uppercase leading-none font-josefinSans text-sdDarkGrey-400 text-3xl mt-10"
				>
					JavaScript Developer
				</h2>
				<!-- {sub-title} -->

				<div class="mx-12 my-12">
					<svelte:component this={IntroSVG} {svgColor} />
				</div>
			{/if}
		</div>
		<div class="mb-6">
			<h2>Intro</h2>
			<p class="sd-like-p mb-16 text-xl text-sdlightGrey-50">
				Stefan ist ein <span class="sd-skew">Frontend</span>-Entwickler aus Berlin. Spezialisiert
				hat er sich auf <span class="sd-skew">JAM-Stack</span>
				<span class="italic">(JavaScript, API, Markdown)</span> und baut mittels
				<span class="sd-skew">Vue.js</span>, Web-Apps / SPA (Singel Page Applikation).
				<br /><br />
				Wichtigste Erkenntnis: Die Flamme der <span class="sd-skew">Neugier</span> brennt nicht aus.
				Daher macht er das schon seit einigen Jahren.
				<br /><br />
				Er ist aktiv in der <span class="sd-skew">Open Source</span> Community, veröffentlicht auf
				<span class="sd-skew">GitHub</span>
				und <span class="sd-skew">NPM</span> nützliche Skripte und Packages. Er ist auf Github und
				<span class="sd-skew">StackOverflow</span>
				im regen Austausch mit Experten und Anfängern.
				<br />
				<br />

				Dazu ist er ein Arbeitkultur-Allrounder und hat bei <span class="sd-skew">Fortune 500</span>
				Unternehmen <span class="sd-skew">(mehrjährig im Ausland)</span> sowie 10-Mensch-Agenturen gearbeitet.
			</p>
		</div>
	</section>
</ScrollSpy>
