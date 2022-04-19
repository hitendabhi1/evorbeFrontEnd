import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Auth from "./Pages/auth.js";
import LoggedIn from "./Pages/loggedIn.js";

import { UserContext } from "./Utilities/context.js";

function App() {

  const {auth,session} = useContext(UserContext);


  if(!session){
    return (
      <>
        <Auth/>
      </>
    )
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoggedIn />} />
            <Route path='/ships' element={<LoggedIn />} />
            <Route path='/messages' element={<LoggedIn />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

}

export default App;
