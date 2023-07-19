import React from "react";
import logo from "../../assets/img/logo.png";
//Redux
import { logout } from "./../../reducers/logUser";
import { useDispatch, useSelector } from "react-redux";
// Router
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userVerification = useSelector((state) => state.log.token);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };
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
      {userVerification ? (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            USERNAME
          </Link>
          <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink className="main-nav-item" to="/sign">
          <i className="fa fa-sign-in"></i>
          Sign In
        </NavLink>
      )}
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
