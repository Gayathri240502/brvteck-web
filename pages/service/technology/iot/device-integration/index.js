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
  DatabaseZapIcon,
  DatabaseIcon,
  NetworkIcon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
  Laptop2Icon,
  CloudIcon,

} from "lucide-react";

const DeviceIntegration = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/iot/i7.jpg";
  const aboutImages = ["/img/services/iot/i3.jpg"];

  const PolicyIcons = [
    
    {
      title: "Efficient & seamless device connectivity",
      icon: NetworkIcon,
    },
    {
      title: "Real-time data sync across devices",
      icon:   FolderSync,
    },
    {
      title: "Scalable integration with multiple device types",
      icon: Laptop2Icon,
    },
    {
      title: "Improved system efficiency and data accuracy",
      icon: DatabaseIcon,
    },
    {
      title: "Automated data flow for enhanced productivity",
      icon:  DatabaseZapIcon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading Cloud Experts",
      subTitle:
        "Deliver bespoke IoT integration solutions to connect edge devices and cloud platforms, automate orchestration workflows, and ensure compliance.",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        "Launch full-scale device integration in days with plug-and-play integration kits, automated provisioning pipelines for rapid scale-out, and dedicated expert support for seamless deployment.",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "Accelerate IoT ecosystems with device integration platforms that unify edge-to-cloud devices, automate provisioning workflows, and uphold compliance.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Consolidate disparate environments into a unified device integration platform, streamline orchestration workflows, and ensure consistent, compliant governance across your connected ecosystem.",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        " Unlock measurable efficiency gains, optimize device utilization, and enhance ROI with our end-to-end device integration solutions.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Partner with your team to co-create device integration deployments—customizing provisioning pipelines to your objectives and ensuring lasting operational resilience.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
 <title>BRVTeck | Device Integration</title>
<meta
  name="description"
  content="BRVTeck offers comprehensive Device Integration services, enabling seamless connectivity and real-time monitoring of IoT devices. Our solutions provide custom dashboards for actionable insights, automated data collection and reporting, and integration with existing systems to enhance operational efficiency."
/>
<meta
  name="keywords"
  content="device integration, IoT device connectivity, real-time monitoring, custom dashboards, automated data collection, IoT reporting, BRVTeck"
/>
<meta name="author" content="BRVTeck" />

<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/iot/device-integration"
/>
<meta
  property="og:title"
  content="BRVTeck | Device Integration"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's Device Integration services to seamlessly connect and monitor your IoT devices. Benefit from real-time alerts, custom dashboards, automated data collection, and integration with existing systems to make informed decisions and optimize operations."
/>
<meta property="og:image" content="/img/logo.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/iot/device-integration"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Device Integration"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's Device Integration services to connect and monitor your IoT devices in real-time. Our solutions offer custom dashboards, automated data collection, and seamless integration with existing systems to enhance operational efficiency."
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
          pageTitle="Device Integration Services"
          pagesub="Services"
          pageTop="Device Integration"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="device interagtion"
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
                     Device Integration
                      <span className="badge bg-secondary text-white">Services</span>
                    </div>

                    <h1 className="heading_text">
                      Industry Device Integration Services
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Delivers scalable IoT device integration platforms to accelerate connectivity, automate provisioning, and enable proactive lifecycle management—featuring unified dashboards, seamless multi-protocol interoperability, and analytics-powered performance insights.</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate device onboarding with automated, plug-and-play provisioning
                      </li>
                      <li className="mb-2">
                        • Unify connectivity across protocols through centralized orchestration
                      </li>
                      <li className="mb-2">
                        •  Centralize governance to streamline device management, enforce compliance, & lower costs
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
                     Accelerate Business Innovation with Scalable Device Integration
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

export default DeviceIntegration;
