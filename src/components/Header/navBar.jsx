import { FaSearch } from "react-icons/fa";
import { IoAppsOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto bg-[#FFFFFF] h-14 flex justify-between items-center px-3">
        <div className="flex justify-center items-center">
          <div className="w-6 h-6">
            <IoAppsOutline className="w-full h-full" />
          </div>
          <p className="ml-1 text-sm font-regular hidden md:block">Catalog</p>
        </div>

        <div className="md:w-1/2 w-full flex justify-between items-center bg-[#F6F6F6] rounded-md p-1">
          <div className="w-5 h-5 mr-1">
            <div>
              <FaSearch className="w-full h-full font-thin" />
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full p-1 bg-[#F6F6F6] rounded-md text-sm outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-14">
          <div className="w-5 h-5 cursor-pointer">
            <IoHeartOutline className="w-full h-full" />
          </div>

          <div className="text-lg text-slate-200"> | </div>

          <div className="relative">
          <div className="absolute text-black text-bold -top-3 -right-2 font-semibold">5</div>

            <div className="w-5 h-5 cursor-pointer">
              <IoCartOutline className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
