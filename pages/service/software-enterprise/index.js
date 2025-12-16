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
    title: "Cloud Integration",
    path: "/service/software-enterprise/cloud-integration",
    sImg: "/img/services/softwareenterprise/s1.jpg",
  },
  {
    title: "CRM Systems",
    path: "/service/software-enterprise/crm-systems",
    sImg: "/img/services/softwareenterprise/s5.jpg",
  },
  {
    title: "ERP Solutions",
    path: "/service/software-enterprise/erp-solutions",
    sImg: "/img/services/softwareenterprise/s7.jpg",
  },
  {
    title: "Custom Applications",
    path: "/service/software-enterprise/custom-application",
    sImg: "/img/services/softwareenterprise/s10.jpg",
  },
];

const Service = {
  title: "Enterprise Software",
  description: `Empower your business with cutting-edge enterprise software solutions tailored to your needs. Our services streamline operations, improve collaboration, and drive innovation across departments.`,
  images: ["/img/services/softwareenterprise/s8.jpg"],
};

const SoftwareEnterprisePage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>
        <title>Enterprise Software Solutions | Brvteck</title>
        <meta
          name="description"
          content="Brvteck delivers scalable enterprise software solutions including CRM, ERP, cloud integration, and custom applications to streamline operations and drive innovation."
        />
        <meta
          name="keywords"
          content="Enterprise Software, CRM, ERP, Cloud Integration, Custom Applications, Brvteck, Business Solutions"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="Enterprise Software Solutions | Brvteck"
        />
        <meta
          property="og:description"
          content="Empower your business with Brvteck's enterprise software services: CRM, ERP, cloud, and custom solutions for growth and efficiency."
        />
        <meta
          property="og:image"
          content="/img/services/softwareenterprise/s8.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/software-enterprise"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Enterprise Software Solutions | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Streamline operations and drive innovation with Brvteck's enterprise software solutions."
        />
        <meta
          name="twitter:image"
          content="/img/services/softwareenterprise/s8.jpg"
        />
        <link
          rel="canonical"
          href="https://www.brvteck.com/service/software-enterprise"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle={Service.title}
          pagesub="Solutions"
          pageTop="Enterprise"
        />

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative mb-4">
              <Image
                src={Service.images[0]}
                alt="Enterprise Software"
                width={2100}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <ul>
              <li>
                <strong>Cloud Integration:</strong> Seamlessly connect systems
                and boost scalability through cloud-powered infrastructure.
              </li>
              <li>
                <strong>CRM Systems:</strong> Improve customer engagement and
                manage relationships effectively with tailored CRM tools.
              </li>
              <li>
                <strong>ERP Solutions:</strong> Automate and streamline your
                business processes with robust ERP implementations.
              </li>
              <li>
                <strong>Custom Applications:</strong> Build solutions uniquely
                designed for your business workflows and goals.
              </li>
            </ul>
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
                    src="/img/services/softwareenterprise/s1.jpg"
                    alt="Enterprise Why Choose Us"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Why
                      <span className="badge bg-secondary text-white ms-2">
                        Choose Us 🔍
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Empowering Enterprises with Scalable Software Solutions
                    </h2>
                    <p className="heading_description mb-0">
                      At Brvteck, we deliver end-to-end software enterprise
                      solutions — from CRM to ERP and cloud — helping
                      organizations modernize infrastructure, improve customer
                      experiences, and scale operations efficiently. Our team
                      blends technical expertise with deep business
                      understanding to ensure every solution delivers maximum
                      ROI and long-term value.
                    </p>
                  </div>
                  <Link href="/contact" className="btn" onClick={ClickHandler}>
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

export default SoftwareEnterprisePage;
