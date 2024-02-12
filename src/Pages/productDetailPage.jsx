// import React from 'react'
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";
import ProductDetails from "../components/Products/productDetails";
// import { IoHomeSharp, IoChevronForward } from "react-icons/io5";
// import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  // const { id } = useParams();
  return (
    <div className="bg-[#f6f6f6]">
      <div className="fixed top-0 left-0 w-full">
        <Header />
        <NavBar />
      </div>
      <div className=" w-[90%] m-auto mt-32 pt-[0.2px]">
        {/* <div className="w-[100%] mx-auto py-2 px-2 text-[10px] bg-white mt-0.5 rounded-md">
          <p className="flex items-center gap-2">
            <span>
              <IoHomeSharp />
            </span>
            HomePage{" "}
            <span>
              <IoChevronForward />
            </span>
            catalogue
            <span>
              <IoChevronForward />
            </span>
            S
            <span>
              <IoChevronForward />
            </span>
            {id}
          </p>
        </div> */}
        <ProductDetails />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailPage;
