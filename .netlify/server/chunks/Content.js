import { c as create_ssr_component, a as add_attribute, e as escape, l as each, v as validate_component } from "./ssr.js";
import { w as writable } from "./index.js";
const data = writable([
  {
    id: 1,
    name: "Swift",
    brand: "Maruti Suzuki",
    price: 6.5,
    year: 2021,
    type: "Petrol",
    km: 1e4,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
  },
  {
    id: 2,
    name: "Baleno",
    brand: "Maruti Suzuki",
    price: 7.2,
    year: 2020,
    type: "Petrol",
    km: 15e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=75"
  },
  {
    id: 3,
    name: "Dzire",
    brand: "Maruti Suzuki",
    price: 7.1,
    year: 2019,
    type: "Petrol",
    km: 2e4,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/45691/marutisuzuki-dzire-right-front-three-quarter8.jpeg?q=75"
  },
  {
    id: 4,
    name: "Vitara Brezza",
    brand: "Maruti Suzuki",
    price: 8.6,
    year: 2020,
    type: "Petrol",
    km: 12e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 5,
    name: "Ertiga",
    brand: "Maruti Suzuki",
    price: 9.8,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/115777/2022-ertiga-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"
  },
  // Brand: Hyundai
  {
    id: 6,
    name: "i20",
    brand: "Hyundai",
    price: 7.5,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=75"
  },
  {
    id: 7,
    name: "Creta",
    brand: "Hyundai",
    price: 13.5,
    year: 2020,
    type: "Petrol",
    km: 12e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 8,
    name: "Venue",
    brand: "Hyundai",
    price: 8,
    year: 2019,
    type: "Petrol",
    km: 15e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141121/venue-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 9,
    name: "Verna",
    brand: "Hyundai",
    price: 10.2,
    year: 2021,
    type: "Petrol",
    km: 1e4,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 10,
    name: "Tucson",
    brand: "Hyundai",
    price: 18.5,
    year: 2020,
    type: "Petrol",
    km: 18e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/106821/new-tucson-exterior-right-front-three-quarter-5.jpeg?isig=0&q=75"
  },
  // Brand: Tata
  {
    id: 11,
    name: "Nexon",
    brand: "Tata",
    price: 8,
    year: 2021,
    type: "Petrol",
    km: 1e4,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75"
  },
  {
    id: 12,
    name: "Tiago",
    brand: "Tata",
    price: 5.5,
    year: 2020,
    type: "Petrol",
    km: 15e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/20880/Tata-Tiago-Exterior-120831.jpg?wm=0&q=75"
  },
  {
    id: 13,
    name: "Harrier",
    brand: "Tata",
    price: 14.8,
    year: 2021,
    type: "Diesel",
    km: 8e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/142739/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 14,
    name: "Tigor",
    brand: "Tata",
    price: 6.2,
    year: 2020,
    type: "Petrol",
    km: 12e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/135723/tigor-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 15,
    name: "Safari",
    brand: "Tata",
    price: 19.2,
    year: 2021,
    type: "Diesel",
    km: 5e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/142865/safari-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 16,
    name: "Hycross",
    brand: "Toyota",
    price: 19.5,
    year: 2020,
    type: "Petrol",
    km: 12e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 17,
    name: "Innova Crysta",
    brand: "Toyota",
    price: 15.8,
    year: 2021,
    type: "Diesel",
    km: 1e4,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter.png?isig=0&q=75"
  },
  {
    id: 18,
    name: "Fortuner",
    brand: "Toyota",
    price: 25,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75"
  },
  {
    id: 19,
    name: "Camry",
    brand: "Toyota",
    price: 30.2,
    year: 2021,
    type: "Hybrid",
    km: 8e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/37561/Toyota-Camry-Right-Front-Three-Quarter-146683.jpg?wm=0&q=75"
  },
  {
    id: 20,
    name: "Land Cruiser",
    brand: "Toyota",
    price: 90.5,
    year: 2021,
    type: "Diesel",
    km: 5e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 21,
    name: "City",
    brand: "Honda",
    price: 9.8,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/134287/2023-city-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 22,
    name: "Elevate",
    brand: "Honda",
    price: 18.2,
    year: 2020,
    type: "Petrol",
    km: 12e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/142515/elevate-exterior-left-front-three-quarter-4.jpeg?isig=0&q=75"
  },
  {
    id: 23,
    name: "Amaze",
    brand: "Honda",
    price: 7.5,
    year: 2019,
    type: "Petrol",
    km: 15e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/45951/amaze-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 24,
    name: "WR-V",
    brand: "Honda",
    price: 10.2,
    year: 2021,
    type: "Petrol",
    km: 1e4,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/134113/new-wr-v-exterior-left-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 25,
    name: "CR-V",
    brand: "Honda",
    price: 28.5,
    year: 2020,
    type: "Petrol",
    km: 18e3,
    city: "Kolkata",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/CR-V/7739/1585800250804/front-left-side-47.jpg?tr=w-456"
  },
  {
    id: 26,
    name: "XUV300",
    brand: "Mahindra",
    price: 9.5,
    year: 2021,
    type: "Petrol",
    km: 12e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/131907/xuv300-turbosport-exterior-right-front-three-quarter-8.jpeg?isig=0&q=75"
  },
  {
    id: 27,
    name: "Thar",
    brand: "Mahindra",
    price: 14.8,
    year: 2021,
    type: "Petrol",
    km: 1e4,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=75"
  },
  {
    id: 28,
    name: "Scorpio",
    brand: "Mahindra",
    price: 12.5,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-15.jpeg?isig=0&q=75"
  },
  {
    id: 29,
    name: "XUV700",
    brand: "Mahindra",
    price: 22.2,
    year: 2021,
    type: "Diesel",
    km: 8e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 30,
    name: "Marazzo",
    brand: "Mahindra",
    price: 12.8,
    year: 2020,
    type: "Diesel",
    km: 5e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-5.jpeg?isig=0&q=75"
  },
  {
    id: 31,
    name: "Seltos",
    brand: "Kia",
    price: 10.5,
    year: 2021,
    type: "Petrol",
    km: 12e3,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/144159/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 32,
    name: "Sonet",
    brand: "Kia",
    price: 8.8,
    year: 2020,
    type: "Petrol",
    km: 1e4,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/144185/sonet-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 33,
    name: "Carnival",
    brand: "Kia",
    price: 24.5,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/41205/carnival-exterior-right-front-three-quarter-55.jpeg?isig=0&q=75"
  },
  {
    id: 34,
    name: "Karens",
    brand: "Kia",
    price: 32.2,
    year: 2021,
    type: "Diesel",
    km: 8e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/144163/carens-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 35,
    name: "Stinger",
    brand: "Kia",
    price: 45.8,
    year: 2020,
    type: "Petrol",
    km: 5e3,
    city: "Kolkata",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Stinger/6221/1554462973868/front-left-side-47.jpg?tr=w-456"
  },
  {
    id: 36,
    name: "3 Series",
    brand: "BMW",
    price: 40.5,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139177/3-series-gran-limousine-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 37,
    name: "5 Series",
    brand: "BMW",
    price: 55.2,
    year: 2020,
    type: "Diesel",
    km: 1e4,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/96443/5-series-exterior-right-front-three-quarter-4.jpeg?q=75"
  },
  {
    id: 38,
    name: "X3",
    brand: "BMW",
    price: 65.8,
    year: 2021,
    type: "Diesel",
    km: 12e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/110503/x3-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 39,
    name: "X5",
    brand: "BMW",
    price: 85.5,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/51529/x5-m-exterior-right-front-three-quarter.jpeg?q=75"
  },
  {
    id: 40,
    name: "7 Series",
    brand: "BMW",
    price: 120.8,
    year: 2021,
    type: "Petrol",
    km: 18e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 41,
    name: "A3",
    brand: "Audi",
    price: 35.5,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/47030/new-a3-exterior-right-front-three-quarter-6.jpeg?isig=0&q=75"
  },
  {
    id: 42,
    name: "A4",
    brand: "Audi",
    price: 42.2,
    year: 2020,
    type: "Diesel",
    km: 1e4,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=75"
  },
  {
    id: 43,
    name: "Q3",
    brand: "Audi",
    price: 48.8,
    year: 2021,
    type: "Diesel",
    km: 12e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141373/q3-sportback-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
  },
  {
    id: 44,
    name: "Q5",
    brand: "Audi",
    price: 63.5,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/53591/q5-facelift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75"
  },
  {
    id: 45,
    name: "A6",
    brand: "Audi",
    price: 80.8,
    year: 2021,
    type: "Petrol",
    km: 18e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/39472/a6-exterior-right-front-three-quarter.jpeg?q=75"
  },
  {
    id: 46,
    name: "A-Class",
    brand: "Mercedes-Benz",
    price: 37.5,
    year: 2021,
    type: "Petrol",
    km: 8e3,
    city: "Delhi",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/149525/a-class-limousine-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 47,
    name: "C-Class",
    brand: "Mercedes-Benz",
    price: 47.2,
    year: 2020,
    type: "Diesel",
    km: 1e4,
    city: "Mumbai",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/116201/new-c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75"
  },
  {
    id: 48,
    name: "E-Class",
    brand: "Mercedes-Benz",
    price: 62.8,
    year: 2021,
    type: "Diesel",
    km: 12e3,
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/47336/e-class-exterior-right-front-three-quarter.jpeg?q=75"
  },
  {
    id: 49,
    name: "GLE",
    brand: "Mercedes-Benz",
    price: 85.5,
    year: 2020,
    type: "Diesel",
    km: 15e3,
    city: "Chennai",
    img: "https://imgd.aeplcdn.com/370x208/cw/ec/36137/MercedesBenz-GLE-New-Exterior-169843.jpg?wm=0&q=75"
  },
  {
    id: 50,
    name: "S-Class",
    brand: "Mercedes-Benz",
    price: 130.8,
    year: 2021,
    type: "Petrol",
    km: 18e3,
    city: "Kolkata",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg?q=75"
  }
]);
const brand = writable("");
const ContentCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { car } = $$props;
  if ($$props.car === void 0 && $$bindings.car && car !== void 0)
    $$bindings.car(car);
  return ` <div class="m-4 w-1/4 rounded-t-xl border-2 border-yellow-400 font-semibold capitalize"><img class="h-60 rounded-t-xl"${add_attribute("src", car.img, 0)} alt=""> <div class="flex flex-col gap-3 bg-gray-300 text-lg"><div class="flex flex-col justify-center p-3"><div class="text-2xl">${escape(car.year)} <span>${escape(car.brand)} ${escape(car.name)}</span></div> <div class="text-gray-700">${escape(car.km)} km | ${escape(car.type)} | ${escape(car.city)}</div> <div class="text-4xl text-gray-800">₹${escape(car.price)} Lakh</div></div> <button class="h-16 bg-yellow-400 text-3xl uppercase hover:bg-yellow-300" data-svelte-h="svelte-1msizql">Buy car</button></div> </div>`;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  let brandArray = [];
  let { open = false } = $$props;
  let { allCars = [] } = $$props;
  data.subscribe((data2) => {
    allCars = data2;
  });
  function handleClick(name) {
    brandArray = allCars.filter((car) => {
      if (name === "")
        return open;
      return car.name.toLowerCase().includes(name.toLowerCase());
    });
  }
  brand.subscribe((value) => {
    brandArray = allCars.filter((car) => car.brand == value);
  });
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.allCars === void 0 && $$bindings.allCars && allCars !== void 0)
    $$bindings.allCars(allCars);
  {
    handleClick(inputValue);
  }
  return `<div class="flex flex-1 flex-col"><div class="z-0 m-4 flex justify-center"><input type="text" placeholder="search by car name" class="-skew-x-12 border-2 border-yellow-300 bg-black p-2 text-2xl text-white"${add_attribute("value", inputValue, 0)}> <button class="-skew-x-12 bg-yellow-400 p-4 text-2xl font-semibold" data-svelte-h="svelte-fy2t3m">Search</button></div> <div class="flex flex-wrap items-end justify-center gap-6">${each(brandArray, (car) => {
    return `${validate_component(ContentCard, "ContentCard").$$render($$result, { car, key: car.id }, {}, {})}`;
  })}</div></div>`;
});
export {
  Content as C,
  data as d
};
