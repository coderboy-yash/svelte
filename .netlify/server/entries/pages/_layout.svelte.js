import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const car = "/_app/immutable/assets/car1.4740d3b0.png";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sticky top-0 z-10 flex h-32 flex-wrap items-center justify-between border-b-8 border-amber-500 bg-black text-yellow-400"><div data-svelte-h="svelte-fk1qtm"><div class="p-4 text-4xl font-bold">Car Bazzar</div> <div class="px-4 text-white">buy, sell or rent your cars online with car bazaar .</div></div> <div class="flex gap-10 text-3xl font-bold text-white" data-svelte-h="svelte-1cjka6j"><a class="border-yellow-300 text-yellow-400 hover:border-b-2 hover:text-yellow-200" href="/">Home</a> <a class="border-yellow-300 text-yellow-400 hover:border-b-2 hover:text-yellow-200" href="/allcars">See all cars</a></div> <div class="p-4"><img${add_attribute("src", car, 0)} alt=""></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
