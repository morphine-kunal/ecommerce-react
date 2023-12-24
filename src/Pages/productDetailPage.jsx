// import React from 'react'
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";
import ProductDetails from "../components/Products/productDetails";
const ProductDetailPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="fixed top-0 left-0 w-full">
        <Header />
        <NavBar />
      </div>
      <div className=" w-[90%] m-auto mt-32 pt-[0.2px]">
        <ProductDetails />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailPage;
