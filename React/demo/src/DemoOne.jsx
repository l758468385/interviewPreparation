import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DemoOne from "./views/DemoOne";

/* 
  需求一: 基于数据的值，来判断元素的显示隐藏
*/

/* 
  需求二:从服务器获取了一些列表数据，循环绑定相关的内容
*/

const resultData = [
  {
    id: 1,
    title: "欢迎大家来珠峰学习",
  },
  {
    id: 2,
    title: "欢迎大家来字节实习",
  },
  {
    id: 3,
    title: "欢迎大家来腾讯学习",
  },
  {
    id: 4,
    title: "欢迎大家来华为学习",
  },
  {
    id: 5,
    title: "欢迎大家来京东学习",
  },
];

class List extends React.Component {
  render() {
    return (
      <>
        <h2 className="title">今日新闻</h2>
        <ul className="new-box">
          {resultData.map((item, index) => {
            return (
              <li>
                <span>{index + 1}</span>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

class Count extends React.Component {
  state = {
    num: 0,
  };
  render() {
    let { num } = this.state;
    let flag = false;
    return (
      <>
        <button style={{ display: flag ? "block" : "none" }}>添加</button>
        <span
          style={{
            color: "red",
            fontSize: "18px",
          }}
        >
          {num}
        </span>
        <br></br>
        <button
          onClick={() => {
            num++;
            this.setState({ num });
          }}
        >
          累加
        </button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const text = "Hello";
const titleText = "HelloWorld";

const virTualDomObj = React.createElement(
  "div",
  {
    className: "appWrapper",
  },
  React.createElement(
    "h1",
    {
      className: "title",
    },
    titleText
  ),
  React.createElement(
    "span",
    {
      className: "text",
    },
    text
  )
);

console.dir(
  React.createElement(
    "div",
    {
      className: "appWrapper",
    },
    React.createElement(
      "h1",
      {
        className: "title",
      },
      titleText
    ),
    React.createElement(
      "span",
      {
        className: "text",
      },
      text
    )
  )
);

root.render(
  <div className="appWrapper">
  
    <h1 className="titleText">{titleText}</h1>
    <span className="text">{text}</span>
  </div>
  // <DemoOne>
  //   <h1>我是标题</h1>
  //   <span>我是页脚</span>
  // </DemoOne>
);

reportWebVitals();

const result = {
  type: "div",
  key: null,
  ref: null,
  props: {
    className: "appWrapper",
    children: [
      {
        type: "h1",
        key: null,
        ref: null,
        props: {
          className: "title",
          children: "HelloWorld",
        },
        _owner: null,
        _store: {},
      },
      {
        type: "span",
        key: null,
        ref: null,
        props: {
          className: "text",
          children: "Hello",
        },
        _owner: null,
        _store: {},
      },
    ],
  },
  _owner: null,
  _store: {},
};
