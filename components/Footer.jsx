import Link from "next/link";
import React, { useEffect } from "react";
import { fetchSettings } from "../store/settings";

import { useDispatch, useSelector } from "react-redux";

const Footer = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  const settingsData = useSelector((state) => state.settingsSlice.data[0]);



  return (
    <>
      <div className="sm:px-3 md:px-10 bg-gray-900 text-white py-10">
        <div className="sm:block md:flex p-5 md:p-0  justify-between items-center sm:items-start">
          <div>
            <h3 className="title text-3xl mt-0">
              {settingsData?.acf.footer_title}
            </h3>
            <p className="text mt-4">
              {settingsData?.acf.footer_description}
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-red-600 mt-5 md:mt-0  shadow-lg hover:shadow-sm transition-all sm:mt-10 px-10 h-16 py-5 rounded flex items-center"
          >
            Send your Query <i className="las la-arrow-right ml-3"></i>
          </Link>
        </div>
      </div>
      <div className=" sm:px-5 md:px-10 bg-gray-800 py-10 text-slate-400">
        <div className="justify-between sm:block md:flex gap-16 p-5 md:p-0">
          <div className="item flex-[2]">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              {settingsData?.acf.website_title}
            </h3>
            <p className="info  text-sm text-slate-400 leading-loose mt-5">
              {settingsData?.acf.footer_about}

            </p>
          </div>
          <div className="item flex-[1]">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Contact us:
            </h3>
            <ul className="text-sm mt-6">
              <li className="my-3">
                <i className="las la-map"></i>
                <span>

                  {settingsData?.acf.company_address}

                </span>
              </li>
              <li className="my-3">
                <Link href={`mailto:${settingsData?.acf.company_email}`}>
                  <i className="las la-envelope"></i>
                  {settingsData?.acf.company_email}
                  <span></span>
                </Link>
              </li>
              <li className="my-3">
                <Link href="tel:+977-01-5319152">
                  <i className="las la-phone"></i> <span>
                    {settingsData?.acf.company_contact_1}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item flex-[1]">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Explore
            </h3>
            <ul className="text-sm mt-6">
              <li className="my-3">
                <Link href="/about">
                  <i className="las la-arrow-right mr-2"></i>
                  <span className="hover:ml-1 transition-all hover:text-white">
                    About us
                  </span>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/news-and-events">
                  <i className="las la-arrow-right mr-2"></i>
                  <span className="hover:ml-1 transition-all hover:text-white">
                    News and Events
                  </span>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/#interest">
                  <i className="las la-arrow-right mr-2"></i>
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Services
                  </span>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/blog">
                  <i className="las la-arrow-right mr-2"></i>
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Read Our Blog
                  </span>
                </Link>
              </li>
              <li className="my-3">
                <Link href="/contact">
                  <i className="las la-arrow-right mr-2"></i>
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item flex-[2]">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Follow us:
            </h3>
            <ul className="mt-5 text-2xl flex gap-4">
              <li>
                <Link href="https://www.facebook.com/univanepal">
                  <i className="lab la-facebook"></i>
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/company/univa-education-consultancy/?viewAsMember=true">
                  <i className="lab la-linkedin"></i>
                </Link>
              </li>

              <li>
                <Link href="mailto:info@uacktm.com">
                  <i className="las la-envelope"></i>
                </Link>
              </li>
            </ul>
            {/* <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Subscribe our Newsletter
            </h3> */}
            {/* <form action="" className="flex mt-5">
              <input
                type="text"
                placeholder="Enter Email"
                className="px-3 border-0 bg-gray-700 w-56 text-white py-2 focus:outline-none"
              />
              <button className="btn px-3 py-2 bg-gray-900 w-32">
                Subscribe <i className="las la-arrow-right"></i>
              </button>
            </form> */}
          </div>
        </div>
      </div>
      <div className="md:px-10 p-5 text-sm sm:px-3 bg-gray-900 py-3 text-slate-400">
        <div className="sm:block md:flex justify-between sm:flex-col md:flex-row">
          <div className="item">
            &copy; Univa Educational Consultants, {new Date().getFullYear()},
            All rights reserved.
          </div>
          <div className="item mt-5 md:mt-0">
            <ul className="md:flex sm:block  gap-5">
              <li>
                <Link href="#" className="">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="item mt-5 md:mt-0">
            Designed by <Link href="#">Hari</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
