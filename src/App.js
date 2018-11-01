import React, { Component } from "react";
import "./App.css";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as gardenActions from "store/garden/actions";

import reducers from "store/reducers";

import Router from "./components/Router";

const middlewares = [thunk];
const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(...middlewares))
);

class App extends Component {
    componentDidMount() {
        setInterval(() => store.dispatch(gardenActions.updateGarden()), 1000);
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
