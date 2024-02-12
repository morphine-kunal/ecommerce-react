/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IoOptionsOutline, IoRemoveOutline } from "react-icons/io5";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ApplyBtn from "../Buttons/applyBtn";

const dummyFilters = [
  {
    name: "Price",
  },
  {
    name: "Brand",
  },
  {
    name: "Rating",
  },
];

const checkboxOptions = [
  { label: "Rating 1 & above", value: "option1" },
  { label: "Rating 2 & above", value: "option2" },
  { label: "Rating 3 & above", value: "option3" },
  { label: "Rating 4 & above", value: "option4" },
];

const SideBar = ({ brands }) => {
  const [showOptions, setShowOptions] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [inputs, setInputs] = useState({});
  const [brand, setBrand] = useState([]);

  const toggleVisibility = (index) => {
    setShowOptions((prevVisibleDiv) =>
      prevVisibleDiv === index ? null : index
    );
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleCheckBox = (brandName) => {
    setBrand((prevBrands) => {
      const updatedBrands = {
        ...prevBrands,
        [brandName]: !prevBrands[brandName],
      };
      setInputs((prevI) => ({
        ...prevI,
        brands: updatedBrands,
      }));
      return updatedBrands;
    });
  };

  const handleChange = (event, option) => {
    const { checked } = event.target;

    setInputs((prevInput) => ({
      ...prevInput,
      [option.value]: checked,
      priceRange,
    }));
  };

  const handleApplyBtn = () => {
    console.log(inputs);
    // setInputs({});
  };
  useEffect(() => {
    setBrand(brands);
  }, [brands]);
  return (
    <div className="w-[350px]  bg-white rounded-md p-3">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-semibold text-lg">Filter</h1>
        <IoOptionsOutline className="text-xl" />
      </div>
      <hr className="mb-2" />

      <div>
        {dummyFilters.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center p-3 mb-3 border-b cursor-pointer"
              onClick={() => toggleVisibility(index)}
            >
              <p className="font-medium text-sm">{item.name}</p>
              <IoRemoveOutline />
            </div>
            <div
              style={{ display: showOptions === index ? "block" : "none" }}
              className="p-2"
            >
              <div className="">
                {item.name === "Price" ? (
                  <>
                    <Slider
                      min={0}
                      max={100}
                      range
                      value={priceRange}
                      onChange={handlePriceChange}
                    />
                    <div className="flex justify-between items-center text-xs mx-1 ">
                      <p>${priceRange[0]}</p>
                      <p>${priceRange[1]}</p>
                    </div>
                  </>
                ) : item.name === "Rating" ? (
                  // Display checkboxes for Rating
                  <div>
                    {checkboxOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex p-2 gap-x-2 text-xs"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={inputs[option.value] || false}
                          onChange={(event) => handleChange(event, option)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                ) : (
                  // <p className="font-medium text-sm">{`Content for ${item.name}`}</p>
                  <div>
                    {brands.map((option, index) => (
                      <label key={index} className="flex p-2 gap-x-2 text-xs">
                        <input
                          type="checkbox"
                          value={option}
                          checked={brand[option] || false}
                          onChange={() => handleCheckBox(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <ApplyBtn click={handleApplyBtn} />
      </div>
    </div>
  );
};

export default SideBar;
