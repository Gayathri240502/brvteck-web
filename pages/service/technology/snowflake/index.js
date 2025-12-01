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
  ShieldCheckIcon,
  Network,
  SnowflakeIcon,
  Settings2,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
} from "lucide-react";

const SnowFlake = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/big-3.jpg";
  const aboutImages = ["/img/services/big2.jpg"];

  const PolicyIcons = [
    {
      title: "Analytics & BI Integration",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Snowflake Implementation",
      icon: SnowflakeIcon,
    },
    {
      title: "Data Integration",
      icon: Network,
    },
    {
      title: "Data Governance & Security",
      icon: ShieldCheckIcon,
    },
    {
      title: "Performance Optimization",
      icon: Settings2,
    },
  ];

  const PolicyContent = [
    {
      title: "Certified Snowflake Experts",
      subTitle:
        "Our team designs bespoke Snowflake solutions to harness cloud-scale datasets, streamline analytics workflows, and drive rapid growth.",
      icon: Handshake,
    },
    {
      title: "Ongoing Support",
      subTitle:
        " We provide post-deployment monitoring, cost control, and performance tuning.",
      icon: Rocket,
    },
    {
      title: "Economical Solutions",
      subTitle:
        "Economical, scalable platforms engineered to ingest vast datasets, optimize analytics pipelines, and drive sustainable, insight-driven growth.",
      icon: DollarSign,
    },
    {
      title: "Cross-Platform Integration",
      subTitle:
        "Seamlessly connect Snowflake with cloud platforms like AWS, Azure, GCP, and your BI stack.",
      icon: Puzzle,
    },
    {
      title: "Scalable & Agile Delivery",
      subTitle:
        "We deliver flexible solutions that grow with your data needs, using agile methodologies",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Collaborate with your team to architect Snowflake analytics solutions tailoring data pipelines to your objectives and ensuring lasting value.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | Snowflake</title>
<meta
  name="description"
  content="Explore BRVTeck’s Snowflake services: analytics & BI integration, Snowflake implementation, data integration, data governance & security, and performance optimization."
/>
<meta
  name="keywords"
  content="analytics & BI integration, Snowflake implementation, data integration, data governance, data security, performance optimization, Snowflake services, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/snowflake"
/>
<meta
  property="og:title"
  content="BRVTeck | Snowflake"
/>
<meta
  property="og:description"
  content="Unlock the power of Snowflake with BRVTeck: analytics & BI integration, tailored Snowflake implementations, seamless data integration, governance & security, and performance tuning."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/snowflake"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Snowflake"
/>
<meta
  property="twitter:description"
  content="Empower your data with BRVTeck’s Snowflake expertise—covering BI integration, implementation, data integration, governance/security, and performance optimization."
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
          pageTitle="SnowFlake Services"
          pagesub="Services"
          pageTop="SnowFlake"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Snowflake"
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
                     SnowFlake
                      <span className="badge bg-secondary text-white">Services</span>
                    </div>

                    <h1 className="heading_text">
                      Empower Your Enterprise with Tailored Snowflake Services
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> Delivers holistic Snowflake solutions to capture and manage cloud-scale datasets, 
                      automate pipeline workflows, and surface actionable insights—featuring bespoke ingestion architectures, seamless lakehouse consolidation.</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Fast-track results with Snowflake-powered data solution
                      </li>
                      <li className="mb-2">
                        • Enhance support operations through strategic Snowflake pipeline integrations
                      </li>
                      <li className="mb-2">
                        •  Focused initiatives with precision-engineered Snowflake analytics strategies.
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
                    alt="snowflake"
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
                      Drive Business Innovation with Snowflake Services
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

export default SnowFlake;
