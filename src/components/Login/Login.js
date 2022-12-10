import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();

  // const navigateHome = () => {
  //   navigate("/home", { replace: true})
  // }

  const signupPage = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="login-form" method="POST" action="/login">
          <Typography variant="h5" component="h5" align="center">
            Login
          </Typography>
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
            <button className="button">Login</button>
          </div>
        </form>
        <button className="link-btn" onClick={signupPage}>
          Don't have an account? Signup here
        </button>
      </div>
    </div>
  );
};

export default Login;
