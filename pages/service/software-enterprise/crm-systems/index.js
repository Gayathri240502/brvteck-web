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
  Cloud,
  ServerCog,
  Share2,
  Lock,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Puzzle,
  Users,
} from "lucide-react";

const CRMSystemsPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/softwareenterprise/s4.jpg";
  const aboutImages = ["/img/services/softwareenterprise/s6.jpg"];

  const PolicyIcons = [
    {
      title: "Cloud migration and integration expertise",
      icon: Cloud,
    },
    {
      title: "Data synchronization across systems",
      icon: ServerCog,
    },
    {
      title: "Seamless connectivity and scalability",
      icon: Share2,
    },
    {
      title: "Secure cloud solutions with robust security measures",
      icon: Lock,
    },
    {
      title: "Optimized cost management with cloud resources",
      icon: DollarSign,
    },
  ];

  const PolicyContent = [
    {
      title: "Trusted CRM Integration",
      subTitle:
        "Our CRM solutions seamlessly integrate with your systems to enhance business workflows.",
      icon: ShieldCheck,
    },
    {
      title: "Faster Go-to-Market",
      subTitle:
        "Quick implementation of CRM ensures your team can start benefiting without delays.",
      icon: Rocket,
    },
    {
      title: "Scalability and Cost-Efficiency",
      subTitle:
        "Our CRM adapts to your growing business while maintaining cost-effectiveness.",
      icon: DollarSign,
    },
    {
      title: "Customizable Workflows",
      subTitle: "Tailored CRM solutions to match your unique business needs.",
      icon: Puzzle,
    },
    {
      title: "Measurable Business Outcomes",
      subTitle:
        "Improved customer engagement, retention, and satisfaction rates.",
      icon: TrendingUp,
    },
    {
      title: "Long-term Partnership",
      subTitle:
        "Our team works closely with yours to ensure continuous improvement and success.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>CRM Systems | Brvteck Enterprise Software</title>
        <meta
          name="description"
          content="Brvteck CRM systems streamline customer engagement, automate workflows, and empower teams with actionable insights for business growth."
        />
        <meta
          name="keywords"
          content="CRM, CRM Systems, Customer Relationship Management, Brvteck, Enterprise Software, Business Automation, Customer Engagement"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="CRM Systems | Brvteck Enterprise Software"
        />
        <meta
          property="og:description"
          content="Boost productivity and customer satisfaction with Brvteck's scalable CRM solutions for enterprises."
        />
        <meta
          property="og:image"
          content="/img/services/softwareenterprise/s6.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/software-enterprise/crm-systems"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CRM Systems | Brvteck Enterprise Software"
        />
        <meta
          name="twitter:description"
          content="Streamline your business with Brvteck's CRM systems and expert integration."
        />
        <meta
          name="twitter:image"
          content="/img/services/softwareenterprise/s6.jpg"
        />
        <link
          rel="canonical"
          href="https://www.brvteck.com/service/software-enterprise/crm-systems"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="CRM Systems"
          pagesub="Enterprise Software"
          pageTop="CRM"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImages[0]}
                    alt="CRM Integration"
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
                      CRM
                      <span className="badge bg-secondary text-white">
                        Systems
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Streamline Your Operations with CRM Integration
                    </h1>

                    <p className="heading_description mb-0">
                      Brvteck delivers scalable CRM systems tailored to your
                      enterprise. From improving customer engagement to boosting
                      operational productivity, our solutions are designed for
                      your growth.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Enhance customer experience with centralized data
                      </li>
                      <li className="mb-2">
                        • Automate customer journeys and improve retention
                      </li>
                      <li className="mb-2">
                        • Empower teams with actionable customer insights
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
                    alt="CRM Systems"
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
                      Empowering Your CRM Infrastructure
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

export default CRMSystemsPage;
