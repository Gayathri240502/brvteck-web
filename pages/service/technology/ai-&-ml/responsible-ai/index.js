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
  ShieldIcon,
  ShieldPlusIcon,
  Laptop2Icon,
  Rocket,
  Puzzle,
  TrendingUp,
  Users,
  DollarSign,
  Handshake,
  CpuIcon,
  BotIcon,
  Settings2Icon,
  ChartNoAxesColumn,

} from "lucide-react";

const Responsible = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/ai-ml/rpa3.jpg";
  const aboutImages = ["/img/services/ai-ml/ai4.jpg"];

  const PolicyIcons = [
     {
    title: "Custom AI frameworks for unique business challenges",
    icon: Settings2Icon,
  },
  {
    title: "Intelligent automation for workflows and operations",
    icon: CpuIcon,
  },
  {
    title: "Advanced analytics for real-time decision-making",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Integration with enterprise systems like ERP and CRM",
    icon: Laptop2Icon,
  },
  {
    title: "AI-powered insights for strategic planning",
    icon: BotIcon,
  },
  ];

const PolicyContent = [
  {
    title: "Leading AI Experts",
    subTitle:
      "Apply cutting‑edge ethical AI frameworks guided by domain experts to ensure fairness, transparency, and bias mitigation from day one.",
    icon: Handshake,
  },
  {
    title: "Rapid-Launch Platforms",
    subTitle:
      "Deploy trustworthy AI tools swiftly with built‑in explainability, audit logs, and human‑in‑the‑loop checkpoints for secure, compliant rollout.",
    icon: Rocket,
  },
  {
    title: "Cost-Efficient Solutions",
    subTitle:
      "Reduce risk and compliance costs by embedding privacy, governance, and bias monitoring into AI lifecycles—protecting reputations and avoiding fines.",
    icon: DollarSign,
  },
  {
    title: "Seamless Integration",
    subTitle:
      "Integrate real‑time transparency metrics and compliance controls into AI workflows—enabling monitoring and oversight across systems.",
    icon: Puzzle,
  },
  {
    title: "Result‑Oriented Performance",
    subTitle:
      "Drive continuous AI improvement with feedback loops that detect bias, explain model behavior, and adapt dynamically for more reliable outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative Partnership",
    subTitle:
      "Work alongside expert teams on customised AI governance frameworks—combining technical know‑how with ethical oversight for end‑to‑end trust.",
    icon: Users,
  },
];


  return (
    <Fragment>
      <Head>
  <title>BRVTeck | Responsible AI</title>
<meta
  name="description"
  content="BRVTeck offers Responsible AI services, providing custom AI frameworks to address unique business challenges. Our solutions include intelligent automation for workflows, advanced analytics for real-time decision-making, seamless integration with ERP and CRM systems, and AI-powered insights for strategic planning, ensuring ethical and transparent AI deployment."
/>
<meta
  name="keywords"
  content="Responsible AI, custom AI frameworks, intelligent automation, real-time analytics, ERP integration, CRM integration, AI-powered insights, ethical AI, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/responsible-ai"
/>
<meta
  property="og:title"
  content="BRVTeck | Responsible AI"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's Responsible AI services, offering tailored AI frameworks, intelligent automation, real-time analytics, and seamless ERP/CRM integration to empower businesses with ethical and transparent AI solutions."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/responsible-ai"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Responsible AI"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's Responsible AI services to implement custom AI frameworks, intelligent automation, and real-time analytics, ensuring ethical AI deployment and strategic business insights."
/>
<meta property="twitter:image" content="/img/logo.png" />

<meta name="format-detection" content="telephone=no" />
<meta name="contact" content="+91-8062177256" />
<meta name="email" content="sales@brvteck.com" />
<meta name="location" content="Mindspace, Hyderabad" />
<link rel="icon" href="/favicon.ico" />

</Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Responsible AI"
          pagesub="AI"
          pageTop="Responsible "
        />

        {/* About Section */}
        <section className="about_section section_space">
  <div className="container">
    <div className="row align-items-center justify-content-lg-between">
      <div className="col-lg-6">
        <div className="d-flex align-items-center">
          <Image
            src={aboutImages[0]}
            alt="AI"
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
              Responsible
              <span className="badge bg-secondary text-white">AI</span>
            </div>

            <h1 className="heading_text">
              Enterprise‑Grade Responsible AI
            </h1>

            <p className="heading_description mb-0">
              <strong>BRVTeck</strong> delivers AI that is fair, transparent, accountable, secure, and human‑centric. We build responsible AI solutions on hybrid‑cloud systems—embedding bias audits, explainability, human‑in‑the‑loop oversight, and strong governance to ensure ethical and trusted automation.
            </p>
          </div>
          <div className="mt-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                • Promote fairness & bias mitigation using representative data and ongoing audits. 
              </li>
              <li className="mb-2">
                • Enhance transparency with explainable AI, model cards, and auditable decision logs. 
              </li>
              <li className="mb-2">
                • Apply human‑in‑the‑loop oversight for accountable decision‑making.
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
                    alt="AI Implementation"
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
                      Accelerate Business With Responsible AI
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

export default Responsible;
