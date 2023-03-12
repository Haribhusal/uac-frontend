import Image from 'next/image'
import React from 'react'
import CallBack from './../components/CallBack'

const About = ({ settingsData }) => {
    return (
        <section className="about block md:flex flex-col md:flex-row items-center bg-white gap-5 md:gap-10">
            <div className="quicknews p-5 md:p-0 md:w-[50%] sm:w-full md:relative ">
                <div className="pic1 left-10">
                    <Image src='/classroom.jpg' width={1000} alt='image info' height={500} priority="false" className='min-h-full'></Image>
                </div>
            </div>
            <div className="imagebanner sm:w-full md:w-[60%] h-full md:p-16 p-5 bg-white">
                <h3 className="title text-3xl md:text-5xl font-black leading-tight">
                    {settingsData?.acf.about_title}
                </h3>
                <p className="text my-6 leading-loose">
                    {settingsData?.acf.about_description}
                </p>
                <div className="heading font-bold text-xl">
                    {settingsData?.acf.about_sub_heading}
                </div>
                <CallBack />
            </div>

        </section>
    )
}

export default About