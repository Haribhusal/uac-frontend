import Image from 'next/image'
import React from 'react'
import CallBack from './../components/CallBack'

const About = ({ settingsData }) => {
    return (
        <section className="about flex items-stretch">
            <div className="quicknews w-[40%] relative">
                <div className="pic1 absolute top-10 left-10 rounded-sm">
                    <Image src='/univa-team.jpg' width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
                </div>
                <div className="pic1 absolute bottom-0 left-[50%] -translate-x-1/2">
                    <Image src='/students.jpg' width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
                </div>
            </div>
            <div className="imagebanner w-[60%] h-full p-16 bg-white">
                <h3 className="title text-5xl font-black leading-tight">
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