import React from "react";
import "./SignUp.css";
// import logo from "./assets/images/logo.png";

const SignUp = () => {
  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="signUp-form" method="POST" action="/signup">
          <h2>Create account</h2>
          <div className="userid">
            <label className="label">Username </label>
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
            ></input>
          </div>
          <div className="email">
            <label className="label">Email </label>
            <input
              className="input"
              type="email"
              placeholder="youremail@gmail.com"
              name="email"
            ></input>
          </div>
          <div className="password">
            <label className="label">Password </label>
            <input
              className="input"
              type="password"
              placeholder="************"
              name="password"
            ></input>
          </div>
          <div className="password">
            <label className="label">Password again </label>
            <input
              className="input"
              type="password"
              placeholder="************"
              name="password"
            ></input>
          </div>
          <div>
            <button className="button">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
