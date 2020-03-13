import React from 'react';
import './DrawerToggleButton.css';

//Acá el event listener recibe la esa referencia asignada.
//props.click contiene la referencia (dirección) del método
//de la función que debe ser ejecutada cuando este botón sea clicado.
const drawerToggleButton = props => (
  
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;