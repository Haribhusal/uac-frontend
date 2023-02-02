import Head from 'next/head'
import React from 'react'
import ContactForm from './../components/ContactForm'
const contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Univa Education Consultancy</title>
                <meta
                    property="og:title"
                    content="Contact"
                    key="title"
                />
                <link rel="icon" href="/univa-logo.png" />
            </Head>
            <section>
                <div className="wrapper flex flex-col md:flex-row  gap-10 bg-red-100 items-center">
                    <div className="info md:flex-[2] flex-1 p-10">
                        <div className="subhead uppercase text-gray-400 bg-white px-5 inline-block py-3">Contact</div>
                        <h3 className="title my-5 text-3xl md:text-5xl font-black leading-none">
                            We can connect and discuss your future...
                        </h3>
                        <div className="brief text-xl md:text-2xl leading-relaxed text-gray-500">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, facilis. consectetur, adipisicing elit. Eaque, minus.
                        </div>
                    </div>
                    <div className="form md:flex-[1] flex-1 w-full md:pr-10 pr-0 relative">
                        <ContactForm />
                    </div>
                </div>
            </section>
            <section className='wrapper wrapper flex flex-col gap-10  bg-transparent py-20 px-10'>
                <div className="heading">
                    <h3 className="title text-3xl font-bold mt-10 md:mt-0">Find us on Google Map</h3>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.455121097055!2d85.32017391498775!3d27.70323088279367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9bde1a17f%3A0x57da6340fa7a7a05!2sUniversity%20Academic%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1674514522241!5m2!1sen!2snp" width="100%" height="450" style={{ border: '0', borderRadius: "10px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default contact