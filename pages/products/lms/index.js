"use client";
import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  BarChart2,
  Smartphone,
  Award,
  Link2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const srImg = "/img/products/lms1.jpg";
const wImg = "/img/products/lms2.jpg";

const PolicyIcons = [
  { title: "AI-Powered Learner Behavior Tracking", icon: BarChart3 },
  { title: "AI Adaptive Mobile Learning", icon: Smartphone },
  { title: "Smart AI Certifications", icon: Award },
  { title: "Seamless AI Integrations", icon: Link2 },
  { title: "AI-Based Secure Access", icon: ShieldCheck },
];

const Policy = [
  {
    icon: (
      <BookOpen
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Driven Course Management",
    subTitle:
      "Design smarter courses with AI-assisted structuring, automated content suggestions, and enhanced curriculum planning.",
  },
  {
    icon: (
      <Users size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Intelligent Student Engagement",
    subTitle:
      "Deliver personalized learning paths using AI-driven engagement models, predictive reminders, and adaptive recommendations.",
  },
  {
    icon: (
      <BarChart2 size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Advanced AI Analytics",
    subTitle:
      "Make data-driven decisions with AI-powered performance forecasting, real-time insights, and automated reporting dashboards.",
  },
  {
    icon: (
      <Smartphone
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Personalized Mobile Learning",
    subTitle:
      "Empower learners with AI-curated micro-lessons, adaptive assessments, and real-time guidance directly on mobile.",
  },
  {
    icon: (
      <Award size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Automated Assessments",
    subTitle:
      "Generate intelligent quizzes, auto-grade submissions, and benchmark skill levels using advanced AI testing engines.",
  },
  {
    icon: (
      <Link2 size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Smart AI Ecosystem Integrations",
    subTitle:
      "Integrate smoothly with AI tools, ERPs, CRMs, and virtual classrooms for a unified digital learning environment.",
  },
];

const LmsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI LMS Solutions | AI Learning Management System | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI LMS enhances digital learning through automation, intelligent analytics, adaptive course delivery, and AI-powered assessments."
        />
        <meta
          name="keywords"
          content="AI LMS, Learning Management System, AI Education, Adaptive Learning, AI Course Builder, Brvteck LMS"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI LMS Solutions | AI Learning Management System | Brvteck"
        />
        <meta
          property="og:description"
          content="Transform education and training with Brvteck’s AI-powered LMS designed for schools, universities, and enterprises."
        />
        <meta property="og:image" content="/img/products/lms1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/products/lms" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI LMS Solutions | AI Learning Management System | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Next-generation AI learning platform with automation, deep analytics, and adaptive learning tools."
        />
        <meta name="twitter:image" content="/img/products/lms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/lms" />
      </Head>

      <PageTitle
        pageTitle="AI Learning Management System"
        pagesub="products 😍"
        pageTop="Our"
      />
      <Header />

      {/* Hero Section */}
      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={srImg} alt="AI LMS" width={500} height={500} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    Next-Gen Learning with AI  
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">AI-Powered Learning Management System</h2>
                  <p className="heading_description mb-0">
                    Transform the way learners engage and progress with an AI-first LMS.  
                    Automate operations, personalize learning journeys, and unlock  
                    real-time insights to accelerate performance and outcomes.
                  </p>
                </div>

                <Link onClick={ClickHandler} href="/service" className="btn">
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

      {/* Feature Cards */}
      <section style={{ backgroundColor: "#eaf4ff", padding: "60px 0" }}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "30px 0",
            }}
          >
            {Policy.map((policy, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>{policy.icon}</div>
                  <h3 style={{ color: "#03044e", fontWeight: "700" }}>
                    {policy.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#444" }}>
                    {policy.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="AI LMS Features" width={600} height={400} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Key</span>
                    features
                  </div>
                  <h2 className="heading_text mb-0">
                    Core Advantages of Our AI LMS
                  </h2>
                </div>

                <ul className="service_facilities_group unordered_list">
                  {PolicyIcons.map((policy, idx) => {
                    const Icon = policy.icon;
                    return (
                      <li key={idx}>
                        <div className="iconbox_block layout_icon_left">
                          <span className="iconbox_icon">
                            <Icon size={40} strokeWidth={1.5} />
                          </span>
                          <span className="iconbox_content">
                            <strong className="iconbox_title mb-0">
                              {policy.title}
                            </strong>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="page_content about-page">
        <CtaSection />
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default LmsPage;
