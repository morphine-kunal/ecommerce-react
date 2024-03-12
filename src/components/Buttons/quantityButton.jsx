import { IoRemove, IoAdd } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const QuantityButton = ({ quantity, setQuantity}) => {
//
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div className="w-32 border-2 flex items-center justify-between">
      <button className="p-2 bg-gray-200" onClick={handleMinus}>
        <IoRemove />
      </button>
      <div>{quantity}</div>
      <button className="p-2 bg-gray-100" onClick={handleAdd}>
        <IoAdd />
      </button>
    </div>
  );
};

export default QuantityButton;
