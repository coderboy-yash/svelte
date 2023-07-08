import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, d as compute_rest_props, s as setContext, f as spread, h as escape_object, i as escape_attribute_value, g as getContext, j as createEventDispatcher, k as compute_slots, l as each } from "../../chunks/ssr.js";
import { d as data, C as Content } from "../../chunks/Content.js";
import { twMerge } from "tailwind-merge";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Input_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".input.svelte-1xx6g23{border-radius:4px;padding:6px 10px;margin:0}.block.svelte-1xx6g23{display:block}.error.svelte-1xx6g23{border-color:#f55}.error-text.svelte-1xx6g23{color:#f55}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { value = type === "text" ? "" : null } = $$props;
  let { error = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$5);
  return `<label class="block svelte-1xx6g23">${label ? `<span class="block svelte-1xx6g23">${escape(label)}</span>` : ``} <input class="${["input block bg-slate-300 text-black svelte-1xx6g23", error ? "error" : ""].join(" ").trim()}"${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}> ${error ? `<span class="error-text block svelte-1xx6g23">${escape(error)}</span>` : ``} </label>`;
});
const Select_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".select.svelte-8hoi1e{border:1px solid #ddd;border-radius:4px;padding:6px 10px 6px 4px;width:10rem}.block.svelte-8hoi1e{display:block}.error.svelte-8hoi1e{border-color:#f55}.error-text.svelte-8hoi1e{color:#f55}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { error = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$4);
  return `<label class="block svelte-8hoi1e">${label ? `<span class="block svelte-8hoi1e">${escape(label)}</span>` : ``} <select class="${["select block svelte-8hoi1e", error ? "error" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</select> ${error ? `<span class="error-text block svelte-8hoi1e">${escape(error)}</span>` : ``} </label>`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".button.svelte-1e72b0u{border-radius:4px;border-color:#a0c0f0;background-color:#eab308;color:#124;width:20rem;font-weight:bold;font-size:large;transition:0.2s ease all;padding:6px 10px}.button.svelte-1e72b0u:hover{border-color:#b0d0f0;background-color:#bdf;color:#248}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<button type="button" class="button svelte-1e72b0u">${slots.default ? slots.default({}) : ``} </button>`;
});
const Form_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fieldset.svelte-1hvxw38>.svelte-1hvxw38{display:block}.fieldset.svelte-1hvxw38>:not(legend) + *{margin-top:4px}.fieldset.svelte-1hvxw38.svelte-1hvxw38{border:1px solid #ddd;border-radius:4px;padding:20px}",
  map: null
};
const Form_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result;
  let { image = "hello" } = $$props;
  let { onUpload = (error, result2, widget) => {
    console.log("result", result2.info.secure_url, "widget", widget);
    image = result2.info.secure_url;
  } } = $$props;
  let { data: data2 = {} } = $$props;
  let { onSubmit = () => {
  } } = $$props;
  let name = data2.name ?? "";
  let brand = data2.brand ?? "";
  let price = data2.price ?? 0;
  let year = data2.year ?? 2023;
  let type = data2.type ?? "original";
  let km = data2.km ?? 0;
  let city = data2.city ?? "";
  data2.img ?? "";
  let errors = {};
  let touchedFields = {};
  console.log(result);
  const validate = () => {
    const errors2 = {};
    if (touchedFields.name && name === "") {
      errors2.name = "Name is required";
    }
    if (touchedFields.brand && brand === "") {
      errors2.brand = "brand is required";
    }
    if (touchedFields.price && price == 0) {
      errors2.price = "price is required ";
    }
    if (touchedFields.year && year <= 2023 && year >= 2005) {
      errors2.year = "enter a valid year after 2005 ";
    }
    if (touchedFields.km && km > 1) {
      errors2.year = "enter  valid kms ";
    }
    if (touchedFields.city && city === "") {
      errors2.city = "city is required";
    }
    if (touchedFields.type && touchedFields.length && type === "original" && length >= 10 && length <= 20) {
      errors2.type = 'For type "original" length should not be between 10 and 20';
    }
    return errors2;
  };
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.onUpload === void 0 && $$bindings.onUpload && onUpload !== void 0)
    $$bindings.onUpload(onUpload);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    result = {
      name,
      brand,
      price,
      year,
      type,
      km,
      city,
      image
    };
    errors = validate();
    $$rendered = `<div class="form"><div class="mx-auto flex justify-center bg-yellow-400 p-4 text-2xl font-bold capitalize text-black" data-svelte-h="svelte-1jge2gn">add manufacturer</div> <fieldset class="fieldset flex flex-col gap-4 svelte-1hvxw38"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        placeholder: "mahindra",
        label: "Manufacturer",
        error: errors.name,
        value: brand
      },
      {
        value: ($$value) => {
          brand = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        placeholder: "XUV 700",
        label: "Car model",
        error: errors.name,
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "number",
        label: "price in Lakhs",
        placeholder: "23",
        error: errors.length,
        value: price
      },
      {
        value: ($$value) => {
          price = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "number",
        label: "year of purchase",
        placeholder: "23",
        error: errors.length,
        value: year
      },
      {
        value: ($$value) => {
          year = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        label: "Type",
        error: errors.type,
        value: type
      },
      {
        value: ($$value) => {
          type = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<option value="original" class="svelte-1hvxw38" data-svelte-h="svelte-1l2czmx">Petrol</option> <option value="refubrished" class="svelte-1hvxw38" data-svelte-h="svelte-n7hs4b">Diesel</option>`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "number",
        label: "km covered",
        placeholder: "23",
        error: errors.length,
        value: km
      },
      {
        value: ($$value) => {
          km = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        placeholder: "Kanpur",
        label: "city",
        error: errors.name,
        value: city
      },
      {
        value: ($$value) => {
          city = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="w-48 rounded-xl bg-slate-300 p-4 text-xl font-bold text-gray-600 hover:bg-slate-500 hover:text-white svelte-1hvxw38" data-svelte-h="svelte-17kia90">Upload an image</button>   ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `ADD`;
      }
    })} </fieldset> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const SidebarCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { brand } = $$props;
  if ($$props.brand === void 0 && $$bindings.brand && brand !== void 0)
    $$bindings.brand(brand);
  return `<div class="skew-y-16 m-2 mb-2 flex h-16 w-auto justify-center border-b-2 border-yellow-500 bg-yellow-300 p-1 text-2xl text-black hover:bg-yellow-500"><button>${escape(brand)}</button></div>`;
});
const search = "/_app/immutable/assets/search.ba39336d.png";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800",
    red: "border-red-300 dark:border-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800",
    green: "border-green-300 dark:border-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800",
    purple: "border-purple-300 dark:border-purple-800",
    pink: "border-pink-300 dark:border-pink-800",
    blue: "border-blue-300 dark:border-blue-800",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:border-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) },
        { role: escape_attribute_value(role) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ml-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "permanent",
    "backdropClass",
    "defaultClass",
    "outsideclose"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClass = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = twMerge(defaultClass, "w-full", $$props.class);
  return `${open ? ` <div${add_attribute("class", twMerge("fixed inset-0 z-40", backdropCls), 0)}></div>   <div${add_attribute("class", twMerge("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}  <div class="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain" role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-174e4n::-webkit-scrollbar{width:8px;background-color:#f1f1f1}.svelte-174e4n::-webkit-scrollbar-thumb{background-color:#ecf391}aside.svelte-174e4n{z-index:20;left:-90%;transition:left 0.3s ease-in-out}.open.svelte-174e4n{left:0;bottom:0}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data1 = {
    name: "",
    length: 12,
    type: "refubrished"
  };
  let showModal = false;
  console.log(data);
  let brands = [];
  data.subscribe((items) => brands = [...new Set(items.map((car) => car.brand))]);
  let inputValue = "";
  let getBrand = [];
  let { open = true } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    getBrand = [];
    {
      console.log(getBrand.length);
    }
    $$rendered = `  <aside class="${[
      "fixed z-30 ml-16 h-[calc(100vh-128px)] w-[15%] overflow-auto overflow-x-hidden bg-white svelte-174e4n",
      open ? "open" : ""
    ].join(" ").trim()}"><div class="my-3 flex text-white svelte-174e4n"><input type="text" placeholder="search your brand" class="w-36 border-2 border-yellow-400 p-2 text-black outline-none svelte-174e4n"${add_attribute("value", inputValue, 0)}> <button class="svelte-174e4n"><img${add_attribute("src", search, 0)} class="h-11 w-8 rounded-r-lg border-4 border-yellow-500 svelte-174e4n" alt=""></button></div> ${getBrand.length > 0 ? `${each(getBrand, (brand) => {
      return `${validate_component(SidebarCard, "SidebarCard").$$render($$result, { brand }, {}, {})}`;
    })}` : `${each(brands, (brand) => {
      return `${validate_component(SidebarCard, "SidebarCard").$$render($$result, { brand }, {}, {})}`;
    })}`}  <button class="mx-16 h-16 w-16 rounded-2xl border-4 border-yellow-300 text-6xl font-bold text-yellow-400 svelte-174e4n" data-svelte-h="svelte-1s3qoji"><div class="mb-20 svelte-174e4n">+</div></button> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "add your favourite",
        class: "z-50 ",
        open: showModal
      },
      {
        open: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Form_1, "Form").$$render(
            $$result,
            {
              data: data1,
              onSubmit: (result) => {
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
                    img: result.image
                  }
                ]);
                console.log(data, getBrand.length);
              }
            },
            {},
            {}
          )}`;
        }
      }
    )} </aside>`;
  } while (!$$settled);
  return $$rendered;
});
const Hamburger_svelte_svelte_type_style_lang = "";
const css = {
  code: ".open.svelte-1k91l6u.svelte-1k91l6u{left:14rem;transition:left 0.3s ease-in-out}svg.svelte-1k91l6u.svelte-1k91l6u{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-1k91l6u line.svelte-1k91l6u{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out}button.svelte-1k91l6u.svelte-1k91l6u{z-index:20}.open.svelte-1k91l6u svg.svelte-1k91l6u{color:rgb(83, 81, 81);transform:scale(0.9) translate(20px)}.open.svelte-1k91l6u #top.svelte-1k91l6u{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-1k91l6u #middle.svelte-1k91l6u{opacity:0}.open.svelte-1k91l6u #bottom.svelte-1k91l6u{transform:translate(-12px, 9px) rotate(-45deg)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  return `<div class="fixed z-40 h-screen w-[4rem] bg-yellow-400"><button class="${[
    "absolute left-[1rem] top-[2rem] mr-4 cursor-pointer border-none text-gray-200 hover:text-gray-500 focus:outline-none svelte-1k91l6u",
    open ? "open" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-123erge"><div></div> <svg width="32" height="24" class="svelte-1k91l6u"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-1k91l6u"></line><line id="middle" x1="0" y1="12" x2="24" y2="12" class="svelte-1k91l6u"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-1k91l6u"></line></svg></button> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex">${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="mx-auto flex">${validate_component(Content, "Content").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
