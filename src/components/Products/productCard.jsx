/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/?&limit=10&skip=${props.skip}`)
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
  }, [props.skip]);

  if (error) {
    return <div>Error : {error}</div>;
  }

  if(!product){
    return <div className="absolute left[50%] top[50%] font-bold">Loading...</div>;
  }
  return (
    <>
      <div className="w-[90%] mx-auto mt-5 mb-5 flex justify-between items-center">
        {/* eslint-disable-next-line react/prop-types */}
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs cursor-pointer">See more</p>
      </div>

      <div className="w-[90%] mx-auto flex gap-4 overflow-y-auto">
        {product.map((item) => (
          <div
            className="bg-white w-40 h-64 flex flex-col justify-evenly items-center mb-5 border rounded-lg"
            key={item.id}
            style={{ minWidth: "160px", overflow: "hidden" }}
          >
            <Link to={`/product/${item.id}`} target="_blank">
              <div className="w-24 h-24">
                <img
                  src={item.images[0]}
                  alt="speaker"
                  className="w-full h-full"
                />
              </div>

              <div className="w-[90%] m-auto">
                <p className="text-md h-[72px]">{item.title}</p>
                <p className="text-sm flex justify-between items-center mt-3">
                  ${item.price}{" "}
                  <span className="text-xs text-green-500">
                    -{item.discountPercentage}%
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
