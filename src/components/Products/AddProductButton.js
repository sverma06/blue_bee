import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProductButton = () => {
  let navigate = useNavigate();

  const navigateAddProduct = () => {
    navigate("/addProducts", { replace: true });
  };

  return (
    <Button variant="outlined" size="small" sx={{ m: 2, color: 'black', backgroundColor: 'sky blue', borderColor: 'black' }} onClick={navigateAddProduct}>Create Product</Button>
  );
};

export default AddProductButton;
