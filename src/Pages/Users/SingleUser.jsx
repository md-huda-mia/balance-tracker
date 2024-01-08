import React from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";
const SingleUser = ({ user }) => {
  const { name, username, email, id } = user || {};

  return (
    <div className="userInfo">
      <h3>{name}</h3>
      <h4>{username}</h4>
      <p>{email}</p>
      <NavLink to={`/users/${id}`}>
        <button className="btn">Details</button>
      </NavLink>
    </div>
  );
};

export default SingleUser;
