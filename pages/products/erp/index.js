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
} from "lucide-react";

const srImg = "/img/products/erp1.jpg"; // main image
const wImg = "/img/products/erp2.jpg"; // features image

// ⭐ Key AI ERP Features List
const PolicyIcons = [
  {
    title: "AI-Powered Unified Data Engine",
    icon: FileText,
  },
  {
    title: "Intelligent Process Automation",
    icon: Gauge,
  },
  {
    title: "Predictive Business Forecasting",
    icon: BarChart3,
  },
  {
    title: "Smart Workflow Orchestration",
    icon: Workflow,
  },
  {
    title: "AI-Governed Security & Compliance",
    icon: ShieldCheck,
  },
];

// ⭐ AI ERP Service Cards
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
    title: "AI-Based ERP Implementation",
    subTitle:
      "Deploy intelligent ERP systems designed with AI at the core—automating operations, reducing manual dependency, and improving business efficiency.",
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
    title: "Customized AI ERP Modules",
    subTitle:
      "Tailor ERP modules such as Finance, HRMS, Inventory, SCM, and Production using advanced AI models aligned to real business workflows.",
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
    title: "AI Integration Across Enterprise",
    subTitle:
      "Integrate AI with CRM, POS, WMS, HRMS, SCM, and Finance modules for unified insights, real-time intelligence, and automated decision support.",
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
    title: "AI Monitoring & MLOps for ERP",
    subTitle:
      "Ensure continuous optimization through AI-driven monitoring, model retraining, anomaly detection, and automated workflow validation.",
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
    title: "AI Adoption & Team Enablement",
    subTitle:
      "Enable your workforce with AI-enabled ERP training, human-in-the-loop systems, and support to maximize productivity across departments.",
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
    title: "AI Insights & Adaptive Dashboards",
    subTitle:
      "Access predictive dashboards, intelligent reports, and automated alerts for faster, smarter, and data-driven decision-making.",
  },
];

const AiErpPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          AI-Based ERP Solutions | Intelligent Enterprise Automation | Brvteck
        </title>

        <meta
          name="description"
          content="Brvteck AI-ERP empowers businesses with intelligent automation, predictive analytics, unified operations, and AI-driven decision-making."
        />

        <meta
          name="keywords"
          content="AI ERP, AI-based ERP, intelligent ERP, automated ERP, predictive ERP, ERP with AI, unified ERP, smart enterprise automation"
        />

        <meta name="author" content="Brvteck" />

        <meta
          property="og:title"
          content="AI-Based ERP Solutions | Brvteck"
        />
        <meta
          property="og:description"
          content="Modern AI-based ERP that delivers predictive forecasting, smart automation, and intelligent resource planning for enterprises."
        />
        <meta property="og:image" content="/img/products/erp1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/ai-erp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://www.brvteck.com/products/ai-erp" />
      </Head>

      {/* Page Title */}
      <PageTitle
        pageTitle="AI-Based Enterprise Resource Planning"
        pagesub="products"
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
                    AI-Powered
                    <span className="badge bg-secondary text-white">
                      ERP Solutions
                    </span>
                  </div>

                  <h2 className="heading_text">
                    Transform Your Business with AI-Driven ERP
                  </h2>

                  <p className="heading_description mb-0">
                    Our AI-based ERP system combines operational automation with
                    predictive intelligence—optimizing workflows, reducing
                    errors, and enabling real-time smart decision-making across
                    departments.
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

      {/* Feature Cards Section */}
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
            {/* Image */}
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="AI ERP Features" width={600} height={400} />
              </div>
            </div>

            {/* Features List */}
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Key</span>
                    features
                  </div>
                  <h2 className="heading_text mb-0">
                    Key Advantages of Our AI-Based ERP
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

      {/* CTA + Footer */}
      <main className="page_content about-page">
        <CtaSection />
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AiErpPage;
