import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Joi from "joi-browser";

import { NavLink } from 'react-router-dom';

import Form from '../common/form';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { doRegister } from '../../actions/userAction';
import { isUserRegistered } from '../../selectors/registerUserSelecter';

import { Redirect } from "react-router-dom";


class Register extends Form {
  constructor(props) {
    super(props);
    console.log("life cycle", 1)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }

  static getDerivedStateFromProps() {
    console.log("life cycle", 2)
    return null;
  };

  componentDidMount() {
    console.log("life cycle", 3)
  }

  shouldComponentUpdate() {
    console.log("life cycle", 4)
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycle", 5)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("life cycle", 6)
  }

  componentWillUnmount() {
    console.log("life cycle", 7)
  }

  static getDerivedStateFromError() {
    console.log("life cycle", 8)
    return null;
  }

  componentDidCatch(error, info) {
    console.log("life cycle", 9)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    if (user.email) {
      await this.props.onRegisterUser(user)
      console.log("user registered");
    }

    this.props.dispatch(reset('loginForm'));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value }
    })
  }
  render() {
    const redirectToReferrer = this.props.onRegisterUserSuccess;
    if (redirectToReferrer === true) {
      return <Redirect to="/home" />
    }
    return (
      <Container component="main" maxWidth="xs">
        <Grid item xs={12} >

          <Typography component="h1" className="from-title" variant="h5"> Sign up </Typography>
          <form className="formCustom" onSubmit={this.handleSubmit} noValidate>
            <Field className="formControl" onChange={this.handleChange} label="Please Enter First Name" name="firstName" component={this.inputRender} />
            <Field className="formControl" onChange={this.handleChange} label="Please Enter Last Name" name="lastName" component={this.inputRender} />
            <Field className="formControl" onChange={this.handleChange} label="Please Enter Email" name="email" component={this.inputRender} />
            <Field label="Please Enter Password" onChange={this.handleChange} name="password" component={this.inputRender} />

            <Button type="submit" fullWidth variant="contained" color="primary">Submit</Button>
          </form>

        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <NavLink to="/auth/login" >
              Already have an account? Sign in
              </NavLink>
          </Grid>
        </Grid>
        {this.props.onRegisterUserSuccess ? (<Redirect to="/auth/login" />) : <Redirect to="/auth/signup" />}

      </Container>
    )
  }
}



const validate = (fromValue) => {
  const schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
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

const mapStateToProps = state => ({
  onRegisterUserSuccess: isUserRegistered(state),
});

const mapDispatchToProps = dispatch => ({
  onRegisterUser: user => dispatch(doRegister(user))
});

const RegisterMap = connect(mapStateToProps, mapDispatchToProps)(Register)

export default reduxForm({
  form: 'registerForm',
  validate: validate
})(RegisterMap);