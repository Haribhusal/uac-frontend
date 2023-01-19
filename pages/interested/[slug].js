import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../../store/userInterests";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";

const SingleInterestedPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInterests());
  }, [dispatch]);
  const allInterestedData = useSelector(
    (state) => state.userInterestsSlice.data
  );
  const singleInterestedData = allInterestedData.filter(
    (item) => item.slug == slug
  );

  return (
    <div className="p-10">
      <div className="container p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
        <div className="wrapper flex items-center gap-16">
          <div className="imagearea w-[40%]">
            <Image
              src={
                singleInterestedData[0]?.better_featured_image?.media_details
                  .sizes.large.source_url
              }
              width="500"
              alt="image details"
              height="800"
              className="rounded-md"
            />
          </div>
          <div className="infoArea w-[60%]">
            <h3 className="title text-red-700 leading-relaxed text-3xl font-bold mb-5">
              {singleInterestedData[0]?.title.rendered}
            </h3>
            <div className="meta bg-red-100 px-5 py-3 mb-5 rounded flex items-center gap-10">
              <div className="item flex items-center gap-2">
                <i className="las la-calendar"></i>
                {moment
                  .utc(singleInterestedData[0]?.date)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </div>
            </div>
            <div className="leading-relaxed">
              {ReactHtmlParser(singleInterestedData[0]?.content.rendered)}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
        <div className="top">
          <h3 className="text-3xl font-bold">
            If you are interested, please let us know
          </h3>
        </div>
        <div className="form">
          <form action="">
            <div className="row flex gap-10 mb-5">
              <div className="form-group flex-1 flex flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none"
                />
              </div>
              <div className="form-group flex flex-1 flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="address">Your Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                  className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none"
                />
              </div>
              <div className="form-group flex flex-1 flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="cnum">Your Contact Number</label>
                <input
                  type="tel"
                  id="cnum"
                  placeholder="Enter Your Contact Number"
                  className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none"
                />
              </div>
            </div>
            <div className="row flex gap-10 mb-5">
              <div className="form-group flex-1 flex flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="name">Interested Country</label>
                <select className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none">
                  <option value="Select Interested Country" selected disabled>
                    Select Interested Country
                  </option>
                  <option value="japan">Japan</option>
                  <option value="korea">Korea</option>
                  <option value="malta">Malta</option>
                </select>
              </div>
              <div className="form-group flex flex-1 flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="address">Visa Type</label>
                <select className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none">
                  <option value="Select Interested Country" selected disabled>
                    Work / Study / Tourist
                  </option>
                  <option value="japan">Work</option>
                  <option value="korea">Study</option>
                  <option value="malta">Tourist</option>
                </select>{" "}
              </div>
              <div className="form-group flex flex-1 flex-col bg-red-100 p-5 rounded-md gap-2 mt-5">
                <label htmlFor="cnum">Set your visiting date</label>
                <input
                  type="date"
                  id="cnum"
                  placeholder="Visiting Date"
                  className="focus:outline-none ring-0 focus:border-red-900 focus:shadow-none border-none"
                />
              </div>
            </div>
            <div className="row flex gap-10 mb-5">
              <button
                type="submit"
                className="btn bg-red-700 text-white px-5 py-3 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleInterestedPage;
