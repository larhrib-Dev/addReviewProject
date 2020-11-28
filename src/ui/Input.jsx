import React, { Fragment } from 'react';
import {Input, Label} from 'reactstrap';
 
const UiInput = (props, {...options}) => {
    return (
       <Fragment>
         <Label>{props.label}</Label>
         <Input name={props.name}
               type={props.type}
               placeholder={props.placeholder}
               onChange={options}
         />
       </Fragment>
    );
}

export default UiInput;