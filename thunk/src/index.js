import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import { reducer } from "./reducers";

import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
