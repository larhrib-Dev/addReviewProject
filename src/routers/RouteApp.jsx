import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, Login } from '../pages';
 
const RouteApp = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Fragment>
    );
}
 
 
export default RouteApp;