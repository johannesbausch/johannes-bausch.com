<script lang="ts">
  import { goto } from '$app/navigation';
  import svg from '$lib/components/svg/icons/exit.svg';

  export let target: string = '/';

  const handleGoBack = (): void => {
    goto(target);
  };
</script>

<button
  class="fixed top-4 left-4 w-16 h-16 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-4xl"
  on:click={handleGoBack}
>
  <img src={svg} alt="exit" class="w-8 h-8" />
</button>

