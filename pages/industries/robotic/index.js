import React from "react";
import Head from "next/head";
import { History, Target, Eye, Bot } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";

/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve helped manufacturers, warehouses, and labs deploy reliable automation at scale.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "Make robotics accessible, safe, and profitable for every enterprise—regardless of size or sector.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Lead the era of human–robot collaboration where smart machines amplify human ingenuity.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "Intelligent Automation",
    subTitle:
      "Cobots, AMRs, vision-guided pick-and-place, and AI-powered fleet orchestration—all on one platform.",
    icon: Bot,
    iconColor: "#ff9800",
  },
];

/* ─── Top-of-page hero (image left) ─── */
function HeroSection() {
  return (
    <section className="section_space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/img/industry/robo.jpg"
              alt="Robotics & Automation"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Scaling&nbsp;Robotics&nbsp;Innovation
            </h1>
            <p className="heading_description mb-0">
              BRV Teck delivers AI-driven perception, edge-compute controllers,
              and digital-twin simulation that fast-track robot deployment
              across manufacturing, logistics, and healthcare. Our secure,
              cloud-native platform unifies fleet management, predictive
              maintenance, and real-time analytics—so you can unlock lights-out
              operations and boost productivity without sacrificing safety or
              flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Intro + CTA ─── */
function IntroSection() {
  return (
    <section
      className="policy_section section_space"
      style={{ background: "#eaf4ff" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <p className="mb-2">
              We Are{" "}
              <span
                className="badge rounded-pill text-white"
                style={{ background: "#ff4d67", fontSize: "0.75rem" }}
              >
                Robotics&nbsp;Pioneers&nbsp;🤖
              </span>
            </p>

            <h2 className="heading_text mb-0">Robotics Solutions</h2>
            <h4 className="mb-3">Agile, scalable, and safe</h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Businesses face labour shortages, rising quality demands, and the
              need for 24/7 uptime. Intelligent automation is no longer
              optional.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From machine-vision inspection to autonomous material handling,
              BRV Teck equips you with modular hardware and software that reduce
              cycle times, cut costs, and future-proof operations.
            </p>

            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "0.85rem 2.2rem",
                fontSize: "1.125rem",
                borderRadius: 50,
                backgroundColor: "#0d6efd",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              TALK TO AN EXPERT&nbsp;↗
            </a>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/img/industry/r.jpg"
              alt="Robotics Illustration"
              className="img-fluid rounded big-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Card grid ─── */
function CardSection() {
  return (
    <section className="about-section section_space">
      <div className="container">
        <div className="row pricing_policy_wrap">
          {aboutData.map(({ title, subTitle, icon: Icon, iconColor }, idx) => (
            <div className="col-lg-3" key={idx}>
              <div className="iconbox_block">
                <div className="iconbox_icon d-flex align-items-center justify-content-center">
                  <Icon size={44} strokeWidth={2} color={iconColor} />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{title}</h3>
                  <p className="mb-0">{subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page wrapper ─── */
export default function RoboticsPage() {
  return (
    <>
      <Head>
        <title>Robotics &amp; Intelligent Automation | BRV Teck</title>
        <meta
          name="description"
          content="Discover BRV Teck’s cobot, AMR, and AI-vision platforms that accelerate automation and elevate operational efficiency."
        />
        <meta
          name="keywords"
          content="robotics software, cobots, autonomous mobile robots, machine vision, fleet management, BRV Teck"
        />
        <meta name="og:title" content="Robotics Solutions by BRV Teck" />
        <meta
          name="og:description"
          content="Secure, cloud-native, and AI-powered platforms that make industrial automation smarter and safer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Robotics Services"
          pagesub="Robotics"
          pageTop="industries"
        />
        <IntroSection />
        <CardSection />
        <HeroSection />
      </main>

      <Footer />

      {/* ─── Global styling for this page ─── */}
      <style jsx global>{`
        .about-section {
          background: #eaf4ff;
          padding: 60px 0;
        }

        .big-img {
          width: 150%;
          max-width: none;
          height: auto;
        }
        @media (max-width: 991.98px) {
          .big-img {
            width: 100%;
          }
        }

        .pricing_policy_wrap .iconbox_block {
          background: #ffffff;
          border-radius: 1.5rem;
          padding: 48px 36px;
          text-align: left;
          height: 100%;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .pricing_policy_wrap .iconbox_block:hover {
          transform: translateY(-6px);
        }

        .pricing_policy_wrap .iconbox_icon {
          width: 94px;
          height: 94px;
          margin-bottom: 32px;
          border-radius: 50%;
          background: #eef2ff;
        }

        .pricing_policy_wrap .iconbox_title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #00043c;
          margin-bottom: 1rem;
        }

        .pricing_policy_wrap .iconbox_content p {
          font-size: 1rem;
          line-height: 1.65;
          color: #5b5b5b;
        }
      `}</style>
    </>
  );
}
