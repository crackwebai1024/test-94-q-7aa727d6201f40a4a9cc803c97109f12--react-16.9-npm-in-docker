import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import userReducer from "./store/reducers/user";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));