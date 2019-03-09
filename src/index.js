import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Store from "./store";
import { Provider } from "mobx-react";

const store = Store.create({});
window.store = store;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
