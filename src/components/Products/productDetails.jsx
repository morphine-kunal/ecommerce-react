// ProductDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Buttons/loading";
import Ratings from "../ratings";
import ProductPageHero from "./productPageHero";
import { IoHeart, IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import ProductDescription from "./productDescription";
import SimilarProducts from "./similarProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../stores/favSlice";

// eslint-disable-next-line react/prop-types
const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const wishlistitem = useSelector((state) => state.favItem.items);

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(`Error fetching product details : ${err.message}`);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      const isInWishlist = wishlistitem.some((item) => item.id === product.id);
      setIsLiked(isInWishlist);
    }
  }, [wishlistitem, product]);

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

  const handleToggleFav = () => {
    if (isLiked) {
      dispatch(removeFromFav(product.id));
    } else {
      const data = {
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        discount: product.discountPercentage,
      };
      dispatch(addToFav(data));
    }
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="mt-6">
      <div className="bg-white flex justify-between items-center p-2 rounded-md">
        <p className="text-lg font-semibold">{product.title}</p>

        <div className="flex justify-evenly items-center ">
          <Ratings rating={product.rating} />
          <div className="flex justify-around items-center w-1/5 ">
            <div
              onClick={handleToggleFav}
              className="md:w-7 md:h-7 w-8 h-8 cursor-pointer"
            >
              {isLiked ? (
                <IoHeart className="w-full h-full" />
              ) : (
                <IoHeartOutline className="w-full h-full" />
              )}
            </div>
            <IoShareSocialOutline className="md:w-7 md:h-7 w-8 h-8 cursor-pointer" />
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
        title={product.title}
        id={product.id}
      />

      <ProductDescription description={product.description} />
      <SimilarProducts category={product.category} />
    </div>
  );
};

export default ProductDetails;
