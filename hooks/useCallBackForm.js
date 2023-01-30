import { useState } from "react";

const useCallBackForm = () => {
  const [values, setValues] = useState({
    contactNumber: "",
    fullName: "",
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

export default useCallBackForm;
