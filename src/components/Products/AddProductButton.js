import React from "react";
import { useNavigate } from "react-router-dom";

const AddProductButton = () => {
  let navigate = useNavigate();

  const navigateAddProduct = () => {
    navigate("/addProducts", { replace: true });
  };

  return (
    <button className="button" onClick={navigateAddProduct}>
      Add Product
    </button>
  );
};

export default AddProductButton;
