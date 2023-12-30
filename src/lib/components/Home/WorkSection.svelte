<script lang="ts">
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

	import { useSkills } from '$lib/hooks/useSkills';

	type work = {
		title: string;
		description: string;
		stack: number[];
		link?: string;
		status: string;
		visible: boolean;
	};

	const workExamples: work[] = [
		{
			title: 'Project Jikan',
			description: 'Task Management App',
			stack: [1, 9, 10, 16, 17],
			status: 'coming q2 2023',
			visible: true
		},
		{
			title: 'Finanz Dörger',
			description: 'Portfolio',
			stack: [20, 31, 1, 10],
			link: 'https://finanz-doerger-uk7e.vercel.app/',
			status: 'Ready to deploy',
			visible: true
		},
		{
			title: 'Publishbar',
			description: 'Social Communication App',
			stack: [1, 8, 10, 16, 17],
			link: 'https://publishbar.com',
			status: 'Coming 2022',
			visible: false
		},
		{
			title: 'Retonio',
			description: 'NPM Package: Pinia base Store and Loading Wrapper',
			stack: [1, 17],
			status: 'Live',
			link: 'https://www.npmjs.com/package/retonio',
			visible: true
		},
		{
			title: 'World for Take Away',
			description: 'Travel Blog',
			stack: [0, 9, 10, 16, 18],
			link: 'https://worldfortakeaway.com',
			status: 'Coming Q2 / 2023',
			visible: true
		},
		{
			title: 'doerger.net',
			description: 'Personal website',
			stack: [1, 11, 10, 16],
			link: 'https://doerger.net',
			status: 'Live',
			visible: false
		},
		{
			title: 'Anonymus',
			description: 'Plattform to manage customer base',
			stack: [1, 8, 10, 16, 17],
			status: 'Live (VPN)',
			visible: false
		},
		{
			title: 'branchTerminator',
			description: 'Script to delete selected branches',
			stack: [0, 12],
			status: 'Live (GitHub)',
			link: 'https://github.com/sdoerger/branchTerminator',
			visible: false
		},
		{
			title: 'gitSprintToMain',
			description: 'Script to merge feat. > dev. > main',
			stack: [5],
			status: 'Live (GitHub)',
			link: 'https://github.com/sdoerger/gitSprintToMain',
			visible: false
		},
		// {
		// 	title: 'chunkDirsMoveFiles',
		// 	description: 'Script to split files to dir',
		// 	stack: [0, 12],
		// 	status: 'Live (GitHub)',
		// 	link: 'https://github.com/sdoerger/gitSprintToMain',
		// 	visible: true
		// },
		{
			title: 'Anonymus',
			description: 'Tool to anaylse sales (ext. + Google API)',
			stack: [0, 8, 10, 19, 18],
			link: 'https://doerger.net',
			status: 'Live (premium)',
			visible: false
		},
		{
			title: 'Applied Data Scene',
			description: 'Static Website',
			stack: [0, 2, 3, 14],
			link: 'https://applieddatascience.de',
			status: 'Live',
			visible: false
		}
	];
</script>

<ScrollSpy sectionTitle="Arbeiten" sectionSubtitle="Portfolio" dynamicSVGs="WorksSVG">
	<section id="work-section" class="index-section">
		<div class="mb-6">
			<h2>Arbeiten</h2>
			<p class="mb-16">Hier eine Auswahl seiner letzten Projekte.</p>
			<ul class="mb-16 text-xl">
				{#each workExamples as work}
					{#if work.visible}
						<li class="mb-16">
							<div class="flex flex-col">
								<div class="text-sdGreen-400 mb-2">
									<a target="_blank" class={work.link ? 'underline' : ''} href={work.link}
										>{work.title}</a
									>
									<span class="text-gray-500 uppercase">// {work.description}</span>
								</div>
								<div class="text-gray-500 mb-4 italic text-lg">
									<span>/**</span>
									<br />
									<span>* technology used in project</span>
									<br />
									<span
										>* <span class="text-blue-400">@</span><span class="text-purple-400">stack</span
										>
										&#x2774;string&#x2775;:
									</span>
									{#each work.stack as stack, index}
										{#if index !== 0}
											,
										{/if}
										{#if useSkills && useSkills[stack]}
											{useSkills[stack]['label']}
										{/if}
									{/each}
									, ...
									<br />
									<span
										>* <span class="text-blue-400">@</span><span class="text-purple-400"
											>status</span
										>
										<span class="lowercase">&#x2774;{work.status}&#x2775;</span>
									</span>
									<br />
									<span>*/</span>
								</div>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
			<p>Mehr Projekte auf <a class="sd-skew" href="https://github.com/sdoerger/">GitHub</a>.</p>
		</div>
	</section>
</ScrollSpy>
