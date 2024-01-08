import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image } = product || {};
  return (
    <div className="singleProduct">
      <div className="product_img">
        <img src={image} alt="" />
      </div>
      <div className="productInfo">
        <h2>{title}</h2>
        <NavLink to={`/products/${id}`}>
          <button className="btn">Detail View</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
