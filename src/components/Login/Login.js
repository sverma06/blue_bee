import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home", { replace: true})
  }

  const signupPage = () => {
    navigate("/signup", { replace: true});
  }

  return (
    <div className="form">
      <form method="POST" action="/login">
        <h2>Login</h2>
        <div className="userid">
          <label className="label">Username </label>
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
          ></input>
        </div>
        <div className="password">
          <label className="label">Password </label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
          ></input>
        </div>
        <div>
          <button className="button" onClick={navigateHome}>Login</button>
        </div>
      </form>
      <button className="button" onClick={signupPage}>Don't have an account? Signup here</button>
    </div>
  );
};

export default Login;
