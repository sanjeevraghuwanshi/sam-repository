import React, { Component, Fragment } from 'react';
import { Switch } from "react-router-dom";

import { MainRoute } from "../routes/routesMap";
import "./App.css";

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <Fragment>
                <Switch>
                    <MainRoute />
                </Switch>
            </Fragment>
        );
    }
}

export default App;