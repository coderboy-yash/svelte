<script>
  import ContentCard from "./ContentCard.svelte";
  import { brand, data } from "../../store/carData.js";
  // import data from "../../store/carData.js";
  import search from "../../../assets/search.png";
  import { onDestroy } from "svelte";
  let inputValue = "";
  let brandArray = [];
  function handleInput(event) {
    inputValue = event.target.value;
    // console.log(inputValue);
  }

  export let allCars = [];
  data.subscribe((data) => {
    allCars = data;
  });
  function handleClick(name) {
    brandArray = allCars.filter((car) => {
      if (name === "") return false;
      return car.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  $: handleClick(inputValue);

  const unsubscribe = brand.subscribe((value) => {
    // console.log(data, value);

    brandArray = allCars.filter((car) => car.brand == value);
    // console.log(brandArray);
  });
</script>

<div class="flex flex-1 flex-col">
  <div class=" z-0 m-4 flex justify-center">
    <input
      type="text"
      placeholder="search by car name"
      bind:value={inputValue}
      class="-skew-x-12 border-2 border-yellow-300 bg-black p-2 text-2xl text-white"
    />
    <button
      on:click={handleClick(inputValue)}
      class="-skew-x-12 bg-yellow-400 p-4 text-2xl font-semibold"
    >
      Search
    </button>
  </div>
  <div class="flex flex-wrap items-end justify-center gap-6 bg-yellow-200 p-4">
    {#each brandArray as car}
      <ContentCard {car} key={car.id} />
    {/each}
  </div>
</div>
