import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import MenuData from "./../data/menu.json";

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <header className="bg-red-900">
      <div className="text-white text-sm px-10">
        <div className="flex justify-center gap-10">
          <ul className="flex gap-5 items-center">
            <span className="bg-red-600 px-3 py-2">
              Quick Contact
            </span>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-300"
              >
                <i className="las la-map"></i> Adwait Marg, Putalisadak,
                Kathmandu
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-300"
              >
                <i className="las la-envelope"></i> info@uacktm.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-300"
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
                className="block transition-all py-2 hover:text-gray-300"
              >
                <i className="lab la-facebook-f"></i>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-300"
              >
                <i className="lab la-linkedin"></i>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="block transition-all py-2 hover:text-gray-300"
              >
                <i className="lab la-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className='bg-white shadow-md px-10 py-8  flex justify-between items-center relative'>
        <div className="logo  top-100 flex gap-5 items-center absolute z-50">
          <Link href='/' className='shadow-lg bg-white px-5 py-3 rounded flex items-center justify-center'>
            <img src="/univa-logo.png" className='h-24' alt="" />
          </Link>
          <Link href='/' className="infowrapper">

            <h3 className="title text-xl font-bold">
              Univa Education Consultancy
            </h3>
            <span className="text-black">Your Pathway to succeed</span>
          </Link>
        </div>
        <div className="left"></div>
        <ul className='flex gap-5'>
          <li>
            <Link href='/' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              About
            </Link>
          </li>
          <li>
            <Link href='/listing' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              Working Visa
            </Link>
          </li><li>
            <Link href='/' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              Study Visa
            </Link>
          </li><li>
            <Link href='/news-and-events' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              News and Events
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-red-700 transition-all py-8 hover:border-b-[2px] border-b-[2px] hover:border-red-700 border-transparent'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='https://univa.vercel.app/' target='_blank' className=' px-5 py-3 transition-all rounded text-white bg-red-700 hover:bg-red-500 border-red-700'>
              Test Online Exam
            </Link>
          </li>
        </ul>

      </nav>

    </header>
  );
};

export default Header;
