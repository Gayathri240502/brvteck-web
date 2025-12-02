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

// ⭐ AI-Driven CRM Benefits
const PolicyIcons = [
  {
    title: "Predictive Customer Intelligence",
    icon: Gauge,
  },
  {
    title: "Deep Customer Context with AI Insights",
    icon: FileText,
  },
  {
    title: "Prescriptive Sales & Engagement Analytics",
    icon: BarChart3,
  },
  {
    title: "Autonomous CRM Workflows",
    icon: Workflow,
  },
  {
    title: "Automated Billing & Fraud Detection",
    icon: CreditCard,
  },
  {
    title: "AI-Enhanced Security & Compliance",
    icon: ShieldCheck,
  },
];

// ⭐ AI-CRM Modules
const Policy = [
  {
    icon: (
      <Hospital size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Powered Customer Management & Insights",
    subTitle:
      "Understand every customer deeply with machine learning models that analyze behavior, preferences, purchase history, and engagement patterns to enable hyper-personalized communication.",
  },
  {
    icon: (
      <Calendar size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Smart Lead Scheduling & Sales Automation",
    subTitle:
      "AI optimizes sales appointments, predicts high-intent time slots, reduces drop-offs, and automatically assigns the right sales resource to the right lead for maximum conversion.",
  },
  {
    icon: (
      <FileText size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Enhanced Contact Intelligence",
    subTitle:
      "Transform CRM data with NLP-driven analysis that detects sentiment, identifies customer intent, and highlights opportunities by scanning communication history and support interactions.",
  },
  {
    icon: (
      <CreditCard size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Optimized Billing & Revenue Automation",
    subTitle:
      "Boost revenue operations with AI-driven invoicing, automatic payment reminders, anomaly detection, and predictive churn scoring to safeguard recurring revenue streams.",
  },
  {
    icon: (
      <Pill size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Product Intelligence & Stock Forecasting",
    subTitle:
      "AI predicts product demand, identifies customer preferences, and alerts your team about fast-moving or low-performing items—driving smarter inventory and sales planning.",
  },
  {
    icon: (
      <FlaskConical size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI-Driven Campaigns & Customer Engagement",
    subTitle:
      "Run high-converting campaigns with machine learning models that segment audiences, recommend best communication channels, and auto-optimize message timing for increased engagement.",
  },
];

const DcrmPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI-Driven Customer Relationship Management System | Smart AI-CRM | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI-CRM delivers next-generation customer intelligence, automated sales processes, predictive analytics, and hyper-personalized customer engagement powered by machine learning."
        />
        <meta
          name="keywords"
          content="AI CRM, Smart CRM, Predictive CRM, Customer Intelligence, AI Automation, Sales AI, Brvteck CRM"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Driven Customer Relationship Management System | Smart AI-CRM | Brvteck"
        />
        <meta
          property="og:description"
          content="Unlock intelligent customer insights, automated sales workflows, predictive engagement, and 360° customer visibility with Brvteck's AI-powered CRM ecosystem."
        />
        <meta property="og:image" content="/img/products/hms.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/products/ai-crm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Driven Customer Relationship Management | Brvteck AI-CRM" />
        <meta
          name="twitter:description"
          content="A future-ready AI CRM platform that predicts customer needs, automates sales, and boosts engagement."
        />
        <meta name="twitter:image" content="/img/products/hms.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/ai-crm" />
      </Head>

      <PageTitle
        pageTitle="AI-Driven Customer Relationship Management"
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
                  alt="AI CRM Illustration"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are Customer
                    <span className="badge bg-secondary text-white">
                      AI Innovators 💡
                    </span>
                  </div>

                  <h2 className="heading_text">
                    Intelligent AI-CRM for Smart Customer Engagement
                  </h2>

                  <p className="heading_description mb-0">
                    Transform the way your business understands, engages, and retains customers.
                    Our AI-powered CRM enables predictive customer behavior insights, automated workflows,
                    hyper-personalization, and data-driven sales intelligence—delivering higher conversions
                    and stronger customer relationships.
                  </p>
                </div>

                <Link onClick={ClickHandler} href="/service" className="btn">
                  <span className="btn_label" data-text="Talk to an AI CRM Expert">
                    Talk to an AI CRM Expert
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

      {/* AI Modules Section */}
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
                  alt="AI CRM Interface"
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
                    Key Advantages of Our AI-CRM Ecosystem
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
              <h2 className="heading_text">Ready to Transform Your Customer Relationships with AI?</h2>
              <p className="heading_description mb-0">
                Let us implement a future-ready AI CRM that predicts, automates, and elevates every customer interaction.
              </p>
            </div>

            <Link
              onClick={ClickHandler}
              href="https://himsapp.ai/"
              className="btn btn-primary"
            >
              <span className="btn_label" data-text="Launch Your AI-CRM Pilot!">
                Launch Your AI-CRM Pilot!
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

export default DcrmPage;
