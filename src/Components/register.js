import React, { useState } from "react";

// functions
import { registerUser } from "../API/authentication";

function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEvent = (email, username, password) => {
    registerUser(email, username, password).then((result) => {
      console.log(JSON.parse(result));
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
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => handleEvent(email, username, password)}>
        Click Me
      </button>
    </div>
  );
}

export default RegisterComponent;
