// import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const CartBtn = () => {
  return (
    <button className="bg-[#ff003c] px-4 py-2 w-full flex items-center rounded-md text-white justify-center cursor-pointer">
      <span className="w-5 h-5 mr-2">
        <IoCartOutline className="w-5 h-5" />
      </span>
      <p>Add to cart</p>
    </button>
  );
};

export default CartBtn;
