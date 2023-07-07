<script>
  // form data
  import Form from "./Form.svelte";

  let data1 = { name: "", length: 12, type: "refubrished" };
  let submittedData = null;
  // ///////////////////////////////
  import SidebarCard from "./SidebarCard.svelte";
  import { data } from "../../store/carData.js";
  import search from "../../../assets/search.png";

  import Modal from "./Modal.svelte";

  let showModal = false;

  const brandArray = data.map((car) => car.brand);
  const brands = [...new Set(brandArray)];
  let inputValue = "";
  let getBrand = "";

  function handleInput(event) {
    inputValue = event.target.value;
    // console.log(inputValue);
  }
  function handleClick(name) {
    getBrand = brands.filter((brand) =>
      brand.toLowerCase().includes(name.toLowerCase())
    );
    // brands = getBrand;

    // inputValue = "";
    // console.log(getBrand);
  }
</script>

<div
  style=""
  class="sticky top-32 h-[calc(100vh-128px)] w-52 overflow-auto overflow-x-hidden border-b-8 border-yellow-200"
>
  <div class="  my-3 flex text-white">
    <input
      type="text"
      placeholder="search your brand"
      class="w-36 border-2 border-yellow-400 p-2 text-black outline-none"
      on:input={handleInput}
      bind:value={inputValue}
    />
    <button
      ><img
        src={search}
        class="h-11 w-8 rounded-r-lg border-4 border-yellow-500"
        alt=""
        onclick={handleClick(inputValue)}
      /></button
    >
  </div>

  <!-- {#if getBrand}
    <p>{getBrand[0]}</p>
  {:else}
    <p>no brand matched</p>
  {/if} -->
  {#if getBrand.length > 0}
    <div class="">
      {#each getBrand as brand}
        <SidebarCard {brand} />
      {/each}
    </div>
  {:else}
    {#each brands as brand}
      <SidebarCard {brand} />
    {/each}
  {/if}
  <!-- <button
    class="m-4 flex justify-center rounded-xl bg-yellow-400 p-4 text-xl font-semibold text-gray-900"
  >
    Add new</button
  > -->
  <button
    class="mx-16 h-16 w-16 rounded-2xl border-4 border-yellow-300 text-6xl font-bold text-yellow-400"
    on:click={() => (showModal = true)}
  >
    <div class="mb-20">+</div>
  </button>
  <Modal bind:showModal>
    <Form data={data1} onSubmit={(data) => (submittedData = data)} />
  </Modal>
</div>

<style>
  /* Customize the scrollbar track */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f1f1f1; /* Set the background color of the scrollbar track */
  }

  /* Customize the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #ecf391; /* Set the color of the scrollbar thumb */
  }
</style>
