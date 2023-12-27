// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ZzzzAP.svg";
const Header = () => {
  const history = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    history("/");
  };
  return (
    <header className="border-b-2  bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto h-14 flex justify-between items-center px-3">
        <div className="w-24 h-auto">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full cursor-pointer"
            onClick={clickHandler}
          />
        </div>
        <p className="p-2 bg-red-500 text-white font-bold">
          The project is under construction
        </p>

        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-slate-500"></div>
      </div>
    </header>
  );
};

export default Header;
