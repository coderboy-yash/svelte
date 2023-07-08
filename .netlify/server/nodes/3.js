

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/allcars/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.14b3c814.js","_app/immutable/chunks/scheduler.8e59589b.js","_app/immutable/chunks/index.be7cc80f.js","_app/immutable/chunks/Content.80ad62c3.js","_app/immutable/chunks/index.5910f63b.js"];
export const stylesheets = [];
export const fonts = [];
