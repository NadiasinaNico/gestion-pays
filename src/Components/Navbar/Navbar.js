import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-light mb-4">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <NavLink to="/" className="text-white nav-link" >2NM</NavLink>
    </li>
    <li className="nav-item">
       <NavLink to="/" className="text-white nav-link" >Accueil</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/pays" className="text-white nav-link" >Liste Pay</NavLink>
    </li>
  </ul>
</nav>
  );
};
export default Navbar;
