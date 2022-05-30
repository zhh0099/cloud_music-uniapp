export function throttle(fn, delay) {
	let timer = true;
	return function(args) {
		let that = this;
		let _args = arguments;
		if (!timer) {
			return false;
		}
		timer = false;
		setTimeout(() => {
			fn.apply(that, _args)
			timer = true;
		}, delay)
	}
}
