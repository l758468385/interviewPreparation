// ES6 中的 Proxy

import PersonStore from "./PersonStore";
import TaskStore from "./TaskStore";

const obj = {
  x: 10,
  y: 20
}


// 经过 mobx observable 处理后的数据，是基于ES6 Proxy做过数据劫持的
let proxyObj = new Proxy(obj, {
  get(target, key) {
    console.log('getter');
    return target.key
  },
  set(target, key, val) {
    console.log('setter');
  }
})


console.log('proxyObj.x', proxyObj.x)

const proxyObject = new Proxy(obj, {
  get(target, key) {
    return target.key
  },
  set(target, key, val) {
    console.log('val', val)
  }
})


class Store {
  constructor() {
    this.task = new TaskStore(this);
    this.person = new PersonStore(this);
  }
}


export default new Store();


store = {
  task,
  personal,
}
