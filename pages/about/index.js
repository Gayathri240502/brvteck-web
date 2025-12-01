import React, { Fragment, useState } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import PolicySection from "./Policy";
import WhyUs from "./WhyUs";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import Image from "next/image";
import Head from "next/head";

const AboutUsPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>About Us | BRVTeck - AI, CyberSecurity Experts</title>
        <meta
          name="description"
          content="Learn more about BRVTeck—leaders in AI, Machine Learning,  and IoT. Discover how we build innovative solutions that transform businesses."
        />
        <meta
          name="keywords"
          content="About BRVTeck, AI Company,  IoT Services, Machine Learning, Software Development, Tech Innovation"
        />
        <meta name="author" content="BRVTeck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="About Us | BRVTeck" />
        <meta
          property="og:description"
          content="We provide cutting-edge AI, ML, and IoT services that drive innovation and growth for your business."
        />
        <meta
          property="og:image"
          content="https://brvteck.com/img/About/aboutus.jpg"
        />
        <meta property="og:url" content="https://brvteck.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | BRVTeck" />
        <meta
          name="twitter:description"
          content="At BRVTeck, we combine technology and creativity to deliver smart, scalable AI, IoT."
        />
        <meta
          name="twitter:image"
          content="https://brvteck.com/img/About/aboutus.jpg"
        />
      </Head>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"About Us"}
          pagesub={"More BrvTeck 😃"}
          pageTop={"About"}
        />
        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="image_wrap">
                    <Image
                      src="/img/About/ai1.png"
                      alt="BrvTeck - About"
                      width={1700}
                      height={1120}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_wrap">
                    <Image
                      src="/img/About/aboutus.jpg"
                      alt="BrvTeck - About"
                      width={1700}
                      height={1120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="heading_block mb-0">
              <div className="row justify-content-lg-between">
                <div className="col-lg-5">
                  <div className="heading_focus_text">
                    About
                    <span className="badge bg-secondary text-white">
                      BrvTeck 🙂
                    </span>
                  </div>
                  <h2 className="heading_text mb-0">
                    We Provide You Flexible Services
                  </h2>
                </div>
                <div className="col-lg-6">
                  <p className="heading_description mb-0">
                    At BrvTeck, we specialize in delivering innovative AI, ML,
                     and IoT solutions that drive efficiency,
                    security, and business growth. Our team has a proven track
                    record in transforming businesses with advanced technologies
                    and end-to-end services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PolicySection />
        <FeaturesSection />
        <WhyUs />
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutUsPage;
