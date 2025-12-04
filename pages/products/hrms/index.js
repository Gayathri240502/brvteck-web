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
  Users,
  CreditCard,
  CalendarCheck2,
  UserPlus,
  TrendingUp,
  UserCircle2,
  FileText,
  Gauge,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const srImg = "/img/products/hrms1.jpg";
const wImg = "/img/products/hrms2.jpg";

// --------------------------------------------
// KEY BENEFITS
// --------------------------------------------
const PolicyIcons = [
  {
    title: "AI-Powered Employee Self-Service",
    icon: UserCircle2,
  },
  {
    title: "Automated Payroll Intelligence",
    icon: CreditCard,
  },
  {
    title: "Smart Attendance & Leave Automation",
    icon: CalendarCheck2,
  },
  {
    title: "Predictive Workforce Analytics",
    icon: BarChart3,
  },
  {
    title: "Secure & Compliant HR Data",
    icon: ShieldCheck,
  },
];

// --------------------------------------------
// FEATURE CARDS
// --------------------------------------------
const Policy = [
  {
    icon: (
      <Users size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Enhanced Employee Management",
    subTitle:
      "Unify employee records and augment them with AI insights—skill mapping, role suitability scoring, and automated career path recommendations.",
  },
  {
    icon: (
      <CreditCard size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Intelligent Payroll Automation",
    subTitle:
      "Automate payroll with AI-driven error detection, compliance checks, tax logic, and real-time reconciliation for seamless payouts.",
  },
  {
    icon: (
      <CalendarCheck2 size={80} color="#03044e" style={{ padding: '12px' }} />
    ),
    title: "AI Attendance & Shift Optimization",
    subTitle:
      "Smart attendance tracking powered by machine learning that predicts absentee trends, optimizes shift planning, and reduces manual corrections.",
  },
  {
    icon: (
      <UserPlus size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI Recruitment & Smart Onboarding",
    subTitle:
      "Accelerate hiring with AI-based resume ranking, screening automation, interview scheduling, and personalized onboarding journeys.",
  },
  {
    icon: (
      <TrendingUp size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Driven Performance Management",
    subTitle:
      "Use explainable AI to provide transparent appraisals, performance scores, growth suggestions, and promotion readiness indicators.",
  },
  {
    icon: (
      <UserCircle2 size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Human-Centered AI Decisions",
    subTitle:
      "AI supports your HR decisions—never replaces them. HR teams can override AI, validate insights, and fine-tune recommendations.",
  },
];

const AiHrmsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI-HRMS | AI Human Resource Management System | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI-HRMS uses machine learning to modernize HR—smart attendance, predictive analytics, automated payroll, and AI-enabled workforce planning."
        />
        <meta
          name="keywords"
          content="AI HRMS, HR Automation, AI Payroll, AI Recruitment, Employee Analytics, Predictive HR, Brvteck HRMS"
        />
        <meta name="author" content="Brvteck" />
        <meta property="og:title" content="AI-HRMS | Brvteck" />
        <meta
          property="og:description"
          content="Transform HR with Brvteck's AI-HRMS: intelligent recruitment, automated payroll, smart attendance, and predictive workforce insights."
        />
        <meta property="og:image" content="/img/products/hrms1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/ai-hrms"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-HRMS | Brvteck" />
        <meta
          name="twitter:description"
          content="Brvteck’s AI-HRMS automates payroll, enhances recruitment, predicts performance trends, and ensures secure people management."
        />
        <meta name="twitter:image" content="/img/products/hrms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/ai-hrms" />
      </Head>

      <PageTitle
<<<<<<< HEAD
        pageTitle="AI-Based Human Resource Management System"
        pagesub="products 😍"
=======
        pageTitle="AI Human Resource Management System"
        pagesub="products"
>>>>>>> 35c9d7984d4dd2104b6c4dec2280e082b060ecbb
        pageTop="Our"
      />
      <Header />

      {/* HERO SECTION */}
      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">

            {/* Image */}
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={srImg} alt="AI HRMS" width={500} height={500} />
              </div>
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    AI for Modern HR
                    <span className="badge bg-secondary text-white">Experts</span>
                  </div>
                  <h2 className="heading_text">
                    Next-Generation AI Human Resource Management
                  </h2>
                  <p className="heading_description mb-0">
                    Transform HR operations with AI automation, predictive insights,
                    and personalized employee experiences—reducing manual work and
                    enabling strategic data-driven decisions.
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

      {/* FEATURE CARDS */}
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

      {/* KEY FEATURES */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">

            {/* Image */}
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="AI HRMS Features" width={600} height={400} />
              </div>
            </div>

            {/* List */}
            <div className="col-lg-6">
              <div className="ps-lg-5">

                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Key</span>
                    features
                  </div>
                  <h2 className="heading_text mb-0">
                    Core Benefits of Our AI-HRMS
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

export default AiHrmsPage;
