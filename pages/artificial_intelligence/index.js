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
    // path: "/artificial-intelligence/nlp-conversational-ai",
    sImg: "/img/services/ai/ai_nlp.jpg", // Placeholder image path
  },
  {
    title: "Computer Vision & Image Intelligence",
    // path: "/artificial_intelligence/computer-vision-image-video-ai",
    sImg: "/img/services/ai/ai_vision.jpg", // Placeholder image path
  },
  {
    title: "Speech & Audio Intelligence",
    // path: "/artificial_intelligence/speech-audio-processing",
    sImg: "/img/services/ai/ai_audio.jpg", // Placeholder image path
  },
  {
    title: "Data & Predictive Analytics",
    // path: "/artificial_intelligence/data-predictive-analytics",
    sImg: "/img/services/ai/ai_analytics.jpg", // Placeholder image path
  },
];

const Service = {
  title: "Artificial Intelligence",
  description: `BRVTeck's Artificial Intelligence practice designs, builds and deploys intelligent systems that transform how businesses operate. From natural language interfaces and vision systems to voice-enabled applications and predictive analytics, our solutions help you automate decisions, personalize customer experiences, and gain actionable insights from data.`,
  images: ["/img/services/ai/ai_main.jpg"], // Placeholder image path
  secondDescription: `We combine domain knowledge, modern ML infrastructures and responsible AI practices to deliver production-ready solutions that scale and respect privacy and fairness.`,
};

const SoftwareEnterprisePage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
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
        <meta
          property="og:image"
          content="/img/services/ai/ai_main.jpg"
        />
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
        <meta
          name="twitter:image"
          content="/img/services/ai/ai_main.jpg"
        />
        <link
          rel="canonical"
          href="https://www.brvteck.com/service/artificial-intelligence"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        {/* Full-width Video Section */}
        <section className="ai_video_hero">
          <video 
            src="/img/video/aivideo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-100"
            style={{ 
                height: "100vh", 
                objectFit: "cover", 
                display: "block" 
            }}
            aria-label="Artificial Intelligence background video"
          >
          </video>
        </section>
        {/* End Full-width Video Section */}

        <section className="service_details_section section_space bg-light">
          <div className="container">
            {/* The image component is removed from here since the video is above */}
            
            <h2 className="details_item_title">{Service.title}</h2>
            <p>{Service.description}</p>
            <p className="mb-4">{Service.secondDescription}</p> 
            
            <h3>Our Expertise</h3>
            <ul>
              <li>
                <strong>NLP & Conversational AI:</strong> Build systems that understand and generate human language for advanced chatbots, sentiment analysis, and smart document processing.
              </li>
              <li>
                <strong>Computer Vision & Image Intelligence:</strong> Develop solutions for image recognition, object detection, and visual inspection to automate processes and ensure quality.
              </li>
              <li>
                <strong>Speech & Audio Intelligence:</strong> Implement voice-enabled applications, speech-to-text, and audio analytics for enhanced user interaction and insights.
              </li>
              <li>
                <strong>Data & Predictive Analytics:</strong> Leverage machine learning to forecast trends, automate decisions, and personalize customer experiences through deep data insights.
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
                  Featured
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
                            height: "500px",
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
                    src="/img/services/ai/ai_whychooseus.jpg"
                    alt="Artificial Intelligence Why Choose Us"
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
                        Choose Us 🙂
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Accelerating Your Business with Practical AI
                    </h2>
                    <p className="heading_description mb-0">
                      BRVTeck blends research-grade models with production engineering to deliver secure, explainable and high-performance AI. We help you identify use-cases, build prototypes, and scale to full production — with ongoing model monitoring, MLOps and governance.
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