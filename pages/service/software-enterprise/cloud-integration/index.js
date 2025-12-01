import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import {
  CloudUpload,
  Link2,
  ShieldCheck,
  ServerCog,
  BarChart3,
  RefreshCcw,
  Layers,
  Settings,
} from "lucide-react";

const CloudIntegrationPage = () => {
  const aboutImage = "/img/services/softwareenterprise/s1.jpg";
  const featureImage = "/img/services/softwareenterprise/s3.jpg";

  const KeyFeatures = [
    { title: "Cloud Migration Expertise", icon: CloudUpload },
    { title: "Data Synchronization", icon: RefreshCcw },
    { title: "Seamless Connectivity", icon: Link2 },
    { title: "Scalable Architecture", icon: Layers },
    { title: "Secure Cloud Solutions", icon: ShieldCheck },
    { title: "Optimized Cost Management", icon: BarChart3 },
  ];

  const WhyChooseUs = [
    {
      title: "Robust & Reliable Integration",
      subTitle:
        "We ensure seamless and dependable integration of cloud services tailored to your operations.",
      icon: ServerCog,
    },
    {
      title: "Industry-Leading Tools",
      subTitle:
        "Our team leverages top cloud platforms and technologies to ensure high performance and flexibility.",
      icon: Settings,
    },
    {
      title: "Maximized Growth & Efficiency",
      subTitle:
        "Accelerate digital transformation while reducing costs and improving productivity across departments.",
      icon: BarChart3,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Cloud Integration Services | Brvteck</title>
        <meta
          name="description"
          content="Brvteck provides robust cloud integration services for scalable, secure, and efficient business operations. Migrate, connect, and optimize your systems with our expertise."
        />
        <meta
          name="keywords"
          content="Cloud Integration, Cloud Migration, Cloud Services, Brvteck, Business Cloud, AWS, Azure, Scalable Infrastructure"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="Cloud Integration Services | Brvteck"
        />
        <meta
          property="og:description"
          content="Seamless cloud integration and migration services by Brvteck for business growth and efficiency."
        />
        <meta property="og:image" content="/img/services/softwareenterprise/s1.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/software-enterprise/cloud-integration"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cloud Integration Services | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Seamless cloud integration and migration for your business by Brvteck."
        />
        <meta name="twitter:image" content="/img/services/softwareenterprise/s1.jpg" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/service/software-enterprise/cloud-integration"
        />
      </Head>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Cloud Integration"
          pagesub="Enterprise Services"
          pageTop="Cloud"
        />

        {/* Intro Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <Image
                  src={aboutImage}
                  alt="Cloud Integration"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Seamless
                      <span className="badge bg-secondary text-white ms-2">
                        Cloud Integration
                      </span>
                    </div>
                    <h1 className="heading_text">
                      Seamless Cloud Integration for Your Business Growth
                    </h1>
                    <p className="heading_description mb-0">
                      <strong>Brvteck</strong> provides end-to-end cloud
                      integration services that empower your business with
                      scalable, flexible, and cost-effective solutions. From
                      cloud migration to system connectivity, we ensure a
                      smooth, secure, and productive transition.
                    </p>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2">
                        • Enhance collaboration and data accessibility
                      </li>
                      <li className="mb-2">
                        • Boost operational efficiency with seamless systems
                      </li>
                      <li className="mb-2">
                        • Minimize disruption, maximize ROI
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Second Section) */}
        <section className="policy_section mb-5">
          <div className="container">
            <div className="heading_block text-center mb-5">
              {/* ...you can add a heading here if needed... */}
            </div>
            <div className="row">
              {WhyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div className="col-lg-4 mb-5" key={idx}>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon bg-secondary-subtle">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">{item.title}</h3>
                        <p className="mb-0">{item.subTitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features (Moved to Bottom) */}
        <section className="service_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <Image
                  src={featureImage}
                  alt="Cloud Key Features"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span>{" "}
                      Features
                    </div>
                    <h2 className="heading_text mb-0">
                      Optimized Cloud Integration Solutions
                    </h2>
                  </div>
                  <ul className="service_facilities_group unordered_list">
                    {KeyFeatures.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx}>
                          <div className="iconbox_block layout_icon_left">
                            <span className="iconbox_icon">
                              <Icon size={40} strokeWidth={1.5} />
                            </span>
                            <span className="iconbox_content">
                              <strong className="iconbox_title mb-0">
                                {item.title}
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

export default CloudIntegrationPage;
