import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Content } from "../../../chunks/Content.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${validate_component(Content, "Content").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
