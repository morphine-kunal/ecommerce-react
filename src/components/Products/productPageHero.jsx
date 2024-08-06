/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import QuantityButton from "../Buttons/quantityButton";
import CartBtn from "../Buttons/cartBtn";

import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cartSlice";

const ProductPageHero = ({
  images,
  stock,
  brand,
  price,
  discount,
  category,
  title,
  id,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const clickHandler = (index) => {
    setSelectedImage(index);
  };

  const dispatch = useDispatch();

  const handleAddCartClick = () => {
    const data = {
      id,
      quantity,
      images,
      price,
      title,
    };
    dispatch(addToCart(data));
    console.log(data);
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3 mt-3 pb-3">
      <div className="col-start-1 col-end-3 bg-white flex justify-center rounded-md overflow-hidden p-3">
        <div className="mr-3 flex flex-col justify-evenly">
          {images.map((res, index) => (
            <div
              key={res.id}
              onClick={() => clickHandler(index)}
              className={`w-14 h-14 rounded-md  overflow-hidden cursor-pointer p-px ${
                selectedImage === index
                  ? "border-2 border-[#ff003c]"
                  : "border-2 border-[#ddd]"
              }`}
            >
              <img
                src={res}
                alt="product-img"
                className="object-fill w-14 h-14 "
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <img
            src={images[selectedImage]}
            alt="photoa "
            className="rounded-md w-full h-full max-h-[433px] min-h-[433px] object-contain"
          />
        </div>
      </div>
      <div className="col-start-3 col-end-4 bg-white rounded-md p-3">
        <div className="flex justify-between border-b-[1px] border-[#ddd] pb-3">
          {stock >= 1 ? (
            <p className="flex items-center text-xs font-md">
              <span className="mr-1">
                <IoCheckmarkOutline className="text-green-500" />
              </span>{" "}
              In Stock
            </p>
          ) : (
            <p className="flex  items-center">
              <span className="mr-1">
                <IoCloseOutline className="text-red-500" />
              </span>
              Out of Stock
            </p>
          )}
          <p className="font-semibold text-[#787276]">{category}</p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-4xl font-semibold">${price}</p>

          <div>
            <p className="text-gray-400 text-sm line-through">
              ${(price / (1 - discount / 100)).toFixed(2)}
            </p>
            <p className="text-green-500 font-semibold text-sm">-{discount}%</p>
          </div>
        </div>
        <div className="mt-6">
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <p className="mr-6 text-gray-500 font-semibold text-xs">Warranty</p>
            <p className="text-xs">
              2 Year Warranty (1 year standard warranty + 1 year additional
              warranty from the date of purchase made by the customer.)
            </p>
          </div>

          {/* <div className="flex justify-between text-sm mt-3">
            <p className="mr-6 text-gray-500 font-semibold text-xs">
              Highlights
            </p>
            <p className="text-xs">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi adipisci cumque molestiae!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi adipisci cumque molestiae!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi adipisci cumque molestiae!
                </li>
              </ul>
            </p>
          </div> */}
          <div className="flex justify-between text-sm mt-6">
            <p className="mr-6 text-gray-500 font-semibold text-xs">
              Important Note
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <p className="mr-6 text-gray-500 font-semibold text-xs">Brand</p>
            <p className="text-xs">{brand}</p>
          </div>
        </div>

        <div className="mt-6">
          <CartBtn
            Click={handleAddCartClick}
            name="Add to Cart"
            Disable={stock < 1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPageHero;
