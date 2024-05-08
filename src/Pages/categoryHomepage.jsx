import { useState } from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import NavBar from "../components/Header/navBar";
import CategorySearch from "../components/searchByCategory/categorySearch";
import { useParams } from "react-router-dom";
import { IoChevronForward, IoHomeSharp, IoFilter } from "react-icons/io5";
import SideBar from "../components/searchByCategory/sideBar";


const CategoryHomepage = () => {
  const { id } = useParams();
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    brand: "",
    ratings: "",
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <NavBar />
      </div>
      <div className="mt-32 pt-[0.2px]">
        <div className="md:w-[90%] md:mx-auto py-2 px-7 md:px-2 text-[10px] bg-white mt-0.5 rounded-md">
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
        <div className="bg-white p-2 rounded-md font-semibold md:w-[90%] md:mx-auto py-2 px-7 md:px-2 md:mt-[3px]">
          {id.charAt(0).toUpperCase() + id.slice(1)}{" "}
          {/* <span className="font-medium text-sm">({product.length})</span> */}
        </div>

        <div className="bg-white grid grid-cols-1 gap-2 mt-1 px-7 py-2 md:hidden place-items-center">
          {/* <button className="bg-gray-200 text-sm w-full h-[35px] rounded-sm flex justify-around items-center">
            <span>New</span> <span><IoChevronDown/></span>
          </button> */}
          <button className="bg-gray-200 text-sm w-full h-[40px] rounded-md flex justify-center items-center">
            <span><IoFilter/></span><span>Filter</span>
          </button>
        </div>

        <div className="flex justify-between gap-4 mt-2 pb-2 w-[90%] mx-auto">
          <div className="hidden md:block ">
            <SideBar
              brands={brands}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <CategorySearch setBrands={setBrands} filters={filters} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CategoryHomepage;
