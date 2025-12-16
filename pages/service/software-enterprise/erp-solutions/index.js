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
  ServerCog,
  BarChart2,
  Sliders,
  Share2,
  Users,
  ShieldCheck,
  Rocket,
  Puzzle,
  TrendingUp,
  DollarSign
} from "lucide-react";

const ERPSolutionsPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/softwareenterprise/s9.jpg";
  const aboutImages = ["/img/services/softwareenterprise/s7.jpg"];

  const PolicyIcons = [
    {
      title: "End-to-end business process integration",
      icon: ServerCog,
    },
    {
      title: "Real-time data analytics and reporting",
      icon: BarChart2,
    },
    {
      title: "Customizable modules tailored to your needs",
      icon: Sliders,
    },
    {
      title: "Seamless integration with other business systems",
      icon: Share2,
    },
    {
      title: "Improved collaboration and communication across teams",
      icon: Users,
    },
  ];

  const PolicyContent = [
    {
      title: "Trusted ERP Implementation",
      subTitle:
        "Our ERP solutions are designed for fast deployment and minimal disruption, ensuring smooth business transitions.",
      icon: ShieldCheck,
    },
    {
      title: "Faster Go-to-Market",
      subTitle:
        "Quick ERP implementation enables your business to gain immediate benefits.",
      icon: Rocket,
    },
    {
      title: "Tailored Configurations",
      subTitle:
        "Customized modules aligned with your workflows for operational excellence.",
      icon: Puzzle,
    },
    {
      title: "Performance-Driven",
      subTitle:
        "Track real-time performance, KPIs, and efficiency metrics.",
      icon: TrendingUp,
    },
    {
      title: "Cost-Efficient Scaling",
      subTitle:
        "Grow with confidence—our ERP solutions are scalable and cost-conscious.",
      icon: DollarSign,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>ERP Solutions | Brvteck Enterprise Software</title>
        <meta name="description" content="Brvteck ERP solutions streamline business processes, integrate departments, and provide real-time insights for operational efficiency and growth." />
        <meta name="keywords" content="ERP, ERP Solutions, Enterprise Resource Planning, Brvteck, Business Automation, Integration, Real-Time Insights" />
        <meta name="author" content="Brvteck" />
        <meta property="og:title" content="ERP Solutions | Brvteck Enterprise Software" />
        <meta property="og:description" content="Unlock your business potential with Brvteck's ERP solutions for automation, integration, and growth." />
        <meta property="og:image" content="/img/services/softwareenterprise/s7.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/service/software-enterprise/erp-solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERP Solutions | Brvteck Enterprise Software" />
        <meta name="twitter:description" content="Streamline your business with Brvteck's ERP solutions and expert implementation." />
        <meta name="twitter:image" content="/img/services/softwareenterprise/s7.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/service/software-enterprise/erp-solutions" />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="ERP Solutions"
          pagesub="Enterprise Software"
          pageTop="ERP"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="ERP Integration"
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
                      ERP
                      <span className="badge bg-secondary text-white">Solutions</span>
                    </div>

                    <h1 className="heading_text">
                      Integrated ERP Solutions for Business Efficiency
                    </h1>

                    <p className="heading_description mb-0">
                      Brvteck provides end-to-end ERP solutions that streamline your business processes and enable seamless integration across departments. Our ERP systems empower businesses with data-driven insights, better decision-making, and improved operational efficiency.
                    </p>
                    <p className="mt-2">
                      With our expertise, we help your business implement, customize, and maintain ERP systems tailored to your specific needs.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Real-time insights for informed decisions
                      </li>
                      <li className="mb-2">
                        • Automate and optimize workflows
                      </li>
                      <li className="mb-2">
                        • Drive growth with flexible ERP modules
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
                    alt="ERP Features"
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
                      Unlock Your Business Potential with ERP Solutions
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

export default ERPSolutionsPage;
