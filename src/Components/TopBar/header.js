import React, { useState } from 'react';

// components
import UserInfo from "../UserStatsBar/userInfo";
import LogOut from '../LogOutButton/logOut';

// scss
import "./header.scss"

const TopBar = () => {

    return(
       <div className="g01__header">
           <LogOut/>
           <UserInfo/>
       </div>
    )
}

export default TopBar;
