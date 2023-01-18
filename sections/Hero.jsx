import Link from 'next/link'
import React from 'react'
import LatestUpdate from '../components/LatestUpdate'

const Hero = () => {
    return (
        <section className="hero flex items-stretch">
            <div className="imagebanner w-[60%] h-full">
                <img src="https://picsum.photos/id/110/1000/650" className=" h-full object-cover object-center" alt="" />
            </div>
            <LatestUpdate/>
            
        </section>
    )
}

export default Hero