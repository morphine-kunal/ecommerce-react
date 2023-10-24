import { useState } from "react";
import Arrow from "../../assets/arrow-icon.png";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 p-2 bg-black text-white rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <img src={Arrow} alt="arrow" className="bg-white rounded-full rotate-[-90deg]"/>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
