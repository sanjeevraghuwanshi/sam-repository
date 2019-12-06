import React from 'react';
import PropTypes from 'prop-types'

import { Field, reduxForm, reset } from 'redux-form';
import Joi from "joi-browser";

import { NavLink } from 'react-router-dom';

import Form from '../common/form';
import { connect } from 'react-redux';
import { doLogin } from '../../actions/userAction';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { isUserExists } from "../../selectors/loginSelectors";

import i18next from 'i18next';
import { Translation } from "react-i18next";

class Login extends Form {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            lng: i18next.language,
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
            <Container component="main" maxWidth="xs">
                <Grid item xs={12} >

                    <Typography className="from-title" component="h1" variant="h5"> {i18next.t('auth.signIn')} </Typography>

                    <form className="formCustom" onSubmit={this.handleSubmit} noValidate>
                        <Field className="formControl" onChange={this.handleChange} label={i18next.t('auth.email')} name="email" component={this.inputRender} />
                        <Field label={i18next.t('auth.password')} name="password" onChange={this.handleChange} component={this.inputRender} />
                        <Button type="submit" fullWidth variant="contained" color="primary">{i18next.t('auth.submit')}</Button>
                    </form>
                </Grid>
                <br></br>
                <Grid container>
                    <Grid item xs>
                        <NavLink to="/forgot-password" variant="body2">{i18next.t('auth.forgotPassword')} </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/auth/signup" variant="body2">{i18next.t('auth.notHaveAccount')} </NavLink>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const validate = (fromValue) => {
    const schema = {
        email: Joi.string()
            .required()
            .label("email"),
        password: Joi.string()
            .required()
            .label("password")
    };

    const options = { abortEarly: false };
    const { error } = Joi.validate(fromValue, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
        errors[item.path[0]] = item.message;
    }
    return errors;
}

const mapDispatchToProps = dispatch => ({
    onFetchLoginData: user => dispatch(doLogin(user))
})

const mapStateToProps = (state) => ({
    isAuthorise: isUserExists(state),
});

Login.prototypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

const LoginMap = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({
    form: 'loginForm',
    validate: validate
})(LoginMap);