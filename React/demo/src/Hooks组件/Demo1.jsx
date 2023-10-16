// Hooks 组件开发

/* 
  函数组件
    - 不具备 "状态、ref、生命周期"特性，第一次渲染，无法基于组件内部的操作来控制其更新，因此，我们称之为静态组件;
    - 但是具备属性及插槽，父组件可以控制其重新渲染;
    - 渲染流程简单、渲染速度较快
    - 基于 函数式变成 思想设计、 提供更细粒度的逻辑组织和复用

  类组件
    - 具备 "状态、ref、生命周期"特性，第一次渲染，可以基于组件内部的操作来控制其更新，因此，我们称之为动态组件;
    - 渲染流程繁琐、渲染速度相对较慢;
    - 基于 类式变成 思想设计、 提供更细粒度的逻辑组织和复用;

    React Hooks 组件,就是基于React提供的Hooks函数，可以让 函数组件动态化;
*/

import React, { useState } from "react";
import { Button } from "antd";
// 纯函数 组件

const HooksDemo = (props) => {
  /* 
    useState:React Hook 函数之一，目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新

    let xxx = useState(initValue);
     - 执行useState，传递的initValue作为初始值
     - 执行这个方法，返回结果是一个数组 
  */

  let [num, setNum] = useState(0);
 
  /* 
    执行这个useState,出眼传递的initValue作为初始值,返回的结果是一个数组:[状态值,修改状态的方法]
      - num 变量存储的是：获取的状态值
      - setNum 变量存储的是：修改状态的方法
    
    执行setNum(value)方法,可以修改状态值，通知视图更新
  */

  return (
    <>
      <div className="demo-wrap">
        <h2>{num}</h2>
        <Button onClick={() => setNum(num + 1)}>按钮</Button>
      </div>
    </>
  );
};

export default HooksDemo;
