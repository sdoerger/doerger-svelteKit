<script lang="ts">
	import WorksSVG from './DynamicSVGs/WorksSVG.svelte';

	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import { useSkills } from '$lib/hooks/useSkills';
	// console.log(useSkills);

	const workExamples: [] = [
		{
			title: 'Untitled Projet',
			description: 'Social Communication App',
			stack: [1, 8, 10, 16, 17],
			link: 'https://publishbar.com',
			status: 'Coming 2022'
		},
		{
			title: 'Publishbar',
			description: 'Task Management App',
			stack: [1, 8, 10, 16, 17],
			link: null,
			status: 'Coming 2022'
		},
		{
			title: 'World for Take Away',
			description: 'Dev Blog and personal website',
			stack: [2, 9, 10, 16, 18],
			link: 'https://worldfortakeaway.com',
			status: '2021'
		},
		{
			title: 'doerger.net',
			description: 'Travel Blog',
			stack: [1, 11, 10, 16, 19],
			link: 'https://doerger.net',
			status: 'Live'
		},
		{
			title: 'Applied Data Scene',
			description: 'Static Website',
			stack: [0, 2, 3, 14],
			link: 'https://applieddatascience.de',
			status: 'Live'
		}
	];
</script>

<ScrollSpy sectionTitle="Arbeiten" sectionSubtitle="Portfolio" dynamicSVGs="WorksSVG">
	<section id="services-section" class="index-section">
		<div class="mb-6">
			<h2
				class="pb-4 tracking-tighter font-bold uppercase leading-none md:mx-auto font-josefinSans text-3xl mt-20"
			>
				Arbeiten
			</h2>
			<h3 class="pb-4">... Von Ihrer Idee</h3>
			<p class="mb-16 text-xl">
				Hi, ich bin Stefan, Software-Entwickler (Fullstack Web-Development) mit 4 Jahren Erfahrung.
				Mein Beruf ist mein Hobby und umgekehrt: Ich liebe es, responsive Websites und Web-Apps zu
				programmieren. Wichtig ist mir dabei, dass diese nicht wie aus Beton gemacht aussehen, mehr
				können, als nur gut aussehen und ihre Besucher erreichen.
			</p>

			<ul class="mb-16 text-xl">
				{#each workExamples as work}
					<li>
						<div class="flex flex-col">
							<div>{work.title}</div>
							<div>{work.description}</div>

							{#each work.stack as stack, index}
								{#if index !== 0}
									,
								{/if}
								{useSkills[stack].label}
							{/each}
							<li>
								{work.status}
							</li>
							<li>
								{work.link}
							</li>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</ScrollSpy>
