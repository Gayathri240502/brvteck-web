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
  BookOpen,
  Users,
  BarChart2,
  Smartphone,
  Award,
  Link2,
  Gauge,
  FileText,
  BarChart3,
  Workflow,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

const srImg = "/img/products/lms1.jpg"; // main
const wImg = "/img/products/lms2.jpg"; // key

const PolicyIcons = [
  {
    title: "Course Analytics",
    icon: BarChart3,
  },
  {
    title: "Mobile Learning",
    icon: Smartphone,
  },
  {
    title: "Certification & Assessment",
    icon: Award,
  },
  {
    title: "Integration Capabilities",
    icon: Link2,
  },
  {
    title: "Secure Access",
    icon: ShieldCheck,
  },
];

const Policy = [
  {
    icon: (
      <BookOpen
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Course Management",
    subTitle:
      "Easily create, manage, and organize courses with intuitive tools that enhance the learning experience for instructors and students.",
  },
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
    title: "Student Engagement",
    subTitle:
      "Boost student participation with interactive content, discussion forums, quizzes, and real-time feedback.",
  },
  {
    icon: (
      <BarChart2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Analytics & Reporting",
    subTitle:
      "Track student progress, course completion rates, and performance with detailed analytics and reporting tools.",
  },
  {
    icon: (
      <Smartphone
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Mobile Learning",
    subTitle:
      "Enable on-the-go learning with mobile-friendly interfaces and apps designed for seamless access across devices.",
  },
  {
    icon: (
      <Award
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Certification & Assessment",
    subTitle:
      "Create customizable certifications and assessments to validate learning outcomes and enhance credibility.",
  },
  {
    icon: (
      <Link2
        size={80}
        color="#03044e"
        style={{
          padding: "12px",
        }}
      />
    ),
    title: "Integration Capabilities",
    subTitle:
      "Integrate the LMS with existing systems like CRM, ERP, or video conferencing tools for a unified learning experience.",
  },
];

const InfoBoxes = [
  {
    image: "/img/products/lms1.jpg",
    title: "Transform Learning with Our LMS Solutions",
    description:
      "Our LMS solutions are designed to simplify the educational process for institutions, businesses, and educators. From course management to student engagement, we provide tools that create a more effective learning experience.",
  },
  {
    image: "/img/products/lms2.jpg",
    title: "Key Benefits of Our LMS Solutions",
    description: (
      <div>
        <p>Why Choose Our LMS Solutions?</p>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li>Customizable courses tailored to your needs.</li>
          <li>Scalable platforms to accommodate growing users.</li>
          <li>Enhanced collaboration through integrated tools.</li>
          <li>Mobile-friendly access for flexible learning.</li>
          <li>Real-time performance tracking and analytics.</li>
          <li>Seamless integration with external systems.</li>
        </ul>
      </div>
    ),
  },
  {
    image: "/img/products/lms3.jpg",
    title: "Why Choose Us",
    description: (
      <div>
        <p>Innovative LMS Solutions for Modern Learning</p>
        <p>
          Our LMS solutions empower organizations and educators to deliver impactful
          learning experiences. We focus on usability, scalability, and integration
          to ensure the best outcomes for learners and administrators.
        </p>
        <p>
          Whether you're an educational institution or a corporate training team,
          our LMS platforms are tailored to meet your unique needs and help achieve your learning goals.
        </p>
      </div>
    ),
  },
];

const LmsPage = () => {
  const ClickHandler = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <Head>
        <title>LMS Solutions | Learning Management System | Brvteck</title>
        <meta
          name="description"
          content="Brvteck LMS streamlines course management, student engagement, analytics, and mobile learning for educational institutions and businesses."
        />
        <meta
          name="keywords"
          content="LMS, Learning Management System, E-learning, Course Management, Brvteck, Mobile Learning, Education Software"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="LMS Solutions | Learning Management System | Brvteck"
        />
        <meta
          property="og:description"
          content="Transform your learning and training operations with Brvteck's LMS: analytics, mobile access, integration, and more."
        />
        <meta property="og:image" content="/img/products/lms1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/products/lms"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LMS Solutions | Learning Management System | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Automate and optimize your education delivery with Brvteck LMS for analytics, mobile, and integration."
        />
        <meta name="twitter:image" content="/img/products/lms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/lms" />
      </Head>
      <PageTitle
        pageTitle="Learning Management System"
        pagesub="products 😍"
        pageTop="Our"
      />
      <Header />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={srImg} alt="LMS Cartoon" width={500} height={500} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are LMS
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">Learning Management System</h2>
                  <p className="heading_description mb-0">
                    Transform your learning and training operations with our
                    advanced LMS, designed to automate, streamline, and optimize
                    every aspect of education delivery.
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
                <Image src={wImg} alt="LMS" width={600} height={400} />
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
                    Key Benefits of Our LMS Solutions
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

export default LmsPage;
