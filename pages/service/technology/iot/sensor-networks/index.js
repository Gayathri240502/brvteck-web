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
  FolderSync,
  DatabaseIcon,
  NetworkIcon,
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

const SensorNetwork = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/iot/i8.jpg";
  const aboutImages = ["/img/services/iot/i6.jpg"];

  const PolicyIcons = [
    
    {
      title: "Real-time monitoring with instant alerts",
      icon: AlertCircleIcon,
    },
    {
      title: "Integration with other IoT systems",
      icon:   NetworkIcon,
    },
    {
      title: "Accuracy & reliability in data collection",
      icon: DatabaseIcon,
    },
    {
      title: "Scalable network for various applications",
      icon: Laptop2Icon,
    },
    {
      title: "Energy-efficient sensors for long-term use",
      icon:  PowerIcon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading Cloud Experts",
      subTitle:
        "Deliver bespoke sensor network integration to connect edge sensors and cloud platforms, automate orchestration workflows, and ensure compliance.",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        " Launch full-scale sensor network deployments in days with plug-and-play integration kits, automated provisioning pipelines for rapid scale-out, and dedicated expert support.",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "Accelerate sensor network ecosystems with platforms that unify edge-to-cloud sensors, automate provisioning workflows, and ensure compliance.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Unify sensor environments on a single platform, streamline orchestration workflows, and enforce compliant governance across your network",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        " Unlock measurable efficiency gains, optimize sensor utilization, and enhance ROI with our end-to-end sensor network integration solutions.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        " Partner with your team to co-create sensor network deployments—customizing provisioning workflows to your objectives and ensuring lasting operational resilience.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
 <title>BRVTeck | Sensor Networks</title>
<meta
  name="description"
  content="BRVTeck offers advanced Sensor Network solutions, enabling real-time monitoring with instant alerts, seamless integration with existing IoT systems, and accurate, reliable data collection. Our scalable and energy-efficient sensor networks are tailored to meet the unique needs of various industries, enhancing operational efficiency and decision-making."
/>
<meta
  name="keywords"
  content="sensor networks, IoT sensor integration, real-time monitoring, data collection accuracy, scalable sensor networks, energy-efficient sensors, BRVTeck"
/>
<meta name="author" content="BRVTeck" />

<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/iot/sensor-networks"
/>
<meta
  property="og:title"
  content="BRVTeck | Sensor Networks"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's Sensor Network solutions for seamless IoT integration, real-time monitoring, and accurate data collection. Our scalable and energy-efficient sensor networks are designed to enhance operational efficiency and support informed decision-making across various industries."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/iot/sensor-networks"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Sensor Networks"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's Sensor Network solutions for real-time monitoring, accurate data collection, and seamless IoT integration. Our scalable and energy-efficient sensor networks are tailored to meet the unique needs of your industry."
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
          pageTitle="Sensor Networks Services"
          pagesub="Services"
          pageTop="Sensor Networks"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="snesor networks"
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
                     Sensor Networks
                      <span className="badge bg-secondary text-white">Services</span>
                    </div>

                    <h1 className="heading_text">
                      Leading Sensor Networks Services
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Deploy scalable sensor network platforms to accelerate sensor connectivity, automate provisioning, and enable proactive lifecycle management—featuring unified dashboards, seamless multi-protocol interoperability, and analytics-powered performance insights.</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate sensor network deployments with automated, plug-and-play.
                      </li>
                      <li className="mb-2">
                        • Unify sensor network connectivity across diverse protocols via centralized orchestration, ensuring seamless interoperability.
                      </li>
                      <li className="mb-2">
                        •  Centralize sensor network governance to streamline device management, enforce compliance, and lower costs
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
                    Accelerate Business Innovation with Scalable Sensor Network
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

export default SensorNetwork;
