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
import blazer from "../assets/blazer.jpeg";
import { useNavigate } from "react-router";

const url = "/products";

const ProductCard = () => {
    let navigate = useNavigate();

  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setList(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const clickHandler = (id) => {
    navigate(`/products/${id}`, { replace: true});   
  }

    const body = list.map((item) => {
            return (
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={{ maxWidth: 250 }} onClick={() => clickHandler(item.id)}> 
                    <CardMedia
                      component="img"
                      height="300"
                      image={blazer}
                      alt="product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" key={item.id}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" key={item.id}>
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
          });

    return body;
        
};

export default ProductCard;
