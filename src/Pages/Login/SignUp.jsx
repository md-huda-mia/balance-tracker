import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, userUpdateProfile } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    const all = e.target;
    const name = all.name.value;
    const email = all.email.value;
    const password = all.password.value;
    const password2 = all.password2.value;
    if (password !== password2) {
      return toast.error("Doesn't mutch password");
    }
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Create Successfully");
        console.log(user);
        userUpdateProfile(name)
          .then(() => {
            toast.success("update user name");
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="signUp">
      <div className="signup_container">
        <div className="signUpTitle">
          <h2>Sign Up</h2>
          <p>
            Your All ready have an accound{" "}
            <span>
              <NavLink to="/login">SignIn</NavLink>
            </span>
          </p>
        </div>
        <div className="signUp_form">
          <form onSubmit={submitHandler} action="">
            <div className="singUpInput">
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="singUpInput">
              <label htmlFor="">Email</label>
              <input name="email" type="text" placeholder="Type ypur mail" />
            </div>
            <div className="singUpInput">
              <label htmlFor="">password</label>
              <input name="password" type="password" placeholder="password" />
            </div>
            <div className="singUpInput">
              <label htmlFor="">password</label>
              <input
                name="password2"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <button type="submit" className="signUP_btn">
              Sign UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
