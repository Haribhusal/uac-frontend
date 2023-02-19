import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../../store/userInterests";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import InterestedForm from "../../components/InterestedForm";
import Head from "next/head";

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
  console.log("singleInterestedData", singleInterestedData);

  return (
    <>
      <Head>
        <title>{singleInterestedData[0]?.title.rendered}</title>
        <meta
          property="og:title"
          content={singleInterestedData[0]?.title.rendered}
          key="title"
        />
        <link rel="icon" href="/univa-logo.png" />
      </Head>
      <div className="p-0 md:p-10">
        <div className="container p-5 md:p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
          <div className="wrapper flex flex-col md:flex-row items-start gap-0 md:gap-10">
            <div className="imagearea sm:w-full md:w-[40%]  md:sticky  top-32">
              <Image
                src={singleInterestedData[0]?.better_featured_image?.source_url}
                width="500"
                alt="image details"
                height="800"
                className="rounded-md h-[450px] object-cover object-center"
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

        <InterestedForm />
      </div>
    </>
  );
};

export default SingleInterestedPage;
