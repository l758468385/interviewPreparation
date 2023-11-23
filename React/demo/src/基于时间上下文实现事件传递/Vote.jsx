import React from "react";

import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";

// 函数组件 使用 useContext 传递上下文
import FunctionTypeComponent from "./VoteFooter";

import ThemeContext from "@/ThemeContext";

import "./vote.css";

class Vote extends React.Component {
  state = {
    supNum: 10,
    oppNum: 5,
  };

  change = (type) => {
    let { supNum, oppNum } = this.state;
    if (type === "sup") {
      this.setState({
        supNum: supNum + 1,
      });
      return;
    }

    this.setState({
      oppNum: oppNum + 1,
    });
  };

  render() {
    let { supNum, oppNum } = this.state;

    return (
      <ThemeContext.Provider value={{ supNum, oppNum, change: this.change }}>
        <div className="show-box">
          <span>支持人数:{supNum}</span>
          <span>反对人数:{oppNum}</span>
        </div>
        <VoteMain></VoteMain>
        <VoteFooter></VoteFooter>

        <FunctionTypeComponent></FunctionTypeComponent>
      </ThemeContext.Provider>
    );
  }
}

export default Vote;
