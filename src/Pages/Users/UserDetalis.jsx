import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UserDetalis = () => {
  const userInfo = useLoaderData();
  const { name, email, phone, website } = userInfo || {};

  return (
    <div className="container user_area">
      <div className="userWrapper">
        <div className="userDetails">
          <h2>user name : {name}</h2>
          <h4>email : {email}</h4>
          <p>Phone No : {phone}</p>
          <p>Website Link : {website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetalis;
