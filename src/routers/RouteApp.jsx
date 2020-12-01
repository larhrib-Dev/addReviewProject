import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AddCar from '../components/addCar';
import addReviews from '../components/addReviews';
import allUser from '../components/all_users';
import search from '../components/search';
import updateCar from '../components/updateCar';
import updateUser from '../components/updateUser';
import { Home, Login, Logout } from '../pages';
 
const RouteApp = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Logout} />
            <Route path="/home" exact component={Home} />
            <Route path="/addToCar" exact component={AddCar} />
            <Route path="/update/:id" exact component={updateCar} />
            <Route path="/all_users" exact component={allUser} />
            <Route path="/editUser/:string" exact component={updateUser} />
            <Route path="/search/" exact component={search} />
            <Route path="/addReviews/:id" exact component={addReviews} />
        </Fragment>
    );
}
 
 
export default RouteApp;