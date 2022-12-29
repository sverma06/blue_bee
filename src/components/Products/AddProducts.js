import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Container, Box } from "@mui/material";

const AddProducts = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await fetch("/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const productAdded = () => {
    navigate("/products", { replace: true });
  };

  return (
    <div className="App">
    <Container maxWidth="lg">
      <form className="auth-form-container" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" component="h5" align="center">
          Create Product
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <label className="label">Name </label>
            <input
              className="input"
              type="text"
              placeholder="name"
              {...register("name")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Price</label>
            <input
              className="input"
              type="number"
              placeholder="price"
              {...register("price")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Quantity</label>
            <input
              className="input"
              type="number"
              placeholder="Quantity"
              {...register("quantity")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Brand</label>
            <input
              className="input"
              type="text"
              placeholder="Brand"
              {...register("brand")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Color</label>
            <input
              className="input"
              type="text"
              placeholder="Color"
              {...register("color")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Material</label>
            <input
              className="input"
              type="text"
              placeholder="Material"
              {...register("material")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Weight</label>
            <input
              className="input"
              type="number"
              placeholder="Weight"
              {...register("weight")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Age Range</label>
            <input
              className="input"
              type="number"
              placeholder="Age Range"
              {...register("age_range")}
            ></input>
          </Grid>
          <Grid item xs={4}>
            <label className="label">Dimensions</label>
            <input
              className="input"
              type="number"
              placeholder="Dimensions"
              {...register("dimensions")}
            ></input>
          </Grid>
        </Grid>
        <Box textAlign="center">
          <button
            className="button"
            align="center"
            onClick={productAdded}
          >
            ADD
          </button>
        </Box>
      </form>
    </Container>
    </div>
  );
};

export default AddProducts;
