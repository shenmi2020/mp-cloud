const request = (data = {}, name = 'router') => {
  return new Promise((resolve, reject) => {
    uni.showLoading()
    uniCloud.callFunction({
      name,
      data
    })
    .then(res => {
      // this.title = res.data
      resolve(res.result)
    }).catch(err => {
      uni.showToast({
        title: '请求出现异常',
        icon: "error"
      })
    }).finally(() => {
      uni.hideLoading()
    })
  })
}

export default request