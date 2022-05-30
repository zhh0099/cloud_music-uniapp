<script>
	import '@/common/iconfont.css'
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {

		}
	}
</script>

<style>
	/*每个页面公共css */
	.container {
		width: 100%;
		/* 高度需要计算，要减去顶部的位置 */
		height: calc(100vh - 70px);
		overflow: hidden;
	}

	.container scroll-view {
		height: 100%;
	}
	
	/* 背景图 */
	.flexbg {
		/* 保证背景图永远在最下层 */
		z-index: -1;
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		/* 图片加载不出来用黑色 */
		/* background-image: url(./static/logo.jpg); */
		background-color: #161824;
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 0;
		/* 背景模糊以及毛边框特效 */
		filter: blur(10px);
		/* 放大，除去白边 */
		transform: scale(1.2);
	}

</style>
