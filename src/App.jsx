import HomePage from "./Pages/homePage";
import { Route, Routes } from "react-router-dom";
// import ProductDetails from "./components/Products/productDetails";
import ProductDetailPage from "./Pages/productDetailPage";

function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/product/:id" Component={ProductDetailPage} />
      </Routes>
    </div>
  );
}

export default App;
