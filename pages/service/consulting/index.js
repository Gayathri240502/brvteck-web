"use client";

import React, { Fragment, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import {
  Users,
  Lightbulb,
  BarChart,
  ShieldCheck,
  Rocket,
  Handshake,
  LineChart,
  Target,
  Layers3,
  ClipboardCheck,
} from "lucide-react";

const ConsultingServicesPage = () => {
  const aboutImage = "/img/services/consulting/3.jpg";
  const featureImage = "/img/services/consulting/2.jpg";

  const PolicyIcons = [
    {
      title: "Strategic Planning",
      icon: Lightbulb,
    },
    {
      title: "Business Transformation",
      icon: BarChart,
    },
    {
      title: "Risk Management",
      icon: ShieldCheck,
    },
    {
      title: "Change Enablement",
      icon: Rocket,
    },
    {
      title: "Stakeholder Alignment",
      icon: Handshake,
    },
  ];

  const PolicyContent = [
    {
      title: "Tailored Business Strategy",
      subTitle:
        "Our experts design customized business strategies to meet your goals, market needs, and digital maturity.",
      icon: Target,
    },
    {
      title: "End-to-End Consultation",
      subTitle:
        "From discovery to execution, we provide full lifecycle consulting for sustained impact.",
      icon: Layers3,
    },
    {
      title: "Performance Analytics",
      subTitle:
        "Use actionable data insights to drive ROI, team productivity, and operational excellence.",
      icon: LineChart,
    },
    {
      title: "Compliance & Governance",
      subTitle:
        "Ensure your organization meets regulatory and industry standards with proper frameworks in place.",
      icon: ClipboardCheck,
    },
    {
      title: "People-Centric Approach",
      subTitle:
        "We drive change by aligning your teams and culture with long-term transformation goals.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | IT & Business Consulting Services</title>
        <meta
          name="description"
          content="Unlock your organization's full potential with BRV Technologies’ IT and Business Consulting. Strategy, transformation, analytics, and change management all under one roof."
        />
        <meta
          name="keywords"
          content="Consulting Services, IT Strategy, Business Consulting, Digital Transformation, BRV Technologies, Hyderabad Consulting, Business Analysis, Change Management, Risk Assessment"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/consulting"
        />
        <meta
          property="og:title"
          content="BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="og:description"
          content="Expert business and IT consulting services by BRV Technologies. From strategy to execution, we help organizations transform and thrive."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/consulting"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="twitter:description"
          content="Unlock business success through strategy, digital transformation, and IT consulting with BRV Technologies."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        {/* Contact and Location Metadata */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="info@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Consulting Services"
          pagesub="IT & Business Consulting"
          pageTop="Services"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImage}
                    alt="Consulting Services Team"
                    width={600}
                    height={400}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Consulting
                      <span className="badge bg-secondary text-white">IT</span>
                    </div>

                    <h1 className="heading_text">
                      Strategy. Execution. Growth. Empowered by Expertise.
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> provides IT and business
                      consulting services to streamline operations, drive
                      innovation, and improve profitability. We align business
                      goals with smart technology execution.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Define clear digital transformation roadmaps
                      </li>
                      <li className="mb-2">
                        • Align business strategy with tech execution
                      </li>
                      <li className="mb-2">
                        • Gain insights through data and analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="policy_section mb-5">
          <div className="container">
            <div className="row">
              {PolicyContent.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="col-lg-4 mb-5" key={index}>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon bg-secondary-subtle">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">{item.title}</h3>
                        <p className="mb-0">{item.subTitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="image_wrap">
                  <Image
                    src={featureImage}
                    alt="Consulting Key Features"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">
                        Key
                      </span>{" "}
                      Features
                    </div>
                    <h2 className="heading_text mb-0">
                      Practical Expertise to Fuel Strategic Growth
                    </h2>
                  </div>
                  <ul className="service_facilities_group unordered_list">
                    {PolicyIcons.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <li key={idx}>
                          <div className="iconbox_block layout_icon_left">
                            <span className="iconbox_icon">
                              <Icon size={40} strokeWidth={1.5} />
                            </span>
                            <span className="iconbox_content">
                              <strong className="iconbox_title mb-0">
                                {feature.title}
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
      </main>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ConsultingServicesPage;
