/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Buttons/loading";

const CategorySearch = ({ setBrands, filters }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => {
        console.log("Something went wrong. ", err);
      });
  }, [id]);

  useEffect(() => {
    let brand = [];
    product.forEach((ite) => {
      brand.push(ite.brand);
    });

    // eslint-disable-next-line react/prop-types
    setBrands(brand);
  }, [product, setBrands, filters]);

  const filteredProducts = product.filter((item) => {
    return (
      (!filters.price ||
        (item.price <= filters.price)) &&
      (!filters.brand || filters.brand.includes(item.brand)) &&
      (!filters.ratings || filters.ratings <= item.rating) &&
      true
    );
  });

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  if (!product.length) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-xl font-bold w-[90%] mx-auto pb-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="lg:w-[250px] bg-white p-4 rounded-md mt-2">
              <div className="flex justify-center items-center mb-3">
                <div className="w-36 h-36 flex justify-center">
                  <img
                    src={item.images[0]}
                    alt="images"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="font-medium text-sm mb-6">{item.title}</p>
              <div className="flex justify-between items-center w-[100%] px-2">
                <p className="text-sm flex justify-between items-center mt-3 font-semibold w-full">
                  ${item.price}{" "}
                  <span className="text-xs text-slate-500 font-thin">
                    -{item.discountPercentage}%
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
