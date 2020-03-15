import React, { useState } from "react";
import LoginLink from "./component/Login/LoginLink";
import RegisterLink from "./component/Register/RegisterLink";
//import User from "./component/00Images/user.png";
import "./LoginRegModal.css";

//Acá manejo los estados T/F con una clase nueva (la clase Si está abierta)
const LoginRegModal = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <button className="login-reg" onClick={() => setDisplayModal(true)} />
      {displayModal && (
        <nav className="login-reg-navigation">
          <ul>
            <li>
              <LoginLink />
            </li>
            <li>
              <RegisterLink />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default LoginRegModal;
