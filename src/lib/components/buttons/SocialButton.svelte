<script lang="ts">
  export let link: string = '';
  export let label: string = '';
</script>

<button class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 border-double border-4 text-blue border-blue" aria-label={label}>
  <a href={link} target="_blank" rel="noopener noreferrer">{label}</a>
</button>

