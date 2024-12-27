<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';
  import svg from '$lib/components/svg/icons/heart.svg';
  import type { HeartCountRespone } from '$lib/types/res/heart-count-response';

  let heartCount: Writable<number> = writable(0);

  async function getHeartCount(): Promise<void> {
    const response = await fetch('/heart-count'); // Updated path
    if (response.ok) {
      const data: HeartCountRespone = await response.json();
      heartCount.set(data.count);
    }
  }

  async function leaveHeart(): Promise<void> {
    const response = await fetch('/heart-count', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data: HeartCountRespone = await response.json();
      heartCount.set(data.count);
    }
  }

  onMount(() => {
    getHeartCount();
  });
</script>

<div class="flex flex-col items-center">
  <button
    on:click={leaveHeart}
    class="flex w-64 h-64 items-center justify-center text-white"
  >
    <img src={svg} alt="heart"/>
  </button>
  <p class="mt-8">
    {$heartCount}
  </p>
</div>

