import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import WhyUs from "@/pages/about/WhyUs";
import Image from "next/image";

const ServicePage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const Services = [
    {
      title: "Technology",
      href: "/service/technology",
      sImg: "/img/services/ai-ml/ai1.jpg",
    },
    {
      title: "Software Enterprise",
      href: "/service/software-enterprise",
      sImg: "/img/services/ai-ml/ai2.jpg",
    },
    {
      title: "Data Engineering & Analytics",
      href: "/service/data-engineering-analytics",
      sImg: "/img/services/dataengineer/d4.jpg",
    },
    {
      title: "Workforce Management",
      href: "/service/work-force-management",
      sImg: "/img/services/workforce/s16.jpg",
    },
    {
      title: "IT Infrastructure and Networking",
      href: "/service/it-infrastructure-and-networking",
      sImg: "/img/services/it.jpg",
    },
    {
      title: "Application Integration",
      href: "/service/application-integration",
      sImg: "/img/services/app/app.jpg",
    },
    {
      title: "Cloud Transformation",
      href: "/service/cloud",
      sImg: "/img/services/cloud/1.jpg",
    },
    {
      title: "Consulting Services",
      href: "/service/consulting",
      sImg: "/img/services/consulting/3.jpg",
    },
    {
      title: "DevOps Services",
      href: "/service/devops",
      sImg: "/img/services/devops/2.jpg",
    },
    {
      title: "Custom Software Development",
      href: "/service/custom-software-development",
      sImg: "/img/services/custom/2.jpg",
    },
    {
      title: "Custom Embedded Solutions",
      href: "/service/custom-embedded-solutions",
      sImg: "/img/services/embedded/4.jpg",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Our Services | BRVTeck</title>
        <meta
          name="description"
          content="Explore BRVTeck's wide range of services including AI, data engineering, DevOps, cloud transformation, and more to accelerate your digital journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="BRVTeck, IT Services, AI, DevOps, Cloud, Software Development, Data Engineering"
        />
        <meta name="author" content="BRVTeck" />
        <meta property="og:title" content="Our Services | BRVTeck" />
        <meta
          property="og:description"
          content="Explore our specialized IT solutions and services tailored for your business growth and efficiency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brvteck.com/service" />
        <meta
          property="og:image"
          content="https://brvteck.com/img/meta/services-banner.jpg"
        />
      </Head>

      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle="Our Services"
          pagesub="Services 😍"
          pageTop="Our Main"
        />

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
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="service_card h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0 transition-all">
                    <Link href={service.href} legacyBehavior>
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

        <div className="pt-130"></div>
        <WhyUs />
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicePage;
