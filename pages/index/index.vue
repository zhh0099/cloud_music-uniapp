<template>
	<view class="index">
		<musichead title="网易云音乐" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<!-- 搜索 -->
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont iconsearch"></text>
					<input type="text" placeholder="搜索歌曲" />
				</view>
				<!-- 骨架屏 -->
				<view v-if="isLoading">
					<m-for-skeleton :avatarSize="200" :row="3" :loading="isLoading" isarc="square"
						v-for="(item,key) in 4" :titleStyle="{}" :key="key">
					</m-for-skeleton>
				</view>
				<!-- 榜单列表 -->
				<view class="index-list" v-else>
					<!-- 榜单卡片 -->
					<view class="index-list-item" v-for="(item,index) in topList" :key="item.id" @tap="handToList"
						:data-id="item.id">
						<!-- 榜单名称和图标 -->
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<!-- 榜单前列歌曲 -->
						<view class="index-list-text">
							<view v-for="(musicItem,index) in item.tracks" :key="index">
								{{index+1}}.{{musicItem.first}}.{{musicItem.second}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from '../../components/musichead/musichead.vue'
	// 导入组件
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton"
	import {
		topList
	} from '../../common/api.js'
	export default {
		data() {
			return {
				isLoading: true,
				topList: []
			}
		},
		components: {
			mForSkeleton
		},
		onLoad() {
			topList().then(res => {
				if (res.length) {
					setTimeout(() => {
						this.topList = res;
						this.isLoading = false;
					}, 1000)
				}
			})
		},
		methods: {
			handToList(event) {
				uni.navigateTo({
					url: '../list/list?listId=' + event.currentTarget.dataset.id
				})
			},
			handleToSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style>
	.index {}

	.index-search {
		display: flex;
		/* 上下居中 */
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}

	.index-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;
	}

	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}

	.index-list {
		margin: 0 30rpx;
	}

	.index-list-item {
		display: flex;
		margin-bottom: 34rpx;
	}

	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;

	}

	.index-list-text {
		font-size: 24rpx;
		line-height: 66rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
