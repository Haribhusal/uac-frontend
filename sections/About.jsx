import Image from 'next/image'
import React from 'react'
import CallBack from './../components/CallBack'

const About = ({ settingsData }) => {
    return (
        <section className="about block md:flex flex-col md:flex-row items-stretch py-10 bg-white">
            <div className="quicknews  md:w-[40%] sm:w-full md:relative ">
                <div className="pic1  md:absolute md:top-10 sm:top-0  left-10 rounded-sm">
                    <Image src='/univa-team.jpg' width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
                </div>
                <div className="pic1 md:absolute bottom-0 left-[50%]  -translate-x-1/2">
                    <Image src='/students.jpg' width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
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