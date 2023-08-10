import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="headerTwo">
          Home
        </NavLink>
        <NavLink to="Men" className="headerTwo">
          Men
        </NavLink>
        <NavLink to="Women" className="headerTwo">
          Women
        </NavLink>
        <NavLink to="Signup" className="headerTwo">
          SignUp
        </NavLink>
        <NavLink to="Login" className="headerTwo">
          Login
        </NavLink>
        <h2 className="headerOne">The Ultimate fashion</h2>
        <i className="search">Search</i>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
