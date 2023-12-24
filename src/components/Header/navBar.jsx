import { IoAppsOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import SearchInput from "../searchInput";

const NavBar = () => {
  return (
    <nav className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto bg-[#FFFFFF] h-14 flex justify-between items-center px-3">
        <div className="flex justify-center items-center">
          <div className="w-6 h-6 hidden md:block">
            <IoAppsOutline className="w-full h-full" />
          </div>
          <p className="ml-1 text-sm font-regular hidden md:block">Catalog</p>
        </div>

        <SearchInput />

        <div className="flex justify-between items-center w-14">
          <div className="w-5 h-5 cursor-pointer">
            <IoHeartOutline className="w-full h-full" />
          </div>

          <div className="text-lg text-slate-200"> | </div>

          <div className="relative">
            <div className="absolute text-white text-xs -top-3 -right-3 font-md bg-[#ff003c] rounded px-1">
              5
            </div>

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
