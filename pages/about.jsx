import React from 'react'
import Banner from '../components/Banner'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPages } from "../store/pages";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import moment from 'moment/moment';
import Link from 'next/link';
import Image from 'next/image';
import ReactHtmlParser from "react-html-parser";


const AboutPage = () => {
    const router = useRouter();
    const slug = router.pathname
    const pageSlug = slug.replace('/', '');


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    const pagesData = useSelector((state) => state.pagesSlice.data);
    const aboutPageData = pagesData.filter((item) => item.slug == pageSlug);
    console.log(aboutPageData)



    return (
        <main className=''>
            <Banner title={aboutPageData[0]?.title.rendered} currentPage={aboutPageData[0]?.title.rendered} />
            {/* pull here all the data */}
            <div className="mx-auto post-wrapper p-10 w-[60%] my-10 rounded-md shadow-md bg-white">
            <Image
              src={
                aboutPageData[0]?.better_featured_image?.source_url
              }
              width="500"
              alt="image details"
              height="800"
              className="rounded-md w-full"
            />
                <div className="leading-loose my-10">
                {ReactHtmlParser(aboutPageData[0]?.content.rendered)}
                </div>
            </div>
        </main>
    )
}

export default AboutPage