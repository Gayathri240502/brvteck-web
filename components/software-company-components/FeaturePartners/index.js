import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "/public/images/clients/client_logo_1.webp";
import pimg2 from "/public/images/clients/client_logo_2.webp";
import pimg3 from "/public/images/clients/client_logo_3.webp";
import pimg4 from "/public/images/clients/client_logo_4.webp";
import pimg5 from "/public/images/clients/client_logo_5.webp";
import pimg6 from "/public/images/clients/client_logo_6.webp";
import pimg7 from "/public/images/clients/client_logo_7.webp";
import Image from "next/image";

const partners = [
  { pImg: "/img/partners/27.png" },
  { pImg: "/img/partners/26.png" },
  { pImg: "/img/partners/19.jpg" },
  { pImg: "/img/partners/20.png" },
  { pImg: "/img/partners/21.jpg" },
  { pImg: "/img/partners/22.jpg" },
  { pImg: "/img/partners/23.jpg" },
  { pImg: "/img/partners/24.png" },
  { pImg: "/img/partners/25.png" },
  { pImg: "/img/partners/1.jpg" },
  { pImg: "/img/partners/2.jpg" },
  { pImg: "/img/partners/3.jpg" },
  { pImg: "/img/partners/4.jpg" },
  { pImg: "/img/partners/5.jpg" },
  { pImg: "/img/partners/6.jpg" },
  { pImg: "/img/partners/7.jpg" },
  { pImg: "/img/partners/8.jpg" },
  { pImg: "/img/partners/9.jpg" },
  { pImg: "/img/partners/10.jpg" },
  { pImg: "/img/partners/11.jpg" },
  { pImg: "/img/partners/12.jpg" },
  { pImg: "/img/partners/14.jpg" },
  { pImg: "/img/partners/15.jpg" },
  { pImg: "/img/partners/16.jpg" },
  { pImg: "/img/partners/17.jpg" },
  { pImg: "/img/partners/18.jpg" },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturePartners = (props) => {
  return (
    <div className="feature_partners_section">
      <div className="container position-relative">
        <div className="title_text text-white">Our Featured Client's</div>
        <div className="client_logo_carousel">
          <Slider {...settings}>
            {partners.map((partner, pitem) => (
              <div className="client_logo_item" key={pitem}>
                <Image
                  src={partner.pImg}
                  alt="BRVTECK - Client Logo"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturePartners;
