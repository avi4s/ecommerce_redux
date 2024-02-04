import React, { useState } from "react";
import Button from "../buttons/Button";
import { addToCart } from "../redux/reducer/Reducer";
import { useDispatch } from "react-redux";
import Toastify from "../toastify/Toastify";

const Products = ({ title, price, images }) => {
  const[showToast,setShowToast]=useState(false)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart({ title, price, images }));
    setShowToast(true)
  };
  return (
    <>
      <div>
        <div className="w-full max-w-lg ">
          <div>
            {/* <img src={images} className="h-64 w-64 lg:h-64 lg:1/2 " /> */}
            <img
              src={images}
              className="rounded-t-md w-full h-60 object-center"
            />
          </div>
          <div>
            <div className=" bg-slate-300  p-5 rounded-b-md">
              {/* <h5 className="text-black text-2xl font-bold w-60 py-4 px-8"> */}
              <h5 className="text-lg font-bold ">{title}</h5>
              <h6 className="mb-8">${price}</h6>
              <div className="mt-auto">
                <Button
                  title={title}
                  price={price}
                  images={images}
                  onclick={handleClick}
                  name={"Add"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToast && <Toastify/>}
    </>
  );
};

export default Products;
