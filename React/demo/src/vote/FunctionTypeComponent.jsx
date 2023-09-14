import React from "react";

/* 
  函数式组件是 静态组件
    第一次渲染组件，把函数执行 
      - 函数执行 就会产生一个 私有的上下文 
      - 把解析出来的 props [含children] 传递进来 [但是冻结了]
      - 把函数 返回的 JSX 元素 [virtualDom] 进行渲染
*/
const Vote = function (props) {
  let { title, children } = props;
  let supNum = 10,
    oppNum = 5;

  const virtualDom = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        className: "vote-box",
      },
      React.createElement(
        "div",
        {
          className: "header",
        },
        React.createElement(
          "div",
          {
            className: "title",
          },
          title
        ),
        React.createElement("span", null, supNum + oppNum, "\u4EBA")
      ),
      React.createElement(
        "div",
        {
          className: "main",
        },
        React.createElement(
          "p",
          null,
          "\u652F\u6301\u4EBA\u6570\uFF1A",
          supNum,
          "\u4EBA"
        ),
        React.createElement(
          "p",
          null,
          "\u53CD\u5BF9\u4EBA\u6570\uFF1A",
          oppNum,
          "\u4EBA"
        )
      ),
      React.createElement(
        "div",
        {
          className: "footer",
        },
        React.createElement("button", null, "\u652F\u6301"),
        React.createElement("button", null, "\u53CD\u5BF9")
      )
    )
  );
  console.log("virtualDom", virtualDom);
  return (
    <>
      <div className="vote-box">
        <div className="header">
          <div className="title">{title}</div>
          <span>{supNum + oppNum}人</span>
        </div>

        <div className="main">
          <p>支持人数：{supNum}人</p>
          <p>反对人数：{oppNum}人</p>
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
    </>
  );
};

export default Vote;
