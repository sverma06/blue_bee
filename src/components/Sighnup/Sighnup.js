import React from "react";
import { useNavigate } from "react-router";
// import logo from "./assets/images/logo.png";

const Sighnup = () => {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home", { replace: true})
  }

  return (
    <div>
    <div className="heading">
      {/* <img className="logo" src={logo} alt="logo" /> */}
      <h1>Blue bee</h1>
    </div>
    <div className="form">
      <form method="POST" action="/signup">
        <h2>Create account</h2>
        <div className="userid">
          <label className="label">Username </label>
          <input 
            className="input"
            type="text" 
            placeholder="Username" 
            name="username"></input>
        </div>
        <div className="email">
          <label className="label">Email </label>
          <input 
            className="input"
            type="email" 
            placeholder="youremail@gmail.com" 
            name="email"></input>
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
          <button className="button" onClick={navigateHome}>Signup</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Sighnup;
