"use client";
import React, { useState } from "react";
import Head from "next/head";
import PageTitle from "@/components/pagetitle/PageTitle";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import CtaSection from "@/components/CtaSection/CtaSection";
import { CheckCircle } from "lucide-react";

// ── JOB VACANCIES ─────────────────────────────────────────────────────────────
const jobs = [
  {
    title: "UI Full Stack Developer",
    experience: "Fresher to 2+ years",
    description: [
      "Strong experience in HTML, CSS, JavaScript, TypeScript, and Bootstrap.",
      "Front‑end frameworks like Angular, React.js, Vue.js.",
      "Mobile technologies such as Flutter, Dart, and React Native.",
    ],
  },
  {
    title: "Technical Lead",
    experience: "9+ years",
    description: [
      "Expertise in Core Java, RESTful Web Services, Spring Boot, DB, UI, Angular.",
      "Banking domain knowledge is a plus.",
      "Proficient in SDLC, Agile, and testing techniques.",
    ],
  },
  {
    title: "Developer",
    experience: "5+ years",
    description: [
      "Proficient in Java, RESTful APIs, and database design.",
      "Experience with Angular, Polymer, and JUnit.",
      "Mentor junior developers and ensure code quality.",
    ],
  },
  {
    title: "QA Specialist",
    experience: "8+ years",
    description: [
      "Expert in automated and manual testing processes.",
      "Hands‑on with Selenium, LoadRunner, and Agile.",
      "Develop test plans and QA standards.",
    ],
  },
  {
    title: "Technical Architect",
    experience: "10+ years",
    description: [
      "Design and implement scalable architectures.",
      "Extensive cloud, microservices, and DevOps experience.",
      "Lead cross‑functional teams and tech strategy.",
    ],
  },
];

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────
const CareerPage = () => {
  return (
    <main className="page_content about-page">
      {/* ── META TAGS ────────────────────────────────────────────────────────── */}
      <Head>
        <title>Careers at BRVTECK | Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at BRVTECK. Discover our values and current job openings."
        />
        <meta
          name="keywords"
          content="BRVTECK careers, job vacancies, tech jobs, developer jobs, QA specialist, technical architect"
        />
        <meta name="author" content="BRVTECK" />
        <meta property="og:title" content="Careers at BRVTECK | Join Our Team" />
        <meta
          property="og:description"
          content="Grow your career with BRVTECK. See open roles and apply today."
        />
        <meta property="og:image" content="/img/careers/career-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at BRVTECK | Join Our Team" />
        <meta
          name="twitter:description"
          content="Exciting opportunities in tech—apply now at BRVTECK."
        />
        <meta name="twitter:image" content="/img/careers/career-banner.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/careers" />
      </Head>

      {/* ── GLOBAL ───────────────────────────────────────────────────────────── */}
      <Header />
      <PageTitle
        pageTitle="CAREERS"
        pagesub="Build Your Future with BRVTECK"
        pageTop="Careers"
      />

      {/* ── INTRO SECTION ────────────────────────────────────────────────────── */}
      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image mb-4">
            {/* <img
              src="/img/careers/career-banner.jpg"
              alt="Careers at BRVTECK"
              className="w-100 rounded"
            /> */}
          </div>

          <h2 className="details_item_title">Why Work With Us?</h2>
          <p>
            At BRVTECK, we believe great ideas thrive in a culture that fosters
            collaboration, curiosity, and continuous growth. Join us to solve
            complex challenges, build innovative products, and contribute to a
            team that values your unique perspective.
          </p>
          <p className="mb-0">
            Whether you're an experienced professional or just starting your
            journey, BRVTECK provides the platform, mentorship, and resources to
            propel your career forward.
          </p>
        </div>
      </section>

      {/* ── JOB CARDS SECTION (Renamed as Career Benefits) ───────────────────── */}
      <section className="policy_section bg-light pt-0">
        <div className="container">
          <h3 className="section_heading text-center mb-5">Career Benefits</h3>
          <div className="row">
            {jobs.map((job, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="iconbox_block h-100">
                  <div className="iconbox_icon mb-3 text-primary">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">{job.title}</h3>
                    <p className="fw-semibold">Experience: {job.experience}</p>
                    <ul className="list-disc list-inside mb-3">
                      {job.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                    {/* <a
                      href={`mailto:careers@brvteck.com?subject=Application for ${encodeURIComponent(
                        job.title
                      )}`}
                      className="btn btn-primary btn-sm"
                    >
                      Apply Now
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FOOTER ─────────────────────────────────────────────────────── */}
      <CtaSection />
      <Footer />
      <Scrollbar />
    </main>
  );
};

export default CareerPage;
