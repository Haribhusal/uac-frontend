import React from 'react'
import ContactForm from './../components/ContactForm'
const contact = () => {
    return (
        <section>
            <div className="wrapper flex gap-10 bg-red-100 items-center">
                <div className="info flex-[2] p-10">
                    <div className="subhead uppercase text-gray-400 bg-white px-5 inline-block py-3">Contact</div>
                    <h3 className="title my-5 text-5xl font-black leading-none">
                        Lets connect and discuss your future...
                    </h3>
                    <div className="brief text-2xl leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, facilis. consectetur, adipisicing elit. Eaque, minus.
                    </div>
                </div>
                <div className="form flex-[1] pr-10">
                   <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default contact