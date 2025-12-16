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
  Code,
  Layers3,
  LayoutDashboard,
  Cpu,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  BadgeCheck,
  Rocket,
  MonitorSmartphone,
} from "lucide-react";

const CustomSoftwareDevelopmentPage = () => {
  const aboutImage = "/img/services/custom/2.jpg";
  const featureImage = "/img/services/custom/3.jpg";

  const PolicyIcons = [
    { title: "Tailored Applications", icon: Code },
    { title: "Modular Architecture", icon: Layers3 },
    { title: "User-Centric Interfaces", icon: LayoutDashboard },
    { title: "Cross-Platform Support", icon: MonitorSmartphone },
    { title: "Scalable Performance", icon: Cpu },
  ];

  const PolicyContent = [
    {
      title: "End-to-End Development",
      subTitle:
        "From ideation to deployment, we build robust software solutions tailored to your business goals.",
      icon: Rocket,
    },
    {
      title: "Agile Project Delivery",
      subTitle:
        "We follow agile methodologies to ensure flexibility, faster iterations, and higher customer satisfaction.",
      icon: BadgeCheck,
    },
    {
      title: "Security-First Approach",
      subTitle:
        "Your data and infrastructure are safeguarded with our secure development practices.",
      icon: ShieldCheck,
    },
    {
      title: "Easy Integration",
      subTitle:
        "Our custom solutions integrate seamlessly with your existing systems and workflows.",
      icon: Settings2,
    },
    {
      title: "Flexible Customization",
      subTitle:
        "Every feature, workflow, and module is built to align with your unique needs.",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | Custom Software Development</title>
        <meta
          name="description"
          content="Develop powerful, scalable, and secure custom software with BRV Technologies. We craft tailored applications to automate, innovate, and elevate your business."
        />
        <meta
          name="keywords"
          content="Custom Software Development, Web App Development, Enterprise Software, BRV Technologies, Software Development Hyderabad, Scalable Applications, Agile Software, UI/UX"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/custom-software-development"
        />
        <meta
          property="og:title"
          content="BRV Technologies | Custom Software Development Services"
        />
        <meta
          property="og:description"
          content="Custom software development for startups and enterprises. Build powerful, modern, and scalable solutions with BRV Technologies."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/custom-software-development"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | Custom Software Solutions"
        />
        <meta
          property="twitter:description"
          content="We create high-performance custom software tailored to your business. Secure, agile, scalable, and intuitive software solutions by BRV Technologies."
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
          pageTitle="Custom Software Development"
          pagesub="Tailored Applications"
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
                    alt="Custom Software Developers"
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
                      Software
                      <span className="badge bg-secondary text-white">
                        Custom
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Intelligent Software Solutions, Built for You
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> builds reliable, flexible, and
                      secure custom software that adapts to your workflows. We
                      work closely with your team to deliver feature-rich apps
                      that drive innovation and growth.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • 100% tailored to your industry and users
                      </li>
                      <li className="mb-2">
                        • Scalable for startups to enterprises
                      </li>
                      <li className="mb-2">
                        • Modern tech stack with ongoing support
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
                    alt="Custom App Features"
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
                      Built for Scale. Designed for Experience.
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

export default CustomSoftwareDevelopmentPage;
