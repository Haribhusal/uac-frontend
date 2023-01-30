import useCallBackForm from '../hooks/useCallBackForm';
import sendCallBackData from '../lib/sendCallBackData';
import { useState } from 'react';

const CallBack = () => {

    const { values, handleChange } = useCallBackForm();
    const [responseMessage, setResponseMessage] = useState(
        { isSuccessful: false, message: '' });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const req = await sendCallBackData(values.contactNumber, values.fullName);
            setLoading(true);
            if (req.status === 250) {
                setLoading(false);
                setResponseMessage(
                    { isSuccessful: true, message: 'Thank you for providing us your contact number, Our representative will call you back shortly.' });
            }
        } catch (e) {
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}
                className="flex gap-5 items-center my-5">
                <input
                    required
                    id='contactNumber'
                    placeholder='Enter your contact number'
                    value={values.contactNumber}
                    onChange={handleChange}
                    type='tel'
                    className=" min-w-[300px] bg-transparent border-b py-2 pl-4 focus:ring-0 rounded-md focus:outline-none focus:rounded-md focus:shadow-none ring-red-500 font-light text-gray-500"
                />
                <input
                    required
                    id='fullName'
                    placeholder='Full Name'
                    value={values.fullName}
                    onChange={handleChange}
                    type='text'
                    className=" min-w-[200px] bg-transparent border-b py-2 pl-4 focus:ring-0 rounded-md focus:outline-none focus:rounded-md focus:shadow-none ring-red-500 font-light text-gray-500"
                />
                <button
                    disabled={values.contactNumber == '' || values.fullName == ''}
                    onClick={() => setLoading(true)}
                    type='submit' value='submit' className="px-10 py-2 bg-red-700 gap-3 flex items-center text-gray-50 font-light rounded-md text-lg">
                    Send me a call
                    <i className={`las ${loading ? "la-spinner animate-spin" : "la-telegram-plane"} `}></i>
                </button>
            </form >

            {responseMessage.message &&
                <div className="response bg-green-600 text-white px-5 py-3 my-5 rounded-md d-flex items-center leading-10 text-center my">
                    {responseMessage.message}
                </div>
            }
        </>
    );
};

export default CallBack;