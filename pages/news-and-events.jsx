import React from 'react'
import Banner from '../components/Banner'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/posts";
import { useSelector } from "react-redux";
import moment from 'moment/moment';

const listing = () => {
    const regex = /(<([^>]+)>)/gi;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const data = useSelector((state) => state.posts.data);
    const status = useSelector((state) => state.posts.status);

    return (
        <main className='bg-red-50'>

            <Banner title="News and Events" currentPage='News and Events' />
            <div className='w-[80%]  mx-auto grid grid-cols-2 gap-5 py-10'>
                {data.map((item) => (
                    <article className="item bg-white shadow-sm p-10 rounded hover:shadow-md transition-all group" key={item.id}>
                        <h3 className="title text-2xl mb-5 font-bold group-hover:text-red-700 transition-all">
                            {item.title.rendered}
                        </h3>
                        <p className="text">
                            {item.excerpt.rendered.slice(0, 200).replace(regex, "")}...
                        </p>
                        <div className="info mt-3">
                            <div className="time flex items-center gap-1">
                                <i className="las la-clock"></i>
                                {moment.utc(item.date).local().startOf('seconds').fromNow()}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    )
}

export default listing