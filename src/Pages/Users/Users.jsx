import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Users.css";
import SingleUser from "./SingleUser";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container">
      <div className="single_user">
        {users?.map((user) => (
          <SingleUser user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
