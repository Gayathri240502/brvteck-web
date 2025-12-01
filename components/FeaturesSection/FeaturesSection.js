import React from "react";
import PartnerSection from "../PartnerSection";
import CountUp from "react-countup";
import sIcon1 from "/public/images/icons/icon_head.svg";
import sIcon2 from "/public/images/icons/icon_check.svg";
import sIcon3 from "/public/images/icons/icon_like.svg";
import sIcon4 from "/public/images/icons/icon_dart_board.svg";
import Image from "next/image";

const FunFact = [
  {
    title: "63",
    subTitle: "Team Members",
    symbol: "+",
    icon: sIcon1,
  },
  {
    title: "40",
    subTitle: "Global Happy Clients",
    symbol: "+",
    icon: sIcon2,
  },
  {
    title: "20",
    subTitle: "Project Completed",
    symbol: "+",
    icon: sIcon3,
  },
  {
    title: "100",
    subTitle: "Results Guaranteed",
    symbol: "%",
    icon: sIcon4,
  },
];

const FeaturesSection = (props) => {
  return (
    <section
      className="client_logo_section section_space"
      style={{ backgroundImage: `url(${"/images/shapes/bg_pattern_1.svg"})` }}
    >
      <div className="container">
        <div className="section_space pt-0">
          <div className="heading_block text-center">
            <div className="heading_focus_text mb-0">
              <span className="badge bg-secondary text-white">Brand We</span>
              Work With
            </div>
          </div>
          <PartnerSection />
        </div>

        <div className="row funfact_wrapper">
          <div className="col-lg-8">
            <div className="row">
              {FunFact.map((funfact, fitem) => (
                <div className="col-md-6" key={fitem}>
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <Image src={funfact.icon} alt="Techco - SVG Icon Head" />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count="25">
                          <CountUp end={funfact.title} enableScrollSpy />
                        </span>
                        <span>{funfact.symbol}</span>
                      </div>
                      <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="our_world_employees">
              <div className="image_wrap">
                <Image
                  src="/img/About/aboutus2.jpg"
                  alt="BrvTeck - About"
                  width={1648}
                  height={2496}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
