import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchServices } from "../store/services";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import ReactHtmlParser from "react-html-parser";
const Services = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);
    const servicesData = useSelector((state) => state.servicesSlice.data);
    const servicesFetchStatus = useSelector((state) => state.servicesSlice.status);
    console.log('servicesData', servicesData)


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
        <section className='p-10 flex gap-10 items-center'>
            {servicesFetchStatus == "loading" ?
                <Skeleton count={5} wrapper={Box} /> // Five-line loading skeleton
                :
                servicesData.slice(0, 3).map((item) => (
                    <div className='shadow bg-white p-10 rounded-md text-center group hover:shadow-md transition-all' key={item.id}>
                        <div className="img">
                            <img src={item.better_featured_image.media_details.sizes
                            .thumbnail.source_url} className='h-36 p-2 group-hover:p-0 group-hover:grayscale transition-all w-36 mx-auto border-2 border-red-700 border-dashed mb-5 rounded-full object-cover object-center' alt="" />
                        </div>
                        <h3 className="title group-hover:text-red-700 my-5 text-2xl font-bold transition-all">
                            {item.title.rendered}
                        </h3>
                        <div className="text leading-loose">
                            {ReactHtmlParser(item.excerpt.rendered)}
                        </div>

                    </div>
                ))
            }


        </section>
    )
}

export default Services