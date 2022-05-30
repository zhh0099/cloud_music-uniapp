<template>
	<view>
		<view class="music-head" :style="{color:color}">
			{{title}}
			<view v-if="icon" class="music-head-icon" :class="{'music-head-iconblack' : iconBlack}">
				<text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text>
				| <text class="iconfont iconshouye" @tap="handleToHome"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "musichead",
		data() {
			return {

			};
		},
		props: ['title','icon','color','iconBlack'],
		methods: {
			handleToBack() {
				// 返回到上一个页面
				uni.navigateBack();
			},
			handleToHome() {
				uni.navigateTo({
					url: '../../pages/index/index'
				});
			}
		}
	}
</script>
<!-- scoped表示当前页面样式才生效，不会影响其他界面 -->
<style scoped>
	.music-head {
		width: 100%;
		/* 这里的高度不应该自适应，应保持不变 */
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: black;
	}

	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 26px;
		width: 90px;
		height: 30px;
		background: rgb(0, 0, 0, 0.4);
		color: white;
		/* 行高会继承，需要重新设置 */
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	.music-head-iconblack{
		color: black;
		border: 2rpx #eaeaea solid;
		background:white;
	}
</style>
