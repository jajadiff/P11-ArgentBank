import React from "react";
import logo from "../../assets/img/logo.png";

// Router
import { NavLink } from "react-router-dom";
//Redux

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div></div>
      <NavLink className="main-nav-item" to="/sign">
        <i className="fa fa-sign-in"></i>
        Sign In
      </NavLink>
    </nav>
  );
};

export default Header;

/*     <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
        </Link>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>

        */
