import React, { Fragment, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";
import {
  Workflow, // ✅ this exists
  ShieldCheck,
  Settings2,
  Database,
  ServerCog,
  BarChart3,
  Shuffle,
  TrendingUp,
  Users,
} from "lucide-react";

const DataEngineeringPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/dataengineer/d9.jpg";
  const aboutImages = ["/img/services/dataengineer/d10.jpg"];

  const PolicyIcons = [
    {
      title: "Scalable Data Pipelines",
      icon: Workflow, // Best match for data pipelines
    },
    {
      title: "Data Flow Optimization",
      icon: Shuffle, // Symbolizes flow/optimization
    },
    {
      title: "Data Quality & Integrity",
      icon: ShieldCheck, // Represents trust, validation, and quality
    },
    {
      title: "Efficient Data Storage",
      icon: Database, // Most fitting for data storage
    },
    {
      title: "Automated Data Workflows",
      icon: Settings2, // Suitable for automation and workflow processes
    },
  ];

  const PolicyContent = [
    {
      title: "Reliable Data Infrastructure",
      subTitle:
        "We design robust architectures that support secure, scalable, and high-performance data operations.",
      icon: Database,
    },
    {
      title: "Optimized Data Pipelines",
      subTitle:
        "Streamline the flow of information across your systems with automated and efficient data pipelines.",
      icon: Shuffle,
    },
    {
      title: "Scalable & Cost-Efficient",
      subTitle:
        "Our solutions grow with your business, offering scalable systems that maximize performance within your budget.",
      icon: ServerCog,
    },
    {
      title: "Insight-Driven Architecture",
      subTitle:
        "Empower your teams with structured data ready for analytics, dashboards, and actionable intelligence.",
      icon: BarChart3,
    },
    {
      title: "Performance-Focused Delivery",
      subTitle:
        "We engineer for results—ensuring speed, reliability, and accuracy in data handling and reporting.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Execution",
      subTitle:
        "We work closely with your team to align every data solution with your long-term business objectives.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Data Engineering Services | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck delivers scalable data engineering services to build robust data pipelines, storage, and real-time analytics infrastructure tailored to your business."
        />
        <meta
          name="keywords"
          content="Data Engineering, Data Pipelines, Real-Time Analytics, Data Flow, BRVTeck, Scalable Architecture, Data Infrastructure"
        />
        <meta name="author" content="BRVTeck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Data Engineering Services | BRVTeck"
        />
        <meta
          property="og:description"
          content="Build secure and scalable data systems with BRVTeck. From pipelines to storage, we engineer data solutions that deliver business intelligence and speed."
        />
        <meta
          property="og:url"
          content="https://brvteck.com/service/data-engineering-analytics/data-engineering"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://brvteck.com/img/services/dataengineer/d10.jpg"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Data Engineering"
          pagesub="Engineering"
          pageTop="Data "
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Team working with Data Enginerring"
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
                      Data
                      <span className="badge bg-secondary text-white">
                        Engineering
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Build and Manage Your Data Infrastructure with Expert
                      Engineering
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> specializes in data engineering
                      solutions that empower businesses to unlock the full
                      potential of their data. We build robust data
                      architectures, pipelines, and scalable systems to support
                      large-scale processing, analytics, and machine learning.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Build scalable data pipelines for seamless integration
                      </li>
                      <li className="mb-2">
                        • Optimize data flow to power real-time analytics
                      </li>
                      <li className="mb-2">
                        • Enable smarter decisions through reliable data
                        architecture
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
                      <span className="badge bg-secondary text-white">Key</span>
                      features
                    </div>
                    <h2 className="heading_text mb-0">
                      Revolutionizing Your Business with Accelerated AI
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

export default DataEngineeringPage;
