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

const Generative = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/ai-ml/rpa4.jpg";
  const aboutImages = ["/img/services/ai-ml/ai7.jpg"];

  const PolicyIcons = [
    {
      title: "Integration of text, image, and audio data",
      icon: Settings2Icon,
    },
    {
      title: "Creative content generation and simulation",
      icon: CpuIcon,
    },
    {
      title: "Advanced neural network architectures",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Real-time multi-modal interactions",
      icon: Laptop2Icon,
    },
    {
      title: "Personalized and scalable AI models",
      icon: BotIcon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading AI Experts",
      subTitle:
        "Design and implement enterprise-grade multimodal AI solutions that intelligently fuse text, image, voice, and structured data from day one.",
      icon: Handshake,
    },
    {
      title: "Rapid‑Launch Platforms",
      subTitle:
        "Deploy multimodal capabilities fast—enabling image‑to‑text, text‑to‑image, voice‑to‑insight pipelines with explainability and governance built in.",
      icon: Rocket,
    },
    {
      title: "Cost‑Efficient Solutions",
      subTitle:
        "Optimize costs by consolidating separate AI tools into unified multimodal platforms—reducing infrastructure overhead while maximizing insight per data dollar.",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        "Embed real‑time multimodal analytics—image, voice, text—into workflows and systems like ERP/CRM for contextual awareness across operations.",
      icon: Puzzle,
    },
    {
      title: "Result‑Oriented Performance",
      subTitle:
        "Use continuous multimodal feedback loops to fine‑tune models—adapting to new formats, detecting bias, and improving across image, audio, and text streams.",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Partner with experts to build custom multimodal AI frameworks tailored to your domain, ensuring governance, explainability, and trust across data modalities.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | Multi-Model Generative AI</title>
        <meta
          name="description"
          content="BRVTeck offers advanced Multi-Model Generative AI services, enabling seamless integration of text, image, and audio data for creative content generation and simulation. Our solutions leverage cutting-edge neural network architectures to facilitate real-time multi-modal interactions, delivering personalized and scalable AI models tailored to your business needs."
        />
        <meta
          name="keywords"
          content="multi-model generative AI, text-image-audio integration, creative content generation, neural network architectures, real-time multi-modal interactions, personalized AI models, scalable AI solutions, BRVTeck"
        />
        <meta name="author" content="BRVTeck" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/technology/ai-&-ml/multi-model-generative-ai"
        />
        <meta
          property="og:title"
          content="BRVTeck | Multi-Model Generative AI"
        />
        <meta
          property="og:description"
          content="Explore BRVTeck's Multi-Model Generative AI services, integrating text, image, and audio data for innovative content creation. Our solutions utilize advanced neural network architectures to enable real-time multi-modal interactions and deliver personalized, scalable AI models."
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/service/technology/ai-&-ml/multi-model-generative-ai"
        />
        <meta
          property="twitter:title"
          content="BRVTeck | Multi-Model Generative AI"
        />
        <meta
          property="twitter:description"
          content="Leverage BRVTeck's Multi-Model Generative AI services to integrate text, image, and audio data for creative content generation. Our solutions employ advanced neural network architectures for real-time multi-modal interactions and personalized AI models."
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
          pageTitle="Multi Model Generative AI"
          pagesub="AI"
          pageTop="Multi Model Generative "
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

                    <h1 className="heading_text">Multi Model Generative AI</h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> delivers AI that is fair,
                      transparent, accountable, secure, and human‑centric. We
                      build responsible AI solutions on hybrid‑cloud
                      systems—embedding bias audits, explainability,
                      human‑in‑the‑loop oversight, and strong governance to
                      ensure ethical and trusted automation.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Promote fairness & bias mitigation using
                        representative data and ongoing audits.
                      </li>
                      <li className="mb-2">
                        • Enhance transparency with explainable AI, model cards,
                        and auditable decision logs.
                      </li>
                      <li className="mb-2">
                        • Apply human‑in‑the‑loop oversight for accountable
                        decision‑making.
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
                      Accelerate Business With Multi Model Gen AI
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

export default Generative;
