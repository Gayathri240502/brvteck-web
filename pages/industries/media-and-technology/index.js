import React from "react";
import Head from "next/head";
import { History, Target, Eye, Film } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";

/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve powered broadcasters, studios, and OTT giants through every major media shift.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "Deliver immersive, on-demand experiences that captivate audiences and monetize content at scale.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Lead the convergence of media and technology where AI, cloud, and 5G redefine storytelling.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "Digital Media Platform",
    subTitle:
      "End-to-end OTT, CDN acceleration, AI personalization, and content-rights governance on one stack.",
    icon: Film,
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
              src="/img/industry/media.jpg"
              alt="Media and Technology"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Revolutionising&nbsp;Media&nbsp;with&nbsp;Technology
            </h1>
            <p className="heading_description mb-0">
              BRV Teck equips broadcasters, OTT platforms, and gaming studios
              with low-latency streaming pipelines, AI-driven recommendation
              engines, and real-time analytics dashboards. Our edge-enabled CDN,
              DRM-compliant workflows, and scalable micro- services architecture
              ensure flawless playback and bullet-proof content security—so you
              can focus on telling compelling stories while growing ARPU.
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
                Media&nbsp;Mavericks&nbsp;🎬
              </span>
            </p>

            <h2 className="heading_text mb-0">
              Media &amp; Technology Solutions
            </h2>
            <h4 className="mb-3">Faster, smarter, and audience-first</h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Viewers binge, creators publish, and advertisers demand precision
              targeting—all while networks race to cut latency and piracy.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From cloud playout and live event streaming to AI captioning and
              rights management, BRV Teck helps you innovate without
              compromising quality or compliance.
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
              src="/img/industry/media1.jpg"
              alt="Media Technology Illustration"
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
export default function MediaTechnologyPage() {
  return (
    <>
      <Head>
        <title>Media &amp; Technology Solutions | BRV Teck</title>
        <meta
          name="description"
          content="Discover BRV Teck’s OTT, CDN, AI recommendation, and cloud broadcast platforms that redefine digital media experiences."
        />
        <meta
          name="keywords"
          content="media technology, OTT streaming, CDN, content delivery, AI recommendation engine, DRM, BRV Teck"
        />
        <meta
          property="og:title"
          content="Cutting-Edge Media & Technology by BRV Teck"
        />
        <meta
          property="og:description"
          content="Cloud-native, secure, and scalable platforms empowering broadcasters, studios, and streaming services worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Media & Technology Services"
          pagesub="Media & Tech"
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
