import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <div className="heading">
        <img className="logo" src={logo} alt="logo" />
        <h1>Blue bee</h1>
      </div>
      <div className="form">
        <form>
          <h2>Create account</h2>
          <div className="userid">
            <label className="label">User ID </label>
            <input className="input" type="text" placeholder="User ID"></input>
          </div>
          <div className="email">
            <label className="label">Email </label>
            <input className="input" type="text" placeholder="Email"></input>
          </div>
          <div className="password">
            <label className="label">Password </label>
            <input
              className="input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="password">
            <label className="label">Password again </label>
            <input
              className="input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div>
            <button className="button">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
