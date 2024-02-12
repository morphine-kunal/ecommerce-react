// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ZzzzAP.svg";
import LoginSignupBtn from "../Buttons/loginSignupBtn";
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
        <marquee className="text-black font-bold md:text-sm text-xs absolute left-0 top-0">
          The project is under construction
        </marquee>

        <div className="flex items-center justify-center rounded-full ">
          <LoginSignupBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
