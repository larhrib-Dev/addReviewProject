import { Formik } from 'formik';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import * as Yup from 'yup';
import axios from 'axios';

class updateCar extends Component {

    constructor(props){
      super(props);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleFormSubmit(values, bag) {
        console.log(values);
    }

    handleChange(e){
        console.log(e.target.value)
    }
    render(){
        let car;
        try {
            car = this.props.location.state.car;
        } catch(e) {
            car = undefined;
        }
        if (!car) this.props.history.push('/home');
        const {model, make, year, size, power, type} = car;
        return (
            <Row style={{ marginTop: 50 }}>
              <Col>
                <h3 style={{ textAlign: 'center' }}>Edit Car</h3>
                <hr />
                <Formik 
                    initialValues={{model, make, year, size, power, type}}
                    onSubmit={this._handleFormSubmit}
                    validationSchema={Yup.object().shape({
                        model: Yup.string().required(),
                        make: Yup.string().required(),
                        year: Yup.number().positive(),
                        size: Yup.number().positive(),
                        power: Yup.number().positive().integer(),
                        type: Yup.number().positive().integer()
                    })}
                >
                { 
                    ({handleChange,handleSubmit, isValid, isSubmitting, errors, touched, handleBlur}) => 
                    (
                        <div>
                            <FormGroup>
                                <Label>Model</Label>
                                <Input
                                invalid={errors.model && touched.model}
                                name="model"
                                type="string"
                                placeholder="Model"
                                onChange={handleChange}
                                value={car.model}
                                onBlur={handleBlur}
                                />
                                {errors.model && touched.model && (
                                <FormFeedback>{errors.model}</FormFeedback>
                                )}
                            </FormGroup>
                             <FormGroup>
                                <Label>Make</Label>
                                <Input
                                invalid={errors.make && touched.make}
                                name="make"
                                type="string"
                                placeholder="Make"
                                onChange={handleChange}
                                value={car.make}
                                onBlur={handleBlur}
                                />
                                {errors.make && touched.make && (
                                <FormFeedback>{errors.make}</FormFeedback>
                                )}
                            </FormGroup>
                             <FormGroup>
                                <Label>Year</Label>
                                <Input
                                invalid={errors.year && touched.year}
                                name="year"
                                type="number"
                                placeholder="Year"
                                onChange={handleChange}
                                value={car.year}
                                onBlur={handleBlur}
                                />
                                {errors.year && touched.year && (
                                <FormFeedback>{errors.year}</FormFeedback>
                                )}
                            </FormGroup>
                             <FormGroup>
                                <Label>Size</Label>
                                <Input
                                invalid={errors.size && touched.size}
                                name="size"
                                type="number"
                                placeholder="Size"
                                onChange={handleChange}
                                value={car.size}
                                onBlur={handleBlur}
                                />
                                {errors.size && touched.size && (
                                <FormFeedback>{errors.size}</FormFeedback>
                                )}
                            </FormGroup>
                             <FormGroup>
                                <Label>Power</Label>
                                <Input
                                invalid={errors.power && touched.power}
                                name="power"
                                type="number"
                                placeholder="Power"
                                onChange={handleChange}
                                value={car.power}
                                onBlur={handleBlur}
                                />
                                {errors.power && touched.power && (
                                <FormFeedback>{errors.power}</FormFeedback>
                                )}
                            </FormGroup>
                             <FormGroup>
                                <Label>Type</Label>
                                <Input
                                invalid={errors.type && touched.type}
                                name="type"
                                type="number"
                                placeholder="Type"
                                onChange={handleChange}
                                value={car.type}
                                onBlur={handleBlur}
                                />
                                {errors.type && touched.type && (
                                <FormFeedback>{errors.type}</FormFeedback>
                                )}
                            </FormGroup>
                            <Button
                                onClick={handleSubmit}
                                style={{ marginTop: 20 }}
                                color="primary"
                                block
                            >
                                Edit Car
                            </Button>
                            <Link to="/home"><Button color="info" style={{ marginTop: 10 }} block>Return to Home</Button></Link>
                        </div>
                    )
                }
                </Formik>
            </Col>
           </Row>
        );
    }
}
 
 
export default updateCar;