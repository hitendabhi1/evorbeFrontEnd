import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Auth Context
import { UserContext } from "./Auth/context.js";

// Pages
import Auth from "./Pages/auth.js";
import LoggedIn from "./Pages/loggedIn.js";
import Ships from "./Pages/ships.js";

// components
import TopBar from "./Components/TopBar/header.js";
import NavBar from "./Components/Navigation/navBar.js";

function App() {
  const { session, user } = useContext(UserContext);

  const queryClient = new QueryClient();

  if (!session && !user) {
    return (
      <>
        <Auth />
      </>
    );
  } else {
    return (
      <>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <BrowserRouter>
            <TopBar />
            <NavBar />
            <Routes>
              <Route path='/' element={<LoggedIn />} />
              <Route path='/ship' element={<Ships />} />
              {/* <Route path='/messages' element={<LoggedIn />} /> */}
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </>
    );
  }
}

export default App;
