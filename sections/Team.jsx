import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { fetchTeam } from "../store/team";
import { useSelector } from "react-redux";
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import ReactHtmlParser from 'react-html-parser'
import Link from 'next/link';


const Team = () => {

    function Box({ children }) {
        return (
            <div
                className='mb-5 px-10 py-7 bg-white rounded'
            >
                {children}
            </div>
        )
    }


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTeam());
    }, [dispatch]);
    const teamData = useSelector((state) => state.teamSlice.data);
    const teamDataStatus = useSelector((state) => state.teamSlice.status);


    return (
        <section>
            <h3 className="title">Our Team</h3>

            <div className='grid grid-cols-2 gap-10'>
                {teamDataStatus == "loading" ?
                    <Skeleton count={3} wrapper={Box} /> // Five-line loading skeleton
                    :
                    teamData.slice(0, 5).map((item) => (
                        <div className="item group text-center p-10 border-2 border-dashed rounded-md" key={item.id}>

                            <Image src={item.better_featured_image.media_details.sizes.medium.source_url} height={300} width={300} alt={''} className="mx-auto h-56 w-56 rounded-full object-cover object-center ring-2 ring-red-700" />
                            <div className="info mt-5">

                                <h3 className='title font-bold m-0'>
                                    {item.title.rendered}
                                </h3>
                                <div className="des text-slate-500">
                                    {item.acf.member_role}
                                </div>
                                <div className="brief my-3">

                                    {ReactHtmlParser(item.excerpt.rendered)}
                                </div>
                                <div className="icons flex justify-center gap-5">
                                    <Link href={item.acf.linkedin_url} target="_blank">
                                        <div className="item h-12 w-12 group-hover:text-white group-hover:bg-red-700 transition-all text-red-700 rounded-full flex items-center justify-center bg-red-100">
                                            <i className="lab la-linkedin text-2xl "></i>
                                        </div>
                                    </Link>
                                    <Link href={`mailto:${item.acf.member_email}`} target="_blank">
                                    <div className="item h-12 w-12 group-hover:text-white delay-200 group-hover:bg-red-700 transition-all text-red-700 rounded-full flex items-center justify-center bg-red-100">
                                            <i className="las la-envelope text-2xl"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>

    )
}

export default Team