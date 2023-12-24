import React, { useState, useEffect } from "react";
import AddToCart from "../Buttons/addToCart";
import { Link } from "react-router-dom";

const DiscountOffers = (props) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?&limit=10&skip=30")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProduct(data.products);
        } else {
          setError("Data fetched is not in the expected response.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (error) {
    return <div> Error :{error}</div>;
  }

  return (
    <React.Fragment>
      <div className="w-[90%] mx-auto mt-5 mb-5 flex justify-between items-center">
        {/* eslint-disable-next-line react/prop-types */}
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs cursor-pointer">See more</p>
      </div>

      <div className="flex w-[90%] mx-auto overflow-y-auto gap-4">
        {product.map((item) => (
          <div className=" mt-5 mb-5 bg-white w-[550px]" key={item.id}>
            <div
              className="flex border rounded-lg"
              style={{ minWidth: "550px", overflow: "hidden" }}
            >
              <div className="w-1/2 h-72">
                <img
                  src={item.images[0]}
                  alt="watch"
                  className="w-full h-full"
                />
              </div>
              <div className="flex justify-evenly items-center flex-col">
                <Link to={`/product/${item.id}`} target="_blank">
                  <div className="ml-3">
                    <p className="text-2xl font-semibold h-[64px]">{item.title}</p>
                  </div>
                </Link>

                <div className="flex flex-col w-full">
                  <Link to={`/product/${item.id}`} target="_blank">
                    <div className="flex justify-between items-center w-[90%] mx-auto">
                      <div className="text-start w-full font-semibold text-red-500">
                        <p className="text-gray-400 text-sm line-through">
                          $
                          {(
                            item.price /
                            (1 - item.discountPercentage / 100)
                          ).toFixed(2)}
                        </p>
                        <p className="text-lg flex justify-between">
                          ₹{item.price}{" "}
                          <span className="text-sm text-green-500">
                            -{item.discountPercentage}%
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="ml-3 mt-2">
                    <AddToCart name="Add to Cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default DiscountOffers;
