import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Layouts from "./layouts/Layouts";

import { MainRoute } from "../routes/routesMap";
import "./App.css";

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <BrowserRouter>
                <Layouts />
            </BrowserRouter>
        );
    }
}

export default App;

