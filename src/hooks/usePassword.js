import { useState, useEffect } from "react";

export const usePassword = ({
  firstPassword = "",
  minLength = 15,
  maxLength = 30,
}) => {
  const [validLength, setValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    setValidLength(
      firstPassword.length >= minLength && firstPassword.length <= maxLength
        ? true
        : false
    );
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setHasNumber(/\d/.test(firstPassword));
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
  }, [firstPassword, minLength, maxLength]);

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
};