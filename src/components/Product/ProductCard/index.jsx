import React from "react";
import { RiStarSLine } from "react-icons/ri";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { PiHeartStraightFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ el }) => {
  const { favorite } = useSelector((s) => s);
  const dispatch = useDispatch();
  const someFav = favorite.some((some) => some.id === el.id);
  const ADD_TO_FAV = () => {
    if (someFav) {
      dispatch({ type: "DEL_FAV", payload: el.id });
    } else {
      dispatch({ type: "ADD_TO_FAVORITE", payload: el });
    }
  };
  return (
    <div className="m-[30px]">
      <div className="container">
        <div className=" card relative w-[320px] h-[450px] bg-[#232323] rounded-[20px] overflow-hidden">
          <div className="img ">
            <a
              onClick={() => ADD_TO_FAV()}
              className="absolute top-[0px] cursor-pointer text-white text-[40px] right-[0]"
            >
              {someFav ? (
                <PiHeartStraightFill className="text-red-500" />
              ) : (
                <PiHeartStraightFill />
              )}
            </a>
            <Zoom>
              <img
                className="rounded-[10px] bg-transparent"
                src={el.image}
                alt="img"
              />
            </Zoom>
          </div>
          <div className="content flex flex-col">
            <h2>{el.title}</h2>
            <div className="size gap-[10px]">
              <h3>Rating:</h3>
              <h3>{el.rating.rate}</h3>
              <h2 className="text-yellow-200">
                <RiStarSLine />
              </h2>

              <div className="color flex items-center">
                <h3>Color: </h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <button className="mt-[20px] text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
