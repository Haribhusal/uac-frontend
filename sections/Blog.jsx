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
        <section className="blog" id='blog'>
            <div className="imageBanner relative">
                {/* <div className="overlay absolute top-0 left-0 h-full w-full bg-black opacity-70"></div> */}
                <div className="bgBanner w-full object-cover object-center md:h-[450px] h-[200px]  ">
              
                </div>
                {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 300'><rect fill='#ff7700' width='1600' height='900'/><polygon fill='#cc0000' points='957 450 539 900 1396 900'/><polygon fill='#aa0000' points='957 450 872.9 900 1396 900'/><polygon fill='#c50022' points='-60 900 398 662 816 900'/><polygon fill='#a3001b' points='337 900 398 662 816 900'/><polygon fill='#be0044' points='1203 546 1552 900 876 900'/><polygon fill='#9c0036' points='1203 546 1552 900 1162 900'/><polygon fill='#b80066' points='641 695 886 900 367 900'/><polygon fill='#960052' points='587 900 641 695 886 900'/><polygon fill='#b10088' points='1710 900 1401 632 1096 900'/><polygon fill='#8f006d' points='1710 900 1401 632 1365 900'/><polygon fill='#aa00aa' points='1210 900 971 687 725 900'/><polygon fill='#880088' points='943 900 1210 900 971 687'/></svg> */}
                <div className="heading absolute top-[50%] -translate-y-1/2 text-center w-full">
                    <h3 className="title text-white z-40 text-3xl md:text-5xl font-bold">
                        Read our Blog
                    </h3>
                </div>
            </div>
            <div className="blogWrapper relative sm:-mt-96 md:-mt-72 grid sm:grid-cols-1 md:grid-cols-3 md:px-10 px-0 mb-10 gap-10">

                {postStatus == "loading" ?
                    <div className=''>
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                        <Skeleton count={5} wrapper={Box} className="w-full" />
                    </div>
                    :

                    blogData.slice(0, 5).map((item) => (

                        <Link href={`blog/${item.slug}`} key={item.id} className="shadow-md rounded md:p-10 p-5 bg-white group hover:shadow-lg">

                            <article className=''>
                                <figure>
                                    <img src={item.better_featured_image.media_details.sizes
                                        .medium_large?.source_url} className='w-full rounded-md h-56 object-cover object-center' alt="" />
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
                                    <div className="text leading-loose">
                                        {ReactHtmlParser(item.excerpt.rendered.slice(0,200))}
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