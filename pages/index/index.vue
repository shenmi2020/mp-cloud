<template>
	<view class="content">
    <view class="date-content">
      <view>2°</view>
      <view>2023-01-12</view>
      <view>烟台</view>
      <view>空气质量:良</view>
    </view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
		</view>
	</view>
</template>

<script>
  import request from '../../utils/request.js'
	export default {
		data() {
			return {
				title: 'Hello11122'
			}
		},
		onLoad() {
      const data = {
        action: 'hello/sayHello',
        data: {}
      }
      request('router', data).then(res => {
        console.log('res333:', res)
      })
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}
  .date-content {
    display: flex;
    flex-direction: column;
    padding: 20rpx;
  }
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
