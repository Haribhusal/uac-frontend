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
    const latestUpdateData = postData.filter((item)=> item.categories[0] !== 17);
    console.log(postData);
    console.log(latestUpdateData);
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
        <div className="quicknews w-[40%] bg-red-50">
            <div className="heading bg-gray-700 px-5 text-white py-3 flex justify-between items-center">
                <h3 className="title">
                    Latest Update
                </h3>
                <Link href="/view-all" className="text-sm">View All <i className="las la-angle-right"></i> </Link>
            </div>
            <div className="items p-5 flex flex-col gap-5">

                {postStatus == "loading" ?
                    <Skeleton count={5} wrapper={Box} /> // Five-line loading skeleton
                    :
                    (
                        latestUpdateData.slice(0, 5).map((item) => (
                            <Link href={`/post/${item.id}`} key={item.id} className="group">
                                <div className="linkwrapper rounded bg-white  shadow hover:shadow-md transition-all py-3 px-5 flex gap-3 items-start">
                                    <i className="las la-newspaper text-red-700 text-2xl"></i>
                                    <div className="wrap">

                                        <h3 className="title group-hover:text-red-700 leading-6">
                                            {item.title.rendered.slice(0, 70)}...
                                        </h3>
                                        <div className="time text-sm flex items-center gap-1">
                                            <span>Published </span>
                                            {moment.utc(item.date).local().startOf('seconds').fromNow()}

                                        </div>
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