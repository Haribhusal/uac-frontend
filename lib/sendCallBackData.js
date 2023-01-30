import axios from "axios";

const sendCallBackData = async (contactNumber, fullName) => {
  return axios({
    method: "post",
    url: "/api/send-contact-form-data",
    data: {
      contactNumber: contactNumber,
      fullName: fullName,
    },
  });
};

export default sendCallBackData;
