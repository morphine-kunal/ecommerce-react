import HomePage from "./Pages/homePage";
import { Route, Routes } from "react-router-dom";
// import ProductDetails from "./components/Products/productDetails";
import ProductDetailPage from "./Pages/productDetailPage";
import CategoryHomepage from "./Pages/categoryHomepage";
import Profile from "./Pages/profile";
import CartView from "./components/Profile/cartView";
import WishListView from "./components/Profile/wishListView";
import ProfileView from "./components/Profile/profileView";
import CheckoutPage from "./Pages/checkoutPage";

function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/product/:id" Component={ProductDetailPage} />
        <Route path="/products/category/:id" Component={CategoryHomepage} />
        <Route path="/profile" Component={Profile}>
          <Route path="/profile/account" Component={ProfileView} />
          <Route path="/profile/:name" Component={CartView} />
          <Route path="/profile/wishlist" Component={WishListView} />
        </Route>
        <Route path="/cart/checkout" Component={CheckoutPage} />
      </Routes>
    </div>
  );
}

export default App;
