import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { getAllUsers } from '../api/user';
import axios from 'axios';
import { Link } from 'react-router-dom';

class allUser extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    componentDidMount(){
        getAllUsers()
        .then(res => {
          const users = res.data ;
          this.setState({ users });
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    onDeleteUser(username) {
       if (username) {
            axios
            .delete(`https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/user/${username}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
            });
       }
    }
    
    // {https://carguideserviceapi20201105030004.azurewebsites.net/CarGuideServiceAPI/vehiclereview/user?username=Oussama1} see car by user
    render() { 
        const users = this.state.users;
        console.log(users);
        return (
           users ? (
          <>
            <Table striped className="mt-5">
                <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Operations</th>
                    <th>Cars</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={{ pathname: `/editUser/${user.userName}`, state: {user}  }}><Button color="primary" size="sm" className="mr-3">Edit</Button></Link>
                                    <Button color="danger" size="sm" onClick={() => this.onDeleteUser(user.userName)}>Delete</Button>
                                </td>
                                <td>
                                    <Button color="info" size="sm">See</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
           <Link to="/home"><Button color="info" size="lg">Return to Home</Button></Link>
          </>
           ) : (<div>Loading ....</div>)
        );
    }
}
 
export default allUser;