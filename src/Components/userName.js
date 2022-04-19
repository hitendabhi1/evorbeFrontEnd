import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Utilities/context";

// function
import { getUserName } from "../API/usersAPI.js";


function UserName() {

    const [username, setUsername] = useState(null);

    const {session} = useContext(UserContext);


    
    useEffect(() => {

        const { token, userId } = session

        console.log(getUserName(token, userId));
    });
    

    return (
        <>
            <h1>hello</h1>
        </>
    ) 

}

export default UserName;