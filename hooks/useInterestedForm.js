import { useState } from "react";

const useInterestedForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    country: "",
    type: "",
    date: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, handleChange };
};

export default useInterestedForm;
