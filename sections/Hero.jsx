import Image from "next/image";
import Link from "next/link";
import React from "react";
import LatestUpdate from "../components/LatestUpdate";
import ImageSlider from "./../components/ImageSlider";

const Hero = () => {
  return (
    <section className="hero block md:flex items-stretch">
      <div className="imagebanner w-full md:w-[60%] fitImage">
        <ImageSlider />
      </div>
      <LatestUpdate />
    </section>
  );
};

export default Hero;
