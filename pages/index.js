import Head from "next/head";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Interested from "../sections/Interested";
import Blog from "../sections/Blog";
import Services from "../sections/Services";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchSettings} from "./../store/settings";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);
  const settingsData = useSelector((state) => state.settingsSlice.data[0]);
  console.log("settingsData", settingsData);

  return (
    <>
      <Head>
        <title>Univa Education Consultancy | Putalisadak Kathmandu</title>
        <meta
          name="description"
          content="Work in Korea, Study in Korea, Work in Japan, Work in Japan, Work in Malta, Study aboroad, educational consultancy in kathmandu, consultancy in putalisadak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/univa-logo.png" />
      </Head>
      <Hero />
      <Services />
      <About settingsData={settingsData} />
      <Interested />
      <Blog />
    </>
  );
}
