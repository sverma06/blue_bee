import React from "react";

const Login = () => {

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
          <button className="button">Login</button>
        </div>
      </form>
      <button className="button">Don't have an account? Signup here</button>
    </div>
  );
};

export default Login;
