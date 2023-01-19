import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = ({ title, currentPage }) => {
    return (
        <div className="imageBanner relative">
            <div className="bgBanner w-full object-cover object-top py-32">
              
                </div>
            <div className="heading absolute top-24 text-center w-full flex flex-col justify-center items-center">
                <h3 className="title text-white z-40 text-5xl font-black">
                    {title}
                </h3>
                <div className="breadcrumb text-white flex gap-3 py-3">
                    <div className="item">
                        <Link href='/'> <i className="las la-home"></i> Home</Link>
                    </div>
                    /
                    <div className="item">
                        <Link href='/'> {currentPage}</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Banner