<script>
  export let brand;
  import { activeBrand } from "../../store/carData.js";
  function handleClick(name) {
    // newBrand.set(name);
    // console.log(name);
    activeBrand(name);
  }
</script>

<div
  class="skew-y-16 m-2 mb-2 flex h-16 w-auto justify-center border-b-2 border-yellow-500 bg-yellow-300 p-1 text-2xl text-black hover:bg-yellow-500"
>
  <button on:click={handleClick(brand)}>{brand}</button>
</div>
