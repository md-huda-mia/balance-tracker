import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">Store.</NavLink>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {user?.email ? (
            <>
              <li onClick={logout}>
                <NavLink to="/login">LogOut</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">LogIn</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
