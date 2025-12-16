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
  BarChart2,
  Activity,
  TrendingUp,
  ClipboardCheck,
  Settings2,
  ShieldCheck,
  DollarSign,
  Rocket,
  Users,
  Gauge,
} from "lucide-react";

const PerformanceAnalyticsPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

 
  const wImg = "/img/services/performance/perf-hero.jpg";
  const aboutImages = ["/img/services/performance/perf-team.jpg"];

 
  const PolicyIcons = [
    { title: "Real-Time Dashboards", icon: BarChart2 },
    { title: "Predictive Insights", icon: Activity },
    { title: "KPI Tracking", icon: TrendingUp },
    { title: "Custom Reports", icon: ClipboardCheck },
    { title: "Integration Ready", icon: Settings2 },
  ];

 
  const PolicyContent = [
    {
      title: "Data-Driven Decisions",
      subTitle:
        "Visualize trends instantly and steer strategy with accurate, up-to-date metrics.",
      icon: Gauge,
    },
    {
      title: "Productivity Boost",
      subTitle:
        "Identify bottlenecks and high performers to optimize workflows and output.",
      icon: TrendingUp,
    },
    {
      title: "Cost Savings",
      subTitle:
        "Spot inefficiencies early and trim unnecessary spend across projects.",
      icon: DollarSign,
    },
    {
      title: "Risk Mitigation",
      subTitle:
        "Early-warning indicators highlight compliance or quality issues before they escalate.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous Improvement",
      subTitle:
        "Feedback loops powered by analytics foster agile, iterative enhancements.",
      icon: Rocket,
    },
    {
      title: "Team Alignment",
      subTitle:
        "Transparent metrics keep everyone focused on the goals that matter most.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      {/* SEO Metadata */}
      <Head>
        <title>Performance Analytics | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck’s Performance Analytics delivers real-time dashboards, predictive insights, and KPI tracking—empowering data-driven decisions that boost productivity and reduce costs."
        />
        <meta
          name="keywords"
          content="performance analytics, workforce analytics, KPI tracking, real-time dashboards, predictive insights, BRVTeck"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Performance Analytics"
          pagesub="Analytics"
          pageTop="Performance"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src="/img/work/work8.png"
                    alt="Analytics team reviewing dashboards"
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
                        &nbsp;Insights
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Turn Metrics into Momentum
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> equips leaders with real-time
                      analytics that illuminate performance trends, reveal
                      opportunities, and drive continuous improvement—without
                      the spreadsheet chaos.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">• Monitor KPIs in real time</li>
                      <li className="mb-2">
                        • Uncover predictive insights with AI models
                      </li>
                      <li className="mb-2">
                        • Share interactive reports across teams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit Cards */}
        <section className="policy_section mb-5">
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
                    src="/img/work/work5.png"
                    alt="Performance analytics dashboard"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-6">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span>{" "}
                      features
                    </div>
                    <h2 className="heading_text mb-0">
                      See Clearly. Act Confidently.
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

export default PerformanceAnalyticsPage;
