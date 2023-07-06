<script>
  import SidebarCard from "./SidebarCard.svelte";
  import { data } from "../../store/carData.js";
  const brandArray = data.map((car) => car.brand);
  const brands = [...new Set(brandArray)];
  // console.log(brands);
  // console.log(brandArray);
</script>

<div
  style=""
  class="sticky top-32 h-[calc(100vh-128px)] w-48 overflow-auto border-b-8 border-yellow-600"
>
  <div class="  mt-8 text-white">
    input
  </div>

  <div class="">
     {#each brands as brand}
    <SidebarCard {brand}  />
  {/each}

  </div>
</div>

<style>
  /* Customize the scrollbar track */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f1f1f1; /* Set the background color of the scrollbar track */
  }

  /* Customize the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #c2a10f; /* Set the color of the scrollbar thumb */
  }
</style>
