import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/Ship">Ship Page</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/mission">Mission Page</NavLink>
      <NavLink to="/map">Map Page</NavLink>
      <NavLink to="/alliance">alliance Page</NavLink>
    </>
  )
}

export default NavBar;