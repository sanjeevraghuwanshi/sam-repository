import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routesConfig";

export const RouteWithSubRoute = (route) => {
    return (
        <div>
            <Switch>
                {route.authentication ? (
                    <Route exact
                        path={routes.path}
                        render={props => (
                            <div>U r authorised</div>
                        )}
                    />
                ) : (
                        <Route exact
                            path={routes.path}
                            render={props => (
                                <route.component {...props} />
                            )}
                        />
                    )}
            </Switch>
        </div>
    )
}

export const MainRoute = () => {
    return (
        <Router>
            {routes.map((route, i) => (
                <RouteWithSubRoute key={i} {...route} />
            ))}
        </Router>
    );
}

