<script lang="ts">
  import "../app.css";
  import ScrollBar from "$lib/components/layout/ScrollBar.svelte";

  let innerWidth: number = 0;
  let innerHeight: number = 0;
</script>

<div class="flex flex-col w-full h-full">
  <ScrollBar>
    <slot />
  </ScrollBar>
</div>
<svelte:window bind:innerHeight bind:innerWidth/>

