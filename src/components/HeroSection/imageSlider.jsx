import { useState, useEffect } from "react";
import smartphones from "../../assets/img/smartphones-min.png";
import laptops from "../../assets/img/laptops-min.png";
import perfume from "../../assets/img/perfume-min.png";
import skincare from "../../assets/img/skincare-min.png";
import furniture from "../../assets/img/furniture-min.png";
import homeDecor from "../../assets/img/homeDecor-min.png";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const DummyImages = [
  {
    url: smartphones,
    title: "smartphones",
  },
  {
    url: laptops,
    title: "laptops",
  },
  {
    url: perfume,
    title: "fragrances",
  },
  {
    url: skincare,
    title: "skincare",
  },
  {
    url: furniture,
    title: "furniture",
  },
  {
    url: homeDecor,
    title: "home-decoration",
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
          <IoChevronBackOutline className="w-full h-full" />
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
            <Link to={`/products/category/${currentSlide.title}`}>
              {ind === activeImageNum && (
                <img
                  src={currentSlide.url}
                  className="image w-full h-full object-fill"
                />
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
