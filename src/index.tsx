import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import Root from "./components/Root";

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={store} />, rootElement as HTMLElement);
