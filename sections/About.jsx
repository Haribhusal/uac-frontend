import Image from 'next/image'
import React from 'react'
import CallBack from './../components/CallBack'

const About = () => {
    return (
        <section className="about flex items-stretch">
            <div className="quicknews w-[40%] relative">
                <div className="pic1 absolute top-10 left-10 rounded-sm">
                    <Image src={'https://picsum.photos/id/45/600/400'} width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
                </div>
                <div className="pic1 absolute bottom-0 left-[50%] -translate-x-1/2">
                <Image src={'https://picsum.photos/id/46/300/200'} width="1000" alt='image info' height='500' priority="false" className='rounded-md'></Image>
                </div>
            </div>
            <div className="imagebanner w-[60%] h-full p-16 bg-white">
                <h3 className="title text-5xl font-black leading-tight">
                    We help on making your dream come true!
                </h3>
                <p className="text my-6 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur blanditiis consectetur aliquid culpa possimus enim, odit earum maxime unde distinctio doloribus voluptates repellendus ab veniam sit expedita quos inventore recusandae.
                </p>
                <div className="heading font-bold text-xl">
                    Do you want a call from Univa Education Consultancy?
                </div>
                <CallBack/>
            </div>

        </section>
    )
}

export default About