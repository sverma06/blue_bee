import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import './AddProducts.css';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <Header />
      <div className="productForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create Product</h2>
          <div className="productFields">
            <label className="label">Name </label>
            <input
              className="input"
              type="text"
              placeholder="name"
              {...register("name")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Price</label>
            <input
              className="input"
              type="number"
              placeholder="price"
              {...register("price")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Quantity</label>
            <input
              className="input"
              type="number"
              placeholder="Quantity"
              {...register("quantity")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Brand</label>
            <input
              className="input"
              type="text"
              placeholder="Brand"
              {...register("brand")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Color</label>
            <input
              className="input"
              type="text"
              placeholder="Color"
              {...register("color")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Material</label>
            <input
              className="input"
              type="text"
              placeholder="Material"
              {...register("material")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Weight</label>
            <input
              className="input"
              type="number"
              placeholder="Weight"
              {...register("weight")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Age Range</label>
            <input
              className="input"
              type="number"
              placeholder="Age Range"
              {...register("age_range")}
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Dimensions</label>
            <input
              className="input"
              type="number"
              placeholder="Dimensions"
              {...register("dimensions")}
            ></input>
          </div>
          <div>
            <button className="button">Create product</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;