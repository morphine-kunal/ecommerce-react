// import React from 'react'
import verify from "../../assets/basket.png";

const InTheBasket = (props) => {
    
  return (
    <button className="bg-gray-200 px-5 py-2 flex justify-center items-center text-sm rounded-md">
      <span className="w-5 h-5 mr-2">
        <img src={verify} alt="verify" className="w-5 h-5" />
      </span>
       {/* eslint-disable-next-line react/prop-types */}
      {props.name}
    </button>
  );
};

export default InTheBasket;
