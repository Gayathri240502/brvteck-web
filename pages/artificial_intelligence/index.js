import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
// import PageTitle from "@/components/pagetitle/PageTitle"; // Removed PageTitle
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";

// --- AI Service Data ---
const Services = [
  {
    title: "NLP & Conversational AI",
    path: "/artificial_intelligence/nlp-conversational-ai",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/artificial-intelligence/nlp.jpg",
  },
  {
    title: "Computer Vision & Image Intelligence",
    path: "/artificial_intelligence/computer-vision-image-video-ai",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/artificial-intelligence/computer-vision.jpg",
  },
  {
    title: "Speech & Audio Intelligence",
    path: "/artificial_intelligence/speech-audio-processing",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/artificial-intelligence/speech-audio.jpg",
  },
  {
    title: "Data & Predictive Analytics",
    path: "/artificial_intelligence/data-predictive-analytics",
    col: "col-lg-4 col-md-6",
    sImg: "/img/services/artificial-intelligence/data-analytics.jpg",
  },
];

const Service = {
  title: "Artificial Intelligence",
  description: `BRVTeck's Artificial Intelligence practice designs, builds and deploys intelligent systems that transform how businesses operate. 
	From natural language interfaces and vision systems to voice-enabled applications and predictive analytics, our solutions help you automate decisions, personalize customer experiences, and gain actionable insights from data.`,
  videoUrl: "/img/video/aivideo.mp4",
  videoLoop: true,
};

const ArtificialIntelligence = () => {
  const ClickHandler = () => {
    if (typeof window !== "undefined") window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Head>{/* ... (Head content remains the same) */}</Head>

      {/* 💡 CHANGE 1: Keep Header for navigation */}
      <Header />

      <main className="page_content service-single-page">
        {/* 💡 CHANGE 2: Full-width Hero Section */}
        <section className="hero_video_section full-width-hero">
          <div className="video-container">
            <video
              src={Service.videoUrl}
              autoPlay
              loop={Service.videoLoop ? true : undefined}
              muted
              playsInline
              className="hero-video-element"
            >
              Your browser does not support the video tag.
            </video>

            {/* Title Overlay */}
            <div className="hero-content-overlay">
              <div className="container">
                <h1 className="display-1 fw-bolder text-white text-shadow-lg text-center">
                  {Service.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* 💡 CHANGE 3: Service Details Section starts *after* the video, providing scrollable content. */}
        <section className="service_details_section section_space">
          <div className="container">
            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p>
              We combine domain knowledge, modern ML infrastructures and
              responsible AI practices to deliver production-ready solutions
              that scale and respect privacy and fairness.
            </p>

            <div className="row">
              {/* reserved for additional images if required */}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="service_section section_space xb-hidden pb-0">
          <div className="container">
            <div className="heading_block text-center">
              <div className="heading_focus_text">
                Our
                <span className="badge bg-secondary text-white ms-2">
                  Expertise
                </span>
              </div>
              <h2 className="heading_text mb-0">Featured Services</h2>
            </div>

            <div className="row mt-5 g-4">
              {Services.map((service, index) => (
                <div className="col-lg-4 col-md-7 col-12" key={index}>
                  <div className="service_card h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0 transition-all">
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

          {/* Standard CSS block */}
          <style jsx>{`
            /* Full Hero Video Styles */
            .full-width-hero {
              position: relative;
              width: 100vw;
              height: 100vh; /* Make it full viewport height */
              overflow: hidden;
              margin-top: -95px; /* Adjust this to pull the section up, based on your Header height */
              z-index: 1; /* Ensure video stays behind the Header if the Header has a z-index > 1 */
            }

            .video-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            .hero-video-element {
              width: 100%;
              height: 100%;
              object-fit: cover; /* Important: ensures video covers the container without distortion */
            }

            .hero-content-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 5;
              display: flex;
              align-items: center; /* Center vertically */
              justify-content: center; /* Center horizontally */
              background: rgba(
                0,
                0,
                0,
                0.4
              ); /* Dark overlay for better text readability */
            }

            .text-shadow-lg {
              text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
            }

            /* Standard service card styles */
            .service_card {
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              border: 1px solid rgba(255, 255, 255, 0.05);
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

        {/* About / Why Choose Us */}
        <section className="about_section section_space bg-light mt-4">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="team_cartoon_image">
                  <Image
                    src="/img/services/artificial-intelligence/ai-team.jpg"
                    alt="AI Team"
                    width={500}
                    height={500}
                    style={{ objectFit: "cover" }}
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

export default ArtificialIntelligence;
