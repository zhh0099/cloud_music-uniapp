import {
	baseUrl
} from './config.js';
/**
 * 歌曲榜单
 */
export function topList() {
	// 只需要前四个榜单
	// 异步封装接口，使用Promise处理异步请求
	return new Promise(function(resolve, reject) {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				resolve(result);
			},
			fail: (err) => {
				console.log(err);
			},
			complete: () => {}
		});
	});
}
/**
 * 根据首页歌曲模块获取具体歌单
 * @param {列表id} listId
 */
export function list(listId) {
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET'
	});
}
/**
 * 歌曲详情接口
 * @param {歌曲id} id
 */
export function songDetail(id) {
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${id}`,
		method: 'GET'
	})
}
/**
 * 播放歌曲接口
 * @param {Object} id
 */
export function songUrl(id) {
	return uni.request({
		url: `${baseUrl}/song/url?id=${id}`,
		method: 'GET'
	})
}
/**
 * 歌词接口
 * @param {Object} id
 */
export function songLyric(id) {
	return uni.request({
		url: `${baseUrl}/lyric?id=${id}`,
		method: 'GET'
	})
}
/**
 * 和当前歌曲类似歌曲接口
 * @param {Object} id
 */
export function songSimi(id) {
	return uni.request({
		url: `${baseUrl}/simi/song?id=${id}`,
		method: 'GET'
	})
}
/**
 * 评论接口
 * @param {Object} id
 */
export function songComment(id) {
	return uni.request({
		url: `${baseUrl}/comment/music?id=${id}`,
		method: 'GET'
	})
}

export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	})
}

export function searchWord(word) {
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	})
}

export function searchSuggest(word) {
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	})
}
