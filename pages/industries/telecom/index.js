import React from "react";
import Head from "next/head";
import { History, Target, Eye, Signal } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve enabled carriers to scale from 2G voice to global 5G and beyond.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "Empower operators to deliver ultra-reliable, low-latency connectivity everywhere people live, work, and play.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Lead the evolution to open, cloud-native networks that connect billions securely and sustainably.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "5G & Network Innovation",
    subTitle:
      "ORAN, network slicing, and edge-compute orchestration on a single, AI-optimised platform.",
    icon: Signal,
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
              src="/img/industry/telecom.jpg"
              alt="Telecom Network"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Powering&nbsp;Next-Gen&nbsp;Telecom&nbsp;Networks
            </h1>
            <p className="heading_description mb-0">
              BRV Teck provides cloud-native OSS/BSS, AI-driven network
              analytics, and edge-compute orchestration that let CSPs monetise
              5G, private LTE, and IoT services at scale. Our zero-trust
              security framework, telco-grade Kubernetes stack, and standards-
              compliant APIs accelerate time-to-market while cutting TCO—
              enabling you to deliver seamless, always-on experiences that your
              subscribers expect.
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
                Telecom&nbsp;Innovators&nbsp;📶
              </span>
            </p>

            <h2 className="heading_text mb-0">Telecom Software Solutions</h2>
            <h4 className="mb-3">Reliable, scalable, and future-proof</h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Subscribers demand lightning-fast data, crystal-clear voice, and
              uninterrupted streaming—while regulators tighten spectrum and
              security mandates.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From network automation and ORAN controllers to 5G core and
              self-optimising networks, BRV Teck equips operators with
              data-driven insights that unlock new revenue and drive operational
              excellence.
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
              src="/img/industry/telecom.jpg"
              alt="Telecom Illustration"
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
export default function TelecomPage() {
  return (
    <>
      <Head>
        <title>Telecom &amp; 5G Solutions | BRV Teck</title>
        <meta
          name="description"
          content="Explore BRV Teck’s OSS/BSS, 5G-core, ORAN, and AI-driven network-analytics platforms that future-proof telecom operators."
        />
        <meta
          name="keywords"
          content="telecom software, 5G solutions, ORAN, OSS/BSS, network analytics, edge computing, BRV Teck"
        />
        <meta
          name="og:title"
          content="Next-Gen Telecom Solutions by BRV Teck"
        />
        <meta
          name="og:description"
          content="Cloud-native, secure, and scalable platforms that help carriers monetise 5G and IoT services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Telecom Services"
          pagesub="Telecom"
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
