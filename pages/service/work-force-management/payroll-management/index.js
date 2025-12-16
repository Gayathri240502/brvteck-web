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
  FileSpreadsheet,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  BarChart2,
  DollarSign,
  TrendingUp,
  Users,
  Rocket,
  Lock,
} from "lucide-react";

const PayrollManagementPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  /* ──────────────────────────
     ▸ Images
  ────────────────────────── */
  const wImg = "/img/services/payroll/payroll-dashboard.jpg";
  const aboutImages = ["/img/services/payroll/payroll-team.jpg"];

  /* ──────────────────────────
     ▸ Icons for key features
  ────────────────────────── */
  const PolicyIcons = [
    { title: "Automated Payroll", icon: FileSpreadsheet },
    { title: "Tax Compliance", icon: ShieldCheck },
    { title: "Direct Deposit", icon: CreditCard },
    { title: "Benefits Integration", icon: HeartPulse },
    { title: "Real-Time Reporting", icon: BarChart2 },
  ];

  /* ──────────────────────────
     ▸ Benefit cards content
  ────────────────────────── */
  const PolicyContent = [
    {
      title: "Accurate & Timely Payroll",
      subTitle:
        "Eliminate manual errors with automated calculations for wages, deductions, and overtime.",
      icon: DollarSign,
    },
    {
      title: "Built-In Compliance",
      subTitle:
        "Stay current on tax laws and statutory filings—no penalties, ever.",
      icon: ShieldCheck,
    },
    {
      title: "Cost Visibility",
      subTitle:
        "Dashboards reveal labor costs in real time to support strategic decisions.",
      icon: TrendingUp,
    },
    {
      title: "Employee Self-Service",
      subTitle:
        "Payslips, tax forms, and leave balances at employees’ fingertips in a secure portal.",
      icon: Users,
    },
    {
      title: "Fast Implementation",
      subTitle:
        "Cloud-native architecture gets you live in weeks, not months.",
      icon: Rocket,
    },
    {
      title: "Enterprise-Grade Security",
      subTitle:
        "Encryption, role-based access, and SOC-2 controls safeguard sensitive data.",
      icon: Lock,
    },
  ];

  return (
    <Fragment>
      {/* SEO Metadata */}
      <Head>
        <title>Payroll Management | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck’s Payroll Management platform automates calculations, ensures tax compliance, and provides real-time cost insights—so you pay your people accurately and on time."
        />
        <meta
          name="keywords"
          content="payroll management, automated payroll, tax compliance, direct deposit, payroll software, BRVTeck"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Payroll Management"
          pagesub="Finance"
          pageTop="Payroll"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src="/img/work/pay.png"
                    alt="Payroll team reviewing reports"
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
                      Payroll
                      <span className="badge bg-secondary text-white">
                        &nbsp;Solutions
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Pay Everyone Right—Every Time
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> automates the entire payroll
                      lifecycle, from time capture to final disbursement.
                      Achieve error-free runs, meet every compliance deadline,
                      and gain full visibility into labor spend—without the
                      spreadsheet chaos.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Automate payroll cycles and tax filings
                      </li>
                      <li className="mb-2">
                        • Empower staff with self-service payslips
                      </li>
                      <li className="mb-2">
                        • Track labor costs in real time
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
              <div className="col-lg-5">
                <div className="image_wrap">
                  <Image
                    src="/img/work/work3.png"
                    alt="Payroll dashboard interface"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span>{" "}
                      features
                    </div>
                    <h2 className="heading_text mb-0">
                      Reliable Payroll, Happy Employees
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

export default PayrollManagementPage;
