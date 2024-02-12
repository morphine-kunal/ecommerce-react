import { IoFilterOutline } from "react-icons/io5";

const ApplyBtn = (props) => {
  return (
    <button
      className="bg-[#ff003c] px-4 py-2 w-full flex items-center rounded-md text-white justify-center cursor-pointer"
      // eslint-disable-next-line react/prop-types
      onClick={props.click}
    >
      <span className="w-5 h-5 mr-2">
        <IoFilterOutline className="w-5 h-5" />
      </span>
      <p>Apply</p>
    </button>
  );
};

export default ApplyBtn;
