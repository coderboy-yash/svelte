<script>
  export let car;
</script>

<!-- Use the "car" prop inside the component as needed -->
<div
  class="m-4 w-1/4 rounded-t-xl border-2 border-yellow-400 font-semibold capitalize"
>
  <img class="h-60 rounded-t-xl" src={car.img} alt="" />

  <div class="flex flex-col gap-3 bg-gray-300 text-lg">
    <div class="flex flex-col justify-center p-3">
      <div class=" text-2xl">
        {car.year} <span>{car.brand} {car.name}</span>
      </div>
      <div class="text-gray-700">
        {car.km} km | {car.type} | {car.city}
      </div>
      <div class="text-4xl text-gray-800">₹{car.price} Lakh</div>
    </div>
    <button class="h-16 bg-yellow-400 text-3xl uppercase hover:bg-yellow-300"
      >Buy car</button
    >
  </div>

  <!-- ... -->
</div>
