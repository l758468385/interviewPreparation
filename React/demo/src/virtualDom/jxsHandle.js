// 基于 babel-preset-react-app 把JSX 编译为 React.createElement(...)

// createElement:就是用来创建虚拟DOM对象
export function createElement(ele, props, ...children) {

  const virtualDom = {
    $$typeof: Symbol('react.element'),
    ref: null,
    key: null,
    type: null,
    props: {},
  }

  const len = children.length;

  virtualDom.type = ele;
  virtualDom.props = props || {};

  if (len === 1) {
    virtualDom.props.children = children[0];
  } else if (len > 1) {
    virtualDom.props.children = children
  }

  return virtualDom
}


const obj = [
  1, 2, 3, 4
]
Array.prototype.AA = 'Hello,World'
obj[Symbol('symbolType')] = 'SymbolTypeHelloWorld'

/* for/in 循环性能较差，既可以迭代共有的，也可以迭代私有的；可枚举、非Symbol类型的属性 */
for (const key in obj) {
  console.log('key', key)

}

// 获取所有的属性（没有原型链上的，有不可枚举），但是没有Symbol类型的
const allKeys = Object.getOwnPropertyNames(obj)

// 获取所有Symbol的属性
const allSymbolKeys = Object.getOwnPropertySymbols(obj)


console.log(allKeys, allSymbolKeys)

const keys = allKeys.concat(allSymbolKeys)

console.log('keys', keys)

// ES6 中有个对象 可以简化这个操作

const keys1 = Reflect.ownKeys(obj) // 唯一的缺点 不兼容IE



// 封装一个方法
const each = function each(obj, callback) {
  if (obj === null || typeof obj !== 'object') throw new TypeError('obj is not a object')
  if (typeof callback !== 'function') throw new TypeError('callback is not a function')
  const keys = Reflect.ownKeys(obj);
  keys.forEach(key => {
    let value = obj[key];
    // 每一次循环都把回调函数执行
    callback(value, key);
  })
}

/* render:把虚拟DOM变为真实DOM */
export function render(virtualDom, container) {
  let { type, props } = virtualDom;
  if (typeof type === 'string') { // 存储的是一个标签名：动态创建这样一个标签
    let ele = document.createElement(type);

    // 为标签设置相关属性 & 子节点
    each(props, (value, key) => {

      // className 的处理:value存储的是样式类名
      if (key === 'className') {
        ele.className = value
        return
      }

      // style的处理:value存储的是样式对象
      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val
        })
        return
      }

      // 子节点的处理:value存储的children属性值
      if (key === 'children') {
        let children = value;
        if (!Array.isArray(children)) {
          children = [children]
        }
        children.forEach(child => {
          // 子节点是文本节点，直接插入
          if (typeof child === 'string') {
            ele.appendChild(document.createTextNode(child));
            return;
          }
          render(child, ele)
          // 子节点又是一个 virtualDom:递归处理
        })
        return;
      }

      ele.setAttribute(key, value)
    })
    container.appendChild(ele);
  }
}

function root() {
  console.log('fn1');
}

function outer() {
  console.log('fn2');
}

function inner() {
  console.log('fn3');
}

const functions = {
  root,
  outer,
  inner
};

['root', 'outer', 'inner'].forEach(item => {
  functions[item]();
});
