import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import App from "./App";

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/:filter?" component={App} />
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;