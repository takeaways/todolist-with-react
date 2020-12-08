import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
