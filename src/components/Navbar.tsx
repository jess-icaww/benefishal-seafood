import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <span>
          <img src="./logo.png" />
        </span>
      </Link>

      <div>
        <Link to="/">HOME</Link>
        <Link to="/origin">OUR STORY</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/order">ORDER ONLINE</Link>
        <Link to="/chefs">CHEF SPOTLIGHT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
