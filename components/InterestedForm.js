import React, { useState } from "react";
import useInterestedForm from "../hooks/useInterestedForm";
import sendInterestedData from "../lib/sendInterestedData";

const InterestedForm = () => {
  const { values, handleChange } = useInterestedForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendInterestedData(
        values.fullName,
        values.address,
        values.contactNumber,
        values.country,
        values.type,
        values.date
      );
      setLoading(true);
      if (req.status === 250) {
        setLoading(false);
        setResponseMessage({
          isSuccessful: true,
          message:
            "We are glad you are interested in our services. Our representative will look at your request contact you shortly",
        });
      }
    } catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="container mt-5 md:p-10 p-5 bg-red-100 rounded border-[1px] border-red-300 border-dashed">
      <div className="top">
        <h3 className="text-3xl font-bold">
          If you are interested, please let us know
        </h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="row block md:flex gap-10 mb-5">
            <div className="form-group flex-1 flex flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="fullName"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
              />
            </div>
            <div className="form-group flex flex-1 flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                id="address"
                value={values.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
              />
            </div>
            <div className="form-group flex flex-1 flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="cnum">Your Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                value={values.contactNumber}
                onChange={handleChange}
                placeholder="Enter Your Contact Number"
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
              />
            </div>
          </div>
          <div className="row block md:flex gap-10 mb-5">
            <div className="form-group flex-1 flex flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="country">Interested Country</label>
              <select
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
                value={values.country}
                onChange={handleChange}
                id="country"
              >
                <option value="Select Interested Country" selected disabled>
                  Select Interested Country
                </option>
                <option value="japan">Japan</option>
                <option value="korea">Korea</option>
                <option value="malta">Malta</option>
              </select>
            </div>
            <div className="form-group flex flex-1 flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="type">Visa Type</label>
              <select
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
                value={values.type}
                onChange={handleChange}
                id="type"
              >
                <option value="Select Interested Country" selected disabled>
                  Work / Study / Tourist
                </option>
                <option value="Working Visa">Work</option>
                <option value="Study Visa">Study</option>
                <option value="Tourist Visa">Tourist</option>
              </select>
            </div>
            <div className="form-group flex flex-1 flex-col bg-white p-5 rounded-md gap-2 mt-5">
              <label htmlFor="cnum">Set your visiting date</label>
              <input
                value={values.date}
                onChange={handleChange}
                id="date"
                type="date"
                placeholder="Visiting Date"
                className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-[1px] border-slate-300 rounded-sm"
              />
            </div>
          </div>
          <div class="flex flex-row items-center justify-start">
            <button
              disabled={
                values.fullName == "" ||
                values.contactNumber == "" ||
                values.address == "" ||
                values.country == "" ||
                values.type == "" ||
                values.date == ""
              }
              onClick={() => setLoading(true)}
              type="submit"
              value="submit"
              class="px-10 mt-8 py-2 bg-red-700 gap-3 flex items-center text-gray-50 font-light rounded-md text-lg"
            >
              Send
              <i
                className={`las ${
                  loading ? "la-spinner animate-spin" : "la-telegram-plane"
                } `}
              ></i>
            </button>
          </div>
        </form>
        {responseMessage.message && (
          <div className="response bg-green-600 text-white px-5 py-3 my-5 rounded-md d-flex items-center leading-10 text-center my">
            {responseMessage.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestedForm;
