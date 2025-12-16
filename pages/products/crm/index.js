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

const srImg = "/img/products/crm1.jpg"; 
const wImg = "/img/products/crm2.jpg"; 

const PolicyIcons = [
  { title: "AI-Driven Sales Intelligence", icon: Gauge },
  { title: "Smart Customer Insights", icon: FileText },
  { title: "Predictive AI Analytics", icon: BarChart3 },
  { title: "Automated Workflows", icon: Workflow },
  { title: "Secure AI Data Management", icon: ShieldCheck },
];

const Policy = [
  {
    icon: (
      <Hospital size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI CRM Implementation",
    subTitle:
      "Deploy advanced AI-powered CRM solutions that automate everyday tasks, enhance customer engagement, and optimize your business performance.",
  },
  {
    icon: (
      <Calendar size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI CRM Migration",
    subTitle:
      "Seamlessly migrate from legacy systems to modern AI-enabled CRM platforms for improved scalability, speed, and accuracy.",
  },
  {
    icon: (
      <FileText size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI CRM Integrations",
    subTitle:
      "Integrate your CRM with AI tools to unlock automation, intelligent recommendations, and data-driven customer insights.",
  },
  {
    icon: (
      <CreditCard size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "Custom AI CRM Solutions",
    subTitle:
      "Get tailor-made AI CRM modules designed for your business needs, improving productivity and optimizing workflows.",
  },
  {
    icon: (
      <Pill size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI Customer Analytics",
    subTitle:
      "Leverage predictive analytics to forecast customer needs, personalize experiences, and grow your business intelligently.",
  },
  {
    icon: (
      <FlaskConical size={80} color="#03044e" style={{ padding: "12px" }} />
    ),
    title: "AI CRM Training & Support",
    subTitle:
      "Empower your team with expert-led AI CRM training and continuous support for maximum adoption and ROI.",
  },
];

const CrmPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>AI CRM Solutions | Intelligent CRM Automation | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI CRM solutions automate customer engagement, deliver predictive insights, and help businesses achieve smarter decision-making."
        />
        <meta
          name="keywords"
          content="AI CRM, Smart CRM system, AI customer management, CRM automation, predictive CRM, Brvteck AI CRM"
        />
        <meta property="og:title" content="AI CRM Solutions | Brvteck" />
        <meta
          property="og:description"
          content="Transform your CRM with AI-driven automation, insights, and intelligent customer engagement."
        />
        <meta property="og:image" content="/img/products/crm1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/products/crm" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageTitle
        pageTitle="AI-Powered CRM Solutions"
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
                <Image src={srImg} alt="AI CRM" width={500} height={500} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Build Next-Gen
                    <span className="badge bg-secondary text-white">
                      AI CRM Systems 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">AI-Driven CRM for Modern Businesses</h2>
                  <p className="heading_description mb-0">
                    Boost your business with AI-powered CRM solutions designed
                    to streamline tasks, analyze customer behavior, and offer
                    predictive insights for smarter decision-making.
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
                  <p style={{ fontSize: "0.95rem", color: "#444" }}>{policy.subTitle}</p>
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
                <Image src={wImg} alt="AI CRM Features" width={600} height={400} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">AI CRM</span>
                    Features
                  </div>
                  <h2 className="heading_text mb-0">
                    Benefits of Our AI-Powered CRM
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
