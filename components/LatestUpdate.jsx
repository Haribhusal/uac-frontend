import Link from 'next/link'
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/posts";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import moment from 'moment/moment';

const LatestUpdate = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const postData = useSelector((state) => state.postsSlice.data);
    const postStatus = useSelector((state) => state.postsSlice.status);
    const latestUpdateData = postData.filter((item) => item.categories[0] !== 17);
    function Box({ children }) {
        return (
            <div
                className='mb-5 px-5 py-6 shadow-sm rounded'
            >
                {children}
            </div>
        )
    }

    return (
        <div className="quicknews md:w-[40%] sm:w-full  bg-transparent">
            <div className="heading bg-slate-200 px-5 py-3 flex justify-between items-center">
                <h3 className="title text-base font-bold">
                    Latest Update
                </h3>
                <Link href="/news-and-events" className="text-sm">View All <i className="las la-angle-right"></i> </Link>
            </div>
            <div className="items p-5 flex flex-col gap-5 bg-white">

                {postStatus == "loading" ?
                    <Skeleton count={5} wrapper={Box} /> // Five-line loading skeleton
                    :
                    (
                        latestUpdateData.slice(0, 5).map((item) => (
                            <Link href={`/post/${item.id}`} key={item.id} className="group rounded-md border-gray-700 hover:border-red-700 bg-white border-l-[3px] ">
                                <div className="linkwrapper rounded bg-white  shadow hover:shadow-md transition-all py-3 px-5 flex gap-3 items-start">
                                    <i className="las la-newspaper text-gray-700 text-2xl"></i>
                                    <div className="wrap">

                                        <h3 className="title group-hover:text-red-700 text-base	 font-normal m-0  leading-relaxed">
                                            {item.title.rendered.length > 120 ? `${item.title.rendered.slice(0, 120)}...` : item.title.rendered.slice(0, 120) }
                                            <span className=' text-sm rounded text-gray-500 group-hover:text-gray-500'> Posted: 
                                                {moment.utc(item.date).local().startOf('seconds').fromNow()}</span>
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )

                }




            </div>
        </div>
    )
}

export default LatestUpdate