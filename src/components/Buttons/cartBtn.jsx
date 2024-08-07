/* eslint-disable react/prop-types */
// import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const CartBtn = (props) => {
  return (
    <button
      className={`bg-[#ff003c] px-4 py-2 w-full flex items-center rounded-md text-white justify-center cursor-pointer ${
        props.Disable ? "opacity-70 cursor-not-allowed" : ""
      }`}
      // eslint-disable-next-line react/prop-types
      onClick={props.Click}
      disabled={props.Disable}
    >
      <span className="w-5 h-5 mr-2">
        {props.icon ? "" : <IoCartOutline className="w-5 h-5" />}
      </span>
      <p>{props.name}</p>
    </button>
  );
};

export default CartBtn;
