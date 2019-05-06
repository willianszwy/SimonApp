import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Index from './views/index';
import QRCode from './views/qrcode';
import Codigo from './views/codigo';
import Status from './views/status';
import Atendimento from './views/atendimento';
import { isAuthenticated } from './services/auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )}
    />
);


const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/qrcode/" component={QRCode} />
            <Route path="/codigo/" component={Codigo} />
            <PrivateRoute path="/status/" component={Status} />
            <PrivateRoute path="/atendimento/" component={Atendimento} />
            <Route path="*" component={() => <h1>not found</h1>} />
        </Switch>
    </Router>

);

export default Routes;
