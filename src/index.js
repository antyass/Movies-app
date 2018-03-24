import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import rootReducer from "./RootReducer";
import "./style.css";

import AppContainer from "./containers/app-container";
import rootSaga from "./RootSaga";

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
