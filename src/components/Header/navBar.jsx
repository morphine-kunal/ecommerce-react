import {
  IoAppsOutline,
  IoHeartOutline,
  IoCartOutline,
  IoChevronBack,
} from "react-icons/io5";
import SearchInput from "../searchInput";
import { useSelector } from "react-redux";
import { selectCartItemsCount, selectFavItemsCount } from "../../stores/store";
import { useParams, useNavigate, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavBar = ({ shwoBack }) => {
  const cartItemCount = useSelector(selectCartItemsCount);
  const favItemCount = useSelector(selectFavItemsCount);
  const { id } = useParams();
  const { name } = useParams();

  // console.log(id);
  const history = useNavigate();
  const handleBack = () => {
    history(-1);
  };

  return (
    <nav className="bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto bg-[#FFFFFF] h-14 flex justify-between items-center px-3">
        {id || name || shwoBack ? (
          <div
            className="flex justify-center items-center underline cursor-pointer mr-2"
            onClick={handleBack}
          >
            <span>
              <IoChevronBack />
            </span>
            <p className="text-xs md:text-sm">Back</p>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="w-6 h-6 hidden md:block">
              <IoAppsOutline className="w-full h-full" />
            </div>
            <p className="ml-1 text-sm font-regular hidden md:block">Catalog</p>
          </div>
        )}

        <SearchInput />

        <div className="flex justify-between items-center w-14">
          <div className="relative">
            {favItemCount > 0 && (
              <div className="absolute top-0.95 right-0.5 bg-[#ff003c] text-white text-xs font-medium rounded-full w-1.5 h-1.5 flex items-center justify-center"></div>
            )}
            <Link to={'/profile/wishlist'}>
              <IoHeartOutline className="w-5 h-5 cursor-pointer" />
            </Link>
          </div>

          <div className="text-lg text-slate-200"> | </div>

          <div className="relative">
            {cartItemCount > 0 && (
              <div className="absolute text-white text-xs -top-3 -right-3 font-md bg-[#ff003c] rounded px-1">
                {cartItemCount}
              </div>
            )}
            <Link to={"/profile/cart"}>
              <div className="w-5 h-5 cursor-pointer">
                <IoCartOutline className="w-full h-full" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
