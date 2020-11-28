import React, { Component } from 'react';
import { Button, Col, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';


class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }
    _handleFormSubmit(values) {
        console.log(values);
    }

    render() { 
        return (
            <div style={{ padding: 20 }}>
                <h3 style={{ textAlign: 'center' }}>Sign in to your account</h3>
                <hr />
                <Formik initialValues={{ email: '', password: '' }} 
                        onSubmit={this._handleFormSubmit}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            password: Yup.string().min(6).required()
                        })}>
                    {  ({ handleChange, handleSubmit, isValid, isSubmitting, handleBlur, errors, touched }) => (
                        <Row>
                          <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                              <Label>Email</Label>
                              <Input  name="email"
                                      invalid={errors.email && touched.email}
                                      type="email"
                                      placeholder="abdelaziz@gmail.ca"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                              />
                                {
                                    errors.email && touched.email ? 
                                    <FormFeedback>{errors.email}</FormFeedback> :
                                    null
                                }
                              <Label>Password</Label>
                              <Input  name="password"
                                      invalid={errors.password && touched.password}
                                      type="password"
                                      placeholder="Your Password"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                              />
                                {
                                    errors.password && touched.password ? 
                                    <FormFeedback>{errors.password}</FormFeedback> :
                                    null
                                }
                              <Button style={{ marginTop: 10 }} 
                                        color="primary" 
                                        block
                                        onClick={handleSubmit}
                                        disabled={!isValid || isSubmitting}
                                        >Sign In
                              </Button>
                            </FormGroup>
                          </Col>
                        </Row>
                    )}
                </Formik>
            </div>
        );
    }
}

export {Login};