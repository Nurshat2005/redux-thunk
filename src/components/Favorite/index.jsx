import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);

  return (
    <div>
      <div className="container">
        <div className=" flex items-center gap-[50px] flex-wrap">
          {favorite.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
