import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux"; //
import { Provider } from "react-redux";
import thunk from "redux-thunk"; //Middleware
import rootReducer from "./store/reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
This is the place where we want to create our store 
and make it accessible to all components in our application.

In this code, you pass your root reducer to the Redux createStore function, 
which returns a store object. You then pass this object to the react-redux 
Provider component, which is rendered at the top of our component tree. 
This ensures that any time we connect to Redux in our app, 
the store is available to our components.

With a basic Redux store, you can only do simple synchronous updates 
by dispatching an action. Middleware extend the stores abilities, 
and let you write asynchronous (async) logic (eg. fetching information 
from external sources) that interacts with the store. 
This is why we need the redux-thunk middleware.
*/