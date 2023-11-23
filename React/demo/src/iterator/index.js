// 迭代器规范


class Iterator {
  constructor(assemble) {
    this.assemble = assemble;
    this.index = -1;
  }

  next() {
    this.index++;
    let { assemble, index } = this;

    return {
      value: assemble[index],
      done: index >= assemble.length
    }
  }
}

/* 
    迭代器的接口
    next()    返回一个对象，包含value和done两个属性
    value: 迭代器指向的当前值
    done: 迭代器是否指向结束
    迭代器的作用：
    1. 遍历数组
    2. 遍历对象
        对象的键名和键值都可以作为迭代器的下一个值
        for...in循环可以遍历对象，但是不能遍历数组
        for...of循环可以遍历对象和数组
    
        for...in循环的缺点：
            不能跳过对象自身的属性
            不能跳过对象原型链上的属性
            不能跳过Symbol属性
            不能遍历数组的键名
            不能遍历数组的键值
            不能遍历null和undefined
            不能遍历arguments对象
            不能遍历Map和Set
            不能遍历Generator函数的返回值
            不能遍历字符串
        
          for...of循环的优点：
            遍历数组的键名和键值
            遍历对象的键名和键值

*/

const arr = [1, 2, 3, 4]
const iterator = new Iterator(arr);