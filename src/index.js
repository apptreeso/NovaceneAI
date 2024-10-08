import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import "./asset/style/index.scss";
import * as serviceWorker from "./serviceWorker";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(<App />, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
