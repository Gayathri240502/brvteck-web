"use client";
import React from "react";
import Head from "next/head";
import PageTitle from "@/components/pagetitle/PageTitle";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import CtaSection from "@/components/CtaSection/CtaSection";
import {
  MessageSquareQuote,
  Map,
  LineChart,
  Users,
  BarChart,
  BookOpen,
  CheckCircle,
  Rocket,
  Layers,
  TrendingUp,
  Zap,
  Link2,
  Award,
} from "lucide-react";

const benefitCards = [
  {
    title: "Unbiased Feedback",
    subTitle:
      "Startup consultants provide an external perspective, offering feedback on execution, organization, and core business practices.",
    icon: <MessageSquareQuote size={36} strokeWidth={1.5} />,
  },
  {
    title: "Management Advice",
    subTitle:
      "Consultants offer guidance on all phases of your business, turning ideas into actionable strategies and solutions.",
    icon: <Users size={36} strokeWidth={1.5} />,
  },
  {
    title: "Creating a Road Map",
    subTitle:
      "Strategic planning to navigate critical steps with data-driven analysis and expert strategy.",
    icon: <Map size={36} strokeWidth={1.5} />,
  },
  {
    title: "Expertise",
    subTitle:
      "Leverage specialized knowledge and the latest tactics for driving business growth and innovation.",
    icon: <BookOpen size={36} strokeWidth={1.5} />,
  },
  {
    title: "Market Research",
    subTitle:
      "Conducting in-depth research to understand market trends, customer needs, and competitor strengths.",
    icon: <BarChart size={36} strokeWidth={1.5} />,
  },
  {
    title: "Continuous Analysis",
    subTitle:
      "Keeping businesses updated with market dynamics and identifying opportunities for growth and success.",
    icon: <LineChart size={36} strokeWidth={1.5} />,
  },
];

const priorities = [
  "Drive open innovation for rapid business growth.",
  "Leverage a unique ecosystem of partners and accelerators.",
  "Turn innovation into measurable business outcomes.",
  "Scale sustainably with expert guidance.",
  "Focus on real-time performance and data-driven decisions.",
  "Connect with deep-tech partners for accelerated innovation.",
];

const StartupPage = () => {
  return (
    <main className="page_content about-page">
      <Head>
        <title>BRVTECK Startup Program | Startup Alliance with BRVTECK</title>
        <meta
          name="description"
          content="BRVTECK Startup Program helps B2B scaleups grow faster, expand into new markets, and achieve long-term success through innovation, partnerships, and expert guidance."
        />
        <meta
          name="keywords"
          content="BRVTECK, Startup Program, B2B, Scaleups, Innovation, Growth, Deep-tech, Partnerships, Business Acceleration"
        />
        <meta name="author" content="BRVTECK" />
        <meta
          property="og:title"
          content="BRVTECK Startup Program | Startup Alliance with BRVTECK"
        />
        <meta
          property="og:description"
          content="Accelerate your startup's growth with BRVTECK's innovation-driven program, expert support, and global ecosystem."
        />
        <meta property="og:image" content="/img/startup/startup.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/startups" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BRVTECK Startup Program | Startup Alliance with BRVTECK"
        />
        <meta
          name="twitter:description"
          content="Join the BRVTECK Startup Program for expert guidance, innovation, and business growth."
        />
        <meta name="twitter:image" content="/img/startup/startup.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/startups" />
      </Head>
      <Header />
      <PageTitle
        pageTitle="BRVTECK STARTUP PROGRAM"
        pagesub="Startup Alliance with BRVTECK"
        pageTop="Startup"
      />

      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image mb-4">
            <img
              src="/img/startup/startup.jpg"
              alt="Startup Banner"
              className="w-100 rounded"
            />
          </div>

          <h2 className="details_item_title">BRVTECK Startup Program</h2>
          <p>
            This BRVTECK program is focused on helping B2B scaleups navigate the
            challenges and opportunities of growth and getting you to market
            faster. Taking your ideas to bigger audiences. Expanding into new,
            diverse markets. And setting the tone for your future success.
          </p>
          <p className="mb-0">
            Take advantage of our experience and expertise. Our ecosystems of
            buyers and sellers. Our history of transformation. The faster you
            want to grow, the more you need to join Startup with BRVTECK.
          </p>

          <hr />

          <h3 className="details_item_info_title pt-4">
            Startup Enablement Priorities
          </h3>
          <p>
            We help startups unlock growth by aligning innovation with market
            needs. Our program emphasizes sustainable scaling, real-time
            performance, and leveraging deep-tech partnerships to create
            measurable outcomes and long-term value.
          </p>

          <div className="row mb-4">
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {priorities.slice(0, 3).map((text, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                    <CheckCircle
                      size={20}
                      className="me-2 text-primary bg-white rounded-circle p-1"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {priorities.slice(3, 6).map((text, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                    <CheckCircle
                      size={20}
                      className="me-2 text-primary bg-white rounded-circle p-1"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Startup Benefits Cards Section === */}
      <section className="policy_section bg-light pt-0">
        <div className="container">
          <h3 className="section_heading text-center mb-5">Startup Benefits</h3>
          <div className="row">
            {benefitCards.map((item, i) => (
              <div className="col-lg-4 mb-4" key={i}>
                <div className="iconbox_block h-100">
                  <div className="iconbox_icon mb-3 text-primary">
                    {item.icon}
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">{item.title}</h3>
                    <p className="mb-0">{item.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </main>
  );
};

export default StartupPage;
