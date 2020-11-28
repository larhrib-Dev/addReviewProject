import React, { Component } from 'react';
import { FormGroup } from 'reactstrap';
import UiButton from '../ui/Button';
import UiInput from '../ui/Input';


class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <div style={{ padding: 20 }}>
                <h3>Sign in to your account</h3>
                <hr />
                <FormGroup>
                    <UiInput label="Email"
                             name="email"
                             type="email"
                             placeholder="abdelaziz@gmail.ca"
                    />
                     <UiInput label="Password"
                             name="password"
                             type="password"
                             placeholder="Your Password"
                    />
                    <UiButton  color="primary" block="block" name="Sign In"/>
                </FormGroup>
            </div>
        );
    }
}

export {Login};