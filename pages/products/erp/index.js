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
  Settings,
  Sliders,
  Link2,
  LifeBuoy,
  Users,
  BarChart2,
  Gauge,
  FileText,
  BarChart3,
  Workflow,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

const srImg = "/img/products/erp1.jpg"; // main
const wImg = "/img/products/erp2.jpg"; // key

const PolicyIcons = [
  {
    title: "AI-Powered Centralized Data",
    icon: FileText,
  },
  {
    title: "Intelligent Operational Efficiency",
    icon: Gauge,
  },
  {
    title: "Predictive Analytics & Forecasting",
    icon: BarChart3,
  },
  {
    title: "Adaptive Workflow Automation",
    icon: Workflow,
  },
  {
    title: "AI-Driven Secure Access",
    icon: ShieldCheck,
  },
];

const Policy = [
  {
    icon: (
      <Settings
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-First ERP Implementation",
    subTitle:
      "Deploy ERP systems with built-in AI models that automate processes, reduce manual work, and accelerate time-to-value.",
  },
  {
    icon: (
      <Sliders
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Domain-Specific AI Customization",
    subTitle:
      "Customize machine learning models and intelligent agents to match your industry workflows and KPIs for measurable ROI.",
  },
  {
    icon: (
      <Link2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Seamless AI Integration",
    subTitle:
      "Integrate AI services with existing systems (CRM, SCM, HRMS, finance) to centralize intelligence and enable cross-system insights.",
  },
  {
    icon: (
      <LifeBuoy
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI Support, Monitoring & MLOps",
    subTitle:
      "End-to-end model monitoring, continuous retraining pipelines, and operational support to keep your AI models accurate and compliant.",
  },
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
    title: "Human-in-the-Loop Training",
    subTitle:
      "Train teams to work with AI — from interpreting model outputs to providing feedback that improves model performance over time.",
  },
  {
    icon: (
      <BarChart2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI Analytics & Explainability",
    subTitle:
      "Actionable dashboards with explainable AI insights, anomaly detection, and automated alerts to support data-driven decisions.",
  },
];

const AiErpPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>
          AI-Enterprise Resource Planning | Intelligent ERP | Brvteck
        </title>
        <meta
          name="description"
          content="Brvteck AI-ERP combines enterprise resource planning with machine learning: predictive analytics, adaptive automation, and intelligent decision support."
        />
        <meta
          name="keywords"
          content="AI ERP, Intelligent ERP, Predictive Analytics ERP, Brvteck AI, ERP with Machine Learning, Adaptive Workflow, MLOps ERP"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Enterprise Resource Planning | Brvteck"
        />
        <meta
          property="og:description"
          content="Optimize operations with Brvteck's AI-driven ERP: automation, forecasting, and intelligent workflows for modern enterprises."
        />
        <meta property="og:image" content="/img/products/erp1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/ai-erp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI-Enterprise Resource Planning | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Brvteck AI-ERP delivers predictive analytics, intelligent automation, and secure AI operations for enterprise-scale transformation."
        />
        <meta name="twitter:image" content="/img/products/erp1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/ai-erp" />
      </Head>

      <PageTitle
        pageTitle="AI-Enterprise Resource Planning Solutions"
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
                  alt="AI ERP Illustration"
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
                      IT Experts
                    </span>
                  </div>
                  <h2 className="heading_text">
                    AI-Enterprise Resource Planning
                  </h2>
                  <p className="heading_description mb-0">
                    Transform your enterprise with AI-native ERP: intelligent
                    forecasts, automated decision flows, and context-aware
                    assistants that help teams move faster and focus on
                    strategic work.
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
                <Image src={wImg} alt="AI ERP" width={600} height={400} />
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
                    Key Benefits of Our AI-ERP
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

export default AiErpPage;
