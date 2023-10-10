const { Service } = require("uni-cloud-router");
module.exports = class HelloService extends Service {
  async sayHello() {
    let n = 200;
    let arr = [];
    let tmp1 = 1; 
    let tmp2 = 1;
    for (let i = 0; i < n; i++) {
      if (i < 2) {
        arr.push(1);
      } else {
        let c = tmp1 + tmp2;
        arr.push(c);
        
        tmp2 = tmp1;
        tmp1 = c;
      }
      
    }
    const db = uniCloud.database();
    // 获取 `user` 集合的引用
    const collection = db.collection('posts');
    let res = await collection.add({
      content: 'Ben'
    })
    return {
      data: "welcome to king:" + res,
    };
  }
};