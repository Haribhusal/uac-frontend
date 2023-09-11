import React, { Component } from "react";
import Slider from "react-slick";
import BlurImage from "./../components/BlurImage";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="item">
          <Image src={"/career-counselling.jpg"} height={600} width={1000} />
        </div>
        <div className="item">
          <Image src={"/language-classes.jpg"} height={600} width={1000} />
        </div>
        <div className="item">
          <Image src={"/abroad-study.jpg"} height={600} width={1000} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
