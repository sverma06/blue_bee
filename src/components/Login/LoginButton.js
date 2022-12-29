import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login", { replace: true})
  }

    return (
        <div>
          <button className="button" onClick={loginPage}>Login</button>
        </div>
    );
}

export default LoginButton;