import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { image, title, price, description, category } = product || {};
  return (
    <div className="productsDetailsPage">
      <div className="producDetails">
        <div className="product_img">
          <img src={image} alt="" />
        </div>
        <div className="productInfo">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cart">
            <span>${price}</span>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
