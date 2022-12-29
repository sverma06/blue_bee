import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import blazer from "./assets/blazer.jpeg";

const getURL = (id) => {
  return `/products/${id}`;
};

const SingleProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const fetchProduct = async () => {
    try {
      const response = await fetch(getURL(id), {
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      console.log(json);
      setItem(json);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const cartHandler = async () => {
    const response = await fetch("/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({product_id: id}),
    }).then(res => res);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            component="img"
            height="300"
            image={blazer}
            alt="product"
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
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
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Brand
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Material
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weight
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age Range
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {item.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.material}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.weight}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.age_range}
              </Typography>
            </Grid>
          </Grid>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="outlined" onClick={cartHandler}>Add to Cart</Button>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
