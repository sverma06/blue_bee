import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./Card/ProductCard";

const ProductsList = () => {
  return (
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-center"
        alignItems="flex-center"
      >
        <ProductCard />
      </Grid>
  );
};

export default ProductsList;
