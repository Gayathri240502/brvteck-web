import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";

import Image from "next/image";
import Link from "next/link";

const Services = [
  {
    title: "AI & ML",
    path: "/service/technology/ai-&-ml",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/ai-ml/ai2.jpg",
  },
  {
    title: "IoT",
    path: "/service/technology/iot",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/iot/i1.jpg",
  },
  {
    title: "SAP Solutions",
    path: "/service/technology/sap",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/sap/s1.jpg",
  },
  {
    title: "Big Data Solutions",
    path: "/service/technology/big-data",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/big1.jpg",
  },
  {
    title: " Management",
    path: "/service/technology/block-chain-management",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/blockchain/b1.jpg",
  },
  {
    title: "Cybersecurity",
    path: "/service/technology/cyber-security",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/cybersecurity/s1.jpg",
  },
  {
    title: "Salesforce",
    path: "/service/technology/salesforce",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/salesforce/1.jpg",
  },
  {
    title: "Snowflake",
    path: "/service/technology/snowflake",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/it.jpg",
  },
  {
    title: "Mobile App Development",
    path: "/service/technology/mobile-app-development",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/mobile/mobile.png",
  },
];

const Service = {
  title: "Technology",
  description: ` Empower your organization with cutting-edge AI & ML, IoT, SAP, Big Data,Cybersecurity, Salesforce, and Snowflake solutions for data-driven decision making and seamless digital transformation. Partner with BRVTeck to unlock scalable analytics, secure systems, and intelligent automation across your enterprise.`,
  images: ["/img/services/it2.jpg"],
};
const Technology = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | Technology </title>
        <meta
          name="description"
          content="Explore BRVTeck' comprehensive technology services, including SAP solutions, cybersecurity, Salesforce integration, IoT, AI/ML, and Snowflake data platforms. Empower your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="SAP solutions, cybersecurity, Salesforce, IoT, AI, machine learning, Snowflake, BRVTeck, technology services, digital transformation"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/services/technology"
        />
        <meta
          property="og:title"
          content="BRVTeck | SAP, Cybersecurity, Salesforce, IoT, AI/ML & Snowflake Solutions"
        />
        <meta
          property="og:description"
          content="Unlock business potential with BRV Technologies' technology services. From SAP solutions and cybersecurity to Salesforce integration, IoT, AI/ML, and Snowflake data platforms, we deliver innovative solutions tailored to your needs."
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/services/technology"
        />
        <meta
          property="twitter:title"
          content="BRVTeck | SAP, Cybersecurity, Salesforce,IoT, AI/ML & Snowflake Solutions"
        />
        <meta
          property="twitter:description"
          content="Empower your business with BRV Technologies' expertise in SAP solutions, cybersecurity, Salesforce integration,  IoT, AI/ML, and Snowflake data platforms."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="sales@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle={Service.title}
          pagesub="Technology"
          pageTop="Our"
        />

        {/* Service Description Section */}
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative mb-4">
              <Image
                src={Service.images[0]}
                alt="Service Details"
                width={2100}
                height={400}
                style={{ width: "1600px", height: "500px" }}
              />
            </div>

            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p>
              Leverage cutting-edge AI & ML, IoT, SAP, Big Data, 
              Cybersecurity, Salesforce, and Snowflake solutions to transform
              data into actionable insights and drive scalable digital
              transformation across your enterprise.
            </p>

            <div className="row">
              {Service.images.slice(1).map((img, idx) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  key={`image-${idx}`}
                >
                  <div className="details_item_image m-0">
                    <Image
                      src={img}
                      alt={`Service Image ${idx + 2}`}
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service_section section_space xb-hidden pb-0">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text">
                Our
                <span className="badge bg-secondary text-white ms-2">
                  Specialize
                </span>
              </div>
              <h2 className="heading_text mb-0">Featured Services</h2>
            </div>

            <div className="row mt-5 g-4">
              {Services.map((service, index) => (
                <div className="col-lg-4 col-md-7 col-12" key={index}>
                  <div className="service_card h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0 transition-all">
                    {/* Clickable Service Image with Overlay */}
                    <Link href={service.path} legacyBehavior>
                      <a
                        className="service_image_wrapper position-relative d-block text-decoration-none"
                        onClick={ClickHandler}
                      >
                        <Image
                          src={service.sImg}
                          alt={service.title}
                          width={500}
                          height={500}
                          className="img-fluid w-100 service_image"
                          style={{
                            height: "350px",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="image_overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4">
                          <div className="overlay_gradient position-absolute top-0 start-0 w-100 h-100"></div>
                          <div className="service_content_overlay position-relative z-2 w-100">
                            <h3 className="service_title text-white fs-4 fw-bold mb-3 lh-sm">
                              {service.title}
                            </h3>
                            <div className="service_actions d-flex justify-content-start">
                              <div
                                className="icon_link bg-white rounded-circle p-2 text-dark text-decoration-none d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px" }}
                              >
                                <i className="fa-regular fa-arrow-up-right fs-6"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            .service_card {
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .service_card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
            }

            .service_card:hover .service_image {
              transform: scale(1.05);
            }

            .service_image_wrapper {
              height: 350px; /* Increased from 280px to 350px */
              overflow: hidden;
              cursor: pointer;
            }

            .overlay_gradient {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.3) 40%,
                rgba(0, 0, 0, 0.7) 100%
              );
            }

            .service_card:hover .overlay_gradient {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.1) 0%,
                rgba(0, 0, 0, 0.4) 40%,
                rgba(0, 0, 0, 0.8) 100%
              );
            }

            .btn-light {
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .btn-light:hover {
              background-color: rgba(255, 255, 255, 0.9) !important;
              transform: translateY(-1px);
            }

            .icon_link {
              transition: all 0.3s ease;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
              pointer-events: none; /* Prevents double-click since parent is already clickable */
            }

            .service_card:hover .icon_link {
              background-color: rgba(255, 255, 255, 0.9) !important;
              transform: scale(1.1);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            }

            .service_title {
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
              line-height: 1.2;
            }

            .transition-all {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            @media (max-width: 768px) {
              .service_card {
                margin-bottom: 1.5rem;
              }

              .service_image_wrapper {
                height: 300px; /* Increased from 240px to 300px for mobile */
              }

              .service_title {
                font-size: 1.1rem !important;
              }
            }
          `}</style>
                
        </section>

        <section className="about_section section_space bg-light mt-4">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/img/services/cybersecurity/s1.jpg"
                    alt="Service Cartoon"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-lg-5 ">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Why
                      <span className="badge bg-secondary text-white ms-2">
                        Choose us 🙂
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Accelerating Your Business with Comprehensive Technology
                      Solutions
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck empowers enterprises through AI & ML, IoT, SAP,
                      Big Data, Cybersecurity, Salesforce, and
                      Snowflake—driving intelligent automation, secure data
                      insights, and scalable transformation. Our integrated
                      solutions harness advanced analytics and cloud-native
                      architectures to boost operational efficiency, enhance
                      decision-making, and secure your digital future.
                    </p>
                  </div>
                  <Link href="/service" className="btn" onClick={ClickHandler}>
                    <span className="btn_label" data-text="Talk to an Expert">
                      Talk to an Expert
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Technology;
