import Footer from "../components/Footer/footer";
import NavBar from "../components/Header/navBar";
import HeroSection from "../components/HeroSection/heroSection";
import DiscountOffers from "../components/Products/discountOffers";
import ProductCard from "../components/Products/productCard";
// import Header from "../components/header/Header";
import Header from "../components/Header/header";

const HomePage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <NavBar />
      </div>
      <div className="mt-32 pt-[0.2px]">
        <HeroSection />
        <ProductCard title="Leaders of the Week" skip="0" />
        <DiscountOffers title="Discount Offers" />
        <ProductCard title="Cosmetics & grooming" skip="10" />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
