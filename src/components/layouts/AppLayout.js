import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
const Home = () => <p>Home</p>;
const Dashboard = () => <p>Dashboard</p>;

const AppLayout = () => {
    return (
        <div>
            <h1>App Layout</h1>
            <Switch>
                <Route path="/app/home" exact component={Home} />
                <Route path="/app/dashboard" exact component={Dashboard} />
                <Redirect from="/app" to="/app/home" exact />
                <Route />
            </Switch>
        </div>
    );
}

export default AppLayout;