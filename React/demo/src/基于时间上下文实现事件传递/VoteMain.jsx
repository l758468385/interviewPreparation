import React from "react";
import ThemeContext from "../ThemeContext";

class VoteMain extends React.Component {
  static contextType = ThemeContext;
  render() {
    let { supNum, oppNum } = this.context;
    return (
      <>
        <div className="show-box">
          <span>支持人数:{supNum}</span>
          <span>反对人数:{oppNum}</span>
        </div>
      </>
    );
  }
}

export default VoteMain;
