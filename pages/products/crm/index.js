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
    title: "Sales Automation",
    icon: Gauge,
  },
  {
    title: "Customer Data Management",
    icon: FileText,
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
  },
  {
    title: "Secure Data Handling",
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
    title: "CRM Implementation",
    subTitle:
      "Enhance customer engagement with tailored CRM implementation for your business. Streamline processes and improve customer relationships effectively.",
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
    title: "CRM Migration",
    subTitle:
      "Seamless migration to modern CRM platforms for better performance and scalability. Empower your team with advanced tools to drive customer satisfaction.",
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
    title: "CRM Integration",
    subTitle:
      "Integrate CRM solutions with existing systems for unified workflows and data insights. Maximize efficiency and optimize customer management.",
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
    title: "CRM Customization",
    subTitle:
      "Tailor CRM functionalities to meet the specific needs of your business. Ensure that your CRM aligns with your workflow and enhances productivity.",
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
    title: "CRM Analytics",
    subTitle:
      "Leverage powerful analytics to gain insights into customer behavior, preferences, and trends. Make data-driven decisions to optimize your strategies.",
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
    title: "CRM Training & Support",
    subTitle:
      "Equip your team with the knowledge and skills to use CRM tools effectively. Benefit from ongoing support to ensure smooth operations and maximize ROI.",
  },
];

const CrmPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>
          CRM Solutions | Customer Relationship Management | Brvteck
        </title>
        <meta
          name="description"
          content="Brvteck CRM solutions streamline customer management, boost sales, and improve business efficiency. Implementation, migration, integration, and customization for your business."
        />
        <meta
          name="keywords"
          content="CRM, Customer Relationship Management, CRM Solutions, Brvteck, CRM Implementation, CRM Integration, CRM Migration, CRM Customization, CRM Analytics"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="CRM Solutions | Customer Relationship Management | Brvteck"
        />
        <meta
          property="og:description"
          content="Transform your business with Brvteck's CRM solutions: sales automation, analytics, integration, and more."
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
          content="CRM Solutions | Customer Relationship Management | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Streamline customer management and boost sales with Brvteck CRM solutions."
        />
        <meta name="twitter:image" content="/img/products/crm1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/crm" />
      </Head>
      <PageTitle
        pageTitle="Customer Relationship Management"
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
                  alt="Service Cartoon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are CRM
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Customer Relationship Management
                  </h2>
                  <p className="heading_description mb-0">
                    Transform your business with our CRM solutions, designed to
                    streamline customer interactions, boost sales, and improve
                    overall efficiency.
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
                <Image src={wImg} alt="CRM" width={600} height={400} />
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
                    Key Benefits of Our CRM Solutions
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
