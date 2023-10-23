// import React from 'react'
import InTheBasket from "../Buttons/inTheBasket";
import SmartPhoneIcon from "../../assets/phone-icon.png";
import ArrowIcon from '../../assets/arrow-icon.png'

const DUMMYDATA = [
  {
    id: 1,
    name: "SamrtPhones",
  },
  {
    id: 2,
    name: "Smart Gadgets",
  },
  {
    id: 3,
    name: "TV, audio & video",
  },
  {
    id: 4,
    name: "PC, laptops &tablets",
  },
  {
    id: 5,
    name: "Kitchen Appliences",
  },
  {
    id: 6,
    name: "Children World",
  },
  {
    id: 7,
    name: "Dishes",
  },
  {
    id: 8,
    name: "Stationary",
  },
  {
    id: 9,
    name: "House & Garden",
  },
  {
    id: 10,
    name: "For the Car",
  },
  {
    id: 11,
    name: "Clothing",
  },
];

const HeroSection = () => {
  return (
    <div className="w-[90%] mx-auto hidden lg:grid grid-cols-4 gap-3 mt-3">
      <div className="col-start-1 col-end-2 bg-white h-[500px] rounded-lg border-2">
        {DUMMYDATA.map((item) => (
          <div className="p-3" key={item.id}>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="w-5 h-5 mr-1">
                  <img
                    src={SmartPhoneIcon}
                    alt="smartPhone"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm">{item.name}</p>
              </div>
              <div className="w-5 h-5">
                <img src={ArrowIcon} alt="arrow-icon" className="w-full h-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-start-2 col-end-4 bg-gray-500 h-[500px] rounded-lg border-2">
        <img
          src="https://m-cdn.phonearena.com/images/article/149188-wide-two_1200/Galaxy-Z-Flip-5-is-official-Slow-but-steady-evolution.jpg"
          alt="image"
          className="w-full h-full"
        />
      </div>

      <div className="col-start-4 col-end-5 bg-white h-[500px] rounded-lg border-2 py-5">
        <div className="border-b pb-3">
          <p className="text-center font-semibold">Discounts of the Day</p>

          <div className="flex justify-evenly mt-3">
            <div className="flex flex-col">
              <span className="text-center text-green-500 text-sm">07</span>
              <span className="text-sm">hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-center text-green-500 text-sm">08</span>
              <span className="text-sm">mins</span>
            </div>
            <div className="flex flex-col">
              <span className="text-center text-green-500 text-sm">09</span>
              <span className="text-sm">sec</span>
            </div>
          </div>
        </div>

        <div className="py-3">
          <p className="text-center font-semibold text-sm">
            Apple Homepod Mini
            <br /> Space Gray
          </p>
          <p className="text-center font-semibold mt-1 text-xl">
            ₹10,990{" "}
            <span className="text-gray-400 text-sm ml-3 line-through">
              ₹12,990
            </span>{" "}
            <span className="text-green-500 text-xs">15.40%</span>
          </p>
        </div>
        <div className="w-52 h-52 m-auto">
          <img
            src="https://rukminim1.flixcart.com/image/300/300/l2jcccw0/speaker/t/m/k/-original-imagdv2zjmshecrg.jpeg"
            alt="item"
            className="w-full h-full"
          />
        </div>

        <div className="flex justify-center items-center flex-col">
          <InTheBasket name="In the Basket" />
          <p className="text-xs mt-2">See more</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
