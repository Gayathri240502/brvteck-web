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
  Gauge,
  BrainCog,
  Network,
  Bot,
  Settings2,
  ShieldCheck,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

const AcceleratedGenerativeAIPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/dataengineer/d10.jpg";
  const aboutImages = ["/img/services/dataengineer/d3.jpg"];

  const PolicyIcons = [
    {
      title: "High-Speed Insights",
      icon: Gauge,
    },
    {
      title: "Advanced AI Training",
      icon: BrainCog,
    },
    {
      title: "System Integration",
      icon: Network,
    },
    {
      title: "AI Automation",
      icon: Bot,
    },
    {
      title: "Custom AI Solutions",
      icon: Settings2,
    },
  ];

  const PolicyContent = [
    {
      title: "AI Expertise You Can Trust",
      subTitle:
        "Our team brings deep knowledge in generative AI, ensuring cutting-edge solutions tailored to your business.",
      icon: ShieldCheck,
    },
    {
      title: "Rapid Deployment",
      subTitle:
        "We specialize in quickly integrating AI systems, helping you achieve faster go-to-market and innovation cycles.",
      icon: Rocket,
    },
    {
      title: "Scalable & Cost-Efficient",
      subTitle:
        "Get enterprise-grade AI capabilities without breaking the bank—scalable to your growth and budget.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        "Our solutions fit effortlessly into your existing infrastructure, ensuring minimal disruption and maximum efficiency.",
      icon: Puzzle,
    },
    {
      title: "Performance-Driven Results",
      subTitle:
        "We focus on outcomes—delivering measurable improvements in productivity, insights, and ROI.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "We work as an extension of your team, aligning AI solutions with your goals for lasting impact.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Accelerated Generative AI Services | BRVTeck</title>
        <meta
          name="description"
          content="Leverage BRVTeck's Accelerated Generative AI to transform your business. Automate tasks, drive innovation, and unlock high-speed insights."
        />
        <meta
          name="keywords"
          content="Generative AI, AI Automation, Accelerated AI, BRVTeck, AI Services, Business Intelligence, AI Integration"
        />
        <meta name="author" content="BRVTeck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social Preview */}
        <meta
          property="og:title"
          content="Accelerated Generative AI Services | BRVTeck"
        />
        <meta
          property="og:description"
          content="Accelerate growth with BRVTeck’s Generative AI solutions. Enhance creativity, operations, and performance with scalable AI tools."
        />
        <meta
          property="og:url"
          content="https://brvteck.com/service/data-engineering-analytics/accelerated-generative-ai"
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
          pageTitle="Accelerated Generative AI"
          pagesub="Generative AI"
          pageTop="Accelerated"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Team working with AI systems"
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
                      Generative
                      <span className="badge bg-secondary text-white">AI</span>
                    </div>

                    <h1 className="heading_text">
                      Transform Your Business with Accelerated Generative AI
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> delivers cutting-edge AI
                      solutions to boost creativity, streamline operations, and
                      drive performance. Our models generate data, content, and
                      insights at high speed—keeping you ahead in a fast-moving
                      market.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Accelerate growth with AI-powered strategies
                      </li>
                      <li className="mb-2">
                        • Enable smart automation for long-term success
                      </li>
                      <li className="mb-2">
                        • Achieve faster results with intelligent solutions
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
                      <span className="badge bg-secondary text-white">Key</span>{" "}
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

export default AcceleratedGenerativeAIPage;
