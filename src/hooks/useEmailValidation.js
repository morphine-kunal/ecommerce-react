import { useState } from "react";

const useEmailValidation = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };
  return { isEmailValid, emailValidate };
};

export default useEmailValidation;
