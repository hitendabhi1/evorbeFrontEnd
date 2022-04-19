import React, { useState, useContext } from "react";

import LogOut from "../Components/logOut";

import { UserContext } from "../Utilities/context";


// components
import UserName from "../Components/userName";

function LoginPage() {
  const {session} = useContext(UserContext);

  return (
    <>
      <UserName/>
      <LogOut/>
    </>
  );
}

export default LoginPage;
