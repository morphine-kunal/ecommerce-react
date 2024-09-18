/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Data } from "../../data/data";
import useEmailValidation from "../../hooks/useEmailValidation";
import useMobileValidation from "../../hooks/useMobileValidation";

const CheckoutForm = ({ setIsValid }) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobile: "",
    email: "",
    state: selectedState,
    city: "",
    address: "",
  });

  const { isValidMobileNumber, validateMobileNumber } = useMobileValidation();
  const { isEmailValid, emailValidate } = useEmailValidation();

  const handleClick = (button) => {
    if (selectedButton === button) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setFormData((prev) => ({
      ...prev,
      state: state,
    }));
    setCities(Data[state] || []);
  };

  const buttonClass = (button) =>
    `p-2 rounded-lg text-sm font-bold ${
      selectedButton === button ? "bg-[#ff003c] text-white" : "bg-gray-100"
    }`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "mobile") {
      validateMobileNumber(value);
    } else if (name === "email") {
      emailValidate(value);
    }
  };

  useEffect(() => {
    const hasValue =
      formData.address.length > 0 &&
      formData.city.length > 0 &&
      formData.email.length > 0 &&
      formData.mobile.length > 0 &&
      formData.name.length > 0 &&
      formData.state.length > 0 &&
      formData.surname.length > 0 &&
      selectedButton &&
      isValidMobileNumber &&
      isEmailValid;

    setIsValid(hasValue);
  }, [formData, setIsValid, selectedButton, isEmailValid, isValidMobileNumber]);

  return (
    <div className="pb-4">
      <form>
        <div className="p-4 bg-[#ffffff] rounded-lg">
          <h1 className="text-sm font-semibold mb-4">Personal Data</h1>
          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="name" className="text-xs font-bold">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter a name"
              className="w-full text-xs p-2 outline-none "
              name="name"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
          <div className="w-full flex justify-between gap-x-[3.7rem] border-b-[1px] pb-2 items-center">
            <label htmlFor="surname" className="text-xs font-bold">
              Surname:
            </label>
            <input
              type="text"
              placeholder="Enter a surname"
              required
              className="w-full text-xs p-2 outline-none "
              name="surname"
              onChange={handleInputChange}
              value={formData.surname}
            />
          </div>
          <div
            className={`w-full flex justify-between gap-x-[4rem] border-b-[1px] pb-2 items-center ${
              !isValidMobileNumber ? "border-b-red-500 border-b-2" : ""
            }`}
          >
            <label htmlFor="mobile" className="text-xs font-bold">
              Number:
            </label>
            <div className="w-full relative">
              <input
                type="tel"
                required
                className="text-xs p-2 outline-none w-full pl-5"
                name="mobile"
                onChange={handleInputChange}
                value={formData.mobile}
              />
              <span className="absolute text-xs left-0 top-2 z-10">+91</span>
            </div>
          </div>
          <div
            className={`w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center ${
              !isEmailValid ? "border-b-red-500 border-b-2" : ""
            }`}
          >
            <label htmlFor="email" className="text-xs font-bold">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter e-mail address"
              required
              className="w-full text-xs p-2 outline-none "
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
        </div>

        <div className="p-4 bg-[#ffffff] rounded-lg mt-2">
          <h1 className="text-sm font-semibold mb-4">Delivery</h1>
          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="state" className="text-xs font-bold">
              State:{" "}
            </label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              required
              className="w-full text-xs p-2 outline-none "
              name="state"
            >
              <option value="">Select a state</option>
              {Object.keys(Data).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full flex justify-between gap-x-[5.4rem] border-b-[1px] pb-2 items-center">
            <label htmlFor="city" className="text-xs font-bold">
              City:
            </label>
            <select
              id="city"
              required
              name="city"
              className="w-full text-xs p-2 outline-none "
              onChange={handleInputChange}
              value={formData.city}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full flex justify-between gap-x-[3.8rem] border-b-[1px] pb-2 items-center">
            <label htmlFor="address" className="text-xs font-bold">
              Address:
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              required
              value={formData.address}
              className="w-full text-xs p-2 outline-none "
              name="address"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="p-4 bg-[#ffffff] rounded-lg mt-2">
          <h1 className="text-sm font-semibold mb-4">Payment method</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <button
              className={buttonClass("cardOnDelivery")}
              onClick={() => handleClick("cardOnDelivery")}
              type="button"
            >
              Payment by card on delivery
            </button>
            <button
              className={buttonClass("debitCredit")}
              onClick={() => handleClick("debitCredit")}
              type="button"
            >
              Pay by debit/credit card
            </button>
            <button
              className={buttonClass("upi")}
              onClick={() => handleClick("upi")}
              type="button"
            >
              Pay by UPI
            </button>
            <button
              className={buttonClass("cashOnDelivery")}
              onClick={() => handleClick("cashOnDelivery")}
              type="button"
            >
              Cash on delivery
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
