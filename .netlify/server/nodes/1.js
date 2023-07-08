

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c77ddaa2.js","_app/immutable/chunks/scheduler.8e59589b.js","_app/immutable/chunks/index.be7cc80f.js","_app/immutable/chunks/singletons.623c0b93.js","_app/immutable/chunks/index.5910f63b.js"];
export const stylesheets = [];
export const fonts = [];
