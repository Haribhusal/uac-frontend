import useContactForm from '../hooks/useContactForm';
import sendEmail from '../lib/sendEmail';
import { useState } from 'react';

const ContactForm = () => {

    const { values, handleChange } = useContactForm();
    const [responseMessage, setResponseMessage] = useState(
        { isSuccessful: false, message: '' });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const req = await sendEmail(values.fullName, values.subject, values.message);
            setLoading(true);
            if (req.status === 250) {
                setLoading(false);
                setResponseMessage(
                    { isSuccessful: true, message: 'Thank you for your message.' });
            }
        } catch (e) {
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}
            class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 -mb-20 mt-20">

            <h1 class="text-2xl font-bold dark:text-gray-50">Send a message</h1>

            <label htmlFor="fullName" class="mb-2 text-gray-500 font-light mt-4 dark:text-gray-50">Full Name<span class="text-red-500 dark:text-gray-50">*</span></label>
            <input
                required
                id='fullName'
                placeholder='Enter your Full Name'
                value={values.fullName}
                onChange={handleChange}
                type='text'
                className="bg-transparent border-slate-300 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-0 font-light text-gray-500"
            />

            <label htmlFor="subject" class="mb-2 text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span class="text-red-500 dark:text-gray-50">*</span></label>
            <input
                required
                id='subject'
                placeholder='Enter Subject'
                value={values.subject}
                onChange={handleChange}
                type='text'
                className="bg-transparent border-slate-300 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-0 font-light text-gray-500"

            />
            <label for="message" class="mb-2 text-gray-500 font-light mt-4 dark:text-gray-50">Your Message<span class="text-red-500">*</span></label>
            <textarea
                required
                placeholder='Enter your Message'
                value={values.message}
                onChange={handleChange}
                id='message'
                rows={4}
                className="bg-transparent border-slate-300 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-0 font-light text-gray-500"

            />
            {responseMessage.message &&
                <div className="response bg-green-600 text-white px-5 py-3 my-5 rounded-md d-flex items-center leading-10 text-center my">
                    {responseMessage.message}
                </div>
            }
            <div class="flex flex-row items-center justify-start">
                <button
                    disabled={values.email == '' || values.message == '' || values.subject == ""}
                    onClick={() => setLoading(true)}
                    type='submit' value='submit' class="px-10 mt-8 py-2 bg-red-700 gap-3 flex items-center text-gray-50 font-light rounded-md text-lg">
                    Send
                    <i className={`las ${loading ? "la-spinner animate-spin" : "la-telegram-plane"} `}></i>
                </button>
            </div>
        </form >
    );
};

export default ContactForm;