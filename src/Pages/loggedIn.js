import React, { useState, useContext } from "react";

import LogOut from "../Components/logOut";

import { UserContext } from "../Utilities/context";

function LoginPage() {
  const {session} = useContext(UserContext);

  return (
    <>
      <h1>You are now logged In</h1>
      <LogOut/>
    </>
  );
}

export default LoginPage;
