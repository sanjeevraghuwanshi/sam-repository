import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Joi from "joi-browser";

import { NavLink } from 'react-router-dom';

// import Form from '../common/form';
import { connect } from 'react-redux';
// import { doLogin } from "../../actions/userAction";
import { doFetchStories, doLogin } from "../../actions/story";
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "../Button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { user } = this.state;
        if (user.email) {
            this.props.onFetchLoginData(user);
            this.setState({
                user: {
                    email: '',
                    password: ''
                }
            });
        }

    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ user: { ...this.state.user, [name]: value } });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={this.state.user.email || ''}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={this.state.user.password || ''}
                    onChange={this.handleChange}
                />

                <Button type="submit">Search</Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchLoginData: query => dispatch(doLogin(query))
})

// const LoginMap = connect(null, mapDispatchToProps)(Login)


export default connect(null, mapDispatchToProps)(Login)