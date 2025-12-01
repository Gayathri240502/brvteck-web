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

const ITInfrastructureNetworkingPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/iot/i8.jpg";
  const aboutImages = ["/img/services/iot/i6.jpg"];

  const PolicyIcons = [
    {
      title: "Reliable Connectivity",
      icon: Network,
    },
    {
      title: "Advanced Infrastructure",
      icon: Settings2,
    },
    {
      title: "Intelligent Monitoring",
      icon: BrainCog,
    },
    {
      title: "Automated Management",
      icon: Bot,
    },
    {
      title: "Performance Optimization",
      icon: Gauge,
    },
  ];

  const PolicyContent = [
    {
      title: "Robust Network Security",
      subTitle:
        "Our solutions ensure your infrastructure is safe from threats with real-time monitoring and secure configurations.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Deployment",
      subTitle:
        "From initial setup to full-scale rollout, we enable quick and reliable implementation for seamless operations.",
      icon: Rocket,
    },
    {
      title: "Scalable Infrastructure",
      subTitle:
        "Easily scale up your network and systems to meet growing business demands with minimal cost.",
      icon: DollarSign,
    },
    {
      title: "System Integration",
      subTitle:
        "We seamlessly integrate new systems with your existing IT environment for smooth and effective operation.",
      icon: Puzzle,
    },
    {
      title: "Data-Driven Efficiency",
      subTitle:
        "Boost IT performance with analytics-driven decision-making and real-time infrastructure insights.",
      icon: TrendingUp,
    },
    {
      title: "Expert Support Team",
      subTitle:
        "Our dedicated IT experts work closely with you, ensuring infrastructure uptime, support, and optimization.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
  <title>BRV Technologies | IT Infrastructure & Networking Solutions</title>
  <meta
    name="description"
    content="Enhance your business operations with BRV Technologies’ scalable IT infrastructure and networking services. Secure, reliable, and performance-driven solutions for modern enterprises."
  />
  <meta
    name="keywords"
    content="IT Infrastructure, Networking Solutions, Network Security, Enterprise IT, System Integration, IT Services Hyderabad, Cloud Networking, BRV Technologies"
  />
  <meta name="author" content="BRV Technologies Private Limited" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://www.brvteck.com/service/it-infrastructure-and-networking"
  />
  <meta
    property="og:title"
    content="BRV Technologies | IT Infrastructure & Networking Solutions"
  />
  <meta
    property="og:description"
    content="Secure, scalable, and high-performance IT infrastructure and network services by BRV Technologies. Supporting enterprise-grade deployments with expert support."
  />
  <meta property="og:image" content="/img/logo.png" />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://www.brvteck.com/service/it-infrastructure-and-networking"
  />
  <meta
    property="twitter:title"
    content="BRV Technologies | IT Infrastructure & Networking Solutions"
  />
  <meta
    property="twitter:description"
    content="Secure, scalable, and high-performance IT infrastructure and network services by BRV Technologies."
  />
  <meta property="twitter:image" content="/img/logo.png" />

  {/* Contact and Location Metadata */}
  <meta name="format-detection" content="telephone=no" />
  <meta name="contact" content="+91-8062177256" />
  <meta name="email" content="info@brvteck.com" />
  <meta name="location" content="Mindspace, Hyderabad" />
  <link rel="icon" href="/favicon.ico" />
</Head>


      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="IT Infrastructure and Networking"
          pagesub="Infrastructure & Network"
          pageTop="Services"
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
                      Infrastructure
                      <span className="badge bg-secondary text-white">IT</span>
                    </div>

                    <h1 className="heading_text">
                      Build Resilient Systems with Modern IT Infrastructure
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> empowers your business with
                      reliable IT and networking solutions. From setup to
                      security, we ensure your systems run smoothly, securely,
                      and efficiently in a fast-paced digital world.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Enhance operations with secure infrastructure
                      </li>
                      <li className="mb-2">
                        • Optimize performance and network speed
                      </li>
                      <li className="mb-2">
                        • Minimize downtime with proactive monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="policy_section mb-5">
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
                      Reliable & Scalable IT Infrastructure and Networking
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

export default ITInfrastructureNetworkingPage;
