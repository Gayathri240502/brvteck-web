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

} from "lucide-react";

const RPA = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/ai-ml/rpa1.jpg";
  const aboutImages = ["/img/services/ai-ml/rpa3.jpg"];

  const PolicyIcons = [
    
    {
      title: "Automated extraction & processing",
      icon: CpuIcon,
    },
    {
      title: "AI-driven decision-making capabilities",
      icon: BotIcon,
    },
    {
      title: "End-to-end workflow automation",
      icon: ShieldPlusIcon,
    },
    {
      title: "Integration with enterprise apps",
      icon: ShieldIcon,
    },
    {
      title: "Bots for repetitive task automation",
      icon: Laptop2Icon,
    },
  ];

  const PolicyContent = [
    {
      title: "Leading AI Experts",
      subTitle:
        "Leverage robotic process automation to integrate on-premises and public clouds for seamless workload orchestration Automate compliance enforcement and policy management through RPA-driven workflows",
      icon: Handshake,
    },
    {
      title: "Rapid-Launch Platforms",
      subTitle:
        "Accelerate end-to-end hybrid-cloud rollouts in days with plug-and-play integration packs via robotic process automation Leverage RPA-driven provisioning pipelines for fully automated resource orchestration",
      icon: Rocket,
    },
    {
      title: "Cost-Efficient Solutions",
      subTitle:
        "  Achieve cost-efficient, scalable hybrid-cloud by unifying on-premises and cloud resources with robotic process automation",
      icon: DollarSign,
    },
    {
      title: "Seamless Integration",
      subTitle:
        "Streamline workload orchestration across on-premises and cloud environments with robotic process automation pipelines",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Performance",
      subTitle:
        "Unlock measurable efficiency gains in your end-to-end hybrid-cloud solutions with robotic process automation",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Partnership",
      subTitle:
        "Partner with our team to co-create hybrid-cloud deployments using robotic process automation for fully customized orchestration.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRVTeck | Robotic Process Automation</title>
<meta
  name="description"
  content="BRVTeck offers advanced Robotic Process Automation (RPA) services, providing AI-driven decision-making capabilities, real-time analytics, and end-to-end workflow automation. Our solutions seamlessly integrate with enterprise applications like ERP and CRM, enabling bots to automate repetitive tasks and enhance operational efficiency."
/>
<meta
  name="keywords"
  content="Robotic Process Automation, RPA, AI-driven decision-making, real-time analytics, end-to-end workflow automation, ERP integration, CRM integration, task automation, BRVTeck"
/>
<meta name="author" content="BRVTeck" />


<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/rpa"
/>
<meta
  property="og:title"
  content="BRVTeck | Robotic Process Automation"
/>
<meta
  property="og:description"
  content="Explore BRVTeck's Robotic Process Automation services, leveraging AI to automate repetitive tasks, integrate with ERP and CRM systems, and provide real-time analytics for enhanced decision-making and operational efficiency."
/>
<meta property="og:image" content="/img/logo.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:url"
  content="https://www.brvteck.com/service/technology/ai-&-ml/rpa"
/>
<meta
  property="twitter:title"
  content="BRVTeck | Robotic Process Automation"
/>
<meta
  property="twitter:description"
  content="Leverage BRVTeck's Robotic Process Automation services to automate repetitive tasks, integrate with enterprise applications, and enhance decision-making through AI-driven analytics."
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
          pageTitle="Robotic Process Automation"
          pagesub="Automation"
          pageTop="Robotic Process"
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
                     Robotic Process 
                      <span className="badge bg-secondary text-white">Automation</span>
                    </div>

                    <h1 className="heading_text">
                      Enterprise-Grade Robotic Process Automation
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong>  Leverage robotic process automation to deliver scalable hybrid-cloud platforms that boost infrastructure agility .Automate resource provisioning and lifecycle management with RPA-driven workflows for rapid, reliable scaling</p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        •  Accelerate hybrid-cloud provisioning with robotic process automation
                      </li>
                      <li className="mb-2">
                        • Optimize resource allocation via unified RPA orchestration
                      </li>
                      <li className="mb-2">
                        • Centralize governance with RPA for compliance and cost savings
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
                      Accelerate Business Innovation Robotic Automation 
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

export default RPA;
