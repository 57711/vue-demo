(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue = {}));
})(this, (function (exports) { 'use strict';

	// function Vue (options){
	//     this._init(options)
	// }
	// Vue.prototype._init = function (options){
	//     this.$options = options
	//     this.$data = options.data

	//     observe(this.$data)
	// }
	// function observe(obj){

	//     Object.defineProperties(obj, key, {
	//         get(){
	//             return obj[key]
	//         },
	//         set(newValue){
	//             obj[key] = newValue
	//         },
	//     })

	// }
	// export function h (type, props, children)
	// export default Vue

	const a = 5;

	exports.a = a;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vue.js.map
