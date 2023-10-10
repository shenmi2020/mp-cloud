<template>
  <view class="content">
    <view class="top">
      <view>莱山区</view>
      <view>输入关键词</view>
      <view>搜索</view>
    </view>
    <u-tabs 
      :list="list1" 
      :scrollable="false"
      lineWidth="80"
      :activeStyle="{
        
      }"
    ></u-tabs>

  </view>
</template>

<script setup>
  import request from '../../utils/request.js'
  
  export default {
    data() {
      return {
        list1: [{
          name: '废品信息'
        }, {
          name: '回收商家'
        }, {
          name: '热门推荐'
        }, {
          name: '智能排序'
        }]

      }
    },
    onLoad() {
    
      const data = {
        action: 'hello/sayHello',
        data: {}
      }
      request(data).then(res => {
        // console.log('res333:', res)
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