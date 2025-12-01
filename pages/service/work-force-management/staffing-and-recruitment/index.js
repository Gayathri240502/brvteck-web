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
  Briefcase,
  Users,
  ClipboardCheck,
  Globe,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  Rocket,
  Handshake,
} from "lucide-react";

const StaffingRecruitmentPage = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const wImg = "/img/services/staffing/staff-hero.jpg";
  const aboutImages = ["/img/services/staffing/staff-team.jpg"];

  const PolicyIcons = [
    { title: "Talent Acquisition", icon: UserPlus },
    { title: "Industry Expertise", icon: Briefcase },
    { title: "Global Pool", icon: Globe },
    { title: "Screened Candidates", icon: ClipboardCheck },
    { title: "Seamless Onboarding", icon: Users },
  ];

  const PolicyContent = [
    {
      title: "Quality Hires",
      subTitle:
        "Rigorous vetting ensures every candidate meets technical and cultural fit.",
      icon: ShieldCheck,
    },
    {
      title: "Cost Efficiency",
      subTitle:
        "Reduce time-to-hire and recruitment overhead with streamlined processes.",
      icon: DollarSign,
    },
    {
      title: "Faster Scaling",
      subTitle:
        "Fill critical roles in days, accelerating project and business timelines.",
      icon: Rocket,
    },
    {
      title: "Global Reach",
      subTitle:
        "Tap into a worldwide talent network for hard-to-find skill sets.",
      icon: Globe,
    },
    {
      title: "Performance Insight",
      subTitle:
        "Analytics dashboards track candidate pipeline and hiring KPIs in real time.",
      icon: TrendingUp,
    },
    {
      title: "Strategic Partnership",
      subTitle:
        "We work as an extension of your HR team, aligning with long-term goals.",
      icon: Handshake,
    },
  ];

  return (
    <Fragment>
      {/* SEO Metadata */}
      <Head>
        <title>Staffing &amp; Recruitment | BRVTeck</title>
        <meta
          name="description"
          content="BRVTeck’s Staffing & Recruitment services deliver pre-screened talent, industry expertise, and global reach—helping you hire faster, smarter, and more cost-effectively."
        />
        <meta
          name="keywords"
          content="staffing, recruitment, talent acquisition, global hiring, candidate screening, BRVTeck"
        />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Staffing & Recruitment"
          pagesub="Talent"
          pageTop="Staffing"
        />

        {/* About Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <Image
                    src="/img/work/work7.png"
                    alt="Recruitment team interviewing candidate"
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
                        &nbsp;Sourcing
                      </span>
                    </div>

                    <h1 className="heading_text">
                      Hire the Best, Faster Than Ever
                    </h1>

                    <p className="heading_description mb-0">
                      <strong>BRVTeck</strong> connects you with a curated
                      network of professionals across disciplines—developers,
                      designers, data scientists, and more. Our proven
                      recruitment engine shortens hiring cycles while ensuring
                      quality and cultural alignment.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="list-unstyled">
                      <li className="mb-2">• Access pre-vetted talent pools</li>
                      <li className="mb-2">
                        • Reduce cost-per-hire with optimized workflows
                      </li>
                      <li className="mb-2">
                        • Scale teams confidently across regions
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
                    src="/img/work/work6.png"
                    alt="Staffing and recruitment dashboard"
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
                      Build High-Performing Teams, Effortlessly
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

export default StaffingRecruitmentPage;
