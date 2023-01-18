import Link from 'next/link'
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/posts";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import moment from 'moment/moment';
import ReactHtmlParser from "react-html-parser";
const Blog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const postData = useSelector((state) => state.postsSlice.data);
    const postStatus = useSelector((state) => state.postsSlice.status);
    const blogData = postData.filter((item) => item.categories[0] == 17);
    console.log(blogData);
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
        <section className="blog">
            <div className="imageBanner relative">
                <div className="overlay absolute top-0 left-0 h-full w-full bg-black opacity-70"></div>
                <img src="https://picsum.photos/id/2/1000/300" className='w-full h-96 object-cover object-center' alt="" />
                <div className="heading absolute top-16 text-center w-full">
                    <h3 className="title text-white z-40 text-5xl font-bold">
                        Read our Blog
                    </h3>
                </div>
            </div>
            <div className="blogWrapper relative -mt-48 grid grid-cols-3 px-10 mb-10 gap-10">

                {postStatus == "loading" ?
                    <div className=''>
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                    </div>
                    :

                    blogData.slice(0, 5).map((item) => (

                        <Link href={`blog/${item.slug}`}>

                            <article className='shadow-md rounded p-5 bg-white group hover:shadow-lg'>
                                <figure>
                                    <img src={item.better_featured_image.media_details.sizes
                                        .medium_large?.source_url} className='w-full rounded-md h-72 object-cover object-center' alt="" />
                                </figure>
                                <div className="info mt-5">
                                    <div className="meta flex items-center justify-between">

                                        <div className="cat uppercase text-sm text-gray-500"> <i className="las la-tag mr-2"></i>  Blog</div>
                                        <div className="cat uppercase text-sm text-gray-500">
                                            <i className="las la-clock mr-2"></i>
                                            {moment.utc(item.date).local().startOf('seconds').fromNow()}

                                        </div>

                                    </div>
                                    <h3 className="title my-3 text-xl font-bold group-hover:text-red-700">
                                        {item.title.rendered}
                                    </h3>
                                    <div className="text">
                                        {ReactHtmlParser(item.excerpt.rendered)}
                                    </div>

                                    <div className="action mt-5">

                                        <button className='bg-red-700 text-white px-5 py-2 rounded'>Read More</button>

                                    </div>
                                </div>
                            </article>
                        </Link>
                    )
                    )}


            </div>

        </section>
    )
}

export default Blog