import React, { useState } from "react";

// components
import RegisterComponent from "../Components/RegisterUserForm/register.js";
import SignIn from "../Components/SignInForm/signIn.js";

function AuthPage(props) {
  return (
    <>
      {/* <RegisterComponent /> */}
      <SignIn props={props}/>
    </>
  );
}

export default AuthPage;
