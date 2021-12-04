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
			<h2
				
			>
				Intro
			</h2>
			<h3 class="pb-4">... Von Ihrer Idee</h3>
			<p class="mb-16 text-xl">
				Hi, ich bin Stefan, Software-Entwickler (Fullstack Web-Development) mit 4 Jahren Erfahrung.
				Mein Beruf ist mein Hobby und umgekehrt: Ich liebe es, responsive Websites und Web-Apps zu
				programmieren. Wichtig ist mir dabei, dass diese nicht wie aus Beton gemacht aussehen, mehr
				können, als nur gut aussehen und ihre Besucher erreichen.
			</p>
			<h3 class="pb-4">... zu Ihrer Website</h3>
			<p class="text-xl">
				Für wen mache ich das? Für alle, deren Vision von Templates zerhackt wird und die
				Funktionalität brauchen, die ein Baukasten nicht bietet. Ich biete einen Rundum-Service, von
				der Plaung bis zum Hosting; mein Fokus liegt hierbei auf der Programmierung, Gestaltung und
				Beratung.
			</p>
		</div>
	</section>
</ScrollSpy>
