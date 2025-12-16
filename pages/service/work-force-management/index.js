import React, { Fragment } from "react";
import Head from "next/head";

import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";

import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────
   ▸ Featured service cards
────────────────────────────────────────── */
const Services = [
  {
    title: "Employee Scheduling & Shift Planning",
    path: "/service/work-force-management/employee-scheduling-and-shift-planning",
    col: "col-lg-4 col-md-6",
    sImg: "/img/About/ai2.png",
  },
  {
    title: "payroll-management",
    path: "/service/work-force-management/payroll-management",
    col: "col-lg-4 col-md-6",
    sImg: "/img/About/ai1.png",
  },
  {
    title: "people-on-demand",
    path: "/service/work-force-management/people-on-demand",
    col: "col-lg-4 col-md-6",
    sImg: "/img/About/ai.jpg",
  },
  {
    title: "performance-analystics",
    path: "/service/work-force-management/performance-analytics",
    col: "col-lg-4 col-md-6",
    sImg: "/img/About/a1.jpg",
  },
  {
    title: "Staffing and Recruitment",
    path: "/service/work-force-management/staffing-and-recruitment",
    col: "col-lg-4 col-md-6",
    sImg: "/img/work/work7.png",
  },
];

const Service = {
  title: "Workforce Management",
  description: `We streamline every aspect of workforce operations—from scheduling and attendance
to labor-cost control and compliance. Our solutions help organizations stay agile,
reduce overhead, and elevate employee satisfaction.`,
  images: ["/img/services/workforcemgmt/wfm-hero.jpg"],
};

const WorkForceManagementPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      {/* Page metadata */}
      <Head>
        <title>{`${Service.title} | BRVTeck`}</title>
        <meta
          name="description"
          content="BRVTeck’s Workforce Management solutions integrate AI-powered scheduling, real-time attendance tracking, and cost optimization tools to keep your teams productive and compliant."
        />
        <meta
          name="keywords"
          content="workforce management, employee scheduling, shift planning, time tracking, labor cost optimization, compliance management, BRVTeck"
        />
      </Head>

      {/* Site header */}
      <Header />

      <main className="page_content service-single-page">
        {/* Banner title */}
        <PageTitle
          pageTitle={Service.title}
          pagesub="Operations"
          pageTop="Work-Force"
        />
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative mb-4">
              <Image
                src="/img/work/123.png"
                alt="Workforce Management Overview"
                width={2100}
                height={400}
                style={{ width: "1600px", height: "500px" }}
              />
            </div>

            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p>
              Leveraging AI-driven forecasting, intuitive dashboards, and
              mobile-first workflows, we empower leaders to manage staff with
              speed, accuracy, and transparency.
            </p>

            {/* Additional images (keep slice for future expansion) */}
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

        {/* ── Featured Services Grid ───────────────────── */}
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

          {/* Inline styles (unchanged) */}
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

        {/* ── Why Choose Us Section ────────────────────── */}
        <section className="about_section section_space bg-light mt-4">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/img/blog/aib.jpg"
                    alt="Workforce Team Illustration"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Why
                      <span className="badge bg-secondary text-white ms-2">
                        Choose&nbsp;Us&nbsp;🙂
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Empowering Your People, Maximizing Your Results
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck combines decades of HR tech expertise with
                      next-generation AI to deliver a workforce management
                      platform that’s intuitive for managers and empowering for
                      employees—driving productivity while lowering operational
                      costs.
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

      {/* Site-wide CTA, footer, and scrollbar */}
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default WorkForceManagementPage;
