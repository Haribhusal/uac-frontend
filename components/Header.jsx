import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <header className="bg-slate-200">
      <div className="text-slate-800 text-sm px-10">
        <div className="sm:block md:flex justify-center gap-10">
          <ul className="sm:block md:flex gap-5 items-center">
            <span className="bg-slate-100 text-red-700 px-3 py-2">
              Quick Contact
            </span>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="las la-map"></i> Adwait Marg, Putalisadak,
                Kathmandu
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="las la-envelope"></i> info@uacktm.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="las la-phone"></i> 01-5319152
              </a>
            </li>
          </ul>
          <ul className="flex gap-5 items-center">
            <span>Follow us:</span>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="lab la-facebook-f"></i>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="lab la-linkedin"></i>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-700"
              >
                <i className="lab la-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className='bg-white shadow-md px-10 py-8  sm:block md:flex justify-between items-center md:relative sm:static'>
        <div className="logo  top-100 flex gap-5 items-center md:absolute z-50 sm:static">
          <Link href='/' className='flex sm:flex-col md:flex-row items-center gap-5'>
            <div className="imagewrapper shadow-lg sm:h-24 sm:w-24 md:h-32 md:w-32  bg-white rounded-full px-3 py-3  md:flex sm:block items-center justify-center">

              <Image src={'/univa-logo.png'} priority="true" height="100" width='100' alt="logo" className='h-24 w-24 object-contain'></Image>
            </div>
            <div className="infowrapper">
              <h3 className="title text-xl my-0 font-bold text-red-700">
                Univa Education Consultancy
              </h3>
              <span className="text-black">Your Pathway to succeed</span>
            </div>
          </Link>

        </div>
        <div className="left"></div>
        <ul className='sm:block md:flex gap-5'>
          <li>
            <Link href='/' className='hover:text-red-700 font-bold'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-red-700 font-bold'>
              About
            </Link>
          </li>
          <li>
            <Link href='/#interest' className='hover:text-red-700 font-bold'>
              Services
            </Link>
          </li>
          <li>
            <Link href='/news-and-events' className='hover:text-red-700 font-bold'>
              News and Events
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-red-700 font-bold'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='https://univa.vercel.app/' target='_blank' className=' px-3 py-3 transition-all rounded text-white bg-red-700 hover:bg-red-500 border-red-700'>
              Test Online Exam
            </Link>
          </li>
        </ul>

      </nav>

    </header>
  );
};

export default Header;
