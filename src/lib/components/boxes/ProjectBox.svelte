<script lang="ts">
  import BoxFooter from "./BoxFooter.svelte";
  import BoxHeader from "./BoxHeader.svelte";

  export let category: string = "";
  export let title: string = "";
  export let link: string = "";
</script>

<div class="flex flex-col border border-white rounded-lg w-full max-w-sm">
  <BoxHeader>
    <div class="text-sm">{category}</div>
  </BoxHeader>
  <div class="p-3 font-bold pt-1 truncate">
    {title}
  </div>
  <BoxFooter>
    <a href={link}>
      <button class="py-1 px-2 text-xs">
        Read more
      </button>
    </a>
  </BoxFooter>
</div>

