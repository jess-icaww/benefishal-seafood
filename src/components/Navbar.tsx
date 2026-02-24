import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <span>
          <img src="./logo.png" />
        </span>
      </NavLink>

      <div>
        <NavLink className="nav-link" to="/" end>HOME</NavLink>
        <NavLink className="nav-link" to="/origin">OUR STORY</NavLink>
        <NavLink className="nav-link" to="/chefs">CHEF SPOTLIGHT</NavLink>
        <NavLink to="/services" className="btn-primary nav-btn">ORDER ONLINE</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
