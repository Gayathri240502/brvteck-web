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
  Workflow,
  Settings,
  RefreshCcw,
  ShieldCheck,
  Cpu,
  Rocket,
  TerminalSquare,
  MonitorCheck,
  TrendingUp,
  Cloud,
} from "lucide-react";

const DevOpsServicesPage = () => {
  const aboutImage = "/img/services/devops/3.jpg";
  const featureImage = "/img/services/devops/2.jpg";

  const PolicyIcons = [
    { title: "CI/CD Automation", icon: Workflow },
    { title: "Configuration Management", icon: Settings },
    { title: "Infrastructure as Code", icon: TerminalSquare },
    { title: "Monitoring & Alerts", icon: MonitorCheck },
    { title: "Cloud-Native Integration", icon: Cloud },
  ];

  const PolicyContent = [
    {
      title: "Faster Release Cycles",
      subTitle:
        "Streamline development and operations with automated CI/CD pipelines for rapid deployment.",
      icon: Rocket,
    },
    {
      title: "Robust Infrastructure",
      subTitle:
        "Deploy scalable and resilient infrastructure using tools like Terraform, Ansible, and Docker.",
      icon: Cpu,
    },
    {
      title: "Real-Time Monitoring",
      subTitle:
        "Track application health and performance with proactive monitoring and logging solutions.",
      icon: TrendingUp,
    },
    {
      title: "Automated Rollbacks & Recovery",
      subTitle:
        "Ensure failover safety and version-controlled rollbacks with minimal downtime.",
      icon: RefreshCcw,
    },
    {
      title: "Security & Compliance",
      subTitle:
        "Incorporate DevSecOps practices for vulnerability detection, audits, and governance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | DevOps Services & CI/CD Automation</title>
        <meta
          name="description"
          content="Accelerate development and operations with BRV Technologies' DevOps services. Automate CI/CD, manage infrastructure, monitor applications, and secure your pipelines."
        />
        <meta
          name="keywords"
          content="DevOps, CI/CD, BRV Technologies, Infrastructure as Code, Ansible, Jenkins, Kubernetes, DevSecOps, DevOps Hyderabad, CloudOps, Agile Delivery"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/devops"
        />
        <meta
          property="og:title"
          content="BRV Technologies | DevOps & Automation Services"
        />
        <meta
          property="og:description"
          content="Unlock faster deployments and secure DevOps practices with BRV Technologies. From automation to monitoring and IaC—we’ve got your infrastructure covered."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/devops"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | DevOps & CI/CD Automation"
        />
        <meta
          property="twitter:description"
          content="Empower your tech teams with BRVTeck DevOps automation and continuous delivery pipelines. Reduce risk, increase speed."
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
          pageTitle="DevOps Services"
          pagesub="CI/CD & CloudOps"
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
                    alt="DevOps Implementation"
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
                      DevOps
                      <span className="badge bg-secondary text-white">
                        Services
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Accelerate Delivery with Modern DevOps Practices
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> empowers your development and IT
                      teams to collaborate, automate, and release with
                      confidence. Reduce delivery friction with secure and
                      scalable DevOps pipelines.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Automate build, test, and deployment workflows
                      </li>
                      <li className="mb-2">
                        • Scale infrastructure with Infrastructure-as-Code
                      </li>
                      <li className="mb-2">
                        • Monitor and optimize app performance continuously
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

        {/* Key Features */}
        <section className="service_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="image_wrap">
                  <Image
                    src={featureImage}
                    alt="DevOps Automation Tools"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span>{" "}
                      Features
                    </div>
                    <h2 className="heading_text mb-0">
                      Deliver Faster with Automated, Scalable DevOps
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

export default DevOpsServicesPage;
