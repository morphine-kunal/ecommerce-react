import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

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
          <IoChevronForward className="bg-white rounded-full rotate-[-90deg] text-black"/>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
