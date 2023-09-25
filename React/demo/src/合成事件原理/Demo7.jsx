import React from "react";

class Demo extends React.Component {
  state = {
    arr: [
      {
        id: 1,
        title: "新闻",
      },
      {
        id: 2,
        title: "体育",
      },
    ],
  };


  render() {
    let { arr } = this.props;
    return (
      
      <div>
        {arr.map((item) => {
          const { id, title } = item;
          return (
            <span key={id} style={{ color: "red" }}>
              {title}
            </span>
          );
        })}
      </div>
    );
  }
}
