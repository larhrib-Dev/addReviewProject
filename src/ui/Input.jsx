import React, { Fragment } from 'react';
import {Input, Label} from 'reactstrap';
 
const UiInput = (props) => {
    return (
       <Fragment>
         <Label>{props.label}</Label>
         <Input name={props.name}
               type={props.type}
               placeholder={props.placeholder}
         />
       </Fragment>
    );
}

export default UiInput;