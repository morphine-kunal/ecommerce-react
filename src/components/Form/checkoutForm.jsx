import { useState } from "react";
import { Data } from "../../data/data";

const CheckoutForm = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(Data[state] || []);
  };
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
              required
            />
          </div>
          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="surname" className="text-xs font-bold">
              Surname:
            </label>
            <input
              type="text"
              placeholder="Enter a surname"
              required
              className="w-full text-xs p-2 outline-none "
            />
          </div>
          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="mobile" className="text-xs font-bold">
              Number:
            </label>
            <input
              type="tel"
              required
              className="w-full text-xs p-2 outline-none "
            />
          </div>
          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="email" className="text-xs font-bold">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter e-mail address"
              required
              className="w-full text-xs p-2 outline-none "
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
            >
              <option value="">Select a state</option>
              {Object.keys(Data).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="city" className="text-xs font-bold">
              City:
            </label>
            <select
              id="city"
              required
              className="w-full text-xs p-2 outline-none "
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full flex justify-between gap-x-20 border-b-[1px] pb-2 items-center">
            <label htmlFor="address" className="text-xs font-bold">
              Address:
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              required
              className="w-full text-xs p-2 outline-none "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
