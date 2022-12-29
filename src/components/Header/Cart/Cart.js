import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const url = "/cart";

const Cart = () => {
  const { product_id } = useParams();

  let navigate = useNavigate();

  const [cartList, setCartList] = useState([]);

  const fetchCartList = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setCartList(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  const cartHandler = async () => {
    navigate(`/cart/${product_id}`, { replace: true}); 
  };



  useEffect(() => {
    fetchCartList();
  }, []);

  const body = cartList.map((item) => {
    return (
      <ul>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$` + item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.quantity}
          </Typography>
        </CardContent>
        <Button variant="outlined" onClick={cartHandler}>
          Remove from Cart
        </Button>
      </ul>
    );
  });
  return body;
};

export default Cart;
