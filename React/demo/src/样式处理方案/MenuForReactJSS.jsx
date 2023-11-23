import React from "react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  box: {
    backgroundColor: "lightpink",
    width: "100px",
  },
  list: {
    "& li": {
      listStyle: "none",
    },
  },
});

class Menu extends React.Component {
  render() {
    let { box, list } = this.props;
    return (
      <div className={box}>
        <ul className={list}>
          <li>手机</li>
          <li>电脑</li>
          <li>家电</li>
        </ul>
      </div>
    );
  }
}

// 对应类组件，无法直接使用 useStyles ，因为其内部还是 useXXX 的方法，无法在类中使用任何 Hooks 函数，所以我们要使用代理函数‘

const ProxyComponent = (Component) => {
  return function HOC(props) {
    const style = useStyles();

    return <Component {...props} {...style} />;
  };
};

// 利用 代理函数 , 使得 类组件 也可以使用 react-jss 样式，实现样式隔离
export default ProxyComponent(Menu);
