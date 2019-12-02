import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import App from "./App";

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;