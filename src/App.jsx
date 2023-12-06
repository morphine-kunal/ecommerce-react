import HomePage from "./Pages/homePage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Products/productDetails";

function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/product/:id" Component={ProductDetails} />
      </Routes>
    </div>
  );
}

export default App;
