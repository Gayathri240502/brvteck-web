import React from "react";
import Link from "next/link";
import Image from "next/image";

import circle2 from "/public/images/hero/circle_engine_2.webp";
import circle3 from "/public/images/hero/circle_engine_3.webp";
import circle4 from "/public/images/hero/circle_engine_4.webp";

import shape1 from "/public/images/hero/shape_image_1.webp";
import shape2 from "/public/images/hero/shape_image_2.webp";
import shape3 from "/public/images/hero/shape_image_3.webp";
import shape4 from "/public/images/hero/shape_image_4.webp";

const Hero2 = () => {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{
                  backgroundImage: `url("/images/shapes/shape_title_under_line.svg")`,
                }}
              >
                Trusted Technology Partner Since 2019
              </div>

              <h1 className="text-white">
                Custom <mark>Digital Solutions</mark> That Drive Business Growth
              </h1>

              <p className="text-white">
                BRVTECK helps startups and enterprises build scalable, secure,
                and high-performance digital solutions that improve efficiency,
                reduce operational costs, and accelerate growth.
              </p>

              <ul className="step_list text-white unordered_list_block">
                <li>AI-driven and cloud-ready enterprise solutions</li>
                <li>Custom software tailored to your business goals</li>
                <li>Proven experience across multiple industries</li>
              </ul>

              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/contact">
                    <span
                      className="btn_label"
                      data-text="Get a Free Consultation"
                    >
                      Get a Free Consultation
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
                      <small>Call Us</small>
                      <strong className="text-white">
                        +91-8062177256
                      </strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_2">
                <Image
                  src={circle2}
                  width={500}
                  height={500}
                  priority
                  alt="Technology Solutions"
                />
              </div>
              <div className="image_wrap_3">
                <Image src={circle3} alt="Digital Innovation" />
              </div>
              <div className="image_wrap_4">
                <Image src={circle4} alt="Enterprise Technology" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="shape_image_1">
        <Image src={shape1} alt="Shape" />
      </div>
      <div className="shape_image_2">
        <Image src={shape2} alt="Shape" />
      </div>
      <div className="shape_image_3">
        <Image src={shape3} alt="Shape" />
      </div>
      <div className="shape_image_4">
        <Image src={shape4} alt="Shape" />
      </div>
    </section>
  );
};

export default Hero2;
