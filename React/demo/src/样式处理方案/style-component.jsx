import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const items = [
  {
    title: "title1",
    type: "primary",
    desc: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    title: "title2",
    type: "other",
    desc: "Lorem ipsum dolor sit amet consectetur ",
  },
];

function App() {
  return <div>{items.map(renderItem)}</div>;
}

const Wrap = styled.div`
  margin: 10px auto 10px;
  padding: 10px;
  width: 90%;
  border-radius: 5px;
  background: #eee;
`;

render(<App />, document.getElementById("app"));
