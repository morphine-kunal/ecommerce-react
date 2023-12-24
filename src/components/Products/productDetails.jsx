// ProductDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Buttons/loading";
import Ratings from "../ratings";
import ProductPageHero from "./productPageHero";
import { IoHeart, IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import ProductDescription from "./productDescription";
import SimilarProducts from "./similarProducts";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        setError(`Error fetching product details : ${err.message}`);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Loading />
      </div>
    );
  }

  const likeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="mt-6">
      {/* <h1>{product.title}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Discount Percentage: {product.discountPercentage}%</p>
      Add more details as needed */}

      <div className="bg-white flex justify-between items-center p-2 rounded-md">
        <p className="text-lg font-semibold">{product.title}</p>

        <div className="flex justify-evenly items-center w-1/5">
          <Ratings rating={product.rating} />
          <div className="flex justify-around items-center w-1/5 ">
            <div onClick={likeHandler} className="w-5 h-5 cursor-pointer">
              {isLiked ? (
                <IoHeart className="w-full h-full" />
              ) : (
                <IoHeartOutline className="w-full h-full" />
              )}
            </div>
            <IoShareSocialOutline className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      <ProductPageHero
        images={product.images}
        stock={product.stock}
        brand={product.brand}
        price={product.price}
        discount={product.discountPercentage}
        category={product.category}
      />

      <ProductDescription description={product.description} />
      <SimilarProducts category={product.category} />
    </div>
  );
};

export default ProductDetails;
