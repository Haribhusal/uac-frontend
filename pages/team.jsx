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
import Team from '../sections/Team';
import Head from 'next/head';


const TeamPage = () => {

    const router = useRouter();
    const slug = router.pathname
    const pageSlug = slug.replace('/', '');


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    const pagesData = useSelector((state) => state.pagesSlice.data);
    const TeamPageData = pagesData.filter((item) => item.slug == pageSlug);

    return (
        <>
            <Head>
                <title>Our Team | Univa Education Consultancy</title>
                <meta
                    property="og:title"
                    content="Our Team"
                    key="title"
                />
                <link rel="icon" href="/univa-logo.png" />
            </Head>

            <main className=''>
                <Banner title='Our Team' currentPage='Our Team' />
                {/* pull here all the data */}
                <div className="mx-auto post-wrapper md:p-10 p-5 md:w-[90%] w-full my-10 rounded-md shadow-md bg-white">
                    <Team />

                </div>
            </main>
        </>
    )
}

export default TeamPage