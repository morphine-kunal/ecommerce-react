import { useState, useEffect, useRef } from "react";
import InTheBasket from "../Buttons/inTheBasket";
import Loading from "../Buttons/loading";
import { CiLight } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addToCart } from "../../stores/cartSlice";
import { useDispatch } from "react-redux";
import ImageSlider from "./imageSlider";

const HeroSection = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  const [discountOfDay, setDiscountOfDay] = useState([]);
  const [timer, setTimer] = useState("00:00:00");

  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
  
    if (total >= 0) {
      // update the timer
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      setTimer("00:00:00");
    }
  };

  const clearTimer = (e) => {
    const initialTime = getTimeRemaining(e);
    setTimer(
      (initialTime.hours > 9 ? initialTime.hours : "0" + initialTime.hours) +
        ":" +
        (initialTime.minutes > 9
          ? initialTime.minutes
          : "0" + initialTime.minutes) +
        ":" +
        (initialTime.seconds > 9
          ? initialTime.seconds
          : "0" + initialTime.seconds)
    );

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    
    deadline.setHours(deadline.getHours() + 24);
    deadline.setMinutes(0);
    deadline.setSeconds(0);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  const generateRandomId = () => {
    return Math.floor(Math.random() * 100) + 1; // Adjust the range based on your API
  };

  const fetchRandomProduct = async () => {
    try {
      const randomId = generateRandomId();
      const response = await fetch(
        `https://dummyjson.com/products/${randomId}`
      );
      const data = await response.json();
      setDiscountOfDay(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories/?&limit=10")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        console.log('fetched')
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const catagories = data.slice(0, 11);
          setCategory(catagories);
          console.log("Loaded")
        } else {
          setError("Unexpected data format.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array for mounting

  useEffect(() => {
    fetchRandomProduct();
  }, []); // Empty dependency array for mounting

  
  const updateProductAfter24Hours = () => {
    // Call fetchRandomProduct again after 24 hours
    setInterval(() => {
      fetchRandomProduct();
    }, 24 * 60 * 60 * 1000);
  };

  // Initial call to set up the interval
  useEffect(() => {
    updateProductAfter24Hours();
  }, []);

  if (!category.length) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Eror: {error}</div>;
  }

  

  const handleClick = () => {
    dispatch(addToCart(discountOfDay));
  };

  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col lg:grid grid-cols-4 gap-3 mt-3">
        <div className="col-start-1 hidden md:grid col-end-2 bg-white h-[500px] rounded-lg border-2">
          {category.map((item) => (
            <div className="p-3" key={item.id}>
              <Link to={`/products/category/${item}`}>
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex">
                    <div className="w-5 h-5 mr-2">
                      <CiLight className="w-full h-full" />
                    </div>
                    <p className="text-sm">{item}</p>
                  </div>
                  <div className="w-5 h-5">
                    <IoChevronForward className="w-full h-full" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-start-2 col-end-4 bg-gray-500 h-[300px] md:h-[500px] rounded-lg border-2 overflow-hidden">
          {/* <img
            src="https://m-cdn.phonearena.com/images/article/149188-wide-two_1200/Galaxy-Z-Flip-5-is-official-Slow-but-steady-evolution.jpg"
            alt="image"
            className="w-full h-full object-fill md:object-fill"
          /> */}
          <ImageSlider />
        </div>
        <div className="md:hidden block">
          <p className="text-lg font-semibold mb-2">Top category</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
            {category.map((item) => (
              <Link key={item.id} to={`/products/category/${item}`}>
                <div
                  className=" bg-white flex flex-col items-center justify-center p-3 rounded-lg"
                  key={item.id}
                >
                  <div className="w-6 h-6">
                    <CiLight className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-[10px] mt-2 ">{item}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-start-4 col-end-5 bg-white h-[500px] rounded-lg border-2 py-5">
          <div className="border-b pb-3">
            <p className="text-center font-semibold">Discount of the Day</p>

            <div className="flex justify-evenly mt-3">
              <div className="flex flex-col">
                <span className="text-center text-green-500 text-sm">
                  {timer.split(":")[0]}
                </span>
                <span className="text-sm">hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-center text-green-500 text-sm">{timer.split(":")[1]}</span>
                <span className="text-sm">mins</span>
              </div>
              <div className="flex flex-col">
                <span className="text-center text-green-500 text-sm">{timer.split(":")[2]}</span>
                <span className="text-sm">sec</span>
              </div>
            </div>
          </div>
          {discountOfDay && (
            <>
              <div className="py-3">
                <p className="text-center font-semibold text-sm">
                  {discountOfDay.title}
                </p>
                <p className="text-center font-semibold mt-1 text-xl">
                  ${discountOfDay.price}{" "}
                  <span className="text-gray-400 text-sm ml-3 line-through">
                    $
                    {(
                      discountOfDay.price /
                      (1 - discountOfDay.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>{" "}
                  <span className="text-green-500 text-xs">
                    {discountOfDay.discountPercentage}
                  </span>
                </p>
              </div>
              <div className="w-52 h-52 m-auto">
                <img
                  src={discountOfDay.images[0]}
                  alt="item"
                  className="w-full h-full"
                />
              </div>
            </>
          )}

          <div className="flex justify-center items-center flex-col mt-3">
            <InTheBasket name="Add to cart" onclick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
