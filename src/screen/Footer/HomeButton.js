import React from "react";
import "./HomeButton.css";
import Home from "./homeIcon.png";
import { Link } from "react-router-dom";

const HomeButton = () => (
  <Link className="linkHome" to="/">
    <img className="homeImg" src={Home} alt="" />
  </Link>
);

export default HomeButton;
