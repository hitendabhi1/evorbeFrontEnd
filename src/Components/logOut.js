import React, { useContext } from "react";
import Cookies from 'js-cookie';

import { UserContext } from "../Utilities/context";

function LogOut() {

  const {setAuth, setSession}  = useContext(UserContext);;

  const handleEvent = () => {
    setAuth(false);
    Cookies.remove('session');
    setSession(false);
  }

  return (
    <div>
      <button onClick={handleEvent}>
       logout
      </button>
    </div>
  );
}


export default LogOut;
