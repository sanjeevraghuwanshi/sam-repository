import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import history from '../utils/history';

const NotFound = () => <h1>Not Found</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const AppChart = () => <h1>AppChart</h1>;
const Reports = () => <h1>Reports</h1>;
const Book = () => <h1>Books</h1>;

export const routes = [
    {
        path: "/app/dashboard",
        component: Dashboard,
        label: "Dashboard",
        authentication: true,
        authorization: false,
    },
    {
        path: "/app/chart",
        component: AppChart,
        label: "Chart",
        authentication: true,
        authorization: false,
    },
    {
        path: "/app/reports",
        component: Reports,
        label: "Reports",
        authentication: true,
        authorization: false,
    },
    {
        path: "/app/book",
        component: Reports,
        label: "Book",
        authentication: true,
        authorization: false
    }
];

const requiresAuth = (ComposedComponent) => {
    class Authenticate extends Component {
        _checkAndRedirect() {
            const { isAuthenticated, redirect } = this.props;
            if (!isAuthenticated) {
                redirect();
                history.push('/auth/login');
            }
        }

        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        render() {
            const props = Object.assign({ routes: routes }, this.props);
            return (
                <div>
                    {
                        this.props.isAuthenticated
                            ? <ComposedComponent {...props} />
                            : null
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.loginState.isAuthorise
        }
    };

    const mapDispatchToProps = dispatch => bindActionCreators(
        {
            redirect: () => push('/auth/signup')
        }, dispatch);


    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool,
        redirect: PropTypes.func.isRequired
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authenticate)
}

export default requiresAuth;