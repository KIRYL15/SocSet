import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

export let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}