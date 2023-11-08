import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Login from "Scenes/login/Login";

function forgo_Pass() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <Login />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;
    return <Recovered />;
  }

  return (
    <div>
      <RecoveryContext.Provider
        value={{ page, setPage, otp, setOTP, setEmail, email }}
      >
        <Login />
      </RecoveryContext.Provider>
    </div>
  );
}

export default forgo_Pass;