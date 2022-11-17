import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
    <div className="heading">
      <h1>Blue bee</h1>
    </div>
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create account</h2>
        <div className="userid">
          <label className="label">Username </label>
          <input 
            className="input"
            type="text" 
            placeholder="Username" 
            {...register("userame", { required: true})}></input>
        </div>
        <div className="email">
          <label className="label">Email </label>
          <input 
            className="input"
            type="email" 
            placeholder="youremail@gmail.com" 
            {...register("email")}></input>
        </div>
        <div className="password">
          <label className="label">Password </label>
          <input
            className="input"
            type="password"
            placeholder="************"
            {...register("password")}
          ></input>
        </div>
        <div className="password">
          <label className="label">Password again </label>
          <input
            className="input"
            type="password"
            placeholder="************"
            {...register("password")}
          ></input>
        </div>
        <div>
          <button type="submit" className="button">Signup</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Signup;
