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

const Salesforce = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/salesforce/2.jpg";
  const aboutImages = ["/img/services/salesforce/1.jpg"];

  const PolicyIcons = [
    {
      title: "Instant Data Insights",
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
      title: "Best Salesforce Experts",
      subTitle:
        "Our Salesforce team provides tailored solutions boosting productivity and fueling growth.",
      icon: Handshake,
    },
    {
      title: "Rapid Deployment Solutions",
      subTitle:
        "Accelerate Salesforce with ready templates, quick setups, and expert support—delivering full CRM in days.",
      icon: Rocket,
    },
    {
      title: "Cost-Effective Solutions",
      subTitle:
        " Scalable, budget-friendly Salesforce solutions engineered to drive business growth.",
      icon: DollarSign,
    },
    {
      title: "Unified Salesforce Integration",
      subTitle:
        "Integrate Salesforce for unified data, seamless workflows, and constant customer experience.",
      icon: Puzzle,
    },
    {
      title: "Results-Driven Performance",
      subTitle:
        "Deliver measurable productivity gains, actionable insights, and optimized ROI through our Salesforce implementations.",
      icon: TrendingUp,
    },
    {
      title: "Strategic Partnership",
      subTitle:
        "We embed with your team to co-create Salesforce strategy and execution—aligning CRM solutions to your goals for enduring value.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | Salesforce</title>
<meta
  name="description"
  content="Discover BRVTeck’s Salesforce services: instant data insights, advanced enablement, seamless integration, intelligent automation, and tailored CRM solutions that drive business transformation."
/>
<meta
  name="keywords"
  content="instant data insights, advanced enablement, seamless integration, intelligent automation, tailored Salesforce solutions, CRM, data integration, intelligent workflows, BRVTeck"
/>
<meta name="author" content="BRVTeck" />

<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/salesforce"
/>
<meta
  property="og:title"
  content="BRVTeck | Salesforce"
/>
<meta
  property="og:description"
  content="Transform your operations with BRVTeck’s Salesforce services: real‑time insights, enablement programs, robust integrations, AI‑powered automation, and custom CRM solutions."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/salesforce"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Salesforce"
/>
<meta
  property="twitter:description"
  content="Empower your business with BRVTeck’s Salesforce expertise—from instant analytics and advanced enablement to seamless integration and AI‑driven automation."
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
          pageTitle="SalesForce Service"
          pagesub="Service"
          pageTop="SalesForce"
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
                     SalesForce
                      <span className="badge bg-secondary text-white">Service</span>
                    </div>

                    <h1 className="heading_text">
                      Transform Your Enterprise with Expert Salesforce Solutions
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Offers end-to-end Salesforce solutions to streamline customer engagement,
                        elevate sales and service processes, and accelerate growth — including tailored Sales Cloud implementations,
                       seamless Service Cloud integrations, and strategic Marketing Cloud campaigns. </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Accelerate outcomes with Salesforce Einstein Copilot
                      </li>
                      <li className="mb-2">
                        • Elevate customer support through intelligent Service Cloud integrations
                      </li>
                      <li className="mb-2">
                        • Drive targeted campaigns using data-rich Marketing Cloud strategies
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
                      Revolutionize Your Business with Salesforce-powered Innovation
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

export default Salesforce;
