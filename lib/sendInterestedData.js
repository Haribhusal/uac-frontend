import axios from "axios";

const sendInterestedData = async (
  fullName,
  address,
  contactNumber,
  country,
  type,
  date
) => {
  return axios({
    method: "post",
    url: "/api/send-interested-data",
    data: {
      fullName: fullName,
      address: address,
      contactNumber: contactNumber,
      country: country,
      type: type,
      date: date,
    },
  });
};

export default sendInterestedData;
