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
  ChartNoAxesColumn,
  DatabaseIcon,
  ChartNoAxesColumnIncreasingIcon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
  Laptop2Icon,
  AlertCircleIcon,
  PowerIcon,
} from "lucide-react";

const Datamonitor = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/iot/i9.jpg";
  const aboutImages = ["/img/services/iot/i4.jpg"];

  const PolicyIcons = [
    {
      title: "Real-time monitoring with instant alerts",
      icon: AlertCircleIcon,
    },
    {
      title: "Custom dashboards for insights",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Automated data collection & reporting",
      icon: DatabaseIcon,
    },
    {
      title: "Actionable insights for quick decision-making",
      icon: ChartNoAxesColumnIncreasingIcon,
    },
    {
      title: "Seamless integration with existing systems",
      icon: Laptop2Icon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading Cloud Experts",
      subTitle:
        "Deliver bespoke data monitoring integration to connect edge sensors and cloud platforms, automate orchestration workflows, and ensure compliance.",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        " Launch full-scale data monitoring deployments in days with plug-and-play integration kits, automated provisioning pipelines for rapid scale-out, and dedicated expert support.",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "Accelerate data monitoring ecosystems with platforms that unify edge-to-cloud data streams, automate provisioning workflows, and ensure compliance",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Unify data monitoring environments on a single platform, streamline orchestration workflows, and enforce compliant governance across your network",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        " Unlock measurable efficiency gains, optimize data monitoring processes, and enhance ROI with our end-to-end data monitoring integration solutions.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        " Partner with your team to co-create data monitoring deployments—customizing provisioning workflows to your objectives and ensuring lasting operational resilience.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | Data Monitoring</title>
        <meta
          name="description"
          content="BRVTeck offers real-time data monitoring solutions with AI-driven insights, anomaly detection, and seamless system integration to enhance operational efficiency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="BRVTeck, Data Monitoring, IoT, AI, Anomaly Detection, Real-Time Analytics, System Integration, Hybrid Cloud, Performance Monitoring"
        />
        <meta name="author" content="BRVTeck" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://brvteck.com/service/technology/iot/data-monitoring"
        />
        <meta property="og:title" content="BRVTeck | Data Monitoring" />
        <meta
          property="og:description"
          content="Enhance your business operations with BRVTeck's real-time data monitoring solutions, featuring AI-driven insights and seamless system integration."
        />
        <meta
          property="og:image"
          content="https://brvteck.com/img/meta/data-monitoring.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://brvteck.com/service/technology/iot/data-monitoring"
        />
        <meta property="twitter:title" content="BRVTeck | Data Monitoring" />
        <meta
          property="twitter:description"
          content="Explore BRVTeck's real-time data monitoring solutions with AI-driven insights and seamless integration to optimize your business performance."
        />
        <meta
          property="twitter:image"
          content="https://brvteck.com/img/meta/data-monitoring.jpg"
        />

        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="info@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Data Monitoring Services"
          pagesub="Services"
          pageTop="Data Monitoring"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="sensor networks"
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
                      Data Monitoring
                      <span className="badge bg-secondary text-white">
                        Services
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Leading Data Monitoring Services
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Deploy scalable data monitoring
                      platforms to accelerate sensor connectivity, automate
                      provisioning, and enable proactive lifecycle management
                      with unified dashboards, seamless interoperability, and
                      analytics-driven insights.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Accelerate data monitoring deployments, plug-and-play.
                      </li>
                      <li className="mb-2">
                        • Unify data connectivity across protocols with
                        centralized orchestration.
                      </li>
                      <li className="mb-2">
                        • Centralize governance for device management,
                        compliance, cost savings.
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
                      Accelerate Business Innovation with Data Monitoring
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

export default Datamonitor;
