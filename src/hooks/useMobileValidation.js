import { useState } from "react";

const useMobileValidation = () => {
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(true);

  const validateMobileNumber = (mobileNumber) => {
    const mobileRegex = /^0?[6-9]\d{9}$/;
    setIsValidMobileNumber(mobileRegex.test(mobileNumber));
  };
  return { isValidMobileNumber, validateMobileNumber };
};

export default useMobileValidation;
