import React from "react";
import PropTypes from "prop-types";
export default class Vote extends React.Component {
  /* 属性校验规则 */
  static defaultProps = {
    title: "温馨提示",
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    supNum: 10,
    oppNum: 5,
  };
  render() {
    let { title } = this.props;
    let { supNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2>{title}</h2>
          <span>{supNum + oppNum}</span>
        </div>
        <div className="main">
          <p>支持人数：{supNum}</p>
          <p>反对人数：{oppNum}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              supNum++;
              this.setState({ supNum });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              oppNum++;
              this.setState({ oppNum });
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
}

class Parent {
  // new 的时候会执行构造函数
  constructor(x, y) {
    this.total = x + y;
    // this是创建的实例
  }

  num = 200; // 等价于 this.num = 200 ,给实例添加 私有属性

  // 实例上的方法
  getTotal = () => {
    console.log("this", this);
  };

  //   定义在 Parent 原型上的方法
  getSum() {
    return this.total;
  }

  //=====

  // 把构造函数当做一个普通对象，可以直接调用,为其设置静态的属性方法
  static average() {
    return this.total / 2;
  }
}

const p1 = new Parent(10, 20);
