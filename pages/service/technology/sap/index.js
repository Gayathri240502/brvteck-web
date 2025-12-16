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
  LucideSettings,
  Network,
  Bot,
  Settings2,
  CpuIcon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake
} from "lucide-react";

const SAP = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/sap/s2.jpg";
  const aboutImages = ["/img/services/sap/s.jpg"];

  const PolicyIcons = [
    {
      title: "Real-Time Analytics",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Advanced Enablement",
      icon: LucideSettings,
    },
    {
      title: "Seamless Integration",
      icon: Network,
    },
    {
      title: "Intelligent Automation",
      icon: CpuIcon,
    },
    {
      title: "Tailored SAP Solutions",
      icon: Settings2,
    },
  ];

  const PolicyContent = [
    {
      title: "SAP Expertise at Your Service ",
      subTitle:
        "Our SAP experts craft tailored solutions enhancing efficiency and driving growth.",
      icon: Handshake,
    },
    {
      title: "Quick Deployment",
      subTitle:
        "Our streamlined process gets your SAP solution live swiftly—minimizing downtime and maximizing ROI.",
      icon: Rocket,
    },
    {
      title: "Cost-Effective SAP Solutions",
      subTitle:
        "Scalable, cost-efficient SAP solutions optimized to fuel your business growth.",
      icon: DollarSign,
    },
    {
      title: "Seamless SAP Integration",
      subTitle:
        "Effortlessly integrate SAP into your IT landscape—ensuring uninterrupted operations, unified data management, and streamlined process efficiency",
      icon: Puzzle,
    },
    {
      title: "Results-Focused Performance",
      subTitle:
        "Deliver measurable productivity gains, actionable insights, and optimized ROI through our SAP implementations.",
      icon: TrendingUp,
    },
    {
      title: "Strategic Partnership",
      subTitle:
        "As an extension of your organization, we collaborate on SAP strategy and execution—aligning solutions with your objectives to deliver lasting value.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | SAP Services</title>
<meta
  name="description"
  content="Explore BRVTeck’s SAP services: real‑time analytics with HANA, advanced enablement, seamless integration via SAP BTP, intelligent automation with RPA/AI, and tailored SAP solutions for enterprises."
/>
<meta
  name="keywords"
  content="real-time analytics, advanced enablement, seamless integration, intelligent automation, tailored SAP solutions, SAP HANA, SAP BTP, SAP RPA, enterprise SAP, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/sap"
/>
<meta
  property="og:title"
  content="BRVTeck | SAP"
/>
<meta
  property="og:description"
  content="Unlock the full potential of SAP with BRVTeck: real-time analytics on HANA, enterprise enablement, integration through SAP BTP, intelligent automation, and custom SAP solutions."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/sap"
/>
<meta
  property="twitter:title"
  content="BRVTeck | SAP"
/>
<meta
  property="twitter:description"
  content="Transform with BRVTeck’s SAP services: real-time analytics, advanced enablement, seamless integration, intelligent automation, and bespoke SAP solutions."
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
          pageTitle="SAP Services and Enterprise Solutions"
          pagesub="Enterprise Solutions"
          pageTop="SAP Services &"
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
                      SAP Services &
                      <span className="badge bg-secondary text-white">Enterprise Solution</span>
                    </div>

                    <h1 className="heading_text">
                      Drive Enterprise Transformation with Expert SAP Solutions
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Offers end‑to‑end SAP solutions to streamline processes, enhance visibility, and drive growth — including tailored S/4,HANA implementation, 
                      seamless integrations, and ongoing optimization to help you outperform in a competitive landscape.                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Accelerate with SAP Joule copilot 
                      </li>
                      <li className="mb-2">
                        • Automate workflows via SAP BTP and Intelligent RPA 
                      </li>
                      <li className="mb-2">
                        • Boost insights using SAP Analytics Cloud Smart Predict & “Just Ask”
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
                      Transform Your Business with SAP-Driven Innovation
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

export default SAP;
