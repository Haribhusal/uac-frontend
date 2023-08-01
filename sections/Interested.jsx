import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../store/userInterests";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Image from 'next/image';
import BlurImage from "../components/BlurImage";

const Interested = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInterests());
  }, [dispatch]);
  const userInterestsData = useSelector(
    (state) => state.userInterestsSlice.data
  );
  const [activeService, setActiveService] = useState(155);
  console.log(userInterestsData);

  function Box({ children }) {
    return <div className="mb-5 px-10 py-7 bg-white rounded">{children}</div>;
  }
  return (
    <section
      id="interest"
      className="interestSelect bg-red-100 mt-10 md:px-10 sm:px-5  gap-10 md:py-16 sm:py-5  sm:block md:flex items-center min-h-[80vh]"
    >
      <div className="left  shadow-lg md:w-[25%] sm:w-full bg-white md:p-10 p-5 rounded-md">
        <div className="heading mb-5">
          <h3 className="title text-xl">You might be interested in</h3>
        </div>
        <div className="options flex flex-col gap-3">
          {userInterestsData?.length > 0 &&
            userInterestsData.map((interest, index) => (
              <Link
                href={`interested/${interest.slug}`}
                className={
                  activeService === interest.id
                    ? "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group  py-3 px-5 rounded bg-red-700 text-white"
                    : "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group bg-white py-3 px-5 rounded"
                }
                key={index}
                onMouseEnter={() => setActiveService(interest.id)}
              >
                <i className="las la-briefcase text-xl"></i>
                {interest.title.rendered}
              </Link>
            ))}
          <div></div>
        </div>
      </div>
      <div className="right md:w-[75%] sm:w-full ">
        {userInterestsData?.length > 0 &&
          userInterestsData.map((interest, index) => (
            <div className="sm:block md:flex items-center" key={index}>
              {activeService === interest.id && (
                <div className="info shadow-md rounded relative m-0 z-30 md:p-10 p-5 bg-white sm:w-full md:w-[60%] ">
                  <div className="heading">
                    <h3 className="title text-3xl font-bold text-red-700 leading-normal">
                      {interest.title.rendered}
                    </h3>
                    <div className="info my-6 leading-loose">
                      {ReactHtmlParser(interest.excerpt.rendered.slice(0, 500))}
                    </div>
                    <div className="actions flex gap-6">
                      <Link href={`interested/${interest.slug}`}>
                        <button className="btn rounded px-5 py-3 bg-red-100 text-red-700 border-red-100">
                          Find More Information
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              <div className="hidden md:block imagewrapper sm:w-full md:w-[40%] p-0 px-5 md:p-0 ">
                {
                  activeService === interest.id && (
                    <BlurImage
                      image={interest.better_featured_image?.source_url}
                    />
                  )
                  // <Image src= alt="image" height={200} width={500} className='w-full rounded-md object-cover h-[200px] md:h-[450px]'></Image>
                }
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Interested