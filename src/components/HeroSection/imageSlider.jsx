import { useState, useEffect } from "react";
import smartphones from "../../assets/img/smartphones.png";
import laptops from "../../assets/img/laptops.png";
import perfume from "../../assets/img/perfume.png";
import skincare from "../../assets/img/skincare.png";
import furniture from "../../assets/img/furniture.png";
import homeDecor from "../../assets/img/homeDecor.png";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const DummyImages = [
  {
    url: smartphones,
    title: "smartphones",
  },
  {
    url: laptops,
    title: "Laptops",
  },
  {
    url: perfume,
    title: "Fragrances",
  },
  {
    url: skincare,
    title: "Skin Care",
  },
  {
    url: furniture,
    title: "Furniture",
  },
  {
    url: homeDecor,
    title: "Home decor",
  },
];

const ImageSlider = () => {
  const [activeImageNum, setActiveImageNum] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const length = DummyImages.length;

  const nextSlider = () => {
    setActiveImageNum(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };

  const prevSlider = () => {
    setActiveImageNum(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  useEffect(() => {
    const preloadImages = () => {
      DummyImages.forEach((imageObj) => {
        const img = new Image();
        img.src = imageObj.url;
      });
    };

    preloadImages();

    setImagesLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImageNum]);

  if (!Array.isArray(DummyImages) || DummyImages.length <= 0 || !imagesLoaded) {
    return null;
  }

  return (
    <div className="relative ">
      {/* <div className="col-start-2 col-end-4 bg-gray-500 h-[300px] md:h-[500px] rounded-lg border-2">
        <img
          src="https://m-cdn.phonearena.com/images/article/149188-wide-two_1200/Galaxy-Z-Flip-5-is-official-Slow-but-steady-evolution.jpg"
          alt="image"
          className="w-full h-full object-fill md:object-fill"
        />
      </div> */}

      <div>
        <button
          onClick={nextSlider}
          className="absolute right-0 text-white z-10 top-[50%] translate-y-[-50%] opacity-20 h-[50px]"
        >
          <IoChevronForwardOutline className="h-full w-full" />
        </button>
      </div>
      <div>
        <button
          onClick={prevSlider}
          className="absolute text-white z-10  top-[50%] translate-y-[-50%] opacity-20  h-[50px]"
        >
          <IoChevronBackOutline className="w-full h-full"/>
        </button>
      </div>
      {DummyImages.map((currentSlide, ind) => {
        return (
          <div
            className={
              ind === activeImageNum ? "currentSlide active " : "currentSlide"
            }
            key={ind}
          >
            {ind === activeImageNum && (
              <img
                src={currentSlide.url}
                className="image w-full h-full object-fill"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
