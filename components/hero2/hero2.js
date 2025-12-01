import React from "react";
import Link from "next/link";
import circle1 from "/public/images/hero/circle_engine_1.webp";
import circle2 from "/public/images/hero/circle_engine_2.webp";
import circle3 from "/public/images/hero/circle_engine_3.webp";
import circle4 from "/public/images/hero/circle_engine_4.webp";
import shape1 from "/public/images/hero/shape_image_1.webp";
import shape2 from "/public/images/hero/shape_image_2.webp";
import shape3 from "/public/images/hero/shape_image_3.webp";
import shape4 from "/public/images/hero/shape_image_4.webp";
import Image from "next/image";

const Hero2 = (props) => {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Empowering Innovation Since 2019
              </div>
              <h1 className="text-white">
                We Build <mark>Intelligent Solutions</mark> for Every Industry.
              </h1>
              <p>
                BRVTECK delivers cutting-edge IT solutions for enterprises and
                startups— specializing in AI & ML,IoT,
               Software Enterprise, SAP, DevOps, Cloud,
                Salesforce, Consulting, Technology, Data Engineering &
                Analytics, Workforce Management, Custom Embedded Solutions,
                Custom Software Development, Application Integration, IT
                Infrastructure and Networking,
              </p>
              <ul className="step_list text-white unordered_list_block">
                <li>AI & ML-powered enterprise solutions</li>
                <li> Helping Business , Manufacturers and Startups</li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/contact">
                    <span
                      className="btn_label"
                      data-text="Get Started with BRVTECK"
                    >
                      Get Started with BRVTECK
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hotline_block" href="tel:+918062177256">
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="hotline_content">
                      <small>CALL US</small>
                      <strong className="text-white">+91-8062177256</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <Image
                  src="/img/logo1.png"
                  alt="Engine"
                  width={80}
                  height={80}
                />
              </div>
              <div className="image_wrap_2">
                <Image src={circle2}
                width={500}
                height={500}
                  loading="eager" // ✅ disable lazy loading
              fetchPriority="high" // ✅ browser hint

               alt="Engine" />
              </div>
              <div className="image_wrap_3">
                <Image src={circle3} alt="Engine" />
              </div>
              <div className="image_wrap_4">
                <Image src={circle4} alt="Engine" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape_image_1">
        <Image src={shape1} alt="Engine" />
      </div>
      <div className="shape_image_2">
        <Image src={shape2} alt="Engine" />
      </div>
      <div className="shape_image_3">
        <Image src={shape3} alt="Engine" />
      </div>
      <div className="shape_image_4">
        <Image src={shape4} alt="Engine" />
      </div>
    </section>
  );
};

export default Hero2;
