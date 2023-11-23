import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./样式处理方案/index.jsx";

// react 会创建一个执行上下文
import { Provider } from "react-redux";
import store from "./Redux/index";

// 引入 Redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);

reportWebVitals();
