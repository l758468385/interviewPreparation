const obj = {
  x: 10,
  y: 20,
};

Object.seal(obj); // 密封对象

obj.z = 3;
delete obj.x;
obj.y = 5;

console.log('obj', obj)

Object.preventExtensions(obj)

delete obj.x
console.log('obj', obj)

/*
  1.基于babel-preset-react-app 把调用的组件 转换为 createElement 格式
    React.createElement(DemoOne, {
      title:"/u6211/u662F/u6807",
      x:10,
      data:[100,200],
      className:'box',
      style:{
        fontSize:'20px'
      }
    })

  2.把createElement 方法执行，创建一个 virtualDom 对象
    {
      $$typeof:Symbol(react.element),
      key:null,
      props:{
       title:"/u6211/u662F/u6807",
      x:10,
      data:[100,200],
      className:'box',
      style:{
        fontSize:'20px'
      },
      children:[] // 如果有子节点[双调用闭合，则也包含 children]
    }

  3.基于 root.render 把 virtualDom 变为真实DOM
    type不再是一个字符串，而是一个函数，此时
      - 把函数执行 -> DemoOne();
      - 把 virtualDom 中的props ,作为实参传递给函数，Demo(props);
*/


// 调用组件的时候，我们可以额给调用的组件设置（传递）各式各样的属性
/* 
    <DemoOne title='我事标题'></DemoOne>
    如果设置的属性值不是字符串格式，需要 {} 胡子语法进行嵌套
    调用组件的时候，我们可以把一些 数据/信息传递给组件
*/
