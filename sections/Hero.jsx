import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatestUpdate from '../components/LatestUpdate'

const Hero = () => {
    return (
        <section className="hero flex items-stretch">
            <div className="imagebanner w-[60%] relative fitImage">
                <Image src='https://picsum.photos/id/110/1000/650' priority='false' alt='gallery' height={1} width={300} style={{ height: '100%' }} className="object-cover object-center absolute top-0 bottom-0 h-full w-full"></Image>
            </div>
            <LatestUpdate />

        </section>
    )
}

export default Hero