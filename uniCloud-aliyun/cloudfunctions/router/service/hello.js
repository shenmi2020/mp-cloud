const { Service } = require("uni-cloud-router");
module.exports = class HelloService extends Service {
  sayHello() {
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
    return {
      data: "welcome to king:" + arr,
    };
  }
};