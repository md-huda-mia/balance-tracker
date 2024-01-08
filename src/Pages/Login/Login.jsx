import React from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const all = e.target;
    const email = all.email.value;
    const password = all.password.value;

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Create Successfully");
        navigate("/");
        console.log(user);
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
          <h2>Sign In</h2>
          <p>
            Create new an accound{" "}
            <span>
              <NavLink to="/signup">SignUp</NavLink>
            </span>
          </p>
        </div>
        <div className="signUp_form">
          <form onSubmit={submitHandler} action="">
            <div className="singUpInput">
              <label htmlFor="">Email</label>
              <input name="email" type="text" placeholder="Type ypur mail" />
            </div>
            <div className="singUpInput">
              <label htmlFor="">password</label>
              <input name="password" type="password" placeholder="password" />
            </div>
            <button type="submit" className="signUP_btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
