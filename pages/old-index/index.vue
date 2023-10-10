<template>
	<view class="content">
    <view class="date-content">
      <view class="date-content-item">
        <view class="desc">2°</view>
        <view class="desc name">周一</view>
      </view>
      <view class="date-content-item">
        <view class="desc">2°</view>
        <view class="desc name">周一</view>
      </view>
      <view class="date-content-item">
        <view class="desc">2°</view>
        <view class="desc name">周一</view>
      </view>
      <view class="date-content-item">
        <view class="desc">2°</view>
        <view class="desc name">周一</view>
      </view>
      <view class="date-content-item">
        <view class="desc">2°</view>
        <view class="desc name">周一</view>
      </view>
    </view>
    <view class="plan">
      <view class="plan-item">
        <view class="plan-item-icon">
          <image class="logo" src="/static/logo.png" />
        </view>
        <view class="plan-item-title">
          学英语11
        </view>
        <view class="plan-item-time">
          19:00 - 21:00
        </view>
      </view>
      <view class="plan-item">
        hello
      </view>
      <view class="plan-item">
        hello
      </view>
      <view class="plan-item">
        hello
      </view>
    </view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
		</view>
	</view>
</template>

<script setup>
import request from '../../utils/request.js'
import { onLoad } from '@dcloudio/uni-app'
// import { onMount } from 'vue'
// export default {
//   data() {
//     return {
//       title: 'Hello11122'
//     }
//   },
//   onLoad() {
//     const data = {
//       action: 'hello/sayHello',
//       data: {}
//     }
//     request('router', data).then(res => {
//       console.log('res333:', res)
//     })
//   },
//   methods: {

//   }
// }

onLoad(()=>{
  console.log('onload:')
  const data = {
    action: 'hello/sayHello',
    data: {}
  }
  request(data).then(res => {
    console.log('res333:', res)
  })
})
console.log('on:')
// onMount(() => {
//   console.log('onMount:')
// })
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  
  .date-content {
    display: flex;
    flex-direction: row;
    padding: 20rpx;
    width: calc(100% - 40rpx);
    
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      .name {
        margin-top: 10rpx;
      }
    }
  }
  .plan {
    display: flex;
    padding: 30rpx;
    width: calc(100% - 60rpx);
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: 30%;
      background-color: whitesmoke;
      height: 300rpx;
      margin-bottom: 20rpx;
      border-radius: 20rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-icon {
        margin: 30rpx 0;
        .logo {
          width: 100rpx;
          height: 100rpx;
        }
      }
      &-title {
        font-size: 32rpx;
      }
      &-time {
        margin-top: 20rpx;
        font-size: 24rpx;
        color: #8f8f94;
      }
    }
  }
  
}
.desc {
  font-size: $uni-font-size-base;
}
// .logo {
//   height: 200rpx;
//   width: 200rpx;
//   margin-top: 200rpx;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 50rpx;
// }

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 32rpx;
  color: #8f8f94;
}

</style>
