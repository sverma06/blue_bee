import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import blazer from "./assets/blazer.jpeg";

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-center"
        alignItems="flex-center"
      >
        {list.map((item) => {
          return (
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={blazer}
                    alt="product"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`$` + item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
