import React from 'react'
import Banner from '../components/Banner'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPages } from "../store/pages";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactHtmlParser from "react-html-parser";
import Head from 'next/head';


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

    return (
        <>
            <Head>
                <title>{aboutPageData[0]?.title.rendered} | Univa Education Consultancy</title>
                <meta
                    property="og:title"
                    content={aboutPageData[0]?.title.rendered}
                    key="title"
                />
                <link rel="icon" href="/univa-logo.png" />
            </Head>

            <main className=''>
                <Banner title={aboutPageData[0]?.title.rendered} currentPage={aboutPageData[0]?.title.rendered} />
                {/* pull here all the data */}
                <div className="mx-auto post-wrapper md:p-10 p-5 md:w-[60%] w-full my-10 rounded-md shadow-md bg-white">
                    <Image
                        src={
                            aboutPageData[0]?.better_featured_image?.source_url
                        }
                        width="500"
                        alt="image details"
                        height="800"
                        className="rounded-md w-full"
                    />
                    <div className="leading-loose my-10 about-page">
                        {ReactHtmlParser(aboutPageData[0]?.content.rendered)}
                    </div>

                </div>
            </main>
        </>
    )
}

export default AboutPage