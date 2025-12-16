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
  CalendarClock,
  AlarmClock,
  Users,
  ListChecks,
  Settings2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  DollarSign,
  Handshake,
} from "lucide-react";

const EmployeeSchedulingShiftPlanningPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  /* ──────────────────────────
     ▸ Images
  ────────────────────────── */
  const wImg = "/img/services/workforcemgmt/wfm1.jpg";
  const aboutImages = ["/img/services/workforcemgmt/wfm-team.jpg"];

  /* ──────────────────────────
     ▸ Icons for key features
  ────────────────────────── */
  const PolicyIcons = [
    { title: "Automated Scheduling", icon: CalendarClock },
    { title: "Shift Optimization", icon: AlarmClock },
    { title: "Team Collaboration", icon: Users },
    { title: "Compliance Tracking", icon: ListChecks },
    { title: "Customizable Rules", icon: Settings2 },
  ];

  /* ──────────────────────────
     ▸ Benefit cards content
  ────────────────────────── */
  const PolicyContent = [
    {
      title: "Accurate Forecasting",
      subTitle:
        "Predict staffing needs with AI to avoid over- or under-staffing and ensure smooth operations.",
      icon: TrendingUp,
    },
    {
      title: "Cost Efficiency",
      subTitle:
        "Cut overtime and labor costs through intelligent shift distribution and budgeting.",
      icon: DollarSign,
    },
    {
      title: "Real-Time Adjustments",
      subTitle:
        "Instantly reflect last-minute changes and notify staff via mobile alerts and dashboards.",
      icon: Rocket,
    },
    {
      title: "Employee Satisfaction",
      subTitle:
        "Respect availability and preferences, boosting morale and reducing turnover.",
      icon: Handshake,
    },
    {
      title: "Regulatory Compliance",
      subTitle:
        "Built-in labor-law and overtime checks keep your schedules audit-ready.",
      icon: ShieldCheck,
    },
    {
      title: "Performance Insights",
      subTitle:
        "Track key metrics to continuously refine scheduling strategy and drive ROI.",
      icon: TrendingUp,
    },
  ];

  return (
    <Fragment>
      {/* SEO Metadata */}
      <Head>
        <title>Employee Scheduling &amp; Shift Planning | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck’s Employee Scheduling & Shift Planning platform automates rosters, optimizes labor costs, and maintains compliance—keeping your workforce productive and engaged."
        />
        <meta
          name="keywords"
          content="employee scheduling, shift planning, workforce management, labor optimization, compliance tracking, BRVTeck"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Employee Scheduling & Shift Planning"
          pagesub="Shift Planning"
          pageTop="Employee Scheduling"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src="/img/work/employe.png"
                    alt="Team coordinating shift schedules"
                    width={600}
                    height={300}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Scheduling
                      <span className="badge bg-secondary text-white">
                        &nbsp;Tools
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Smarter Shifts, Happier Teams
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> streamlines roster creation,
                      minimizes labor costs, and keeps your workforce engaged.
                      Our AI-powered platform delivers accurate schedules in
                      seconds while ensuring compliance and boosting
                      productivity.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Generate conflict-free rosters automatically
                      </li>
                      <li className="mb-2">
                        • Reduce overtime with optimized shift distribution
                      </li>
                      <li className="mb-2">
                        • Empower employees with self-service swaps
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
                    src="/img/work/shedule.png"
                    alt="Scheduling dashboard interface"
                    width={700}
                    height={200}
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
                      Plan Smarter, Work Happier
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

export default EmployeeSchedulingShiftPlanningPage;
