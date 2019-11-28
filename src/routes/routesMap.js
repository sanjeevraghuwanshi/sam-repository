import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routesConfig";

export const RouteWithSubRoute = (route) => {
    return (
        <div>
            {route.authentication ? (
                <div>U r authorised</div>
            ) : (
                    <Route exact
                        path={routes.path}
                        render={props => (
                            <route.component {...props} />
                        )}
                    />
                )}
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

