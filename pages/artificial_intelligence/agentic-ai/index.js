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
    title: "Autonomous Workflow Agents",
    col: "col-lg-4 col-md-6",
    sImg: "/img/ai1.jpeg",
  },
  {
    title: "AI Assistants & Co-Pilots",
    col: "col-lg-4 col-md-6",
    sImg: "/img/Home/copilots.jpeg",
  },
  {
    title: "Automated Decision-Making Systems",
    col: "col-lg-4 col-md-6",
    sImg: "/img/Home/descion making.jpeg",
  },
];

const Service = {
  title: "Agentic AI Solutions",
  description: `Agentic AI brings intelligence that can plan, execute, and make decisions autonomously. Our Agentic AI solutions use advanced reasoning, multi-step automation, and self-improving workflows to help businesses operate smarter and faster. From workflow automation agents to personalized AI assistants and autonomous decision-making engines — we build AI that acts, learns, and adapts.`,
  images: ["/img/robo.jpeg"],
};

const AgenticAI = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | Agentic AI Solutions</title>
        <meta
          name="description"
          content="BRVTeck delivers Agentic AI solutions such as workflow agents, AI co-pilots, autonomous systems, and intelligent automation for business efficiency."
        />
        <meta
          name="keywords"
          content="Agentic AI, AI Agents, Intelligent Automation, Workflow Automation, AI Co-Pilot, Autonomous Systems, BRVTeck"
        />
        <meta name="author" content="BRVTeck Technologies Private Limited" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/services/technology/agentic-ai"
        />
        <meta
          property="og:title"
          content="Agentic AI Solutions | BRVTeck"
        />
        <meta
          property="og:description"
          content="Build intelligent agents that think, reason, and execute tasks autonomously with BRVTeck Agentic AI solutions."
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/services/technology/agentic-ai"
        />
        <meta
          property="twitter:title"
          content="Agentic AI Solutions | BRVTeck"
        />
        <meta
          property="twitter:description"
          content="Next-generation Agentic AI systems that automate workflows, assist teams, and make intelligent decisions."
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
          pagesub="AI Technology"
          pageTop="Agentic"
        />

        {/* Service Description Section */}
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative mb-4">
              <Image
                src={Service.images[0]}
                alt="Agentic AI Service"
                width={2100}
                height={400}
                style={{ width: "1600px", height: "500px" }}
              />
            </div>

            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p>
              Empower your business with AI agents that plan, reason, and act
              on their own. Our Agentic AI models automate complex workflows,
              enhance decision-making, and support teams with intelligent,
              proactive AI co-pilots.
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
                      alt={`Agentic AI Image ${idx + 2}`}
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
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Styling */}
          <style jsx>{`
            .service_card {
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .service_card:hover {
              transform: translateY(-8px);
            }
            .service_image_wrapper {
              height: 350px;
              overflow: hidden;
            }
            .service_card:hover .service_image {
              transform: scale(1.05);
            }
            .overlay_gradient {
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.3) 40%,
                rgba(0, 0, 0, 0.7) 100%
              );
            }
          `}</style>
        </section>

        <section className="about_section section_space bg-light mt-4">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/img/services/agentic/info.png"
                    alt="Agentic AI Illustration"
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
                        Choose Us 😊
                      </span>
                    </div>

                    <h2 className="heading_text">
                      Building Intelligent Agents that Think & Act
                    </h2>

                    <p className="heading_description mb-0">
                      We develop advanced Agentic AI systems that automate
                      repetitive tasks, reduce operational load, and enable
                      smarter decision-making. With autonomous workflow
                      execution, personalized AI co-pilots, and self-learning
                      agents, we help businesses scale faster with reliable,
                      intelligent automation.
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

export default AgenticAI;
