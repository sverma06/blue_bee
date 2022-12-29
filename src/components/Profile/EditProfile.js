import React from "react";

const EditProfile = () => {

  return (
    <div>
    <div className="heading">
      <h1>Profile</h1>
    </div>
    <div className="form">
      <form method="POST" action="/profile">
        <h2>Edit your profile</h2>
        <div className="profileFields">
          <label className="label">Full Name </label>
          <input 
            className="input"
            type="text" 
            placeholder="Full Name" 
            name="name"></input>
        </div>
        <div className="profileFields">
          <label className="label">Email </label>
          <input 
            className="input"
            type="email" 
            placeholder="youremail@gmail.com" 
            name="email"></input>
        </div>
        <div className="profileFields">
          <label className="label">DOB</label>
          <input
            className="input"
            type="number"
            placeholder="Date of birth"
            name="DOB"
          ></input>
        </div>
        <div className="profileFields">
          <label className="label">Gender</label>
          <input
            className="input"
            type="text"
            placeholder="Gender"
            name="gender"
          ></input>
        </div>
        <div>
          <button className="button">SAVE</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default EditProfile;
