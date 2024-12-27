<script lang="ts">
  import HighlightedHeadline from '$lib/components/typography/HighlightedHeadline.svelte';
  import RegularHeadline from '$lib/components/typography/RegularHeadline.svelte';
  import ShortStoryParagraph from '$lib/components/typography/ShortStoryParagraph.svelte';
  import type { Project } from '$lib/types/project';
  import GoBackButton from '$lib/components/buttons/GoBackButton.svelte';

  export let data: Project;
</script>

<main>
  <section>
    <GoBackButton target="/" />
    <RegularHeadline regularHeadline="Project:" />
    <HighlightedHeadline highlightedHeadline={data.title} />
    <ShortStoryParagraph shortStoryParagraph={data.description} />
  </section>
</main>

