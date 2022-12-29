import React from "react";
import Header from "../Header/Header";
import './AddProducts.css';

const AddProduct = () => {
  return (
    <>
      <Header />
      <div className="productForm">
        <form method="POST" action="/addProducts">
          <h2>Create Product</h2>
          <div className="productFields">
            <label className="label">Name </label>
            <input
              className="input"
              type="text"
              placeholder="name"
              name="name"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Price</label>
            <input
              className="input"
              type="number"
              placeholder="price"
              name="price"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Quantity</label>
            <input
              className="input"
              type="number"
              placeholder="Quantity"
              name="quantity"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Brand</label>
            <input
              className="input"
              type="text"
              placeholder="Brand"
              name="brand"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Color</label>
            <input
              className="input"
              type="text"
              placeholder="Color"
              name="color"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Material</label>
            <input
              className="input"
              type="text"
              placeholder="Material"
              name="material"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Weight</label>
            <input
              className="input"
              type="number"
              placeholder="Weight"
              name="weight"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Age Range</label>
            <input
              className="input"
              type="number"
              placeholder="Age Range"
              name="age_range"
            ></input>
          </div>
          <div className="productFields">
            <label className="label">Dimensions</label>
            <input
              className="input"
              type="number"
              placeholder="Dimensions"
              name="dimensions"
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
