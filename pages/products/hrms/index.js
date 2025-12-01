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
  Gauge,
  FileText,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const srImg = "/img/products/hrms1.jpg"; // main
const wImg = "/img/products/hrms2.jpg"; // key

const PolicyIcons = [
  {
    title: "AI Employee Self-Service",
    icon: UserCircle2,
  },
  {
    title: "Payroll Optimization (AI)",
    icon: CreditCard,
  },
  {
    title: "Smart Attendance & Leave",
    icon: CalendarCheck2,
  },
  {
    title: "Predictive Performance Analytics",
    icon: BarChart3,
  },
  {
    title: "Privacy-first Secure Data",
    icon: ShieldCheck,
  },
];

const Policy = [
  {
    icon: (
      <Users
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-Driven Employee Management",
    subTitle:
      "Centralize employee records and enrich them with AI-derived insights — skills mapping, role-fit scoring, and career pathing recommendations.",
  },
  {
    icon: (
      <CreditCard
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Automated Payroll Reconciliation",
    subTitle:
      "Use intelligent rules and anomaly detection to automate payroll calculation, tax adjustments, and exception handling with audit trails.",
  },
  {
    icon: (
      <CalendarCheck2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Smart Attendance & Leave Management",
    subTitle:
      "AI models that detect patterns, reduce absenteeism, and suggest optimized shift planning while syncing with timekeeping devices.",
  },
  {
    icon: (
      <UserPlus
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Intelligent Recruitment & Onboarding",
    subTitle:
      "AI-assisted candidate screening, interview scheduling, and personalized onboarding flows that speed up time-to-productivity.",
  },
  {
    icon: (
      <TrendingUp
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Explainable Performance Management",
    subTitle:
      "Combine continuous feedback with explainable AI to provide fair appraisals, personalized development plans, and promotion readiness scoring.",
  },
  {
    icon: (
      <UserCircle2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Human-in-the-Loop HR",
    subTitle:
      "Keep people in control: HR professionals can review, override, and teach models so AI augments decisions without removing human accountability.",
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
          content="Brvteck AI-HRMS applies machine learning to HR: predictive attrition, automated payroll, intelligent onboarding, and privacy-first employee analytics."
        />
        <meta
          name="keywords"
          content="AI HRMS, Intelligent HRMS, Predictive HR, Brvteck AI, HR Automation, Payroll AI, Employee Analytics"
        />
        <meta name="author" content="Brvteck" />
        <meta property="og:title" content="AI-HRMS | Brvteck" />
        <meta
          property="og:description"
          content="Transform HR with Brvteck's AI-HRMS: automated payroll, predictive analytics, intelligent recruitment, and explainable performance insights."
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
          content="Brvteck AI-HRMS delivers predictive analytics, payroll automation, smart attendance, and secure employee data handling for modern organizations."
        />
        <meta name="twitter:image" content="/img/products/hrms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/ai-hrms" />
      </Head>

      <PageTitle
        pageTitle="AI Human Resource Management System"
        pagesub="products"
        pageTop="Our"
      />
      <Header />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image
                  src={srImg}
                  alt="AI HRMS Illustration"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are AI
                    <span className="badge bg-secondary text-white">
                      HR Experts
                    </span>
                  </div>
                  <h2 className="heading_text">
                    AI Human Resource Management System
                  </h2>
                  <p className="heading_description mb-0">
                    Modernize HR with AI: reduce administrative load, predict
                    workforce needs, and deliver fair, explainable people
                    decisions.
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

      {/* Key Features Section */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="AI HRMS" width={600} height={400} />
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
                    Key Benefits of Our AI-HRMS
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
