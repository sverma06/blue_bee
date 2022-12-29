import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const getURL = (product_id) => {
  return `/products/${product_id}`;
};

const RemoveItem = () => {
  const [item, setItem] = useState({});

  const fetchUpdatedList = async () => {
    try {
      const response = await fetch(getURL(item.id), {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: item.id }),
      });
      const json = await response.json();
      console.log(json);
      setItem(json);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchUpdatedList();
  }, []);

  return (
    <ul>
        <CardContent>
        <Card sx={{ maxWidth: 250 }}>
        </Card>
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
      </ul>
  );
};

export default RemoveItem;
