import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./css/common.css";
import { Provider } from "mobx-react";
import store from "./store/store";
import MobxDev from "mobx-react-devtools";
const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  rootElement
);
