import React, { Fragment, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesCombined,
  DatabaseZapIcon,
  Network,
  Bot,
  Settings2,
  CloudUploadIcon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
} from "lucide-react";

const BigData = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/big1.jpg";
  const aboutImages = ["/img/services/big4.jpg"];

  const PolicyIcons = [
    {
      title: "Real-Time Insights",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Big Data Infrastructure",
      icon: DatabaseZapIcon,
    },
    {
      title: "Seamless Data Pipeline Integration",
      icon: Network,
    },
    {
      title: "Cloud Based Solution",
      icon: CloudUploadIcon,
    },
    {
      title: "Tailored Big Data Warehouse Solutions",
      icon: Settings2,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading Big Data Experts",
      subTitle:
        "our team provides tailored solutions to harness massive datasets, streamline analytics, and accelerate growth.",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        "Deploy end-to-end analytics in days with plug-and-play ingestion templates, swift pipeline configurations, and dedicated expert support.",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "Economical, scalable platforms engineered to ingest vast datasets, optimize analytics pipelines, and drive sustainable, insight-driven growth.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        "Consolidate diverse data sources into unified analytics pipelines, streamline workflows, and ensure consistent, actionable insights across your organization.",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        "Unlock measurable efficiency gains, data-rich insights, and elevated ROI with our end-to-end analytics solutions.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Work side by side with your team to co-design analytics strategies and implementations—tailoring data pipelines to your objectives and ensuring lasting value.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | Big Data Solutions</title>
<meta
  name="description"
  content="Unlock real-time insights with BRVTeck’s Big Data Solutions: real-time analytics, scalable infrastructure, seamless data pipelines, cloud-based deployments, and tailored data warehouse setups."
/>
<meta
  name="keywords"
  content="real-time insights, big data infrastructure, data pipeline integration, cloud-based big data, big data warehouse solutions, BRVTeck, scalable analytics"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/big-data"
/>
<meta
  property="og:title"
  content="BRVTeck | Big Data Solutions"
/>
<meta
  property="og:description"
  content="Empower your enterprise with BRVTeck’s Big Data Solutions—real-time analytics, robust infrastructure, end-to-end data pipelines, cloud-native deployment, and customized data warehouse designs."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/big-data"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Big Data Solutions"
/>
<meta
  property="twitter:description"
  content="Transform your operations with BRVTeck’s Big Data Solutions: real-time insights, scalable infrastructure, seamless data pipelines, cloud deployment, and tailored warehouse architectures."
/>
<meta property="twitter:image" content="/img/logo.png" />


<meta name="format-detection" content="telephone=no" />
<meta name="contact" content="+91-8062177256" />
<meta name="email" content="sales@brvteck.com" />
<meta name="location" content="Mindspace, Hyderabad" />
<link rel="icon" href="/favicon.ico" />

      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="BigData Solutions"
          pagesub="Solution"
          pageTop="BigData"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Team working with AI systems"
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
                      BigData
                      <span className="badge bg-secondary text-white">
                        Solutions
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Empower Your Enterprise with Tailored Big Data Solutions
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Delivers comprehensive Big Data
                      solutions to harness massive datasets, streamline
                      analytics pipelines, and power data-driven
                      insights—featuring custom ingestion frameworks, unified
                      data lake integrations, and AI-driven analytics.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Fast-track results with AI-driven Big Data solutions
                      </li>
                      <li className="mb-2">
                        • Boost support operations via intelligent data‐pipeline
                        integrations
                      </li>
                      <li className="mb-2">
                        • Power targeted initiatives with high-precision
                        analytics strategies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="policy_section mb-5 ">
          <div className="container">
            <div className="row">
              {PolicyContent.map((policy, pitem) => {
                const Icon = policy.icon;
                return (
                  <div className="col-lg-4 mb-5" key={pitem}>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon bg-secondary-subtle">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">{policy.title}</h3>
                        <p className="mb-0">{policy.subTitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="service_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="image_wrap">
                  <Image
                    src={wImg}
                    alt="Accelerated AI Implementation"
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
                      features
                    </div>
                    <h2 className="heading_text mb-0">
                      Drive Business Innovation with Big Data
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
      </main>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BigData;
