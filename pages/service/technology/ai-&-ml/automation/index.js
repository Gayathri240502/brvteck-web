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

const Automate = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/ai-ml/rpa1.jpg";
  const aboutImages = ["/img/services/ai-ml/ai2.jpg"];

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
     {
      title: "Automation for workflows & operations",
      icon: CpuIcon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading AI Experts",
      subTitle:
        "Leverage Automation to integrate with Automation-driven orchestration for seamless workloads Automate compliance enforcement and policy management via RPA-enabled EAI workflows",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        " Accelerate end-to-end Automation rollouts in days with Automation-driven RPA plug-and-play integration packs Leverage RPA-driven provisioning pipelines within your EAI framework for fully automated, consistent resource orchestration",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        " Leverage Automation to architect scalable Automation platforms that boost infrastructure agility",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        " Integrate real-time telemetry into your Automation framework to dynamically adjust resource distribution and boost efficiency",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        "Enable continuous performance improvements with  Automation and adaptive orchestration feedback loops",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Collaborate with our experts to co-design Automation deployments powered by Automation for fully customized orchestration",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
 <title>BRVTeck | AI-Driven Automation</title>
<meta
  name="description"
  content="BRVTeck offers AI-driven automation services, providing intelligent decision-making capabilities, real-time analytics, and custom frameworks to address unique business challenges. Our solutions seamlessly integrate with enterprise systems like ERP and CRM, enhancing workflow efficiency and operational effectiveness."
/>
<meta
  name="keywords"
  content="AI-driven automation, intelligent decision-making, real-time analytics, custom AI frameworks, ERP integration, CRM integration, workflow automation, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/automation"
/>
<meta
  property="og:title"
  content="BRVTeck | AI-Driven Automation"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's AI-driven automation services, leveraging intelligent decision-making, real-time analytics, and custom frameworks to optimize workflows and integrate seamlessly with ERP and CRM systems for enhanced business operations."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/automation"
/>
<meta
  property="twitter:title"
  content="BRVTeck | AI-Driven Automation"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's AI-driven automation services to implement intelligent decision-making, real-time analytics, and custom frameworks, ensuring seamless integration with ERP and CRM systems for optimized business workflows."
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
          pageTitle="AI Driven Automation"
          pagesub="Automation"
          pageTop="AI Driven"
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
                     Enterprise AI Automation
                      <span className="badge bg-secondary text-white">Engineering</span>
                    </div>

                    <h1 className="heading_text">
                      Enterprise-Grade AI Automation
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong>  Leverage Automation to architect scalable hybrid-cloud platforms that boost infrastructure agility Automate resource provisioning and lifecycle management with EAI-driven workflows for rapid, reliable scaling</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate Automation provisioning with EAI-driven RPA for scaling
                      </li>
                      <li className="mb-2">
                        •  Optimize resource allocation via unified Automation orchestration
                      </li>
                      <li className="mb-2">
                        •  Leverage Automation feedback loops with RPA to optimize deployments
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
                      Accelerate Business With AI Automation 
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

export default Automate;
