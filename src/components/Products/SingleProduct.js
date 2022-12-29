import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import blazer from "./assets/blazer.jpeg";

const SingleProduct = () => {
  const [item, setItem] = useState();
  const { productId } = useParams;

  useEffect(() => {
    fetch(`/products/product/${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [productId]);

  console.log(productId);

  return (
    <>
      {item?.map(() => {
        return (
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="300"
              image={blazer}
              alt="product"
            />
            <CardContent>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`$` + item.price}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default SingleProduct;
