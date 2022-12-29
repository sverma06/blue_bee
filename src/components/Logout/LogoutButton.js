import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const onLogout = () => { navigate("/login", { replace: true })}

    return (
            <Button variant="outlined" size="small" sx={{ m: 2, color: 'black', backgroundColor: 'sky blue', borderColor: 'black' }} onClick={onLogout}>LOGOUT</Button>
    )
}

export default LogoutButton;