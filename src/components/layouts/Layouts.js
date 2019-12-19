import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AppLayout from "./AppLayout";
import requiresAuth from "../requiresAuth";

const NotFound = () => <h1>Not Found</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const AppChart = () => <h1>AppChart</h1>;
const Reports = () => <h1>Reports</h1>;


const Layouts = () => {
    return (
        <Switch>
            <Route path="/auth" component={AuthLayout} />
            {/* <Route path="/app" render={(props) => <AppLayout routes={routes} {...props} />} /> */}
            <Route path="/app" component={requiresAuth(AppLayout)} />
            <Redirect from="/" to="/auth/login" exact />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}

export default Layouts;

const routes = [
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
    }
];