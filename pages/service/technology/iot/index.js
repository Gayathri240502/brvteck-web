import React, { Fragment } from "react";

import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Services = [
  {
    title: "Device Integration",
    path: "/service/technology/iot/device-integration",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/iot/i3.jpg",
  },
  {
    title: "Sensor Networks",
    path: "/service/technology/iot/sensor-networks",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/iot/i6.jpg",
  },
  {
    title: "Data Monitoring",
    path: "/service/technology/iot/data-monitoring",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/iot/i4.jpg",
  },
  {
    title: "IOT Security",
    path: "/service/technology/iot/iot-security",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/iot/i11.jpg",
  },
];

const Service = {
  title: "Internet Of Things",
  description: `Employ cutting-edge methodologies and advanced technologies to deliver bespoke, best-in-class IoT security strategies across your connected ecosystem.`,
  images: ["/img/services/iot/i1.jpg"],
};
const IOT = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | IOT</title>
<meta
  name="description"
  content="Explore BRVTeck's IoT services, including device integration, sensor networks, data monitoring, and IoT security solutions. Enhance operational efficiency and security with our comprehensive IoT offerings."
/>
<meta
  name="keywords"
  content="IoT device integration, sensor networks, data monitoring, IoT security, BRVTeck, Internet of Things services, smart solutions, connected devices"
/>
<meta name="author" content="BRVTeck" />

<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/services/technology/iot"
/>
<meta
  property="og:title"
  content="IoT | BRVTeck"
/>
<meta
  property="og:description"
  content="Unlock the potential of IoT with BRVTeck's services. From device integration and sensor networks to data monitoring and robust IoT security, we provide end-to-end solutions to transform your business."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/services/technology/iot"
/>
<meta
  property="twitter:title"
  content="IoT | BRVTeck"
/>
<meta
  property="twitter:description"
  content="Empower your business with BRVTeck's IoT services, including device integration, sensor networks, data monitoring, and IoT security solutions."
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
          pagesub="Services"
          pageTop="Interrnet Of Things"
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
              Establish end-to-end IoT threat pipelines and security analytics that ingest and normalize device telemetry into actionable intelligence—powering swift, precise, and scalable threat defense.
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
                <div className="col-lg-6 col-md-7 col-12" key={index}>
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
                          className="img-fluid w-100 h-100 service_image"
                          style={{
                            height: "500px", // Increased from 400px to 500px
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
                      Accelerating Your Business with IOT Solutions
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck Empower your organization to harness state-of-the-art IoT technologies—automating sensor data ingestion, streamlining device provisioning, and unlocking proactive lifecycle management capabilities.
Our tailored IoT solutions optimize edge-to-cloud workflows and fortify your network against connectivity and security risks, delivering the resilience and reliability you need to thrive.
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

export default IOT;
