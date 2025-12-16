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
  BarChart3,
  Database,
  LayoutDashboard,
  FileText,
  PieChart,
  Users,
} from "lucide-react";

const VisualizationAnalyticsPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/dataengineer/d2.jpg";
  const aboutImages = ["/img/services/dataengineer/d8.jpg"];

  const PolicyIcons = [
    {
      title: "Interactive Data Exploration",
      icon: BarChart3,
    },
    {
      title: "Integrated Analytics Solutions",
      icon: Database,
    },
    {
      title: "Real-Time Dashboards",
      icon: LayoutDashboard,
    },
    {
      title: "Custom Business Reports",
      icon: FileText,
    },
    {
      title: "Decision-Driven Visualizations",
      icon: PieChart,
    },
  ];

  const PolicyContent = [
    {
      title: "Real-Time Dashboards",
      subTitle:
        "Monitor key performance indicators through live, interactive dashboards designed for fast decision-making.",
      icon: LayoutDashboard,
    },
    {
      title: "Custom Business Reports",
      subTitle:
        "Generate tailored reports that deliver meaningful insights aligned with your specific business goals.",
      icon: FileText,
    },
    {
      title: "Advanced Data Visualizations",
      subTitle:
        "Transform raw data into intuitive visual formats that reveal trends, patterns, and actionable insights.",
      icon: BarChart3,
    },
    {
      title: "Decision-Driven Analytics",
      subTitle:
        "Empower leadership with predictive and prescriptive analytics for confident, data-backed strategies.",
      icon: PieChart,
    },
    {
      title: "Seamless BI Integration",
      subTitle:
        "Connect and unify your data across platforms with smooth integration into popular BI tools.",
      icon: Database,
    },
    {
      title: "Collaborative Insights",
      subTitle:
        "We work with your teams to design analytical solutions that align with your workflows and outcomes.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title> Visualization & Analytics Services | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck offers powerful data visualization and analytics services—real-time dashboards, interactive exploration, custom reports, and integrated BI solutions to drive informed decisions."
        />
        <meta
          name="keywords"
          content="Data Visualization, Business Analytics, Dashboards, BI Tools, BRVTeck, Data Insights, Custom Reports, Data Exploration"
        />
        <meta name="author" content="BRVTeck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content=" Visualization & Analytics Services | BRVTeck"
        />
        <meta
          property="og:description"
          content="Unlock the power of your data with BRVTeck's analytics and visualization services. Build interactive dashboards, reports, and real-time insights that drive business success."
        />
        <meta
          property="og:url"
          content="https://brvteck.com/service/data-visualization-analytics"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://brvteck.com/img/services/dataengineer/d8.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Data Visualization & Analytics Services | BRVTeck"
        />
        <meta
          name="twitter:description"
          content="Deliver data-driven results with advanced dashboards, reporting, and analytics from BRVTeck."
        />
        <meta
          name="twitter:image"
          content="https://brvteck.com/img/services/dataengineer/d8.jpg"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Visualization and Analytics"
          pagesub="Analytics"
          pageTop="Visualization and"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Team working with Data Engineering"
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
                      Visualization and
                      <span className="badge bg-secondary text-white">
                        Analytics
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Unlock the Power of Data through Visualization and
                      Insights
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> empowers businesses to make
                      data-driven decisions through advanced data visualization
                      and analytics. Our services include interactive
                      dashboards, custom reports, and real-time data
                      visualizations that provide deep insights into business
                      operations and performance.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Create interactive dashboards for real-time business
                        insights
                      </li>
                      <li className="mb-2">
                        • Develop custom reports tailored to key performance
                        metrics
                      </li>
                      <li className="mb-2">
                        • Visualize complex data to support data-driven
                        decisions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Section */}
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

export default VisualizationAnalyticsPage;
