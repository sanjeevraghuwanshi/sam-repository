import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
// const Signup = () => <p>Sign up page</p>;

const AuthLayout = () => {
    return (
        <div>
            <h1>Auth Layout</h1>
            <Switch>
                <Route path="/auth/signup" exact component={Register} />
                <Route path="/auth/login" exact component={Login} />
                <Redirect from="/auth" to="/auth/login" exact />
                <Route />
            </Switch>
        </div>
    );
}

export default AuthLayout;