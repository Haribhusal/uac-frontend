import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" sm:px-3 md:px-10 bg-red-700 text-white py-16">
        <div className="flex md:flex-row sm:flex-col justify-between items-center sm:items-start">
          <div>
            <h3 className="title text-3xl">
              Are you planning to study abroad?
            </h3>
            <p className="text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              ut!
            </p>
          </div>
          <a
            href="#"
            className="bg-red-600 shadow-lg hover:shadow-sm transition-all sm:mt-5 md:mt-0 px-10 h-16 py-5 rounded flex items-center"
          >
            Send your Query <i className="las la-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
      <div className=" sm:px-5 md:px-10 bg-gray-800 py-10 text-slate-400">
        <div className="flex justify-between sm:flex-col md:flex-row">
          <div className="item pr-5">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Univa Education Consultants
            </h3>
            <p className="info md:w-72 sm:w-full  text-sm text-slate-400 leading-5 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quas aspernatur delectus consequuntur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque, voluptatem?
            </p>
          </div>
          <div className="item md:px-5 sm:px-0 ">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Contact us:
            </h3>
            <ul className="text-sm mt-6">
              <li className="my-3">
                <i className="las la-map"></i>{" "}
                <span>New Baneshwor, Kathmandu</span>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-envelope"></i>{" "}
                  <span>info@uacktm.com</span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-phone"></i> <span>+977-98XXXXXXXX</span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-calendar"></i>{" "}
                  <span>Business Hours: 9AM-5PM</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="item md:px-5 sm:px-0 ">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Explore
            </h3>
            <ul className="text-sm mt-6">
              <li className="my-3">
                <a href="#">
                  <i className="las la-arrow-right mr-2"></i>{" "}
                  <span className="hover:ml-1 transition-all hover:text-white">
                    About us
                  </span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-arrow-right mr-2"></i>{" "}
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Get listed with us
                  </span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-arrow-right mr-2"></i>{" "}
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Why Univa
                  </span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-arrow-right mr-2"></i>{" "}
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Our Solutions
                  </span>
                </a>
              </li>
              <li className="my-3">
                <a href="#">
                  <i className="las la-arrow-right mr-2"></i>{" "}
                  <span className="hover:ml-1 transition-all hover:text-white">
                    Contact Us
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="item md:px-5 sm:px-0 ">
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Follow us:
            </h3>
            <ul className="mt-5 text-2xl flex gap-4">
              <li>
                <a href="#">
                  <i className="lab la-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lab la-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lab la-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lab la-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="las la-envelope"></i>
                </a>
              </li>
            </ul>
            <h3 className="title mt-5 text-xl font-bold text-slate-100">
              Subscribe our Newsletter
            </h3>
            <form action="" className="flex mt-5">
              <input
                type="text"
                placeholder="Enter Email"
                className="px-3 bg-gray-700 text-white w-full py-2 focus:outline-none"
              />
              <button className="btn px-3 py-2 bg-red-900 w-48">
                Subscribe <i className="las la-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="md:px-10 sm:px-3 bg-gray-900 py-3 text-slate-400">
        <div className="flex justify-between sm:flex-col md:flex-row">
          <div className="item">
            &copy; Univa Educational Consultants, {new Date().getFullYear()},
            All rights reserved.
          </div>
          <div className="item">
            <ul className="flex gap-5 sm:flex-col md:flex-row">
              <li>
                <a href="#" className="">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            Designed by <a href="#">Hari</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
