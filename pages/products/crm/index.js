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

const srImg = "/img/products/crm1.jpg"; // main
const wImg = "/img/products/crm2.jpg"; // key

const PolicyIcons = [
  {
    title: "AI-Driven Sales Automation",
    icon: Gauge,
  },
  {
    title: "Smart Customer Data Insights",
    icon: FileText,
  },
  {
    title: "Predictive Analytics & Reporting",
    icon: BarChart3,
  },
  {
    title: "AI-Enabled Workflow Automation",
    icon: Workflow,
  },
  {
    title: "Secure AI-Based Data Handling",
    icon: ShieldCheck,
  },
];

const Policy = [
  {
    icon: (
      <Hospital
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-Based CRM Implementation",
    subTitle:
      "Integrate powerful AI-driven CRM systems that automate customer engagement, improve decision-making, and enhance overall business performance.",
  },
  {
    icon: (
      <Calendar
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-Powered CRM Migration",
    subTitle:
      "Smooth migration to intelligent CRM platforms with machine-learning capabilities that deliver speed, accuracy, and future-ready performance.",
  },
  {
    icon: (
      <FileText
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-Integrated CRM",
    subTitle:
      "Connect your CRM with advanced AI tools to enable automation, smart recommendations, and unified data visibility across the organization.",
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
    title: "Custom AI CRM Solutions",
    subTitle:
      "Customize CRM processes with AI-driven features to match your business needs, improve productivity, and streamline complex workflows.",
  },
  {
    icon: (
      <Pill
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI-Powered CRM Analytics",
    subTitle:
      "Use predictive AI analytics to understand customer behavior, forecast trends, and make data-backed business decisions with confidence.",
  },
  {
    icon: (
      <FlaskConical
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "AI CRM Training & Support",
    subTitle:
      "Empower teams with hands-on AI CRM training and continuous expert support to maximize adoption, accuracy, and long-term ROI.",
  },
];

const CrmPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>
          AI-Based CRM Solutions | Intelligent Customer Management | Brvteck
        </title>
        <meta
          name="description"
          content="Brvteck AI-powered CRM solutions enhance customer experience, automate workflows, and deliver predictive insights using advanced machine learning."
        />
        <meta
          name="keywords"
          content="AI CRM, Artificial Intelligence CRM, Smart CRM Solutions, AI Automation, Predictive CRM, Brvteck AI CRM"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Based CRM Solutions | Intelligent Customer Management | Brvteck"
        />
        <meta
          property="og:description"
          content="Transform your business with AI-powered CRM: automation, insights, prediction, and smarter customer engagement."
        />
        <meta property="og:image" content="/img/products/crm1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/crm"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI-Based CRM Solutions | Intelligent Customer Management | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Enhance customer engagement and decision-making with AI-powered CRM solutions."
        />
        <meta name="twitter:image" content="/img/products/crm1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/crm" />
      </Head>
      <PageTitle
        pageTitle="AI-Powered Customer Relationship Management"
        pagesub="products 😍"
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
                  alt="AI CRM"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are AI-Based CRM
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    AI-Driven Customer Relationship Management
                  </h2>
                  <p className="heading_description mb-0">
                    Upgrade your business with AI-enhanced CRM solutions that automate tasks, deliver predictive insights, and elevate customer experiences with unmatched efficiency.
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
                <Image src={wImg} alt="AI CRM Features" width={600} height={400} />
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
                    Key Benefits of Our AI-Powered CRM
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

export default CrmPage;
