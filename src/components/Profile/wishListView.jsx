import { IoTrashBinOutline, IoHeart } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../../stores/favSlice";

const WishListView = () => {
  const wishlistitem = useSelector((state) => state.favItem.items);

  const dispatch = useDispatch();

  const handleRemoveFav = (productId) => {
    dispatch(removeFromFav(productId));
    console.log("clicked");
  };

  if (!wishlistitem.length) {
    return (
      <div className="bg-white p-3 rounded-lg">
        <p className="font-semibold text-lg border-b-[1px] pt-2">Wish list</p>
        <p className=" text-md pt-2">Nothing to Show!</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-3 rounded-lg">
        <p className="font-semibold text-lg border-b-[1px] pu-2">Wish list</p>
        <div className="mt-5">
          <button className=" rounded-full text-xs py-2 px-2 flex justify-center items-center gap-1 bg-gray-100">
            <span>
              <IoTrashBinOutline />
            </span>{" "}
            Delete all
          </button>
        </div>
      </div>

      <div className="mt-2 flex gap-2">
        {wishlistitem.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg w-[200px] h-[300px] flex flex-col relative"
          >
            <IoHeart
              className="absolute right-4 cursor-pointer w-5 h-5"
              onClick={() => handleRemoveFav(item.id)}
            />
            <div className="h-[150px] m-auto">
              <img src={item.images[2]} alt="images" className="h-full" />
            </div>
            <p className="mt-2 text-sm font-medium">{item.title}</p>
            <p className="font-semibold text-lg text-red-500 mt-px flex justify-between">
              ${item.price}{" "}
              <span className="text-xs text-green-500 font-regular">
                -{item.discount}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishListView;
