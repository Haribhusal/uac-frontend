import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchServices } from "../store/services";
import { fetchUserInterests } from "../store/userInterests";
import { fetchSettings } from "../store/settings";

import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchSettings());
    dispatch(fetchUserInterests());
  }, [dispatch]);

  const settingsData = useSelector((state) => state.settingsSlice.data[0]);

  const userInterestsData = useSelector(
    (state) => state.userInterestsSlice.data
  );
  const servicesData = useSelector((state) => state.servicesSlice.data);
  const servicesFetchStatus = useSelector(
    (state) => state.servicesSlice.status
  );

  return (
    <>
      <div className="  bg-red-900 text-slate-200 sm:block md:flex justify-center p-5 md:p-0 gap-10 text-sm">
        <ul className="sm:block md:flex gap-5 items-center">
          <li className="flex items-center gap-2">
            <a
              href="https://www.google.com/maps/place/University+Academic+Center+Pvt.+Ltd./@27.7032309,85.3201739,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19a9bde1a17f:0x57da6340fa7a7a05!8m2!3d27.7032323!4d85.3223627"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-map"></i> {settingsData?.acf.company_address}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="mailto:info@uacktm.com"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-envelope"></i>{" "}
              {settingsData?.acf.company_email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="tel:+977-01-5319152"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-phone"></i>{" "}
              {settingsData?.acf.company_contact_1}
            </a>
          </li>
        </ul>
      </div>
      <nav className="bg-white px-2 sm:px-10 py-2.5 dark:bg-gray-900 sticky  w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/univa-logo.png"
              className="h-9 w-9 mr-3 sm:h-9 sm:w-9"
              alt="Flowbite Logo"
              height={300}

              width={300}
            />
            <span className="self-center text-xl leading-tight font-semibold whitespace-nowrap dark:text-white">
              UAC
            </span>
          </Link>
          <div className="flex md:order-2 items-center">
            <Link href='https://univa.vercel.app/' target='_blank'>
              <button
                type="button"
                className="text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Online Exam
              </button>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center bg-red-100 text-red-700 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className={`las la-bars text-3xl  ${open ? 'la-times' : ''}`}></i>
            </button>
          </div>
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${open ? "visible" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#interest"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/news-and-events"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News and Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={()=>setOpen(!open)}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
