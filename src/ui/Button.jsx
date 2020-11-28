import React from 'react';
import {Button} from 'reactstrap';
 
const UiButton = (props) => {
    const block = props.block;
    if (block) {
        return <Button color={props.color} block >{props.name}</Button>;
    }
    return <Button style={{ marginTop: 10 }} color={props.color} >{props.name}</Button>;
}


export default UiButton;