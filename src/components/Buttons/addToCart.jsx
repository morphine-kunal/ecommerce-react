// import React from 'react'
import cartIcon from "../../assets/cart-icon.png";

const AddToCart = (props) => {
  return (
    <button className="bg-gray-100 px-5 py-2 flex justify-center items-center text-sm rounded-md">
      <span className="w-5 h-5 mr-2">
        <img src={cartIcon} alt="verify" className="w-5 h-5" />
      </span>
      {/* eslint-disable-next-line react/prop-types */}
      {props.name}
    </button>
  );
};

export default AddToCart;
//
