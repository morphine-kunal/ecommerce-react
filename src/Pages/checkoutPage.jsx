import { useMemo, useState } from "react";
import CheckoutForm from "../components/Form/checkoutForm";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";

import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const [isValid, setIsValid] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const memoizedCartItems = useMemo(() => cartItems, [cartItems]);
  const memoizedTotalPrice = useMemo(() => cartTotalPrice, [cartTotalPrice]);

  return (
    <div className="bg-[#f6f6f6]">
      <div className="fixed top-0 left-0 w-full">
        <Header />
        <NavBar shwoBack={true} />
      </div>

      <div className="max-w-[85%] mx-auto">
        <div className="grid  md:grid-cols-3 mx-auto mt-28 gap-2">
          <div className="md:col-span-2">
            <div className="bg-[#ffffff] py-2 my-2 rounded-md">
              <h1 className="text-md font-bold pl-3">Checkout</h1>
            </div>

            <div>
              <CheckoutForm setIsValid={setIsValid} />
            </div>
          </div>
          <div>
            <div className="bg-[#ffffff] py-2 my-2 rounded-md">
              <div>
                <div className="flex justify-between items-center border-b-[1px] pb-2">
                  <h1 className="text-md font-bold pl-3">Product</h1>
                  <span className="pr-3 text-xs font-semibold">
                    {memoizedCartItems.length}
                  </span>
                </div>

                <div>
                  {memoizedCartItems.map((item, index) => (
                    <div
                      className="bg-white rounded-md flex flex-col"
                      key={index}
                    >
                      <div>
                        <div className="flex items-center p-5 gap-2 border-b-[1px]">
                          <div className="w-[30px] h-[30px]">
                            <img
                              src={item.images[0]}
                              alt="image1"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <h5 className="text-xs font-medium align-top">
                              {item.title}
                            </h5>
                            <div className="flex items-center justify-center gap-x-8">
                              <p className="text-gray-500 font-thin text-xs">
                                <span className="text-xs text-center">
                                  Quantity:
                                </span>
                                &nbsp;
                                {item.quantity ? item.quantity : 1}
                              </p>
                              <p className="font-semibold text-xs">
                                ${item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center bg-[#ffffff] p-2 mt-3">
                  <span className="text-sm font-bold">Total</span>
                  <span className="text-sm font-bold">
                    ${memoizedTotalPrice}
                  </span>
                </div>

                <div className="w-full bg-[#ffffff] p-2">
                  <button
                    className={`w-full p-3 rounded-lg bg-[#ff003c]  text-white font-bold text-sm ${
                      !isValid ? "opacity-50" : ""
                    }`}
                    disabled={!isValid}
                    onClick={() => console.log("object")}
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
