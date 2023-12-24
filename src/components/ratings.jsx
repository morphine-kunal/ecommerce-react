import { IoStar, IoStarHalf } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Ratings = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={i} />);
    }

    if (halfStar) {
      stars.push(<IoStarHalf key={"half"} />);
    }
    const remainingStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    return stars;
  };
  return (
    <div className="flex items-center text-xs font-semibold">
      {renderStars()} <span className="ml-px">{rating}</span>
    </div>
  );
};

export default Ratings;
