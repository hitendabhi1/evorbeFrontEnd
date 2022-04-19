import React, { useState } from "react";

// components
import RegisterComponent from "../Components/register.js";
import SignIn from "../Components/signIn.js";

function AuthPage(props) {
  return (
    <>
      {/* <RegisterComponent /> */}
      <SignIn props={props}/>
    </>
  );
}

export default AuthPage;
