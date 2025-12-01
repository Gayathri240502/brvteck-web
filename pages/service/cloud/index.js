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
  Cloud,
  ShieldCheck,
  TrendingUp,
  Rocket,
  ServerCog,
  RefreshCcw,
  CloudCog,
  Bot,
  Database,
} from "lucide-react";

const CloudTransformationPage = () => {
  const [isOpen, setOpen] = useState(false);

  const aboutImage = "/img/services/cloud/1.jpg";
  const featureImage = "/img/services/cloud/3.jpg";

  const PolicyIcons = [
    {
      title: "Cloud Migration",
      icon: Cloud,
    },
    {
      title: "Security & Compliance",
      icon: ShieldCheck,
    },
    {
      title: "Performance Scaling",
      icon: TrendingUp,
    },
    {
      title: "Cloud Automation",
      icon: Bot,
    },
    {
      title: "Hybrid Architecture",
      icon: CloudCog,
    },
  ];

  const PolicyContent = [
    {
      title: "Accelerated Cloud Adoption",
      subTitle:
        "Move your infrastructure, apps, and data to the cloud with speed and confidence using BRVTeck’s proven frameworks.",
      icon: Rocket,
    },
    {
      title: "Modern Infrastructure",
      subTitle:
        "We design cloud-native architectures optimized for scalability, performance, and cost-efficiency.",
      icon: ServerCog,
    },
    {
      title: "Seamless Integration",
      subTitle:
        "Integrate cloud with your existing systems—on-premises or hybrid—for a smooth digital transformation.",
      icon: RefreshCcw,
    },
    {
      title: "Data-Centric Cloud Strategy",
      subTitle:
        "Protect, manage, and utilize your data across distributed environments securely and intelligently.",
      icon: Database,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRV Technologies | Cloud Transformation Services</title>
        <meta
          name="description"
          content="Modernize your IT operations with BRV Technologies’ cloud transformation services. We help you migrate, secure, and scale your business in the cloud."
        />
        <meta
          name="keywords"
          content="Cloud Transformation, Cloud Migration, Hybrid Cloud, BRV Technologies, DevOps, Azure, AWS, GCP, Cloud Services Hyderabad, Cloud Security, Infrastructure Modernization"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/cloud"
        />
        <meta
          property="og:title"
          content="BRV Technologies | Cloud Transformation Services"
        />
        <meta
          property="og:description"
          content="Accelerate cloud adoption with BRV Technologies. Secure, scalable, and modern cloud solutions tailored for your business."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/cloud"
        />
        <meta
          property="twitter:title"
          content="BRV Technologies | Cloud Transformation Services"
        />
        <meta
          property="twitter:description"
          content="Migrate and modernize your systems with BRV Technologies' secure and scalable cloud transformation services."
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
          pageTitle="Cloud Transformation"
          pagesub="Cloud Solutions"
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
                    alt="Cloud Transformation Illustration"
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
                      Cloud
                      <span className="badge bg-secondary text-white">IT</span>
                    </div>

                    <h1 className="heading_text">
                      Transform Your Enterprise with Secure Cloud Solutions
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> helps you embrace the cloud with
                      strategic migration, cost-optimized design, and robust
                      governance. From public to hybrid cloud—move forward with
                      confidence.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Cut infrastructure costs with cloud-native apps
                      </li>
                      <li className="mb-2">
                        • Increase agility and speed to innovation
                      </li>
                      <li className="mb-2">
                        • Ensure data security and compliance
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
                    alt="Cloud Solutions"
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
                      Modern Cloud Transformation for Scalable Growth
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

export default CloudTransformationPage;
