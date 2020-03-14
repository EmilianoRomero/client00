import React from 'react';
import './Backdrop.css';

//Acá se va a llamar a lo que quiera que se indique en la función al hacer click
//Le paso las propiedades del evento click.
const Backdrop = props => (
        <div className="backdrop" onClick={props.click}/>
    )

    export default Backdrop;