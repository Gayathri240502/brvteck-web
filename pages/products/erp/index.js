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
    title: "Centralized Data",
    icon: FileText,
  },
  {
    title: "Operational Efficiency",
    icon: Gauge,
  },
  {
    title: "Real-Time Analytics",
    icon: BarChart3,
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
  },
  {
    title: "Secure Access",
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
    title: "ERP Implementation",
    subTitle:
      "Seamless implementation of ERP systems to streamline your business processes and enhance organizational efficiency.",
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
    title: "ERP Customization",
    subTitle:
      "Tailor ERP solutions to meet your specific business needs, ensuring maximum ROI and a perfect fit for your operations.",
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
    title: "ERP Integration",
    subTitle:
      "Integrate ERP systems with existing business tools to centralize data, automate workflows, and enhance decision-making.",
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
    title: "ERP Support & Maintenance",
    subTitle:
      "Benefit from ongoing ERP support and maintenance services to ensure smooth operations, software updates, and issue resolution.",
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
    title: "ERP Training",
    subTitle:
      "Equip your team with the skills they need to fully leverage your ERP system, ensuring a smooth transition and maximizing productivity.",
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
    title: "ERP Analytics & Reporting",
    subTitle:
      "Utilize ERP analytics tools to gain insights into business performance, identify trends, and make data-driven decisions.",
  },
];

const ErpPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>ERP Solutions | Enterprise Resource Planning | Brvteck</title>
        <meta
          name="description"
          content="Brvteck ERP solutions streamline business operations, centralize data, automate workflows, and provide real-time analytics for growth and efficiency."
        />
        <meta
          name="keywords"
          content="ERP, Enterprise Resource Planning, ERP Solutions, Brvteck, ERP Implementation, ERP Integration, ERP Customization, ERP Analytics"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="ERP Solutions | Enterprise Resource Planning | Brvteck"
        />
        <meta
          property="og:description"
          content="Optimize your business with Brvteck's ERP solutions: implementation, integration, analytics, and more."
        />
        <meta property="og:image" content="/img/products/erp1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/erp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ERP Solutions | Enterprise Resource Planning | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Streamline your business with Brvteck ERP solutions for automation, analytics, and growth."
        />
        <meta name="twitter:image" content="/img/products/erp1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/erp" />
      </Head>
      <PageTitle
        pageTitle="Enterprise Resource Planning Solutions"
        pagesub="products 😍"
        pageTop="Our"
      />
      <Header />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={srImg} alt="ERP Cartoon" width={500} height={500} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are ERP
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">Enterprise Resource Planning</h2>
                  <p className="heading_description mb-0">
                    Streamline your business operations with our robust ERP
                    solutions, designed to integrate, automate, and optimize
                    every aspect of your enterprise.
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
                <Image src={wImg} alt="ERP" width={600} height={400} />
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
                    Key Benefits of Our ERP Solutions
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

export default ErpPage;
