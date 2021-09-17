<script lang="ts">
	import ScrollSpy from '$lib/components/Elements/ScrollSpy.svelte';

  const sectionTitle = 'Skills'
</script>

<ScrollSpy sectionTitle="{sectionTitle}" sectionSubtitle="Programmiersprachen">
	<section class="index-section px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 lg:pt-36 text-sdlightGrey-50 lg:text-2xl">
		<div class="mb-10">
			<p>Folgende</p>
		</div>
	</section>
</ScrollSpy>

<ScrollSpy sectionTitle="{sectionTitle}" sectionSubtitle="Frameworks/Libraries">
	<section class="index-section px-12 pt-36 lg:top-16 lg:left-0 lg:p-20 lg:pt-36 text-sdlightGrey-50 lg:text-2xl">
		<div class="mb-10">
			<p>Folgende</p>
		</div>
	</section>
</ScrollSpy>
