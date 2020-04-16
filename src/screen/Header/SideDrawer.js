import React from "react";
import { Link } from "react-router-dom";

//import Favourites from "./components/Favourites";
import "./SideDrawer.css";

//Acá manejo los estados T/F con una clase nueva (la clase Si está abierta)
const SideDrawer = (props) => {
  //Tengo mi clase original y una nueva (drawer abierto)
  //La clase se le agrega como array. La propiedad es show.
  //Si show es T, entonces que se adicione al array con la clase original
  //(side-drawer) más la clase nueva (open). Estoy haciendo un push de la clase.
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className=/*"side-drawer" not anymore*/ {drawerClasses}>
      <ul>
        <li>
          <Link to="/users/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="">Option 2</Link>
        </li>
        <li>
          <Link to="">Option 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
