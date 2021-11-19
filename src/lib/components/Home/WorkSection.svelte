<script lang="ts">
	import WorksSVG from './DynamicSVGs/WorksSVG.svelte';

	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import { useSkills } from '$lib/hooks/useSkills';
	// console.log(useSkills);

	const workExamples: [] = [
		{
			title: 'Publishbar',
			description: 'Social Communication App',
			stack: [1, 8, 10, 16, 17],
			link: 'https://publishbar.com',
			status: 'Coming 2022'
		},
		// {
		// 	title: 'Projekt Jikan',
		// 	description: 'Task Management App',
		// 	stack: [1, 8, 10, 16, 17],
		// 	link: null,
		// 	status: 'Coming 2022'
		// },
		{
			title: 'World for Take Away',
			description: 'Travel Blog',
			stack: [0, 9, 10, 16, 18],
			link: 'https://worldfortakeaway.com',
			status: '2021'
		},
		{
			title: 'doerger.net',
			description: 'Dev Blog and personal website',
			stack: [1, 11, 10, 16],
			link: 'https://doerger.net',
			status: 'Live'
		},
		{
			title: 'branchTerminator',
			description: 'Script to delete selected branches',
			stack: [0, 12],
			status: 'Live (GitHub)',
			link: 'https://github.com/sdoerger/branchTerminator',
		},
		{
			title: 'gitSprintToMain',
			description: 'Script to merge feat. > dev. > main',
			stack: [5],
			status: 'Live (GitHub)',
			link: 'https://github.com/sdoerger/gitSprintToMain',
		},
		{
			title: 'chunkDirsMoveFiles',
			description: 'Script to split files to dir',
			stack: [0, 12],
			status: 'Live (GitHub)',
			link: 'https://github.com/sdoerger/gitSprintToMain',
		},
		{
			title: 'Anonymus',
			description: 'Plattform to manage customer base',
			stack: [1, 8, 10, 16, 17],
			status: 'Live (VPN)'
		},
		{
			title: 'Anonymus',
			description: 'Tool to anaylse sales (ext. + Google API)',
			stack: [0, 8, 10, 19, 18],
			link: 'https://doerger.net',
			status: 'Live (premium)'
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
	<section id="work-section" class="index-section">
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
					<li class="mb-16">
						<div class="flex flex-col">
							<div class="text-sdGreen-800 mb-2">
								<a class="underline" href={work.link}>{work.title}</a>
								<span class="text-gray-500 ml-3 uppercase">// {work.description}</span>
							</div>
							<div class="text-gray-500 my-4 italic">
								<span>/**</span>
								<br />
								<span>* technology used in project</span>
								<br />
								<span
									>* <span class="text-blue-400">@</span><span class="text-purple-400">stack</span>
									&#x2774;string&#x2775;:
								</span>
								{#each work.stack as stack, index}
									{#if index !== 0}
										,
									{/if}
									{useSkills[stack].label}
								{/each}
								, ...
								<br />
								<span
									>* <span class="text-blue-400">@</span><span class="text-purple-400">status</span>
									<span class="lowercase">&#x2774;{work.status}&#x2775;</span>
								</span>
								<br />
								<span>*/</span>
							</div>
							<li />
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</ScrollSpy>
