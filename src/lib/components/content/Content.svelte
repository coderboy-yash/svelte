<script>
  import ContentCard from "./ContentCard.svelte";
  import { data, brand } from "../../store/carData.js";
  import { onDestroy } from "svelte";

  const unsubscribe = brand.subscribe((value) => {
    console.log(value);
  });
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<div
  class="flex h-fit flex-1 flex-wrap items-end justify-center gap-6 bg-slate-100 p-4"
>
  {#each data as car}
    <ContentCard {car} key={car.id} />
  {/each}
</div>
