import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatestUpdate from '../components/LatestUpdate'

const Hero = () => {
    return (
        <section className="hero block md:flex items-stretch">
            <div className="imagebanner w-full md:w-[60%] fitImage">
                <Image src='/counselling.jpg' priority='true' alt='gallery' height={3000} width={3000} className="h-full w-full max-h-[550px] object-cover object-center"></Image>
            </div>
            <LatestUpdate />

        </section>
    )
}

export default Hero