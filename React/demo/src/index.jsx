import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import "./合成事件原理/index.scss";
import Demo from "./合成事件原理/Demo1.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Demo></Demo>
  </>
);

reportWebVitals();
