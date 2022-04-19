import React, { useState, useContext } from "react";

// functions
import { signIn } from "../API/authentication";

import { UserContext } from "../Utilities/context";
import { setSessionCookie } from "../Utilities/session.js"

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAuth,setSession} = useContext(UserContext);


  const handleEvent = (email, password) => {
    signIn(email, password).then((result) => {
        let data = JSON.parse(result).data;
        let {token, user_id} = data
        
      if(token){
        let user = {
          token,
          userId:user_id
        }
        setAuth(token);
        setSessionCookie(user);
        setSession(user);
      }
    });
  };

  return (
    <div>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => handleEvent(email, password)}>
        Click Me
      </button>
    </div>
  );
}


export default SignIn;
