import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import {
	throttle,
	debounce
} from '@/common/utils.js'

Vue.config.productionTip = false

Vue.filter('formatCount', function(value) {

	if (value >= 10000 && value < 100000000) {
		value /= 10000;
		return value.toFixed(1) + '万';
	} else if (value >= 100000000) {
		value /= 100000000;
		return value.toFixed(1) + '亿';
	} else {
		return value;
	}

});

Vue.filter('formatTime', function(value) {

	var date = new Date(value);

	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';

});

App.mpType = 'app'

// 节流和防抖函数全局挂载到uni上
uni.$throttle = throttle
uni.$debounce = debounce

const app = new Vue({
	...App,
	store
})
app.$mount()
