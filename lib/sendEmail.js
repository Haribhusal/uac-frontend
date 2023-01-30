import axios from "axios";

const sendEmail = async (fullName, subject, message) => {
  return axios({
    method: "post",
    url: "/api/send-email",
    data: {
      fullName: fullName,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;
