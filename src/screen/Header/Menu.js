import React from "react";
import "./Menu.css";
import DrawerToggleButton from "./DrawerToggleButton";

const Menu = (props) => (
  <nav className="menuNavigation">
    <div className="menuOptions">
      <div>
        {/*Esto se recibe de App, que lo envía acá a través de la*/}
        {/*function reference drawerClickHandler que se recibe en esa prop*/}
        {/*y se le pasa a la prop click del componente DrawerToggleButton*/}
        {/*que la envía directamente al componente en cuestión*/}
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </div>
  </nav>
);

export default Menu;
