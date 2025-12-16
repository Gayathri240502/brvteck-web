import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Cpu,
  CreditCard,
  Signal,
  Bot,
  Film,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

const industryCards = [
  {
    title: "Healthcare",
    desc: "AI diagnostics, EHR & telehealth",
    icon: HeartPulse,
    path: "/industries/health-care",
  },
  {
    title: "Hi-End Engineering",
    desc: "Digital twins, IIoT & robotics",
    icon: Cpu,
    path: "/industries/hi-end-engineering",
  },
  {
    title: "Banking",
    desc: "Core banking, open API, AML",
    icon: CreditCard,
    path: "/industries/banking-and-financial-services",
  },
  {
    title: "Telecom",
    desc: "5G core, ORAN & edge",
    icon: Signal,
    path: "/industries/telecom",
  },
  {
    title: "Robotics",
    desc: "Autonomous systems & RPA",
    icon: Bot,
    path: "/industries/robotic",
  },
  {
    title: "Media & Tech",
    desc: "OTT, CDN & personalization",
    icon: Film,
    path: "/industries/media-and-technology",
  },
  {
    title: "Insurance",
    desc: "Usage-based & AI claims",
    icon: ShieldCheck,
    path: "/industries/insurance",
  },
  
];

export default function IndustriesHome() {
  return (
    <Fragment>
      <Head>
        <title>Industries We Serve | BRV Teck</title>
        <meta
          name="description"
          content="Explore how BRV Teck transforms healthcare, banking, telecom, engineering, media, insurance, robotics, and cybersecurity with cloud-native, AI-driven solutions."
        />
        <meta
          name="keywords"
          content="Industries, Healthcare IT, Banking software, 5G telecom solutions, Engineering digital twin, InsurTech, Robotics, Cybersecurity, Media technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Industries We Serve"
          pagesub="Industries"
          pageTop="industries"
        />

        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <Image
                  src="/img/industry/111.jpg"
                  alt="Diverse industries collage"
                  width={600}
                  height={400}
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      One partner,
                      <span className="badge bg-secondary text-white ms-2">
                        many industries
                      </span>
                    </div>
                    <h1 className="heading_text">
                      Specialist expertise, enterprise-grade delivery
                    </h1>
                    <p className="heading_description mb-0">
                      From life-saving healthcare platforms to latency-critical
                      5G networks, BRV Teck combines domain insight with
                      cloud-native engineering, AI, and cybersecurity to
                      accelerate your digital future—no matter your sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="policy_section mb-5">
          <div className="container">
            <div className="row">
              {industryCards.map(({ title, desc, icon: Icon, path }, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
                  <Link
                    href={path}
                    className="text-decoration-none"
                    onClick={() => window.scrollTo(10, 0)}
                  >
                    <div className="iconbox_block text-center h-100">
                      <div className="iconbox_icon mx-auto mb-3 bg-secondary-subtle">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">{title}</h3>
                        <p className="mb-0">{desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}
