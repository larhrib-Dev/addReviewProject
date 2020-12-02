import React, { Component } from 'react';
 
class addReviews extends Component {
    /**
     * username
     * input year make model all options
     * passed object {username, year, make, ...options}
     * return ...options not (username, type)
     */
    render() { 
        console.log(this.props.location.state)
        return (
            <div>
                addReviews
            </div>
        );
    }
}
 
export default addReviews;