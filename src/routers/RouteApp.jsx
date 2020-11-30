import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AddCar from '../components/addCar';
import updateCar from '../components/updateCar';
import { Home, Login, Logout } from '../pages';
 
const RouteApp = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Logout} />
            <Route path="/home" exact component={Home} />
            <Route path="/addToCar" exact component={AddCar} />
            <Route path="/update/:id" exact render={props => <updateCar {...props} />} component={updateCar} />
        </Fragment>
    );
}
 
 
export default RouteApp;