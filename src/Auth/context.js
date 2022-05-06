import React, { useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";
import { getSessionCookie } from "./session.js";

import { getUser } from "../API/usersAPI.js";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState(false);

  const getCurrentUser = () => {
    getUser(session.token, session.userId).then((resp) => {
      if (resp === "User needs to sign in") {
        setUser(false);
        Cookies.remove("session");
        setSession(false);
      } else {
        setUser(JSON.parse(resp).result.data);
      }
    });
  };

  useEffect(() => {
    if (
      session !== false &&
      session.token !== null &&
      session.user_id !== null &&
      !user
    ) {
      getCurrentUser();
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ session, setSession, user }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
