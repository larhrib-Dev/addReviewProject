import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddCar from '../components/addCar';
import addReviews from '../components/addReviews';
import allUser from '../components/all_users';
import search from '../components/search';
import updateCar from '../components/updateCar';
import updateUser from '../components/updateUser';
import { Home, Login, Logout } from '../pages';
import ProtectedRoute from './ProtectedRoute';
 
const RouteApp = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Logout} />
            <Switch>
                <ProtectedRoute path="/home" exact component={Home} />
                <ProtectedRoute path="/addToCar" exact component={AddCar} />
                <ProtectedRoute path="/update/:id" exact component={updateCar} />
                <ProtectedRoute path="/all_users" exact component={allUser} />
                <ProtectedRoute path="/editUser/:string" exact component={updateUser} />
                <ProtectedRoute path="/search/" exact component={search} />
                <ProtectedRoute path="/addReviews/:id" exact component={addReviews} />
            </Switch>
        </Fragment>
    );
}
 
 
export default RouteApp;