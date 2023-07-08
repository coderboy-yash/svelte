<script>
  // form data
  import Form from "./Form.svelte";

  // import { subscribe } from "../store/cart.js";
  import { onMount } from "svelte";

  let data1 = { name: "", length: 12, type: "refubrished" };
  let submittedData = null;
  // ///////////////////////////////
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

  // function handleClick() {
  //   console.log("fdgdg", inputValue);
  //   getBrand = brands.filter((brand) => {
  //     console.log(inputValue);
  //     if (inputValue === "") {
  //       return false;
  //     }

  //     brand.toLowerCase().includes(inputValue.toLowerCase());
  //   });
  //   console.log(brands, getBrand);
  // }

  $: getBrand =
    inputValue === ""
      ? []
      : brands.filter((brand) =>
          brand.toLowerCase().includes(inputValue.toLowerCase())
        );

  // $: handleClick(), inputValue;

  function cleanup() {
    unsubscribe();
  }
  export let open = false;
</script>

<aside class:open class=" absolute h-screen w-[15%] bg-[#363740]">
  <div class="  my-3 flex text-white">
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

  <!-- {#if getBrand}
    <p>{getBrand[0]}</p>
  {:else}
    <p>no brand matched</p>
  {/if} -->
  {#if getBrand.length > 0}
    {#each getBrand as brand}
      <SidebarCard {brand} />
    {/each}
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
  <!-- <Modal bind:showModal>
    <Form data={data1} onSubmit={(data) => (submittedData = data)} />
  </Modal> -->
  <Modal title="Add Manufacturer" bind:open={showModal} class="z-50">
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
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
