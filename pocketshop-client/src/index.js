import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './../src/strore/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

const app = (
  <React.StrictMode>
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>
    
)
ReactDOM.render(
  // <React.StrictMode>
    app
  
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
