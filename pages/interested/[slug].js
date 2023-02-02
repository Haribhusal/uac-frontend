import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../../store/userInterests";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import InterestedForm from "../../components/InterestedForm";

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
    <div className="sm:p-5 md:p-10">
      <div className="container p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
        <div className="wrapper sm:flex md:block items-center gap-16">
          <div className="imagearea sm:w-full md:w-[40%]">
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
          <div className="infoArea sm:w-full mt-10 md:w-[60%] ">
            <h3 className="title text-red-700 leading-relaxed text-3xl font-bold mb-5">
              {singleInterestedData[0]?.title.rendered}
            </h3>
            <div className="meta bg-red-100 px-5 py-3 mb-5 rounded inline-flex items-center gap-10">
              <div className="item inline-flex  items-center gap-2">
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

      <InterestedForm/>
    </div>
  );
};

export default SingleInterestedPage;
