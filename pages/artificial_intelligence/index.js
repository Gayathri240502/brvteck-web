// pages/artificial_intelligence/index.js
import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";
import BlogSection from "@/components/software-company-components/BlogSection/BlogSection";

// --- AI Service Data ---
const Services = [
  {
    title: "NLP & Conversational AI",
    path: "/artificial_intelligence/nlp-conversational-ai",
    sImg: "/img/services/ai/ai_nlp.jpg",
  },
  {
    title: "Computer Vision & Image Intelligence",
    path: "/artificial_intelligence/computer-vision-image-video-ai",
    sImg: "/img/services/ai/ai_vision.jpg",
  },
  {
    title: "Speech & Audio Intelligence",
    path: "/artificial_intelligence/speech-audio-processing",
    sImg: "/img/services/ai/ai_audio.jpg",
  },
  {
    title: "Data & Predictive Analytics",
    path: "/artificial_intelligence/data-predictive-analytics",
    sImg: "/img/services/ai/ai_analytics.jpg",
  },
];
 
const Service = {
  title: "Artificial Intelligence",
  description:
    "BRVTeck's Artificial Intelligence practice designs, builds and deploys intelligent systems that transform how businesses operate. From natural language interfaces and vision systems to voice-enabled applications and predictive analytics, our solutions help you automate decisions, personalize customer experiences, and gain actionable insights from data.",
  images: ["/img/services/ai/ai_main.jpg"],
  secondDescription:
    "We combine domain knowledge, modern ML infrastructures and responsible AI practices to deliver production-ready solutions that scale and respect privacy and fairness.",
};
 
const SoftwareEnterprisePage = () => {
  const ClickHandler = () => {
    if (typeof window !== "undefined") window.scrollTo(10, 0);
  };
 
  return (
    <Fragment>
      <Head>
        <title>Artificial Intelligence Solutions | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck designs and deploys intelligent AI systems including NLP, Computer Vision, and Predictive Analytics to automate decisions and gain actionable insights."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence, AI, Machine Learning, NLP, Computer Vision, Predictive Analytics, Conversational AI, BRVTeck"
        />
        <meta name="author" content="BRVTeck" />
        <meta
          property="og:title"
          content="Artificial Intelligence Solutions | BRVTeck"
        />
        <meta
          property="og:description"
          content="Transform your business with BRVTeck's practical AI solutions: NLP, Vision, and Predictive Analytics."
        />
        <meta property="og:image" content="/img/services/ai/ai_main.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/artificial-intelligence"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Artificial Intelligence Solutions | BRVTeck"
        />
        <meta
          name="twitter:description"
          content="Deploy secure and scalable AI systems with BRVTeck for business automation and insights."
        />
        <meta name="twitter:image" content="/img/services/ai/ai_main.jpg" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/service/artificial-intelligence"
        />
      </Head>

      <Header />

      <main className="page_content service-single-page">
        {/* Video hero */}
        <section className="ai_video_hero">
          <video
            src="/img/video/aivideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="ai_video"
            aria-label="Artificial Intelligence background video"
          />
          <div className="ai_video_overlay" aria-hidden="true" />

          <div
            className="ai_video_center"
            role="region"
            aria-label="Hero title"
          >
            <h1 className="hero_title">Artificial Intelligence</h1>
            {/* <p className="hero_sub">
              Practical, production-ready AI — NLP, Vision, Speech & Predictive
              Analytics
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="hero_cta" onClick={ClickHandler}>
                Talk to an Expert
              </a>
            </Link> */}
          </div>
        </section>
        {/* /Video hero */}

        {/* Service details */}
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p className="mb-4">{Service.secondDescription}</p>

            <h3>Our Expertise</h3>
            <ul>
              <li>
                <strong>NLP & Conversational AI:</strong> Build systems that
                understand and generate human language for advanced chatbots,
                sentiment analysis, and smart document processing.
              </li>
              <li>
                <strong>Computer Vision & Image Intelligence:</strong> Develop
                solutions for image recognition, object detection, and visual
                inspection to automate processes and ensure quality.
              </li>
              <li>
                <strong>Speech & Audio Intelligence:</strong> Implement
                voice-enabled applications, speech-to-text, and audio analytics
                for enhanced user interaction and insights.
              </li>
              <li>
                <strong>Data & Predictive Analytics:</strong> Leverage machine
                learning to forecast trends, automate decisions, and personalize
                customer experiences through deep data insights.
              </li>
            </ul>
          </div>
        </section>
        {/* /Service details */}

        {/* Featured services */}
        <section className="service_section section_space xb-hidden pb-0">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text">
                Our
                <span className="badge bg-secondary text-white ms-2">
                  Featured
                </span>
              </div>
              <h2 className="heading_text mb-0">Featured Services</h2>
            </div>
 
            <div className="row mt-5 g-4">
              {Services.map((service, index) => (
                <div className="col-lg-6 col-md-7 col-12" key={index}>
                  <div className="service_card h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0 transition-all">
                    <Link href={service.path} legacyBehavior>
                      <a
                        className="service_image_wrapper position-relative d-block text-decoration-none"
                        onClick={ClickHandler}
                      >
                        <Image
                          src={service.sImg}
                          alt={service.title}
                          width={900}
                          height={600}
                          className="img-fluid w-100 h-100 service_image"
                          style={{
                            height: "500px",
                            transition: "transform 0.3s ease",
                          }}
                        />
                        <div className="image_overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4">
                          <div className="overlay_gradient position-absolute top-0 start-0 w-100 h-100" />
                          <div className="service_content_overlay position-relative z-2 w-100">
                            <h3 className="service_title text-white fs-4 fw-bold mb-3 lh-sm">
                              {service.title}
                            </h3>
                            <div className="service_actions d-flex justify-content-start">
                              <div
                                className="icon_link bg-white rounded-circle p-2 text-dark text-decoration-none d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px" }}
                                aria-hidden="true"
                              >
                                <i className="fa-regular fa-arrow-up-right fs-6" />
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
        </section>
        {/* /Featured services */}

        {/* About / Why choose us */}
        <section className="about_section section_space bg-light mt-4">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/img/services/artificial-intelligence/why.png"
                    alt="Artificial Intelligence Why Choose Us"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Why
                      <span className="badge bg-secondary text-white ms-2">
                        Choose Us
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Accelerating Your Business with Practical AI
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck blends research-grade models with production
                      engineering to deliver secure, explainable and
                      high-performance AI. We help you identify use-cases, build
                      prototypes, and scale to full production — with ongoing
                      model monitoring, MLOps and governance.
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
        {/* /About */}
      </main>
      <BlogSection />
      <CtaSection />
      <Footer />
      <Scrollbar />

      <style jsx global>{`
        /* Hero video */
        .ai_video_hero {
          position: relative;
          height: 100vh;
          min-height: 560px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .ai_video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: saturate(95%) contrast(95%);
        }

        .ai_video_overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.35) 0%,
              rgba(0, 0, 0, 0.25) 35%,
              rgba(0, 0, 0, 0.6) 100%
            ),
            radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.08),
              rgba(0, 0, 0, 0.2)
            );
        }

        .ai_video_center {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          max-width: 1100px;
          margin: 0 1rem;
        }

        .hero_title {
          font-size: 3rem;
          line-height: 1.05;
          margin: 0;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.5px;
          text-transform: none;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }

        .hero_sub {
          margin-top: 0.75rem;
          color: rgba(255, 255, 255, 0.92);
          font-size: 1.125rem;
          max-width: 900px;
          line-height: 1.4;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        .hero_cta {
          display: inline-block;
          margin-top: 1.25rem;
          padding: 0.65rem 1.05rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          color: #0b1b3a;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(11, 27, 58, 0.12);
          transition:
            transform 160ms ease,
            box-shadow 160ms ease;
        }

        .hero_cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(11, 27, 58, 0.16);
        }

        /* Service cards */
        .service_card {
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.03);
          background: #fff;
        }

        .service_card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
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
            rgba(0, 0, 0, 0.25) 40%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .service_card:hover .overlay_gradient {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.35) 40%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        .icon_link {
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          pointer-events: none;
        }

        .service_title {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          line-height: 1.2;
        }

        /* About block adjustments */
        .about_section .heading_block .heading_focus_text .badge {
          vertical-align: middle;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero_title {
            font-size: 2rem;
          }
          .hero_sub {
            font-size: 1rem;
          }
          .ai_video_hero {
            min-height: 420px;
          }
          .service_image_wrapper {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero_title {
            font-size: 1.5rem;
          }
          .ai_video_hero {
            min-height: 360px;
          }
        }

        /* Keep desktop nav links unwrapped (if using same page CSS) */
        @media (min-width: 992px) {
          .site_header_2 .main_menu_list > li > a,
          .site_header_2 .main_menu_list > li {
            white-space: nowrap;
            flex: 0 0 auto;
          }
        }

        /* Small cosmetic */
        .details_item_title {
          margin-top: 1rem;
          margin-bottom: 0.75rem;
          font-size: 1.75rem;
        }

        .section_space {
          padding: 60px 0;
        }
      `}</style>
    </Fragment>
  );
};

export default SoftwareEnterprisePage;
