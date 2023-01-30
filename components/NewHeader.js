import { useState, useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { fetchServices } from "../store/services";
import { fetchUserInterests } from "../store/userInterests";

import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";


const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchUserInterests());

  }, [dispatch]);
  const userInterestsData = useSelector((state) => state.userInterestsSlice.data);
  console.log('userInterestsData', userInterestsData)
  const servicesData = useSelector((state) => state.servicesSlice.data);
  const servicesFetchStatus = useSelector((state) => state.servicesSlice.status);
  console.log('servicesData', servicesData)


  return (
    <>
      <div className="  bg-red-900 text-slate-200 sm:block md:flex justify-center gap-10 text-sm">
        <ul className="sm:block md:flex gap-5 items-center">
          <li className="flex items-center gap-2">
            <a
              href="https://www.google.com/maps/place/University+Academic+Center+Pvt.+Ltd./@27.7032309,85.3201739,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19a9bde1a17f:0x57da6340fa7a7a05!8m2!3d27.7032323!4d85.3223627"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-map"></i> Adwait Marg, Putalisadak, Kathmandu
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="mailto:info@uacktm.com"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-envelope"></i> info@uacktm.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="tel:+977-01-5319152"
              className="block transition-all py-2 hover:text-gray-200"
            >
              <i className="las la-phone"></i> 01-5319152
            </a>
          </li>
        </ul>
      </div>
      <Popover className="relative bg-white text-gray-800 shadow-md">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between  md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center gap-5 relative">
                <Image
                  className="sm:h-12  w-auto  md:h-24 bg-white shadow-md left-0 p-3 -translate-x-1/2 absolute z-10 rounded-md"
                  src="/univa-logo.png"
                  alt="logo"
                  height={200}
                  width={200}
                />
                <span className="pl-16 sm:text-base md:text-base font-normal text-gray-800 leading-tight">
                  Univa Education <br /> Consultancy
                </span>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                href="/"
                className="text-base font-medium text-gray-800 hover:text-red-700 py-6"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-800 hover:text-red-700 py-6"
              >
                About Univa
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-800" : "text-gray-800",
                        "group inline-flex items-center rounded-md text-base font-medium hover:text-red-600 focus:outline-none "
                      )}
                    >
                      <span className="py-6">Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-800" : "text-gray-600",
                          "ml-2 h-5 w-5 group-hover:text-red-700"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 -ml-4 mt-0 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {servicesData.map((item) => (
                              <div
                                key={item.id}

                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <i className="las la-briefcase bg-red-100 p-2 rounded-md text-2xl text-red-600"></i>
                                <div className="ml-4">
                                  <p className="text-xl  text-red-700 font-bold mb-3">
                                    {item.title.rendered}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {ReactHtmlParser(item.excerpt.rendered)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


              <Link
                href="/news-and-events"
                className="text-base font-medium text-gray-800 hover:text-red-700 py-6"
              >
                News and Events
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-800" : "text-gray-600",
                        "group inline-flex items-center rounded-md text-base focus:ring-0 font-medium focus:outline-none hover:text-gray-600"
                      )}
                    >
                      <span className="py-6">Study/Work</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-800" : "text-gray-600",
                          "ml-2 h-5 w-5 group-hover:text-gray-600"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-20 mt-0 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid bg-white p-5">
                            {userInterestsData.map((item) => (
                              <Link href={`/interested/${item.slug}`}>
                                <article className="wrapper flex gap-5 bg-white rounded-md group hover:bg-red-100 px-5 py-3 items-start transition-all">
                                  <i className="las la-briefcase  transition-all bg-red-100 text-red-900 p-3 rounded-md items-center group-hover:bg-red-900 group-hover:text-white"></i>
                                  <div className="info">

                                  <h1 className=" font-bold text-red-900">{item.title.rendered}</h1>
                                  <p className="text-slate-500 text-sm">{ReactHtmlParser(item.excerpt.rendered.slice(0, 80))}</p>
                                  </div>
                                </article>
                              </Link>
                            ))}
                            {/* {userInterestsData.map((item) => (
                              <a
                                key={item.id}
                                href={`/interested/${item.slug}`}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.title.rendered}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.excerpt.rendered}
                                  </p>
                                </div>
                              </a>
                            ))} */}
                          </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                href="/contact"
                className="whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-600"
              >
                Contact Us
              </Link>
              <a
                href="https://univa.vercel.app/"
                className=" bg-red-100 text-red-700 transition-all ml-8  px-7 py-3 text-base font-medium"
              >
                Online Exam
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 z-30 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="/univa-logo.png"
                      alt="Your Company"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {/* {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
