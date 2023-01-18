import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../store/userInterests";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import moment from 'moment/moment';
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from "react-html-parser";
const Interested = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInterests());
    }, [dispatch]);
    const userInterestsData = useSelector((state) => state.userInterestsSlice.data);
    const userInterestedStatus = useSelector((state) => state.userInterestsSlice.status);
    const [activeService, setActiveService] = useState(36);


    function Box({ children }) {
        return (
            <div
                className='mb-5 px-10 py-7 bg-white rounded'
            >
                {children}
            </div>
        )
    }
    return (
        <section className="interestSelect bg-red-100 mt-10 px-10 gap-10 py-16 flex items-start min-h-[80vh]">
            <div className="left w-[25%]">
                <div className="heading mb-5">
                    <h3 className="title text-2xl">You might be interested in</h3>
                </div>
                <div className="options flex flex-col gap-3">
                    {userInterestsData?.length > 0 && userInterestsData.map((interest, index) => (
                        <Link href={`interested/${interest.slug}`} className={activeService === interest.id ? "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group  py-3 px-5 rounded bg-red-700 text-white" : "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group bg-white py-3 px-5 rounded"} key={index} onMouseEnter={() => setActiveService(interest.id)}>
                        <i className="las la-briefcase text-xl"></i>
                          {interest.title.rendered}
                        </Link>
                    ))}
                    {/* <div  className={`option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group bg-white py-3 px-5 rounded ${setActiveService === item.id ? `bg-red-600` : `bg-white`} `}> */}
                    <div>
                        {/* <h3 className="title border-l-[1px] border-gray-300 px-3 "> {item.id} {item.title.rendered}</h3> */}
                    </div>


                </div>
            </div>
            <div className="right w-[75%] ">
                {userInterestsData?.length > 0 && userInterestsData.map((interest, index) => (
                    <div className='flex items-center' key={index}>

                        <div className="imagewrapper w-[50%]">
                            {activeService === interest.id &&
                                <img src={interest.better_featured_image.source_url} className='w-full rounded-md' alt="" />
                            }
                        </div>
                        {activeService === interest.id &&

                            <div className="info shadow-md rounded relative z-30 p-10 bg-white h-[50%] w-[50%] ">

                                <div className="heading">
                                    <h3 className="title text-3xl font-bold text-red-700 leading-normal">
                                        {interest.title.rendered}
                                    </h3>
                                    <div className="info my-6 leading-loose">

                                        {ReactHtmlParser(interest.excerpt.rendered)}
                                    </div>
                                    <div className="actions flex gap-6">
                                        <Link href={`interested/${interest.slug}`}>
                                            <button className='btn rounded px-5 py-3 bg-red-700 text-white shadow-md border-[1px] border-red-700'>Find More Information</button>
                                        </Link>
                                       

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}



            </div>
        </section>
    )
}

export default Interested