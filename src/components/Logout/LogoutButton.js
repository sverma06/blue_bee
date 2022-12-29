import React from 'react';
import './LogoutButton.css';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const onLogout = () => { navigate("/login", { replace: true })}

    return (
        <div className='logoutContainer'>
            <button className='logoutButton' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default LogoutButton;