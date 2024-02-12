/* eslint-disable react/prop-types */
// import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const AddToCart = (props) => {
  return (
    <button
      className="bg-gray-100 px-5 py-2 flex justify-center items-center text-sm rounded-md"
      // eslint-disable-next-line react/prop-types
      onClick={props.click}
    >
      <span className="w-5 h-5 mr-2">
        <IoCartOutline className="w-5 h-5" /> 
        
      </span>
      {/* eslint-disable-next-line react/prop-types */}
      {props.name}
    </button>
  );
};

export default AddToCart;
//
