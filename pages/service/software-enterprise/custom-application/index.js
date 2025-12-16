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
  Code2,
  Share2,
  Layers3,
  ShieldCheck,
  Sliders,
  LifeBuoy,
  Rocket,
  Puzzle,
  TrendingUp,
  DollarSign
} from "lucide-react";

const CustomApplicationPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/softwareenterprise/s13.jpg";
  const aboutImages = ["/img/services/softwareenterprise/s11.jpg"];

  const PolicyIcons = [
    {
      title: "Tailored solutions for specific business processes",
      icon: Code2,
    },
    {
      title: "Seamless integration with existing software",
      icon: Share2,
    },
    {
      title: "Scalable and flexible designs",
      icon: Layers3,
    },
    {
      title: "Robust security measures for safe and secure applications",
      icon: ShieldCheck,
    },
    {
      title: "Continuous maintenance and support",
      icon: LifeBuoy,
    },
  ];

  const PolicyContent = [
    {
      title: "Expert Custom Development",
      subTitle:
        "We specialize in building custom applications tailored to your unique needs and industry workflows.",
      icon: Sliders,
    },
    {
      title: "Fast & Agile Delivery",
      subTitle:
        "Using agile methodologies, we deliver applications quickly without compromising on quality.",
      icon: Rocket,
    },
    {
      title: "Tailored Configurations",
      subTitle:
        "Every feature is designed specifically for your business processes and goals.",
      icon: Puzzle,
    },
    {
      title: "Results-Oriented Approach",
      subTitle:
        "Our applications are focused on driving real impact, from efficiency to profitability.",
      icon: TrendingUp,
    },
    {
      title: "Cost-Effective Solutions",
      subTitle:
        "Maximize ROI with scalable, value-driven application design and maintenance.",
      icon: DollarSign,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Custom Application Development | Brvteck Enterprise Software</title>
        <meta name="description" content="Brvteck builds custom applications tailored to your business needs. Scalable, secure, and seamlessly integrated solutions for web, mobile, and desktop." />
        <meta name="keywords" content="Custom Applications, Application Development, Brvteck, Enterprise Software, Business Solutions, Web Apps, Mobile Apps" />
        <meta name="author" content="Brvteck" />
        <meta property="og:title" content="Custom Application Development | Brvteck Enterprise Software" />
        <meta property="og:description" content="Get scalable, secure, and integrated custom applications for your business with Brvteck." />
        <meta property="og:image" content="/img/services/softwareenterprise/s11.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/service/software-enterprise/custom-application" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Application Development | Brvteck Enterprise Software" />
        <meta name="twitter:description" content="Brvteck delivers custom application development for web, mobile, and desktop." />
        <meta name="twitter:image" content="/img/services/softwareenterprise/s11.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/service/software-enterprise/custom-application" />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Custom Applications"
          pagesub="Enterprise Software"
          pageTop="Custom"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="Custom Application Development"
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
                      Custom
                      <span className="badge bg-secondary text-white">Application</span>
                    </div>

                    <h1 className="heading_text">
                      Tailored Custom Applications for Your Business Needs
                    </h1>

                    <p className="heading_description mb-0">
                      Brvteck specializes in building custom applications that are designed specifically for your business needs. Our solutions are highly scalable, flexible, and can be integrated with your existing systems, ensuring seamless functionality and optimized performance.
                    </p>
                    <p className="mt-2">
                      Whether you need a web, mobile, or desktop application, we offer end-to-end services, from planning and development to testing and deployment.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Purpose-built for your business workflows
                      </li>
                      <li className="mb-2">
                        • Secure, scalable, and future-ready
                      </li>
                      <li className="mb-2">
                        • Seamless deployment with ongoing support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                    alt="Custom Application Features"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span> features
                    </div>
                    <h2 className="heading_text mb-0">
                      Custom Solutions for Your Unique Business Challenges
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

export default CustomApplicationPage;
