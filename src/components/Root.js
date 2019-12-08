import React from 'react';
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import App from "./App";
import history from '../utils/history';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const Root = ({ store }) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        </I18nextProvider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root;