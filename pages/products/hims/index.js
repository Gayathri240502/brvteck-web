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
  Hospital,
  Calendar,
  FileText,
  CreditCard,
  Pill,
  FlaskConical,
  Gauge,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const srImg = "/img/products/hms.jpg"; 
const wImg = "/img/products/hms1.jpg"; 

// AI-Focused Key Benefits
const PolicyIcons = [
  {
    title: "Predictive Operational Intelligence",
    icon: Gauge,
  },
  {
    title: "Deeper Clinical Context with AI Insights",
    icon: FileText,
  },
  {
    title: "Prescriptive Analytics for Hospital Planning",
    icon: BarChart3,
  },
  {
    title: "Autonomous AI-Driven Workflows",
    icon: Workflow,
  },
  {
    title: "Automated RCM with Anomaly Detection",
    icon: CreditCard,
  },
  {
    title: "AI-Strengthened Data Security & Compliance",
    icon: ShieldCheck,
  },
];

// AI-Enhanced Core Modules
const Policy = [
  {
    icon: (
      <Hospital
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Powered Administration & Predictive Reporting",
    subTitle:
      "Enhance hospital administration with AI models that forecast patient flow, anticipate equipment servicing needs, and deliver real-time operational insights—driving proactive decision-making and optimized performance.",
  },
  {
    icon: (
      <Calendar
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "Intelligent Scheduling & Resource Optimization",
    subTitle:
      "Leverage machine learning to automate appointment booking and streamline staff allocation. Our AI engine predicts peak hours, reduces no-shows, and ensures optimal utilization of doctors, rooms, and medical equipment.",
  },
  {
    icon: (
      <FileText
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Enhanced EMR with Clinical Understanding",
    subTitle:
      "Transform traditional EMRs with AI-driven NLP that extracts insights from clinical notes, supports diagnostic decision-making, and curates personalized treatment recommendations for improved patient outcomes.",
  },
  {
    icon: (
      <CreditCard
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "Automated Revenue Cycle with AI Risk Scoring",
    subTitle:
      "Accelerate billing, coding, and claims with intelligent automation. Detect anomalies, prevent fraud, and ensure cleaner claim submissions using AI-powered pattern recognition and validation algorithms.",
  },
  {
    icon: (
      <Pill
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Smart Pharmacy & Safe Prescriptions",
    subTitle:
      "Manage stock efficiently with AI-driven demand forecasting. Reduce dispensing errors with automated drug-interaction checks, dose optimization alerts, and real-time insights from integrated EMR data.",
  },
  {
    icon: (
      <FlaskConical
        size={80}
        color="#03044e"
        style={{ padding: "12px" }}
      />
    ),
    title: "AI-Accelerated Diagnostics & Lab Intelligence",
    subTitle:
      "Speed up diagnostic processes using AI-assisted image analysis, automated lab prioritization, and intelligent result interpretation—reducing delays, minimizing manual errors, and elevating accuracy.",
  },
];

const HimsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI-Powered Hospital Information Management System | Smart AI-HIMS | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI-HIMS combines advanced machine learning, automation, and clinical intelligence to transform hospital workflows, enhance patient care, and deliver predictive healthcare operations."
        />
        <meta
          name="keywords"
          content="AI HIMS, Smart HIMS, AI Hospital System, Predictive Healthcare, AI EMR, ML Hospitals, Digital Health, Brvteck AI"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Powered Hospital Information Management System | Smart AI-HIMS | Brvteck"
        />
        <meta
          property="og:description"
          content="Experience the next-generation AI-driven hospital management ecosystem that delivers predictive, automated, and patient-centric healthcare operations."
        />
        <meta property="og:image" content="/img/products/hms.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/ai-hims"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI-Powered Hospital Information Management System | Brvteck AI-HIMS"
        />
        <meta
          name="twitter:description"
          content="A future-ready AI-HIMS built for predictive operations, intelligent care, and autonomous hospital management."
        />
        <meta name="twitter:image" content="/img/products/hms.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/ai-hims" />
      </Head>

      <PageTitle
        pageTitle="AI-Hospital Information Management System"
        pagesub="products 💡"
        pageTop="Our"
      />

      <Header />

      {/* Hero Section */}
      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image
                  src={srImg}
                  alt="AI HIMS Illustration"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are Healthcare
                    <span className="badge bg-secondary text-white">
                      AI Innovators 💡
                    </span>
                  </div>

                  <h2 className="heading_text">
                    Intelligent AI-Hospital Information Management System
                  </h2>

                  <p className="heading_description mb-0">
                    Step into the future of healthcare with a HIMS powered by 
                    predictive AI, clinical intelligence, and automated workflows. 
                    Our platform transforms hospitals from **reactive to proactive**, 
                    enabling smarter decision-making, optimized operations, and 
                    safer, more personalized patient care.
                  </p>
                </div>

                <Link onClick={ClickHandler} href="/service" className="btn">
                  <span className="btn_label" data-text="Talk to an AI Expert">
                    Talk to an AI Expert
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

      {/* AI Modules */}
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

      {/* AI Benefits Section */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image
                  src={wImg}
                  alt="AI HIMS Interface"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">AI</span>
                    Benefits
                  </div>
                  <h2 className="heading_text mb-0">
                    Key Advantages of Our AI-HIMS Ecosystem
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

      {/* CTA */}
      <main className="page_content about-page">
        <section
          className="calltoaction_section parallaxie"
          style={{
            backgroundImage: `url(${"/img/startup/startup.jpg"})`,
          }}
        >
          <div className="container text-center">
            <div className="heading_block text-white">
              <h2 className="heading_text">Ready to Elevate Your Hospital with AI?</h2>
              <p className="heading_description mb-0">
                Let our team help you implement an intelligent hospital system 
                that adapts, learns, and continuously improves your workflow efficiency 
                and clinical outcomes.
              </p>
            </div>

            <Link
              onClick={ClickHandler}
              href="https://himsapp.ai/"
              className="btn btn-primary"
            >
              <span className="btn_label" data-text="Launch Your AI-HIMS Pilot!">
                Launch Your AI-HIMS Pilot!
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HimsPage;
