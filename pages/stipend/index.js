import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
const StipendPage = () => {
  return (
    <Fragment>
      {/* ─── SEO & Social Metadata ─── */}
      <Head>
        <title>Stipend Program | BRV Technologies</title>

        {/* Basic SEO */}
        <meta
          name="description"
          content="Discover BRVTeck’s Stipend Program—supporting interns and early-career talent with monthly allowances, learning resources, and performance incentives."
        />
        <meta
          name="keywords"
          content="stipend, internship stipend, BRV Technologies, early career support, trainee benefits"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/stipend" />
        <meta property="og:title" content="Stipend Program | BRVTeck" />
        <meta
          property="og:description"
          content="Monthly allowances, skill-building resources, and performance bonuses for BRVTeck interns."
        />
        <meta property="og:image" content="/img/stipend/stipend-hero.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.brvteck.com/stipend" />
        <meta name="twitter:title" content="Stipend Program | BRVTeck" />
        <meta
          name="twitter:description"
          content="Explore how our stipend program fuels growth for budding tech talent."
        />
        <meta name="twitter:image" content="/img/stipend/stipend." />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brvteck.com/stipend" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ─── Layout ─── */}
      <Header />

      <main className="page_content service-single-page">
        <PageTitle pageTitle="Stipend Program" pagesub="Stipend" pageTop="Careers" />

        {/* ─── Hero Section ─── */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="/img/stipend/stipend.png"
                  alt="Happy interns with laptops"
                  className="img-fluid rounded hero-img"
                />
              </div>

              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Growth
                      <span className="badge bg-secondary text-white">
                        &nbsp;Journey
                      </span>
                    </div>

                    <h1 className="heading_text">Fueling Futures with Stipends</h1>

                    <p className="heading_description mb-0">
                      Our monthly stipend gives interns and trainees the freedom to
                      focus on learning, experimenting, and innovating—without
                      worrying about day-to-day expenses.
                    </p>
                  </div>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">• Competitive monthly allowance</li>
                    <li className="mb-2">• Performance-based bonuses</li>
                    <li className="mb-2">• Access to premium learning portals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Highlight Images ─── */}
        <section className="highlight_section section_space bg-light">
          <div className="container">
            <div className="heading_block text-center mb-5">
              <div className="heading_focus_text">
                Program
                <span className="badge bg-secondary text-white ms-2">
                  Highlights
                </span>
              </div>
              <h2 className="heading_text mb-0">Life Inside the Program</h2>
            </div>

            <div className="row g-4">
              {[
                "/img/stipend/stipend1.png",
                "/img/stipend/stipend2.png",
                "/img/stipend/stipend3.png",
                "/img/stipend/stipend4.png",
              ].map((src, idx) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                  <div className="highlight_img_wrap overflow-hidden rounded-4">
                    <img
                      src={src}
                      alt={`Program Highlight ${idx + 1}`}
                      className="img-fluid w-100 highlight-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Details Section ─── */}
        <section className="team_details_section section_space">
          <div className="container">
            <h3 className="details_item_info_title">
              How Our Stipend Program Works
            </h3>
            <p>
              Interns receive a fixed monthly stipend deposited directly to their
              bank account. Performance reviews are conducted every eight weeks,
              unlocking additional bonuses for outstanding impact and innovation.
            </p>

            <h3 className="details_item_info_title">Eligibility Criteria</h3>
            <ul>
              <li>Enrolled in or recently graduated from a tech-related degree</li>
              <li>Availability of at least 20 hours per week for project work</li>
              <li>Passion for problem-solving and continuous learning</li>
            </ul>

            <h3 className="details_item_info_title">Application Process</h3>
            <p>
              Submit your résumé and a short project portfolio to&nbsp;
              <a href="mailto:careers@brvteck.com">careers@brvteck.com</a>. Qualifying
              candidates will be invited to a technical assessment and cultural-fit
              interview.
            </p>
          </div>
        </section>

        {/* ─── Call To Action ─── */}
        <CtaSection />
      </main>

      <Footer />
      <Scrollbar />

      {/* ─── Page-specific global styles ─── */}
      <style jsx global>{`
        .highlight_section .highlight-img {
          transition: transform 0.4s ease;
        }
        .highlight_section .highlight_img_wrap:hover .highlight-img {
          transform: scale(1.05);
        }
        .hero-img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </Fragment>
  );
};

export default StipendPage;
