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
  Settings2,
  Puzzle,
  Network,
  BrainCog,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Bot,
  ServerCog,
  FolderGit2,
} from "lucide-react";

const ApplicationIntegrationPage = () => {
  const [isOpen, setOpen] = useState(false);

  const aboutImage = "/img/services/app/a3.jpg";
  const featureImage = "/img/services/app/a1.jpg";

  const PolicyIcons = [
    {
      title: "Streamlined Workflows",
      icon: Settings2,
    },
    {
      title: "System Connectivity",
      icon: Network,
    },
    {
      title: "Smart Orchestration",
      icon: BrainCog,
    },
    {
      title: "Custom Middleware",
      icon: FolderGit2,
    },
    {
      title: "End-to-End Automation",
      icon: Bot,
    },
  ];

  const PolicyContent = [
    {
      title: "Unified Data Ecosystem",
      subTitle:
        "Integrate applications across your ecosystem to ensure data consistency and eliminate silos.",
      icon: Puzzle,
    },
    {
      title: "Secure Integrations",
      subTitle:
        "Ensure all integrations are protected with enterprise-grade security protocols and access controls.",
      icon: ShieldCheck,
    },
    {
      title: "Rapid Deployment",
      subTitle:
        "Our integration services ensure minimal downtime and faster go-live using agile methodologies.",
      icon: Rocket,
    },
    {
      title: "Scalable Architecture",
      subTitle:
        "Support growing workloads and users by building scalable integration frameworks.",
      icon: ServerCog,
    },
    {
      title: "Increased Visibility",
      subTitle:
        "Monitor application health and data flow with real-time dashboards and alerts.",
      icon: TrendingUp,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | Application Integration Services</title>
        <meta
          name="description"
          content="Seamlessly connect your business applications and automate workflows with BRV Technologies' Application Integration services. Accelerate digital transformation with secure, scalable solutions."
        />
        <meta
          name="keywords"
          content="Application Integration, API Integration, Middleware, BRV Technologies, System Orchestration, Enterprise Integration, Hyderabad IT Services, Digital Transformation"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/application-integration"
        />
        <meta
          property="og:title"
          content="BRV Technologies | Application Integration Services"
        />
        <meta
          property="og:description"
          content="BRV Technologies helps businesses unify applications, automate data flows, and achieve digital agility through secure and scalable integration services."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/application-integration"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | Application Integration Services"
        />
        <meta
          property="twitter:description"
          content="Secure and scalable application integration for unified enterprise systems. Powered by BRV Technologies."
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
          pageTitle="Application Integration"
          pagesub="Integration Services"
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
                    alt="Application Integration Illustration"
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
                      <span className="badge bg-secondary text-white">
                        Integration
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Seamless Application Integration for Agile Enterprises
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> offers expert application
                      integration services to connect your business processes,
                      data, and systems into a single unified digital platform.
                      We help you automate, innovate, and grow faster.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Break down data silos with unified platforms
                      </li>
                      <li className="mb-2">
                        • Ensure secure and scalable integrations
                      </li>
                      <li className="mb-2">
                        • Automate repetitive workflows for efficiency
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
                    alt="Application Integration Features"
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
                      Integration-First Approach for Digital Transformation
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

export default ApplicationIntegrationPage;
