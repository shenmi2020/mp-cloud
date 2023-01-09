const { Service } = require("uni-cloud-router");
module.exports = class HelloService extends Service {
  sayHello() {
    
    for (let i = 0; i < 3000000000; i++) {
      
    }
    return {
      data: "welcome to king!",
    };
  }
};