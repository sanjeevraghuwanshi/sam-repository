import React from 'react';
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

class Login extends Form {
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
            <Container component="main" maxWidth="xs">
                <Grid item xs={12} >

                    <Typography className="from-title" component="h1" variant="h5"> Sign in </Typography>

                    <form className="formCustom" onSubmit={this.handleSubmit} noValidate>
                        <Field className="formControl" onChange={this.handleChange} label="Please Enter Email" name="email" component={this.inputRender} />
                        <Field label="Please Enter Password" name="password" onChange={this.handleChange} component={this.inputRender} />
                        <Button type="submit" fullWidth variant="contained" color="primary">Submit</Button>
                    </form>
                </Grid>
                <br></br>
                <Grid container>
                    <Grid item xs>
                        <NavLink to="/forgot-password" variant="body2">Forgot password? </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/auth/signup" variant="body2"> Don't have an account? Sign Up</NavLink>
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

// const LoginMap = connect(mapStateToProps, { login })(Login)

const mapDispatchToProps = dispatch => ({
    onFetchLoginData: user => dispatch(doLogin(user))
})

const mapStateToProps = (state) => ({
    isAuthorise: isUserExists(state),
});

const LoginMap = connect(mapStateToProps, mapDispatchToProps)(Login)

export default reduxForm({
    form: 'loginForm',
    validate: validate
})(LoginMap);