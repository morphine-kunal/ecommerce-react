import {useState} from 'react'
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";
import CategorySearch from "../components/searchByCategory/categorySearch";
import { useParams } from "react-router-dom";
import { IoChevronForward, IoHomeSharp } from "react-icons/io5";
import SideBar from "../components/searchByCategory/sideBar";

const CategoryHomepage = () => {
  const { id } = useParams();
  const [brands, setBrands] = useState([])
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <NavBar />
      </div>
      <div className="mt-32 pt-[0.2px]">
        <div className="w-[90%] mx-auto py-2 px-2 text-[10px] bg-white mt-0.5 rounded-md">
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
            {id}
          </p>
        </div>
        <div className="bg-white p-2 rounded-md font-semibold w-[90%] mx-auto mt-2">
        {id.charAt(0).toUpperCase() + id.slice(1)}{" "}
        {/* <span className="font-medium text-sm">({product.length})</span> */}
      </div>

        <div className="flex justify-between gap-4 mt-2 pb-2 w-[90%] mx-auto">
          
          <SideBar brands = {brands}/>
          <CategorySearch setBrands={setBrands} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CategoryHomepage;
