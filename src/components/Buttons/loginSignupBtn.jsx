// import React from 'react'

const LoginSignupBtn = () => {
  return (
    <button
      className="px-1 py-1 md:px-4 md:py-2 w-full flex items-center rounded-md border-[1px] border-green-500 text-green-500 justify-center cursor-pointer linear duration-300 hover:bg-green-500 hover:text-white"
      // eslint-disable-next-line react/prop-types
    >
      <p className="md:text-xs text-[10px]">Login/Signup</p>
    </button>
  );
};

export default LoginSignupBtn;
