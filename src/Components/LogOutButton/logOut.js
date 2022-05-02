import React, { useContext } from "react";
import Cookies from "js-cookie";

import { UserContext } from "../../Auth/context";

function LogOut() {
  const { setSession } = useContext(UserContext);

  const handleEvent = () => {
    Cookies.remove("session");
    setSession(false);
  };

  return (
    <div>
      <button onClick={handleEvent}>logout</button>
    </div>
  );
}

export default LogOut;
