import React from "react";
import Head from "next/head";
import { History, Target, Eye, CreditCard } from "lucide-react";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";

/* ─── Card data ─── */
const aboutData = [
  {
    title: "Our History",
    subTitle:
      "Since 1997 we’ve been the technology backbone for retail, corporate, and digital-only banks across the globe.",
    icon: History,
    iconColor: "#0d6efd",
  },
  {
    title: "Our Mission",
    subTitle:
      "Deliver frictionless, secure, and scalable banking experiences that empower customers and institutions alike.",
    icon: Target,
    iconColor: "#f56336",
  },
  {
    title: "Our Vision",
    subTitle:
      "Lead the evolution of open finance—where data, payments, and innovation move freely yet safely for everyone.",
    icon: Eye,
    iconColor: "#e91e63",
  },
  {
    title: "Digital Banking Suite",
    subTitle:
      "Mobile apps, core banking, fraud detection, and real-time analytics on one unified cloud platform.",
    icon: CreditCard,
    iconColor: "#ff9800",
  },
];

/* ─── Top-of-page hero (image left) ─── */
function HeroSection() {
  return (
    <section className="section_space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-8 mb-lg-0">
            <img
              src="/img/industry/b.jpg"
              alt="Digital Banking"
              className="img-fluid rounded hero-img"
            />
          </div>

          <div className="col-lg-6">
            <span
              className="d-inline-block rounded-circle bg-danger me-3"
              style={{ width: 12, height: 12 }}
            />
            <h1 className="heading_text mb-3">
              Re-imagining&nbsp;Digital&nbsp;Banking
            </h1>
            <p className="heading_description mb-0">
              BRV Teck helps banks modernise legacy cores, launch neo-bank
              spinoffs, and embed finance into every customer touch-point. Our
              ISO 20022-ready platforms bring together instant payments,
              AML/KYC automation, open-API marketplaces, and AI-driven credit
              scoring— all fortified by zero-trust security architecture so you
              can win loyalty and outpace fintech disruptors.
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
                FinTech&nbsp;Leaders&nbsp;💳
              </span>
            </p>

            <h2 className="heading_text mb-0">Banking Software Solutions</h2>
            <h4 className="mb-3">Secure, compliant, and customer-centric</h4>

            <p className="heading_description mb-2" style={{ maxWidth: 480 }}>
              Today’s customers expect 24/7 access, instant payments, and
              hyper-personalised offers—while regulators demand iron-clad
              compliance and resilience.
            </p>
            <p className="heading_description mb-4" style={{ maxWidth: 480 }}>
              From digital onboarding and e-KYC to open banking APIs and
              cloud-native core migration, BRV Teck enables banks to innovate
              faster without compromising trust.
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

          <div className="col-lg-5 text-center">
            <img
              src="/img/industry/banking.jpg"
              alt="Banking Illustration"
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
export default function BankingPage() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Banking &amp; FinTech Solutions | BRV Teck</title>
        <meta
          name="description"
          content="Explore BRV Teck’s core banking, mobile apps, open-banking API, and AML/fraud-detection platforms that power modern financial services."
        />
        <meta
          name="keywords"
          content="banking software, core banking, mobile banking, open banking API, fraud detection, fintech solutions, BRV Teck"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/industries/banking"
        />
        <meta
          property="og:title"
          content="Future-ready Banking Solutions by BRV Teck"
        />
        <meta
          property="og:description"
          content="Secure, compliant, and customer-centric platforms for banks and financial institutions worldwide."
        />
        <meta property="og:image" content="/img/industry/b.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Banking & FinTech Solutions | BRV Teck"
        />
        <meta
          name="twitter:description"
          content="Secure, compliant, and customer-centric platforms for banks and financial institutions worldwide."
        />
        <meta name="twitter:image" content="/img/industry/b.jpg" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brvteck.com/industries/banking"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Banking and Financial Services"
          pagesub="Banking"
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

        /* image sizing tweaks */
        .hero-img {
          width: 100%;
          height: auto;
        }

        .big-img {
          width: 120%;
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
