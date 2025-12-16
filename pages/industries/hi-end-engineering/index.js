import React from "react";
import Head from "next/head";
import { History, Target, Eye, Cpu } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";

/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve partnered with global manufacturers to build mission-critical, high-precision systems.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "To empower engineering teams with cutting-edge digital twins, simulation, and AI-driven design tools.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Shape a smarter industrial future where innovation cycles are shorter, safer, and more sustainable.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "Precision Engineering",
    subTitle:
      "Integrate robotics, IIoT, and predictive analytics to achieve micron-level tolerances and zero downtime.",
    icon: Cpu,
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
              src="/img/industry/i.jpg"
              alt="High-End Engineering"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Driving&nbsp;High-End&nbsp;Engineering&nbsp;Innovation
            </h1>
            <p className="heading_description mb-0">
              BRV Teck delivers advanced CAD/CAE workflows, real-time digital
              twins, and AI-powered quality control that let aerospace,
              automotive, and semiconductor leaders accelerate product
              development while meeting the strictest safety and compliance
              standards. Our platforms combine edge computing, secure cloud
              infrastructure, and industry-hardened cybersecurity—so your
              engineers can focus on breakthrough designs, not bottlenecks.
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
                Engineering&nbsp;Experts&nbsp;⚙️
              </span>
            </p>

            <h2 className="heading_text mb-0">
              High-End Engineering Solutions
            </h2>
            <h4 className="mb-3">
              Elevating precision, speed, and reliability
            </h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Modern manufacturers face shrinking release cycles and relentless
              quality-assurance targets. Digital transformation is no longer a
              luxury—it’s a survival tactic.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From generative design to predictive maintenance, BRV Teck equips
              your plant floor and design studios with data-driven insights that
              reduce scrap, cut lead times, and unlock new revenue models.
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
              src="/img/industry/hi-end.jpg"
              alt="Engineering Illustration"
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
export default function HiEndEngineeringPage() {
  return (
    <>
      <Head>
        <title>High-End Engineering Solutions | BRV Teck</title>
        <meta
          name="description"
          content="Discover BRV Teck’s digital-twin, generative-design, and predictive-maintenance platforms that boost precision engineering and industrial efficiency."
        />
        <meta
          name="keywords"
          content="high-end engineering, digital twin, generative design, predictive maintenance, IIoT, BRV Teck"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Hi-End Engineering Services"
          pagesub="Hi-End Engineering"
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
