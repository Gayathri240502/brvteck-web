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

const srImg = "/img/products/hms.jpg"; //main
const wImg = "/img/products/hms1.jpg"; //key

const PolicyIcons = [
  {
    title: "Operational Efficiency",
    icon: Gauge,
  },
  {
    title: "Accurate Patient Data",
    icon: FileText,
  },
  {
    title: "Real-Time Analytics",
    icon: BarChart3,
  },
  {
    title: "Integrated Healthcare Workflows",
    icon: Workflow,
  },
  {
    title: "Automated Billing & Insurance",
    icon: CreditCard,
  },
];
const Policy = [
  {
    icon: (
      <Hospital
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Hospital Administration & Reporting",
    subTitle:
      "Optimize hospital administration with real-time reporting and analytics to support data-driven decision-making and resource management.",
  },
  {
    icon: (
      <Calendar
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Patient Registration & Scheduling",
    subTitle:
      "Streamline patient registration and appointment scheduling with an intuitive interface, ensuring seamless coordination and reduced waiting times.",
  },
  {
    icon: (
      <FileText
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Electronic Medical Records (EMR)",
    subTitle:
      "Maintain comprehensive, secure, and accessible electronic medical records for patients, enabling accurate diagnosis and improved continuity of care.",
  },
  {
    icon: (
      <CreditCard
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Billing & Insurance Management",
    subTitle:
      "Simplify billing processes and insurance claim management with automated workflows, reducing errors and ensuring timely reimbursements.",
  },
  {
    icon: (
      <Pill
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Pharmacy Management",
    subTitle:
      "Manage pharmacy inventory, prescriptions, and dispensing seamlessly while ensuring compliance with regulations and minimizing errors.",
  },
  {
    icon: (
      <FlaskConical
        size={80}
        color="#03044e"
        style={{
          // backgroundColor: "#eef2ff",
          // borderRadius: "50%",
          padding: "12px",
        }}
      />
    ),
    title: "Laboratory & Diagnostics Integration",
    subTitle:
      "Integrate diagnostic services and lab workflows for efficient report generation, tracking, and result analysis.",
  },
];

const HimsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>Hospital Information Management System | HIMS | Brvteck</title>
        <meta
          name="description"
          content="Brvteck's Hospital Information Management System (HIMS) streamlines healthcare operations, improves patient care, and automates workflows for hospitals and clinics."
        />
        <meta
          name="keywords"
          content="HIMS, Hospital Information Management System, Healthcare IT, Brvteck, Hospital Management, Patient Data, Healthcare Automation"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="Hospital Information Management System | HIMS | Brvteck"
        />
        <meta
          property="og:description"
          content="Transform healthcare delivery with Brvteck's HIMS: operational efficiency, patient data, analytics, and more."
        />
        <meta property="og:image" content="/img/products/hms.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/hims"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hospital Information Management System | HIMS | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Streamline hospital operations and patient care with Brvteck's HIMS."
        />
        <meta name="twitter:image" content="/img/products/hms.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/hims" />
      </Head>
      <PageTitle
        pageTitle="Hospital Information Management System"
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
                    We Are Healthcare
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Hospital Information Management System
                  </h2>
                  <p className="heading_description mb-0">
                    Transform healthcare delivery with our comprehensive
                    hospital management system, designed to streamline
                    operations, enhance patient care, and improve efficiency.
                  </p>
                </div>
                <Link onClick={ClickHandler} href="/service" className="btn">
                  <span className="btn_label" data-text="Talk to an Expart">
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
                <Image src={wImg} alt="HIMS" width={600} height={400} />
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
                    Key Benefits of Our HMS Solutions
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

export default HimsPage;
