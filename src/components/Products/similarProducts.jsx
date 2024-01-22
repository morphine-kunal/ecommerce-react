/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Loading from "../Buttons/loading";
import { useParams, Link } from "react-router-dom";

const SimilarProducts = ({ category }) => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.products)) {
          const filteredProducts = data.products.filter(
            (product) => product.id != id
          );
          setSimilarProduct(filteredProducts);
          window.scrollTo({ top: 0 });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  if (!similarProduct) {
    return (
      <div className="absolute left[50%] top[50%] font-bold">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="mt-6">
        <p className="text-lg lg:text-2xl font-semibold">Similar Products</p>
      </div>
      <div className="mt-3 flex gap-4 overflow-y-auto">
        {similarProduct.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div
              className="bg-white w-40 h-64 flex justify-evenly items-center flex-col border rounded-lg"
              style={{ minWidth: "160px", overflow: "hidden" }}
            >
              <div className="w-24 h-24 ">
                <img
                  src={item.images[0]}
                  alt="speaker"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[80%] mx-auto">
                <p className="text-md">{item.title}</p>
                <p className="text-sm flex justify-between items-center mt-3">
                  ${item.price}{" "}
                  <span className="text-xs text-green-500">
                    -{item.discountPercentage}%
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SimilarProducts;
