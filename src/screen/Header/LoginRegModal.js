import React, { useState, useEffect, useRef } from "react";
import LoginLink from "./LoginLink";
import RegisterLink from "./RegisterLink";
import User from "./user.png";
import "./LoginRegModal.css";

//Acá manejo los estados T/F con una clase nueva (la clase Si está abierta)

const LoginRegModal = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [displayModal, setDisplayModal] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setDisplayModal(false));

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
        <div className="modal-login-reg" ref={ref}>
          <LoginLink />
          <RegisterLink />
        </div>
      )}
    </>
  );
};

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default LoginRegModal;
