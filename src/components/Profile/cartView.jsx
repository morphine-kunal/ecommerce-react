// import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { removeFromCart } from "../../stores/cartSlice";
import { Link } from "react-router-dom";

const CartView = () => {
  const cartItems = useSelector((state) => state.cart.items);
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
    <div>
      {cartItems.map((item, index) => (
        <div className="bg-white rounded-md" key={index}>
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
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartView;
