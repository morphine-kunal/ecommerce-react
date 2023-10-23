import NavBar from "../components/Header/navBar";
import HeroSection from "../components/HeroSection/heroSection";
import DiscountOffers from "../components/Products/discountOffers";
import ProductCard from "../components/Products/productCard";
import Header from "../components/header/header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <HeroSection />
      <ProductCard title="Leaders of the Week"/>
      <DiscountOffers title="Discount Offers"/>
    </div>
  );
};

export default HomePage;
