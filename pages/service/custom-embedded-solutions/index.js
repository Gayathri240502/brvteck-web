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

const CustomEmbeddedSolutions = () => {
  const aboutImage = "/img/services/embedded/1.jpg";
  const featureImage = "/img/services/embedded/4.jpg";

  const PolicyIcons = [
    { title: "Embedded Hardware Design", icon: Code },
    { title: "Firmware Development", icon: Layers3 },
    { title: "Real-Time OS Integration", icon: LayoutDashboard },
    { title: "Cross-Platform Support", icon: MonitorSmartphone },
    { title: "Device Communication Protocols", icon: Cpu },
  ];

  const PolicyContent = [
    {
      title: "End-to-End Embedded Development",
      subTitle:
        "From hardware design to firmware programming, we craft embedded systems that power smart devices.",
      icon: Rocket,
    },
    {
      title: "Agile and Iterative Approach",
      subTitle:
        "We apply agile methods to deliver rapid embedded system iterations with high reliability.",
      icon: BadgeCheck,
    },
    {
      title: "Security-First Architecture",
      subTitle:
        "Our systems are designed with secure boot, encryption, and data protection at every level.",
      icon: ShieldCheck,
    },
    {
      title: "Seamless Hardware-Software Co-design",
      subTitle:
        "We ensure tight integration between hardware components and embedded software layers.",
      icon: Settings2,
    },
    {
      title: "Highly Customizable Modules",
      subTitle:
        "Our embedded solutions are modular, reusable, and tailored to your domain-specific needs.",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | Custom Embedded Solutions</title>
        <meta
          name="description"
          content="Design and develop embedded systems with BRV Technologies. From firmware to hardware integration, we deliver scalable, secure, and intelligent solutions for real-world use."
        />
        <meta
          name="keywords"
          content="Custom Embedded Solutions, Embedded Systems, IoT Devices, Firmware Development, RTOS, BRV Technologies, Embedded Design Hyderabad, Hardware Software Integration, Secure Embedded Systems"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/custom-embedded-solutions"
        />
        <meta
          property="og:title"
          content="BRV Technologies | Custom Embedded Solutions"
        />
        <meta
          property="og:description"
          content="BRV Technologies builds embedded systems for IoT, automotive, and industrial applications with expertise in firmware, protocols, and real-time architectures."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/custom-embedded-solutions"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | Custom Embedded Solutions"
        />
        <meta
          property="twitter:description"
          content="End-to-end embedded system design and firmware development by BRV Technologies. Power your devices with scalable, secure, and intelligent systems."
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
          pageTitle="Custom Embedded Solutions"
          pagesub="Smart Embedded Systems"
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
                    alt="Embedded Solutions"
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
                      Embedded{" "}
                      <span className="badge bg-secondary text-white">
                        Systems
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Intelligent Systems Engineered for the Real World
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> specializes in embedded firmware
                      development, real-time integration, and secure system
                      architecture to power modern devices in IoT, automation,
                      and electronics.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Support for ARM, PIC, STM32, and more
                      </li>
                      <li className="mb-2">
                        • Embedded Linux and RTOS platforms
                      </li>
                      <li className="mb-2">
                        • Seamless cloud-device communication
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
                    alt="Embedded Features"
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
                      Precision Embedded Systems for Smarter Devices
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

export default CustomEmbeddedSolutions;
