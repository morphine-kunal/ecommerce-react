// import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";
import {
  IoPersonOutline,
  IoCartOutline,
  IoHeartOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const options = [
  {
    name: "Profile",
    icon: <IoPersonOutline className="w-full h-full" />,
    path: 'account',
  },
  {
    name: "Cart",
    icon: <IoCartOutline className="w-full h-full" />,
    path: 'cart',
  },
  {
    name: "Wishlist",
    icon: <IoHeartOutline className="w-full h-full" />,
    path: 'wishlist',
  },
  {
    name: "Logout",
    icon: <IoLogOutOutline className="w-full h-full" />,
    // path: '/logout'
  },
];

const Profile = () => {
    const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <NavBar shwoBack={true}/>
      </div>

      <div className="w-[90%] m-auto mt-32">
        <div className="w-full h-[350px] overflow-hidden rounded-2xl">
          <img
            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-concrete_1258-82891.jpg"
            alt="image"
            className="w-full h-full object-fill"
          />
        </div>

        <div className="mt-5 grid grid-flow-row-dense grid-cols-4 gap-x-2"> 
          <div>
            <div className="bg-white rounded-lg">
              <ul>
                {options.map((option, index) => (
                  <Link key={index} to={`/profile/${option.path}`}>
                    <li  className={`p-2 cursor-pointer font-medium flex items-center gap-2 ${
                        option.path === currentPath && "text-[#FF003C]"
                      }`}>
                      <span className="w-5 h-5">{option.icon}</span>
                      <span>{option.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
