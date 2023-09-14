import PropTypes from "prop-types";
import React from "react";
// 函数组件 返回一个JSX元素
const DemoOne = function Demo(props) {
  let { children } = props;

  // if (children) {
  //   children = [];
  // } else if (!Array.isArray(children)) {
  //   children = [children];
  // }
  children = React.Children.toArray(children);

  let headerSlot,
    footerSlot;
  return (
    <>
      {children[0]}
      <div className="demo-box">我是Demo</div>
      {children[1]}
    </>
  );
};

DemoOne.defaultProps = {
  x: 0,
};

DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
};

export default DemoOne;

/* 
  React 代码编译、执行过程

  1、首先通过 babel-preset-app 解析JSX代码,转换成 createElement 格式的代码

  2、createElement 会转换为 虚拟DOM 格式的代码

  3 、
  
*/

/*
 React.createElement(
  React.Fragment,
  null,
  children[0],
  React.createElement(
    "div",
    {
      className: "demo-box",
    },
    "\u6211\u662FDemo"
  ),
  children[1]
  );
 */
