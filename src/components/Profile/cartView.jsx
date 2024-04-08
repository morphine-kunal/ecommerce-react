import {useMemo} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { removeFromCart } from "../../stores/cartSlice";
import { Link } from "react-router-dom";
import CartBtn from "../Buttons/cartBtn";

const CartView = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const memoizedCartItems = useMemo(() => cartItems, [cartItems]);
  const memoizedTotalPrice = useMemo(() => cartTotalPrice, [cartTotalPrice]);

  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  if (!cartItems.length) {
    return (
      <div className="bg-white rounded-md p-5 font-medium">
        Start filling your cart now....
      </div>
    );
  }
  return (
    <>
      <div className="flex w-full">
        <div className="w-8/12">
          {memoizedCartItems.map((item, index) => (
            <div className="bg-white rounded-md flex flex-col" key={index}>
              <div>
                <div className="flex items-center p-5 gap-2 border-b-[1px]">
                  <div className="w-[50px] h-[50px]">
                    <img
                      src={item.images[0]}
                      alt="image1"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <Link to={`/product/${item.id}`}>
                      <h5 className="text-md font-medium align-top">
                        {item.title}
                      </h5>
                    </Link>
                    <div className="flex items-center justify-center gap-x-8">
                      <p className="text-gray-500 font-thin">
                        <span className="text-xs text-center">Quantity:</span>
                        &nbsp;
                        {item.quantity}
                      </p>
                      <p className="font-semibold text-lg">${item.price}</p>

                      <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <IoCloseOutline className="w-full h-full text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-md ml-3 p-5 w-[34%] min-h-[300px] relative">
          <div className="flex justify-between items-center w-full border-b-[1px]">
            <span className="text-medium font-semibold">Product</span>{" "}
            <span className="font-regular text-xs text-gray-400">
              {cartItems.length}
            </span>
          </div>
          <div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4"
              >
                <div className="text-sm font-medium">{item.title}</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-thin text-gray-400">
                    ${item.price} x {item.quantity}
                  </span>
                  <span className="ml-2 text-sm font-medium">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 w-[90%] m-auto ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Totao Amount :</span> <span className="text-lg font-medium">${memoizedTotalPrice}</span>
            </div>
            <CartBtn icon={true} name="Checkout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
