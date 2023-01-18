import React from 'react'

const About = () => {
    return (
        <section className="about flex items-stretch">
            <div className="quicknews w-[40%] relative">
                <div className="pic1 absolute top-10 left-10 rounded-sm">
                    <img src="https://picsum.photos/id/45/600/400" alt="" className=" rounded-md" />
                </div>
                <div className="pic1 absolute bottom-0 left-[50%] -translate-x-1/2">
                    <img src="https://picsum.photos/id/46/500/300" alt="" className=" rounded-md" />
                </div>
            </div>
            <div className="imagebanner w-[60%] h-full p-16 bg-white">
                <h3 className="title text-5xl font-black leading-tight">
                    We help on making your dream come true!
                </h3>
                <p className="text my-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur blanditiis consectetur aliquid culpa possimus enim, odit earum maxime unde distinctio doloribus voluptates repellendus ab veniam sit expedita quos inventore recusandae.
                </p>
                <div className="heading font-bold text-xl">
                    Do you want a call from Univa?
                </div>
                <form action="" className="flex mt-5 gap-1">
                    <input type="tel" placeholder="Enter your phone number" className="border-[1px] rounded focus:border-[1px] focus:border-red-400 focus:outline-none outline-none" />
                    <button className="bg-red-400 px-5 text-white rounded">Get a callback</button>

                </form>
            </div>

        </section>
    )
}

export default About