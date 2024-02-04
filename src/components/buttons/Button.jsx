import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/Reducer";

const Button = ({ title, price, images, name, onclick }) => {
  return (
    <>
      <button
        type="button"
        class="text-white bg-red-700 w-full mt-auto py-2 rounded-md"
        onClick={onclick}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
