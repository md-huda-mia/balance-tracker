import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="products">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
