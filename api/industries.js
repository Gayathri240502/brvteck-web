import React, { Fragment } from "react";

import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Cpu,
  CreditCard,
  Signal,
  Bot,
  Film,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

const Services = [
  {
    
    sImg: "/img/industry/health.png",
    title: "Healthcare",
    desc: "AI diagnostics, EHR & telehealth",
    icon: HeartPulse,
      path: "/industries/health-care",
  },
  {
     title: "Hi-End Engineering",
    desc: "Digital twins, IIoT & robotics",
    icon: Cpu,
    path: "/industries/hi-end-engineering",
    sImg: "/img/industry/end.png",
  },
  {
     title: "Banking",
    desc: "Core banking, open API, AML",
    icon: CreditCard,
    path: "/industries/banking-and-financial-services",
    sImg: "/img/industry/bank1.png",
  },
  {
   title: "Telecom",
    desc: "5G core, ORAN & edge",
    icon: Signal,
    path: "/industries/telecom",
    sImg: "/img/industry/tele.png",
  },
  {
    title: "Robotics",
    desc: "Autonomous systems & RPA",
    icon: Bot,
    sImg: "/img/industry/robo.png",
     path: "/industries/robotics",
  },
  {
     title: "Media & Tech",
    desc: "OTT, CDN & personalization",
    icon: Film,
    path: "/industries/media-and-technology",
    sImg: "/img/industry/med.png",
  },
  {
    title: "Insurance",
    desc: "Usage-based & AI claims",
    icon: ShieldCheck,
    path: "/industries/insurance",
    sImg: "/img/industry/ins.png",
  },
];

const Service = {
  title: "Industries",

};
const Industries = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      
      <main className="page_content service-single-page">
        {/* <PageTitle
          pageTitle={Service.title}
          pagesub="Analytics"
          pageTop="Data Engineering &"
        /> */}

       

        <section className="service_section section_space xb-hidden pb-0">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text">
                Our
                <span className="badge bg-secondary text-white ms-2">
                  Specialize
                </span>
              </div>
              <h2 className="heading_text mb-0">Industries</h2>
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
              height: 350px;
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
              pointer-events: none;
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
                height: 300px;
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
                    src="/img/services/dataengineer/d10.jpg"
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
                      Accelerating Your Business with Advanced AI
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck helps your business harness the power of
                      Accelerated Generative AI to automate processes, generate
                      insights, and unlock new growth opportunities. Our
                      solutions are designed to optimize your AI-driven
                      initiatives and provide a competitive edge in the market.
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

export default Industries;
