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
  LockIcon,
  ShieldPlusIcon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
  Laptop2Icon,
  ShieldAlertIcon,
  ShieldIcon,
  ShieldCheckIcon,

} from "lucide-react";

const IotSecurity = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/iot/i10.jpg";
  const aboutImages = ["/img/services/iot/i11.jpg"];

  const PolicyIcons = [
    
    {
      title: "Encryption for device & data security",
      icon: ShieldPlusIcon,
    },
    {
      title: "Live threat detection & monitoring",
      icon:   ShieldAlertIcon,
    },
    {
      title: "Secure authentication and access controls",
      icon: ShieldIcon
    },
    {
      title: "Risk & vulnerability assessments",
      icon: ShieldCheckIcon,
    },
    {
      title: "Compliance security standards & regulations",
      icon:  LockIcon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading IOT Experts",
      subTitle:
        " Deliver bespoke IoT security integration to safeguard edge devices and cloud platforms, automate orchestration workflows, and ensure compliance.",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        "Launch full-scale IoT security deployments in days with plug-and-play integration kits, automated provisioning pipelines for rapid scale-out, and dedicated expert support.",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "Accelerate IoT security ecosystems with platforms that unify edge-to-cloud device protection, automate provisioning workflows, and ensure compliance.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Unify IoT security environments on a single platform, streamline orchestration workflows, and enforce compliant governance across your network.",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        " Unlock measurable efficiency gains, optimize security processes, and enhance ROI with our end-to-end IoT security integration solutions.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        " Partner with your team to co-create IoT security deployments—customizing provisioning workflows to your objectives and ensuring lasting operational resilience",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | IoT Security</title>
<meta
  name="description"
  content="BRVTeck offers comprehensive IoT Security services, including encryption for device and data protection, live threat detection and monitoring, secure authentication and access controls, risk and vulnerability assessments, and compliance with security standards and regulations. Safeguard your IoT ecosystem with our expert solutions."
/>
<meta
  name="keywords"
  content="IoT security, device encryption, data protection, threat detection, secure authentication, access controls, risk assessments, vulnerability assessments, compliance standards, IoT ecosystem security, BRVTeck"
/>
<meta name="author" content="BRVTeck" />

<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/iot/iot-security"
/>
<meta
  property="og:title"
  content="BRVTeck | IoT Security"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's IoT Security services to protect your connected devices and data. Our solutions include encryption, threat detection, secure authentication, risk assessments, and compliance with industry standards to ensure a secure IoT environment."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/iot/iot-security"
/>
<meta
  property="twitter:title"
  content="BRVTeck | IoT Security"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's IoT Security services to safeguard your IoT ecosystem. Our offerings include encryption, live threat monitoring, secure authentication, and compliance with security regulations to protect your devices and data."
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
          pageTitle="IOT Security Services"
          pagesub="Services"
          pageTop="IOT Security"
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
                     IOT Security
                      <span className="badge bg-secondary text-white">Services</span>
                    </div>

                    <h1 className="heading_text">
                      Leading IOT Security Services
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong>  Deploy scalable IoT security platforms to fortify device connectivity, automate provisioning, and enable proactive threat detection with unified dashboards, seamless interoperability, and analytics-driven insights.</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate IoT security deployments with plug-and-play integration.
                      </li>
                      <li className="mb-2">
                        • Unify IOT Security across protocols with centralized orchestration.
                      </li>
                      <li className="mb-2">
                        • Centralize governance for device management, compliance, cost savings.
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
                    alt="IOT Security"
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
                    Accelerate Business Innovation with IOT Security
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

export default IotSecurity;
