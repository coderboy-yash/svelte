<script>
  import Form from "./Form.svelte";

  import { onMount } from "svelte";

  let data1 = { name: "", length: 12, type: "refubrished" };
  let submittedData = null;

  import SidebarCard from "./SidebarCard.svelte";
  import { data } from "../../store/carData.js";
  import search from "../../../assets/search.png";

  import { Modal } from "flowbite-svelte";

  let showModal = false;

  console.log(data);

  let brands = [];
  ``;
  const unsubscribe = data.subscribe(
    (items) => (brands = [...new Set(items.map((car) => car.brand))])
  );

  let inputValue = "";
  let getBrand = [];
  $: console.log(getBrand.length);
  function handleSubmit(submittedData) {
    data.update((items) => {
      return [
        ...items,
        {
          id: items.length + 1,
          name: submittedData.name,
          brand: submittedData.brand,
          price: submittedData.price,
          year: submittedData.year,
          type: submittedData.type,
          km: submittedData.km,
          city: submittedData.city,
          img: submittedData.img,
        },
      ];
    });
  }

  $: getBrand =
    inputValue === ""
      ? []
      : brands.filter((brand) =>
          brand.toLowerCase().includes(inputValue.toLowerCase())
        );

  function cleanup() {
    unsubscribe();
  }
  export let open = true;
</script>

<!-- bg-[#363740]"  sticky top-32 z-30 h-[calc(100vh-128px)] w-52 overflow-auto overflow-x-hidden border-b-8 border-yellow-200 -->
<!-- bg-[#363740]"  sticky top-32 z-30 h-[calc(100vh-128px)] w-52 overflow-auto overflow-x-hidden border-b-8 border-yellow-200 -->

<aside
  class:open
  class="fixed z-30 ml-16 h-[calc(100vh-128px)] w-[15%] overflow-auto overflow-x-hidden bg-white"
>
  <div class="my-3 flex text-white">
    <input
      type="text"
      placeholder="search your brand"
      class="w-36 border-2 border-yellow-400 p-2 text-black outline-none"
      bind:value={inputValue}
    />
    <button
      ><img
        src={search}
        class="h-11 w-8 rounded-r-lg border-4 border-yellow-500"
        alt=""
      /></button
    >
  </div>

  {#if getBrand.length > 0}
    {#each getBrand as brand}
      <SidebarCard {brand} />
    {/each}
  {:else}
    {#each brands as brand}
      <SidebarCard {brand} />
    {/each}
  {/if}
  <!--  -->
  <button
    class="mx-16 h-16 w-16 rounded-2xl border-4 border-yellow-300 text-6xl font-bold text-yellow-400"
    on:click={() => (showModal = true)}
  >
    <div class="mb-20">+</div>
  </button>

  <Modal title="add your favourite" bind:open={showModal} class="z-50 ">
    <Form
      data={data1}
      onSubmit={(result) => {
        console.log(result);
        data.update((old) => [
          ...old,
          {
            id: result.length + 1,
            name: result.name,
            brand: result.brand,
            price: result.price,
            year: result.year,
            type: result.type,
            km: result.km,
            city: result.city,
            img: result.image,
          },
        ]);
        console.log(data, getBrand.length);
      }}
    />

    <svelte:fragment slot="footer" />
  </Modal>
</aside>

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
  aside {
    z-index: 20;
    left: -90%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
    bottom: 0;
    /* position: sticky; */
  }
</style>
