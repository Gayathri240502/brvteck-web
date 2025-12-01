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
    title: "AI Behavior Analytics",
    icon: BarChart3,
  },
  {
    title: "AI-First Mobile Learning",
    icon: Smartphone,
  },
  {
    title: "AI Smart Certification",
    icon: Award,
  },
  {
    title: "AI Integrations",
    icon: Link2,
  },
  {
    title: "AI Secure Access",
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
    title: "AI-Enhanced Course Management",
    subTitle:
      "Easily create and optimize courses with AI-driven recommendations, automated structuring, and intelligent content suggestions.",
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
    title: "AI-Driven Student Engagement",
    subTitle:
      "Boost learner participation using AI-based adaptive content, personalized interactions, and predictive engagement alerts.",
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
    title: "AI Analytics & Deep Insights",
    subTitle:
      "Track learner behavior using AI-powered analytics, performance predictions, and automated reporting tools.",
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
    title: "AI Personalized Mobile Learning",
    subTitle:
      "Deliver adaptive mobile-based learning experiences with AI-curated micro-lessons and real-time learner guidance.",
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
    title: "AI-Automated Assessments",
    subTitle:
      "Use AI-generated quizzes, automated grading, and skill evaluations to assess learners more effectively.",
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
    title: "AI-Powered Smart Integrations",
    subTitle:
      "Integrate your LMS with AI tools, CRMs, ERPs, and video platforms for a seamless learning ecosystem.",
  },
];

const InfoBoxes = [
  {
    image: "/img/products/lms1.jpg",
    title: "Transform Learning with Our AI-Powered LMS",
    description:
      "Our AI-driven LMS enhances learning efficiency with smart automation, adaptive content delivery, and predictive insights for institutions and enterprises.",
  },
  {
    image: "/img/products/lms2.jpg",
    title: "Key Benefits of Our AI LMS",
    description: (
      <div>
        <p>Why Choose Our AI LMS?</p>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li>AI-personalized learning journeys.</li>
          <li>Scalable platform for growing learners.</li>
          <li>Intelligent collaboration and automation tools.</li>
          <li>Adaptive mobile learning powered by AI.</li>
          <li>Real-time AI analytics and performance predictions.</li>
          <li>Seamless integration with advanced AI systems.</li>
        </ul>
      </div>
    ),
  },
  {
    image: "/img/products/lms3.jpg",
    title: "Why Choose Us for AI LMS?",
    description: (
      <div>
        <p>Advanced AI-Powered Learning Platform</p>
        <p>
          Our AI LMS helps organizations deliver meaningful, adaptive, and
          efficient learning experiences. With smart automation and deep
          analytics, we enhance the capabilities of educators and training teams.
        </p>
        <p>
          Whether you're a school, university, or enterprise, our AI LMS is
          designed to scale with your needs and deliver future-ready training.
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
        <title>AI LMS Solutions | AI Learning Management System | Brvteck</title>
        <meta
          name="description"
          content="Brvteck AI LMS automates course creation, personalizes learning, and provides intelligent analytics for institutions and enterprises."
        />
        <meta
          name="keywords"
          content="AI LMS, AI Learning Management System, Adaptive Learning, AI Education, AI Course Management, Brvteck LMS"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI LMS Solutions | AI Learning Management System | Brvteck"
        />
        <meta
          property="og:description"
          content="Enhance your learning and training operations with Brvteck's AI LMS—adaptive learning, AI analytics, automation, and more."
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
          content="AI LMS Solutions | AI Learning Management System | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Reinvent learning with Brvteck's AI-powered LMS featuring automation, adaptive content, and advanced analytics."
        />
        <meta name="twitter:image" content="/img/products/lms1.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/products/lms" />
      </Head>
      <PageTitle
        pageTitle="AI Learning Management System"
        pagesub="products 😍"
        pageTop="Our"
      />
      <Header />

      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <Image src={srImg} alt="AI LMS" width={500} height={500} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are AI-Powered LMS
                    <span className="badge bg-secondary text-white">
                      IT Experts 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">AI Learning Management System</h2>
                  <p className="heading_description mb-0">
                    Reinvent your learning and training operations with our
                    AI-powered LMS that automates tasks, personalizes learning,
                    and delivers intelligent insights for better outcomes.
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
                <Image src={wImg} alt="AI LMS" width={600} height={400} />
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
                    Key Benefits of Our AI LMS Solutions
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
