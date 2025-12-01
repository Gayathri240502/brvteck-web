import React, { Fragment, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import {
  Smartphone,
  Code2,
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  Layers,
  Rocket,
  Settings2,
  Users,
} from "lucide-react";

const MobileAppDevelopment = () => {
  const [isOpen, setOpen] = useState(false);

  const aboutImage = "/img/services/mobile/mobile4.png"; // dummy image
  const featuresImage = "/img/services/mobile/mobile3.png"; // dummy image

  const KeyFeatures = [
    {
      title: "Cross-Platform Development",
      icon: Smartphone,
    },
    {
      title: "User-Centric UI/UX",
      icon: LayoutDashboard,
    },
    {
      title: "Robust Performance",
      icon: TrendingUp,
    },
    {
      title: "Enterprise-Grade Security",
      icon: ShieldCheck,
    },
    {
      title: "Seamless Integrations",
      icon: Layers,
    },
  ];

  const ServiceHighlights = [
    {
      title: "Custom Mobile App Development",
      subTitle:
        "We build native and cross-platform mobile apps tailored to your business goals, optimized for performance and scalability.",
      icon: Code2,
    },
    {
      title: "Agile Delivery & Support",
      subTitle:
        "From MVPs to enterprise solutions, we follow agile methodology for fast, transparent, and cost-effective delivery.",
      icon: Rocket,
    },
    {
      title: "Post-Launch Maintenance",
      subTitle:
        "Our team ensures your apps remain updated, secure, and compatible across devices with proactive monitoring.",
      icon: Settings2,
    },
    {
      title: "Collaborative Development",
      subTitle:
        "We work as your extended tech team, turning your vision into functional apps with regular updates and stakeholder feedback.",
      icon: Users,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>BRVTeck | Mobile App Development</title>
        <meta
          name="description"
          content="Build powerful, scalable, and user-friendly mobile apps with BRVTeck. Native and cross-platform development, modern UI/UX, and enterprise-ready solutions."
        />
        <meta
          name="keywords"
          content="mobile app development, cross-platform apps, native iOS Android development, BRVTeck, mobile UI/UX, enterprise apps, app support, scalable apps"
        />
        <meta name="author" content="BRVTeck" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/service/technology/mobile-app-development"
        />
        <meta
          property="og:title"
          content="BRVTeck | Mobile App Development"
        />
        <meta
          property="og:description"
          content="Create custom, high-performance mobile apps for Android and iOS with BRVTeck’s expert development team."
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="BRVTeck | Mobile App Development"
        />
        <meta
          property="twitter:description"
          content="Empower your business with scalable and feature-rich mobile applications built by BRVTeck’s expert developers."
        />
        <meta property="twitter:image" content="/img/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Mobile App Development"
          pagesub="Service"
          pageTop="Mobile App"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src={aboutImage}
                    alt="Mobile App Development"
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
                      Mobile App
                      <span className="badge bg-secondary text-white">Service</span>
                    </div>

                    <h1 className="heading_text">
                      Build Future-Ready Mobile Apps with BRVTeck
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> offers end-to-end mobile app development services—from ideation to launch—crafting high-performing, user-friendly applications for startups and enterprises. Whether you're building for iOS, Android, or both, we deliver seamless user experiences backed by strong performance and scalability.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">• Native & Cross-Platform Development</li>
                      <li className="mb-2">• Agile Sprint-Based Delivery</li>
                      <li className="mb-2">• UX-Centric Interface Design</li>
                      <li className="mb-2">• Secure and Scalable Codebase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="policy_section mb-5">
          <div className="container">
            <div className="row">
              {ServiceHighlights.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <div className="col-lg-4 mb-5" key={index}>
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
                    src={featuresImage}
                    alt="Mobile App Features"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span> Features
                    </div>
                    <h2 className="heading_text mb-0">
                      Elevate Your Brand with Smart, Scalable Mobile Apps
                    </h2>
                  </div>
                  <ul className="service_facilities_group unordered_list">
                    {KeyFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <li key={idx}>
                          <div className="iconbox_block layout_icon_left">
                            <span className="iconbox_icon">
                              <Icon size={40} strokeWidth={1.5} />
                            </span>
                            <span className="iconbox_content">
                              <strong className="iconbox_title mb-0">
                                {feature.title}
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

export default MobileAppDevelopment;
