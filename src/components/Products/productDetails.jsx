// ProductDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Buttons/loading";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
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

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Discount Percentage: {product.discountPercentage}%</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
