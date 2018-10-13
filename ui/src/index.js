import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { api } from "./redux/reducers";

import thunk from "redux-thunk";

const middlewares = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(combineReducers({ api }), middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
