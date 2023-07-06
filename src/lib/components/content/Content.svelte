<script>
  import ContentCard from "./ContentCard.svelte";
  import { data } from "../../store/carData.js";
</script>

<div
  class="flex h-fit flex-1 flex-wrap items-end justify-center gap-6 bg-slate-200 p-4"
>
  {#each data as car}
    <ContentCard {car} key={car.id} />
  {/each}
</div>
