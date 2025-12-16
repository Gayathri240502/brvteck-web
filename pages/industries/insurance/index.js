import React from "react";
import Head from "next/head";
import { History, Target, Eye, ShieldCheck } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";

/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve helped insurers modernise legacy cores and launch data-driven products worldwide.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "Empower carriers to deliver personalised coverage faster, cheaper, and with complete transparency.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Lead the shift to usage-based, AI-priced, and seamlessly embedded insurance for every digital journey.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "InsurTech Platform",
    subTitle:
      "Policy admin, claims automation, fraud analytics, and omnichannel CX in a single cloud-native suite.",
    icon: ShieldCheck,
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
              src="/img/industry/health.jpg"
              alt="Insurance Technology"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Transforming&nbsp;Insurance&nbsp;through&nbsp;
              Technology
            </h1>
            <p className="heading_description mb-0">
              BRV Teck equips carriers, MGAs, and InsurTechs with real-time risk
              scoring, AI claims triage, and hyper-personalised policy engines.
              Our cloud-native core, API marketplace, and zero-trust security
              let you launch new lines in weeks, slash loss ratios, and delight
              policyholders across every channel.
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
              We&nbsp;Are{" "}
              <span
                className="badge rounded-pill text-white"
                style={{ background: "#ff4d67", fontSize: "0.75rem" }}
              >
                InsurTech&nbsp;Pioneers&nbsp;🛡️
              </span>
            </p>

            <h2 className="heading_text mb-0">Insurance Software Solutions</h2>
            <h4 className="mb-3">Faster quotes, smarter claims</h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Customers demand instant quotes, self-service claims, and fair,
              usage-based premiums—while regulators tighten compliance and data
              privacy.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From end-to-end policy administration and embedded insurance APIs
              to AI fraud detection and telematics analytics, BRV Teck helps you
              innovate without compromising governance.
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
              src="/img/industry/insurance.jpg"
              alt="Insurance Illustration"
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
export default function InsurancePage() {
  return (
    <>
      <Head>
        <title>Insurance &amp; InsurTech Solutions | BRV Teck</title>
        <meta
          name="description"
          content="Explore BRV Teck’s cloud-native core, AI-driven claims, and usage-based pricing platforms that redefine insurance."
        />
        <meta
          name="keywords"
          content="insurance software, policy administration, AI claims, InsurTech, usage-based insurance, fraud analytics, BRV Teck"
        />
        <meta
          property="og:title"
          content="Digital Insurance Solutions by BRV Teck"
        />
        <meta
          property="og:description"
          content="Cloud-native, secure, and scalable platforms empowering insurers to innovate faster and serve customers better."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Insurance Services"
          pagesub="Insurance"
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
