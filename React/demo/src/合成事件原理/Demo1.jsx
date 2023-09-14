import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <div className="outer">
        <div className="inner"></div>
      </div>
    );
  }
}

export default Demo;

/* 
  React 中合成事件的原理 
    - 不是给当前元素基于 addEventListener 的事件绑定;都是基于 "事件委托" 处理的
    - React 17版本以后 是委托给 "root" 容器， [捕获和冒泡都做了委托]
    - React 17版本以前 是基于 "document" 容器的 , [而且只做了冒泡阶段的委托]
*/

