import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact_page">
        <div className="contact_location">
          <img
            src="https://i.ibb.co/NsP95N6/stale-grut-bjqw7-Jl1-N0-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="contact_info">
          <form action="">
            <div className="input_fild">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input_fild">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input_fild">
              <label htmlFor="">Message</label>
              <textarea
                type="text"
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
