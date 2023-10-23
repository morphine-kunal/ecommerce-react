import category from "../../assets/category.png";
import searchIcon from '../../assets/search-icon.png';
import Heart from '../../assets/heart-icon.png';
import Cart from '../../assets/cart-icon.png';

const NavBar = () => {
  return (
    <nav className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto bg-[#FFFFFF] h-14 flex justify-between items-center px-3">
        <div className="flex justify-center items-center">
          <div className="w-5 h-5">
            <img src={category} alt="catalog" className="w-full h-full" />
          </div>
          <p className="ml-1 text-sm font-regular hidden md:block">Catalog</p>
        </div>


        <div className="md:w-1/2 w-full flex justify-between items-center bg-[#F6F6F6] rounded-md p-1">
            <div className="w-5 h-5 mr-1">
                <img src={searchIcon} alt="search" className="w-full h-full"/>
            </div>
            <div className="w-full">
                <input type="text" className="w-full p-1 bg-[#F6F6F6] rounded-md text-sm outline-none" placeholder="Search"/>
            </div>
        </div>


        <div className="flex justify-between items-center w-14">
            <div className="w-5 h-5 cursor-pointer">
                <img src={Heart} alt="fav" className="w-full h-full"/>
            </div>

            <div className="text-lg text-slate-200"> | </div>

            <div className="w-5 h-5 cursor-pointer">
                <img src={Cart} alt="fav" className="w-full h-full"/>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
