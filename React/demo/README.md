当前以及未来的前端开发：一定是 组件化/模块化 开发 
 - 有利于团队开发
 - 便于重复代码的复用 


React 的工程化/组件化开发

我们可以基于 webpack自己搭建一套工程化的架子，但是这样非常麻烦；React官方提供了一个脚手架：
  - create-react-app



在 ReactDom.createRoot()的时候，不能直接将HTML/BODY 作为跟容器，需要制定一个额外的盒子

在 render 函数里面只能有一个 根元素

每一个构建视图 只能有 一个 根节点 ，出现多个根节点会报错

React.Fragment 空文件标记标签 ，<></> 既保证了只有一个根节点，又不新增一个HTML层级

{ } 胡子语法  需要有返回值的表达式  

  - string/number：渲染值
  - boolean/null/undefined/Symbol/BigInt:渲染 空
  - 不支持渲染：普通对象
  - 数组对象:  数组中的每一项当做单独的值用来渲染
  - 函数对象: 不支持在{}中渲染，但是可以作为函数组件用 <Component/>来渲染

  行类样式 


循环操作 也只能使用 map/filter/reduce


