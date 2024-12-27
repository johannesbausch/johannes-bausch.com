<script lang="ts">
  import BoxHeader from "./BoxHeader.svelte";

  export let category: string = "";
  export let icons: string[] = [];
</script>

<div class="flex flex-col border border-white rounded-lg w-full max-w-sm">
  <BoxHeader>
    <div class="text-sm">{category}</div>
  </BoxHeader>
  <div class="flex justify-center gap-4 p-3">
    {#each icons as svg}
      <img src={svg} alt={category} class="w-8 h-8 object-contain" style="background-color: transparent;" />
    {/each}
  </div>
</div>

