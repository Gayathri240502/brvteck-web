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
  UserPlus,
  Globe,
  Lightbulb,
  Layers,
  ClipboardCheck,
  Users,
  DollarSign,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";

const PeopleOnDemandPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

 
  const wImg = "/img/services/peopleondemand/pod-hero.jpg";
  const aboutImages = ["/img/services/peopleondemand/pod-team.jpg"];

 
  const PolicyIcons = [
    { title: "Rapid Talent Delivery", icon: UserPlus },
    { title: "Global Reach", icon: Globe },
    { title: "Specialized Expertise", icon: Lightbulb },
    { title: "Scalable Engagements", icon: Layers },
    { title: "Seamless Onboarding", icon: ClipboardCheck },
  ];

  
  const PolicyContent = [
    {
      title: "Flexible Staffing",
      subTitle:
        "Quickly scale teams up or down with vetted professionals on short notice.",
      icon: Users,
    },
    {
      title: "Cost Optimization",
      subTitle:
        "Engage talent only when needed—reduce fixed overhead and improve margins.",
      icon: DollarSign,
    },
    {
      title: "Speed to Market",
      subTitle:
        "Fill skill gaps in days, not months, accelerating project timelines.",
      icon: Rocket,
    },
    {
      title: "Quality Assurance",
      subTitle:
        "Stringent vetting and performance monitoring ensure top-tier results.",
      icon: ShieldCheck,
    },
    {
      title: "Performance Insights",
      subTitle:
        "Dashboards track productivity and KPIs for every engagement.",
      icon: TrendingUp,
    },
    {
      title: "Partnership Approach",
      subTitle:
        "We align with your culture and goals, acting as an extension of your team.",
      icon: Handshake,
    },
  ];

  return (
    <Fragment>
      {/* SEO Metadata */}
      <Head>
        <title>People on Demand | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck’s People on Demand service delivers pre-vetted talent exactly when you need it—scaling your workforce with speed, flexibility, and cost control."
        />
        <meta
          name="keywords"
          content="people on demand, staff augmentation, contingent workforce, talent marketplace, flexible staffing, BRVTeck"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="People on Demand"
          pagesub="Talent"
          pageTop="People"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src="/img/work/work9.png"
                    alt="On-demand talent collaborating"
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
                      Talent
                      <span className="badge bg-secondary text-white">
                        &nbsp;On-Demand
                      </span>
                    </div>

                    <h1 className="heading_text">
                      The Right People, Right When You Need Them
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> connects you to a global network
                      of pre-vetted professionals—developers, designers,
                      analysts, and more—ready to jump into your projects at a
                      moment’s notice. Scale effortlessly and keep momentum high
                      without long hiring cycles.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        • Access specialized skills instantly
                      </li>
                      <li className="mb-2">
                        • Pay only for the expertise you use
                      </li>
                      <li className="mb-2">
                        • Maintain agility in fast-moving markets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit Cards */}
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
                    src="/img/work/work4.png"
                    alt="People on Demand dashboard"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-6">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">Key</span>{" "}
                      features
                    </div>
                    <h2 className="heading_text mb-0">
                      Scale Fast, Stay Flexible
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

export default PeopleOnDemandPage;
