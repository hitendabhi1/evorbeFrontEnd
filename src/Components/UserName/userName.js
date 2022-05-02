import React, { useContext } from "react";
import { UserContext } from "../../Auth/context";

function UserName() {
  const { user } = useContext(UserContext);

  return (
    <>
      <span>{user.username}</span>
    </>
  );
}

export default UserName;
