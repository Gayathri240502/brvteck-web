"use client";
import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  CreditCard,
  CalendarCheck2,
  UserPlus,
  TrendingUp,
  UserCircle2,
  Gauge,
  FileText,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const srImg = "/img/products/hrms1.jpg"; // main
const wImg = "/img/products/hrms2.jpg"; // key

const PolicyIcons = [
  {
    title: "Employee Self-Service",
    icon: UserCircle2,
  },
  {
    title: "Payroll Automation",
    icon: CreditCard,
  },
  {
    title: "Attendance & Leave Tracking",
    icon: CalendarCheck2,
  },
  {
    title: "Performance Analytics",
    icon: BarChart3,
  },
  {
    title: "Secure Employee Data",
    icon: ShieldCheck,
  },
];

const Policy = [
  {
    icon: (
      <Users
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Employee Management",
    subTitle:
      "Efficiently manage employee profiles, track personal information, and monitor performance within a centralized system.",
  },
  {
    icon: (
      <CreditCard
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Payroll Management",
    subTitle:
      "Streamline payroll processing, calculate salaries, bonuses, taxes, and generate payslips automatically for your employees.",
  },
  {
    icon: (
      <CalendarCheck2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Leave & Attendance Tracking",
    subTitle:
      "Track employee attendance, manage leave requests, and maintain accurate records for better workforce planning.",
  },
  {
    icon: (
      <UserPlus
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Recruitment & Onboarding",
    subTitle:
      "Simplify recruitment and onboarding processes, from job postings to offer letters, and ensure a smooth transition for new hires.",
  },
  {
    icon: (
      <TrendingUp
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Performance Management",
    subTitle:
      "Monitor and evaluate employee performance with customized appraisal systems, feedback, and goal setting to boost productivity.",
  },
  {
    icon: (
      <UserCircle2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Employee Self-Service",
    subTitle:
      "Empower employees with a self-service portal to access payslips, leave requests, benefits, and personal information updates.",
  },
];

const HrmsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>HRMS Solutions | Human Resource Management System | Brvteck</title>
        <meta name="description" content="Brvteck HRMS automates and streamlines HR operations, payroll, attendance, and employee management for modern businesses." />
        <meta name="keywords" content="HRMS, Human Resource Management System, HR Software, Payroll, Attendance, Employee Management, Brvteck" />
        <meta name="author" content="Brvteck" />
        <meta property="og:title" content="HRMS Solutions | Human Resource Management System | Brvteck" />
        <meta property="og:description" content="Automate and optimize your HR operations with Brvteck's HRMS: payroll, attendance, analytics, and more." />
        <meta property="og:image" content="/img/products/hrms1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/products/hrms" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HRMS Solutions | Human Resource Management System | Brvteck" />
        <meta name="twitter:description" content="Transform your HR operations with Brvteck HRMS for automation, analytics, and compliance." />
        <meta name="twitter:image" content="/img/products/hrms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/hrms" />
      </Head>
      <PageTitle
        pageTitle="Human Resource Management System"
        pagesub="products 😍"
        pageTop="Our"
      />
      <Header />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image
                  src={srImg}
                  alt="HRMS Cartoon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are HRMS
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Human Resource Management System
                  </h2>
                  <p className="heading_description mb-0">
                    Transform your HR operations with our advanced HRMS,
                    designed to automate, streamline, and optimize every aspect
                    of workforce management.
                  </p>
                </div>
                <Link onClick={ClickHandler} href="/service" className="btn">
                  <span className="btn_label" data-text="Talk to an Expert">
                    Talk to an Expert
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ backgroundColor: "#eaf4ff", padding: "60px 0" }}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "30px 0",
            }}
          >
            {Policy.map((policy, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>{policy.icon}</div>
                  <h3 style={{ color: "#03044e", fontWeight: "700" }}>
                    {policy.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#444" }}>
                    {policy.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={wImg} alt="HRMS" width={600} height={400} />
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
                    Key Benefits of Our HRMS Solutions
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

      <main className="page_content about-page">
        <CtaSection />
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HrmsPage;

