import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();
  const getProduct = () => {
    return async (dispatch) => {
      let res = await axios.get("https://fakestoreapi.com/products");
      let { data } = res;
      console.log(data, "data");
      dispatch({ type: "GET_PRODUCT", payload: data });
    };
  };
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-wrap gap-[70px]">
          {product.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
