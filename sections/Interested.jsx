import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInterests } from "../store/userInterests";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Image from 'next/image';

const Interested = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInterests());
    }, [dispatch]);
    const userInterestsData = useSelector((state) => state.userInterestsSlice.data);
    const [activeService, setActiveService] = useState(32);


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
        <section id='interest' className="interestSelect bg-red-100 mt-10 px-10 gap-10 py-16 flex items-center min-h-[80vh]">
            <div className="left  shadow-lg w-[25%] bg-white p-10 rounded-md">
                <div className="heading mb-5">
                    <h3 className="title text-xl">You might be interested in</h3>
                </div>
                <div className="options flex flex-col gap-3">
                    {userInterestsData?.length > 0 && userInterestsData.map((interest, index) => (
                        <Link href={`interested/${interest.slug}`} className={activeService === interest.id ? "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group  py-3 px-5 rounded bg-red-700 text-white" : "option cursor-pointer hover:bg-red-700 hover:text-white  shadow flex items-center gap-3 hover:shadow-md transition-all group bg-white py-3 px-5 rounded"} key={index} onMouseEnter={() => setActiveService(interest.id)}>
                            <i className="las la-briefcase text-xl"></i>
                            {interest.title.rendered}
                        </Link>
                    ))}
                    <div>
                    </div>


                </div>
            </div>
            <div className="right w-[75%] ">
                {userInterestsData?.length > 0 && userInterestsData.map((interest, index) => (
                    <div className='flex items-center' key={index}>
                        {activeService === interest.id &&
                            <div className="info shadow-md rounded relative z-30 p-10 bg-white w-[60%] ">
                                <div className="heading">
                                    <h3 className="title text-3xl font-bold text-red-700 leading-normal">
                                        {interest.title.rendered}
                                    </h3>
                                    <div className="info my-6 leading-loose">
                                        {ReactHtmlParser(interest.excerpt.rendered.slice(0, 500))}
                                    </div>
                                    <div className="actions flex gap-6">
                                        <Link href={`interested/${interest.slug}`}>
                                            <button className='btn rounded px-5 py-3 bg-red-100 text-red-700 border-red-100'>Find More Information</button>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        }
                        <div className="imagewrapper w-[40%]">
                            {activeService === interest.id &&
                                <Image src={interest.better_featured_image?.source_url} alt="image" height={200} width={500} style={{ height: "500px" }} className='w-full rounded-md object-cover'></Image>
                            }
                        </div>

                    </div>
                ))}



            </div>
        </section>
    )
}

export default Interested