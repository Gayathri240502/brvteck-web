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

const EAI = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/ai-ml/rpa2.jpg";
  const aboutImages = ["/img/services/ai-ml/ai3.jpg"];

  const PolicyIcons = [
    {
      title: "AI-driven decision-making capabilities",
      icon: BotIcon,
    },
    {
      title: "Analytics for Live decision-making",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Custom frameworks for business challenges",
      icon: Settings2Icon,
    },
    {
      title: "Enterprise systems like ERP & CRM",
      icon: Laptop2Icon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading AI Experts",
      subTitle:
        "Leverage EAI to integrate on-premises and public clouds with RPA-driven orchestration for seamless workloads Automate compliance enforcement and policy management via RPA-enabled EAI workflows",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        " Accelerate end-to-end hybrid-cloud rollouts in days with EAI-driven RPA plug-and-play integration packs Leverage RPA-driven provisioning pipelines within your EAI framework for fully automated, consistent resource orchestration",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        " Leverage EAI to architect scalable hybrid-cloud platforms that boost infrastructure agility",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Integrate real-time telemetry into your EAI framework to dynamically adjust resource distribution and boost efficiency",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        "Enable continuous performance improvements with EAI-driven analytics and adaptive orchestration feedback loops",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Collaborate with our experts to co-design hybrid-cloud deployments powered by EAI for fully customized orchestration",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | Enterprise AI Engineering</title>
<meta
  name="description"
  content="BRVTeck offers advanced Enterprise AI Engineering services, providing AI-driven decision-making capabilities, real-time analytics, and custom frameworks tailored to address unique business challenges. Our solutions seamlessly integrate with enterprise systems like ERP and CRM, enhancing operational efficiency and strategic planning."
/>
<meta
  name="keywords"
  content="Enterprise AI Engineering, AI-driven decision-making, real-time analytics, custom AI frameworks, ERP integration, CRM integration, AI-powered insights, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/enterprise-ai-engineering"
/>
<meta
  property="og:title"
  content="BRVTeck | Enterprise AI Engineering"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's Enterprise AI Engineering services, offering AI-driven decision-making, real-time analytics, and custom frameworks for seamless integration with ERP and CRM systems, empowering businesses with intelligent automation and strategic insights."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/enterprise-ai-engineering"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Enterprise AI Engineering"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's Enterprise AI Engineering services to implement AI-driven decision-making, real-time analytics, and custom frameworks, ensuring seamless integration with ERP and CRM systems for enhanced business operations."
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
          pageTitle="Enterprise AI Engineering"
          pagesub="Engineering"
          pageTop="Enterprise AI"
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
                     Enterprise AI
                      <span className="badge bg-secondary text-white">Engineering</span>
                    </div>

                    <h1 className="heading_text">
                      Enterprise-Grade AI Engineering
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong>  Leverage EAI to architect scalable hybrid-cloud platforms that boost infrastructure agility Automate resource provisioning and lifecycle management with EAI-driven workflows for rapid, reliable scaling</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate hybrid-cloud provisioning with EAI-driven RPA for scaling
                      </li>
                      <li className="mb-2">
                        •  Optimize resource allocation via unified Enterprise Grade AI orchestration
                      </li>
                      <li className="mb-2">
                        •  Leverage EAI-driven feedback loops with RPA to optimize deployments
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
                      Accelerate Business With Enterprise Grade AI Engineering 
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

export default EAI;
