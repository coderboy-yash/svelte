<script>
  import car from "../../../assets/car1.png";
</script>

<div
  class="sticky top-0 z-10 flex h-32 flex-wrap items-center justify-between border-b-8 border-amber-500 bg-black text-yellow-400"
>
  <div>
    <div class="p-4 text-4xl font-bold">Car Bazzar</div>
    <div class="px-4 text-white">
      buy, sell or rent your cars online with car bazaar .
    </div>
  </div>
  <div class="flex gap-10 text-3xl font-bold text-white">
    <a
      class="  border-yellow-300 text-yellow-400 hover:border-b-2 hover:text-yellow-200"
      href="/">Home</a
    >
    <a
      class=" border-yellow-300 text-yellow-400 hover:border-b-2 hover:text-yellow-200"
      href="/allcars">See all cars</a
    >
  </div>

  <div class="p-4">
    <img src={car} alt="" />
  </div>
</div>
