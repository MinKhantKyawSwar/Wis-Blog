import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="nav-logo">
          <p className="animate">WIS</p>
        </Link>
        <div className="nav-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to={"/about-us"}>About us</NavLink>
          <NavLink to={"./contact"}>Contact</NavLink>
        </div>
        <div className="nav-login">
          <NavLink to={"./login"} className="login">
            Login
          </NavLink>
          <NavLink to={"./register"} className="register">
            Register
          </NavLink>
          {/* <NavLink to={"./create"}>Create Blog</NavLink>
          <NavLink to={"./Logout"}>Logout</NavLink> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
