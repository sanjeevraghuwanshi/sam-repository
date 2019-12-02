import React from 'react';
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import App from "./App";
import history from '../history';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;