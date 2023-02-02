import Link from 'next/link'
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/posts";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import moment from 'moment/moment';
import ReactHtmlParser from "react-html-parser";
import Banner from './../components/Banner'
import Image from 'next/image';
const ListingPage = () => {
    const regex = /(<([^>]+)>)/gi;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const postData = useSelector((state) => state.postsSlice.data);
    const postStatus = useSelector((state) => state.postsSlice.status);
    const blogData = postData.filter((item)=> item.categories[0] == '17')
    console.log(blogData)

    return (
        <main className='bg-red-50'>

            <Banner title="Blog" currentPage='Blog' />
            <div className='md:w-[80%] w-full  mx-auto grid grid-cols-1 gap-5 py-10'>
                {blogData.map((item) => (
                    <Link href={`/post/${item.id}`} className="item bg-white shadow-sm md:p-10 p-5 rounded  transition-all group" key={item.id}>
                        <div className="wrapper flex flex-col md:flex-row items-start gap-10">

                            <div className="image flex-1 shadow-md rounded-md">
                                <Image src={item.better_featured_image.media_details.sizes.medium.source_url} height={300} style={{ maxHeight: '200px', height: '100%' }} className="group-hover:shadow-lg  object-cover group-hover:-mr-5 border-slate-400 rounded-md object-center" width={300} alt={item.title.rendered} />
                            </div>
                            <div className="info flex-[5] flex flex-col items-stretch justify-between">
                                <div className="up">
                                    <h3 className="title mt-0 text-2xl mb-5 font-bold group-hover:text-red-700 transition-all">
                                        {item.title.rendered}
                                    </h3>
                                    <p className="text">
                                        {item.excerpt.rendered.slice(0, 200).replace(regex, "")}...
                                    </p>
                                </div>
                                <div className="down">
                                    <div className="info mt-3 flex gap-5">
                                        <div className="time flex items-center gap-2  rounded-md bg-red-100 px-5 py-3">
                                            <button className=''>Read More</button>
                                            <i className="las la-arrow-right"></i>

                                        </div>
                                        <div className="time flex items-center gap-2 rounded-0 bg-transparent border-l-2 px-5 py-3 gap-1">
                                            <i className="las la-clock"></i>
                                            {moment.utc(item.date).local().startOf('seconds').fromNow()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Link>
                ))}
            </div>
        </main>
    )
}

export default ListingPage