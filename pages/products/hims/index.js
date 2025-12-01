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
  ShieldCheck, // Retaining ShieldCheck for the AI-focused benefit
} from "lucide-react";

const srImg = "/img/products/hms.jpg"; //main
const wImg = "/img/products/hms1.jpg"; //key

// AI-Focused Policy Icons (Key Benefits)
const PolicyIcons = [
  {
    title: "Predictive Operational Efficiency",
    icon: Gauge,
  },
  {
    title: "Contextual Patient Data & Clinical Insights",
    icon: FileText,
  },
  {
    title: "Prescriptive Analytics for Resource Planning",
    icon: BarChart3,
  },
  {
    title: "Intelligent & Self-Adjusting Workflows",
    icon: Workflow,
  },
  {
    title: "Automated RCM with Anomaly Detection",
    icon: CreditCard,
  },
  {
    title: "Enhanced Data Security via Behavioral AI",
    icon: ShieldCheck, // New AI-focused benefit
  },
];

// AI-Enhanced Core Modules
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
    title: "AI-Driven Administration & Predictive Reporting",
    subTitle:
      "Optimize hospital administration using ML algorithms to forecast patient load, predict equipment maintenance needs, and provide real-time operational recommendations for maximum efficiency.",
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
    title: "Intelligent Scheduling & Resource Allocation",
    subTitle:
      "Streamline appointment scheduling by analyzing patient history and provider availability to minimize cancellations and optimize consultation slots. Includes AI-based staff shift planning.",
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
    title: "Cognitive Electronic Medical Records (EMR)",
    subTitle:
      "Maintain secure, comprehensive EMRs. Uses NLP to extract structured data from clinical notes and provides AI-powered clinical decision support for accurate diagnosis and personalized treatment paths.",
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
    title: "Automated Revenue Cycle Management (RCM) & Fraud Detection",
    subTitle:
      "Simplify billing and insurance with automated coding suggestions and claim submission. Uses AI to detect patterns indicative of billing errors or fraudulent activity, ensuring timely and accurate reimbursements.",
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
    title: "Smart Pharmacy Inventory & Prescription Safety",
    subTitle:
      "Manage inventory with demand forecasting to minimize waste and stockouts. Uses AI to cross-reference patient EMRs for drug-interaction warnings and dose recommendations, drastically enhancing prescription safety.",
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
    title: "AI-Accelerated Diagnostics & Lab Workflow",
    subTitle:
      "Integrate diagnostics and lab results. ML models aid in image analysis (e.g., radiology/pathology) for pre-screening and priority flagging, speeding up analysis and reducing human error.",
  },
];

const HimsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI-Powered Hospital Information Management System | Smart HIMS | Brvteck</title>
        <meta
          name="description"
          content="Brvteck's AI-HIMS leverages machine learning and automation to optimize clinical outcomes, predict resource needs, and revolutionize patient care for modern healthcare institutions."
        />
        <meta
          name="keywords"
          content="AI-HIMS, Predictive Healthcare, Machine Learning in Hospitals, Smart Hospital Management, Brvteck AI, Clinical Decision Support, Healthcare Automation"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Powered Hospital Information Management System | Smart HIMS | Brvteck"
        />
        <meta
          property="og:description"
          content="Revolutionize healthcare delivery with Brvteck's AI-HIMS: predictive analytics, automated workflows, and intelligent patient management."
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
          content="AI-Powered Hospital Information Management System | Smart HIMS | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Streamline hospital operations and patient care with Brvteck's AI-HIMS."
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

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image
                  src={srImg}
                  alt="AI Service Cartoon"
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
                      AI Pioneers 💡
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Intelligent Hospital Information Management System
                  </h2>
                  <p className="heading_description mb-0">
                    Transform healthcare from **reactive to predictive** with our state-of-the-art AI-Hospital Management System. Our platform utilizes **Machine Learning (ML)** and **Natural Language Processing (NLP)** to automate complex clinical and administrative tasks, offering personalized patient pathways, intelligent resource allocation, and unparalleled operational foresight.
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

      {/* Feature Cards (AI-Enhanced) */}
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
      {/* Key Features Section (AI-Benefits) */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="AI-HIMS Interface" width={600} height={400} />
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
                    Key Benefits of Our AI-HIMS Solutions
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
        {/* Call to Action (AI-Focused) */}
          <section
              className="calltoaction_section parallaxie"
              style={{
                backgroundImage: `url(${"/img/startup/startup.jpg"})`,
              }}
            >
              <div className="container text-center">
                <div className="heading_block text-white">
                  <h2 className="heading_text">Ready to Transform Healthcare with AI?</h2>
                  <p className="heading_description mb-0">
                    Our team of AI and healthcare experts is ready to implement a system that learns and adapts to your facility's unique needs, guaranteeing a future-proof investment.
                  </p>
                </div>
                <Link
                  onClick={ClickHandler}
                  href="https://himsapp.ai/"
                  className="btn btn-primary"
                >
                  <span className="btn_label" data-text="Launch Your AI-HIMS Pilot! ">
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