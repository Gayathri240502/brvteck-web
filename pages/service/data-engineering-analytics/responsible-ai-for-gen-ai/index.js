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
  Eye,
  Scale,
  ShieldCheck,
  AlertTriangle,
  FileSearch,
  BarChart3,
  Users,
} from "lucide-react";

const ResponsibleAIforGenAIPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/dataengineer/d12.jpg";
  const aboutImages = ["/img/services/dataengineer/d11.jpg"];

  const PolicyIcons = [
    {
      title: "Bias Detection & Mitigation",
      icon: Scale, // Represents fairness and balance
    },
    {
      title: "AI Transparency",
      icon: Eye,
    },
    {
      title: "Responsible AI Governance",
      icon: ShieldCheck,
    },
    {
      title: "AI Risk Management Tools",
      icon: AlertTriangle,
    },
    {
      title: "Transparent Model Behavior",
      icon: FileSearch,
    },
  ];

  const PolicyContent = [
    {
      title: "Ethical AI Alignment",
      subTitle:
        "We ensure all generative AI solutions comply with established ethical guidelines and global frameworks.",
      icon: Scale, // Symbolizes fairness and balance
    },
    {
      title: "Transparency & Explainability",
      subTitle:
        "We build AI systems with traceable decision-making processes to promote trust and accountability.",
      icon: Eye, // Visibility and transparency
    },
    {
      title: "Responsible Governance",
      subTitle:
        "Our governance frameworks support oversight, compliance, and responsible model lifecycle management.",
      icon: ShieldCheck, // Responsibility and protection
    },
    {
      title: "Model Auditing & Monitoring",
      subTitle:
        "Gain insight into how generative AI models behave through continuous auditing and behavior tracking.",
      icon: FileSearch, // Deep inspection and review
    },
    {
      title: "Risk & Bias Mitigation",
      subTitle:
        "We proactively identify and reduce bias while managing AI risks across training, deployment, and use.",
      icon: AlertTriangle, // Warnings and risk management
    },
    {
      title: "Collaborative Development",
      subTitle:
        "We partner with your team to align AI solutions with your organization’s values and long-term vision.",
      icon: Users, // Teamwork and collaboration
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Responsible AI for Generative AI | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck enables ethical and responsible use of generative AI by focusing on fairness, transparency, bias mitigation, and governance. Partner with us to align AI with your values."
        />
        <meta
          name="keywords"
          content="Responsible AI, Generative AI Ethics, AI Governance, AI Bias Mitigation, Ethical AI, AI Transparency, BRVTeck"
        />
        <meta name="author" content="BRVTeck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="Responsible AI for Generative AI | BRVTeck"
        />
        <meta
          property="og:description"
          content="Build trust with Responsible AI. BRVTeck delivers ethical AI systems focused on bias reduction, transparency, and accountable governance."
        />
        <meta
          property="og:url"
          content="https://brvteck.com/service/data-engineering-analytics/responsible-gen-ai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://brvteck.com/img/services/dataengineer/d11.jpg"
        />

        {/* Optional: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Responsible AI for Generative AI | BRVTeck"
        />
        <meta
          name="twitter:description"
          content="Promote fairness and trust with BRVTeck’s responsible AI services—built to mitigate risk and align with your values."
        />
        <meta
          name="twitter:image"
          content="https://brvteck.com/img/services/dataengineer/d11.jpg"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Responsible AI for Gen AI"
          pagesub="Gen AI"
          pageTop="Responsible AI "
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
                      Responsible AI
                      <span className="badge bg-secondary text-white">
                        for Gen AI
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Ensuring Ethical and Responsible Use of AI Technologies
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> prioritizes the responsible
                      deployment of AI technologies to ensure that they are
                      aligned with ethical standards. Our Responsible AI for Gen
                      AI solutions are designed to mitigate bias, ensure
                      transparency, and promote fairness in the development and
                      application of AI models.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Mitigate bias with ethically aligned AI model design
                      </li>
                      <li className="mb-2">
                        • Ensure transparency across AI development and
                        deployment
                      </li>
                      <li className="mb-2">
                        • Promote fairness and accountability in generative AI
                        systems
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

export default ResponsibleAIforGenAIPage;
