import React, { useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";
import { getSessionCookie } from "./session.js";

import { getUser } from "../API/usersAPI.js";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState(false);

  const getUsers = () => {
    getUser(session.token, session.userId).then((resp) => {
      //   setUser(JSON.parse(resp).result.data);

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
    if (session && !user) {
      getUsers();
    }
  });

  return (
    <UserContext.Provider value={{ session, setSession, user }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
