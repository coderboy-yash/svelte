

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3d1d43f8.js","_app/immutable/chunks/scheduler.8e59589b.js","_app/immutable/chunks/index.be7cc80f.js","_app/immutable/chunks/Content.80ad62c3.js","_app/immutable/chunks/index.5910f63b.js"];
export const stylesheets = ["_app/immutable/assets/2.60682cbe.css"];
export const fonts = [];
