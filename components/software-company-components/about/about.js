import React from "react";
import Link from "next/link";
import Image from "next/image";
import aIcon4 from "/public/images/icons/icon_global.svg";
import aIcon5 from "/public/images/shapes/shape_line.webp";
import shape1 from "/public/images/shapes/shape_space_2.svg";

const About = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="about_and_case_section section_space section_decoration bg-dark"
      style={{
        backgroundImage: `url(${"/images/backgrounds/bg_image_2.webp"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <Image
                  src="/img/logo1.png"
                  alt="Brvteck - About"
                  width={100}
                  height={100}
                />
              </div>
              <div
                className="about_funfact_info"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_bg_1.webp"})`,
                }}
              >
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <Image
                        src="/img/About/p1.png"
                        height={100}
                        width={100}
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <Image
                        src="/img/About/p2.png"
                        height={100}
                        width={100}
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <Image
                        src="/img/About/p3.png"
                        height={100}
                        width={100}
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">Happy Customer</p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="6">
                        20
                      </span>
                      <span>+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="100">
                        100
                      </span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <a className="btn btn-primary" href="/about">
                    <span className="btn_label" data-text="Learn more about us">Learn more </span>

                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <Image src={aIcon4} alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <Image src={aIcon5} alt="Shape Line" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  About Us
                </div>
                <h2 className="heading_text">
                  BRVTECK <mark>Mission & Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  At BRVTECK, our mission is to empower businesses through
                  innovative software solutions that streamline operations,
                  foster growth, and drive success. With a commitment to
                  excellence and customer satisfaction we strive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{
                backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
              }}
            >
              Products
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Products</mark>
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {[
              {
                title: "AI-HIMS",
                sub: "Healthcare",
                description:
                  "Explore our AI-Digital Hospital Management System, designed to simplify and enhance healthcare operations. Experience real-time insights, improved workflows, and better patient engagement.",
                Industry: "Healthcare",
                pImg: "/img/products/hms4.jpg",
              },
              {
                title: "AI-LMS",
                sub: "Learning",
                description:
                  "Unlock the full potential of your business with our intelligent ERP platform. Automate workflows, optimize resources, and drive growth with actionable insights.",
                Industry: "Corporate",
                pImg: "/img/products/erp1.jpg",
              },
              {
                title: "AI-CRM",
                sub: "Customer Relationship",
                description:
                  "Streamline HR with automation—from payroll to performance tracking. Empower employees and boost efficiency through smart workforce management.",
                Industry: "HR",
                pImg: "/img/products/hrms2.jpg",
              },
            ].map((project, prj) => (
              <div className="case_study_block" key={prj}>
                <div
                  className="case_study_image"
                  style={{ marginRight: "20px" }}
                >
                  <Image
                    src={project.pImg}
                    width={700}
                    height={460}
                    alt={`${project.title} Image`}
                  />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    <li>
                      <a href="/products">{project.sub}</a>
                    </li>
                  </ul>
                  <h3 className="case_title">
                    <Link onClick={ClickHandler} href="/products">
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                  <ul className="icon_list unordered_list">
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Industry:</strong>{" "}
                        {project.Industry}
                      </span>
                    </li>
                  </ul>
                  <Link
                    onClick={ClickHandler}
                    href="/products"
                    className="btn btn-primary"
                  >
                    <span className="btn_label" data-text="Read More">
                      Read More
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="btns_group pb-0">
            <Link
              onClick={ClickHandler}
              href="/products"
              className="btn btn-primary"
            >
              <span className="btn_label" data-text="View More Cases Study">
                View More Cases Study
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image src={shape1} alt="Techco Shape" />
      </div>

      {/* Responsive Mobile Adjustment */}
      <style jsx>{`
  @media (max-width: 768px) {
    .about_funfact_info {
      transform: translateX(-10px);
      width: calc(100% - 20px);
      margin-left: auto;
      margin-right: auto;
      padding: 20px 15px !important;
    }
  }
`}</style>

    </section>
  );
};

export default About;
