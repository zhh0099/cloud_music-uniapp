// 函数节流
export function throttle(fn, delay) {
	let timer = true;
	return function(args) {
		let _this = this;
		let _args = arguments;
		if (!timer) {
			return false;
		}
		timer = false;
		setTimeout(() => {
			fn.apply(_this, _args)
			timer = true;
		}, delay)
	}
};
// 函数防抖
export function debounce(fun, delay) {
	return function(args) {
		let _this = this
		let _args = args
		clearTimeout(fun.id)
		fun.id = setTimeout(function() {
			fun.call(_this, _args)
		}, delay)
	}
}
