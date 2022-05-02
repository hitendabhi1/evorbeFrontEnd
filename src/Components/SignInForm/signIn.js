import React, { useState, useContext } from "react";

// functions
import { signIn } from "../../API/authentication.js";

import { UserContext } from "../../Auth/context";
import { setSessionCookie } from "../../Auth/session.js";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSession } = useContext(UserContext);

  const handleEvent = (email, password) => {
    signIn(email, password).then((result) => {
      console.log(result);
      let data = JSON.parse(result).result.data;

      let { token, user_id } = data;

      if (token) {
        let user = {
          token,
          userId: user_id,
        };
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
      <button onClick={() => handleEvent(email, password)}>Click Me</button>
    </div>
  );
}

export default SignIn;
