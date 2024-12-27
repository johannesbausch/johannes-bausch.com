<script lang="ts">
  export let shortStoryParagraph: string = '';
</script>

<div class="flex flex-col mt-6 border border-dashed border-blue rounded-lg w-full max-w-lg">
  <p class="text-left text-white text-lg w-full px-4 py-4 tracking-wide">
    {@html shortStoryParagraph}
  </p>
</div>

