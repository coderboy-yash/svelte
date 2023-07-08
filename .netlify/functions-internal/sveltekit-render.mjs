import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4deb8b4b.js","app":"_app/immutable/entry/app.2c585eac.js","imports":["_app/immutable/entry/start.4deb8b4b.js","_app/immutable/chunks/scheduler.8e59589b.js","_app/immutable/chunks/singletons.623c0b93.js","_app/immutable/chunks/index.5910f63b.js","_app/immutable/entry/app.2c585eac.js","_app/immutable/chunks/scheduler.8e59589b.js","_app/immutable/chunks/index.be7cc80f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/allcars",
				pattern: /^\/allcars\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
