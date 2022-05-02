import React, { useState, useContext } from "react";

import { UserContext } from "../Auth/context";


// components
import UserName from "../Components/UserName/userName";

function LoginPage() {

  return (
    <>
      <h1>Welcome <UserName/></h1>
    </>
  );
}

export default LoginPage;
