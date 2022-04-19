import React, { useEffect, useState, createContext} from "react";

import { getSessionCookie } from "./session.js";

const UserContext = createContext();

const ContextProvider = ({children}) => {

    const [auth, setAuth] = useState(false);
    const [session, setSession] = useState(getSessionCookie());

    console.log(session);

    return(
        <UserContext.Provider
            value={{auth, setAuth, session, setSession}}
        >
            {children}
        </UserContext.Provider>
    )
}

export {ContextProvider, UserContext};