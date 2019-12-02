import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect, Router } from "react-router-dom";
import Layouts from "./layouts/Layouts";

import { MainRoute } from "../routes/routesMap";
import "./App.css";

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <Layouts />
        );
    }
}

export default App;

