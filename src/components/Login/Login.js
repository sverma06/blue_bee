import React from "react";

const Login = () => {
  return (
    <div className="form">
      <form>
      <h2>Login</h2>
        <div className="userid">
          <label className="label">User ID </label>
          <input className="input" type="text" placeholder="User ID"></input>
        </div>
        <div className="password">
          <label className="label">Password </label>
          <input
            className="input"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div>
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
