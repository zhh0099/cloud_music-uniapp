import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		topIdList: [],
		nextId: '',
		previousId: '',
	},
	mutations: {
		INIT_CHANGE(state, payload) {
			state.topIdList = payload;
			uni.setStorage({
				key: 'topIdList',
				data: state.topIdList,
			})
		},
		NEXT_ID(state, payload) {
			let topIdList = []
			uni.getStorage({
				key: 'topIdList',
				success: function(res) {
					topIdList = res.data;
				}
			});
			for (var i = 0; i < topIdList.length; i++) {
				if (topIdList[i].id == payload) {
					state.nextId = topIdList[i + 1].id;
				}
			}
		},
		PREVIOUS_ID(state, payload) {
			let topIdList = []
			uni.getStorage({
				key: 'topIdList',
				success: function(res) {
					topIdList = res.data;
				}
			});
			for (var i = 0; i < topIdList.length; i++) {
				if (topIdList[i].id == payload && topIdList[i - 1].id) {
					state.previousId = topIdList[i - 1].id;
				}
			}
		}
	}
});
