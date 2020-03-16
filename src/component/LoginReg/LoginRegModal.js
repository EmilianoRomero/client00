import React, { useState } from "react";
import LoginLink from "./../Login/LoginLink";
import RegisterLink from "./../Register/RegisterLink";
import User from ".././00Images/user.png";
import "./LoginRegModal.css";

//Acá manejo los estados T/F con una clase nueva (la clase Si está abierta)

const LoginRegModal = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="login-reg">
        <img
          className="login-reg-icon"
          src={User}
          alt=""
          onClick={() => setDisplayModal(true)}
        />
      </div>
      {displayModal && (
        <div className="modal-login-reg">
          <LoginLink />
          <RegisterLink />
        </div>
      )}
    </>
  );
};

export default LoginRegModal;
