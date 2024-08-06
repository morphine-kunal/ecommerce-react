// import React from 'react'
import CheckoutForm from "../components/Form/checkoutForm";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";

const CheckoutPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="fixed top-0 left-0 w-full">
        <Header />
        <NavBar />
      </div>

      <div className="max-w-[85%] mx-auto">
        <div className="grid grid-cols-3 mx-auto mt-28 gap-2">
          <div className="col-span-2">
            <div className="bg-[#ffffff] py-2 my-2 rounded-md">
              <h1 className="text-md font-bold pl-3">Checkout</h1>
            </div>

            <div>
              <CheckoutForm />
            </div>
          </div>
          <div>
            <div className="bg-[#ffffff] py-2 my-2 rounded-md">
              <div>
                <h1>Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
