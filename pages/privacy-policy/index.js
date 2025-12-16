import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";

const PrivacyPolicyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Privacy Policy | BRV Technologies | IT & Business Consulting
        </title>
        <meta
          name="description"
          content="Learn how BRV Technologies collects, uses, and protects your personal data. Our Privacy Policy outlines your rights, our commitments, and the safeguards we employ to ensure your privacy."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Data Protection, BRV Technologies, User Rights, GDPR, DPDPA, Personal Data, Data Privacy, Hyderabad IT Company, Information Security"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph Metadata */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/privacy-policy"
        />
        <meta
          property="og:title"
          content="Privacy Policy | BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="og:description"
          content="At BRV Technologies, we take data privacy seriously. Read our Privacy Policy to understand how we protect your personal information and honor your privacy rights."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter Metadata */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/privacy-policy"
        />
        <meta
          property="twitter:title"
          content="Privacy Policy | BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="twitter:description"
          content="Learn how BRV Technologies ensures your personal data is handled securely and transparently. Read our full Privacy Policy."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        {/* Contact and Location Metadata */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="info@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link rel="canonical" href="https://www.brvteck.com/privacy-policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Privacy Policy"
          pagesub="Policy"
          pageTop="Privacy"
        />

        <section className="team_details_section section_space bg-light">
          <div className="container">
            {/* Vision */}
            <h3 className="details_item_info_title">Our Vision</h3>
            <p>
              At <strong>BRV Technologies</strong>, based in Mindspace,
              Hyderabad, our vision is to become a trusted leader in digital and
              software solutions while upholding the highest standards of data
              privacy. We see privacy not just as a legal requirement, but as a
              fundamental value embedded into our culture, operations, and
              technologies.
            </p>

            {/* Mission */}
            <h3 className="details_item_info_title">Our Mission</h3>
            <p>
              We embed privacy into every stage of our service delivery and
              product lifecycle through <strong>Privacy by Design</strong> and{" "}
              <strong>Privacy by Default</strong>. Our commitments include:
            </p>
            <ul className="icon_list unordered_list_block">
              <li>Transparent data collection and processing practices</li>
              <li>Privacy-focused security controls</li>
              <li>Consent, access, and correction rights for all users</li>
              <li>
                Responsible vendor and third-party data sharing agreements
              </li>
              <li>Regular employee training on privacy and compliance</li>
            </ul>

            {/* Cross-Border Data Transfer */}
            <h3 className="details_item_info_title">
              Cross-Border Data Transfer
            </h3>
            <p>
              As a global technology provider, some data may flow across
              borders. We ensure compliance and security through:
            </p>
            <ul className="icon_list unordered_list_block">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Data localization when required by law</li>
              <li>Encryption in transit and at rest</li>
              <li>Vendor due diligence and secure transfer protocols</li>
            </ul>

            {/* Data Privacy Practices */}
            <h3 className="details_item_info_title">Data Privacy Practices</h3>
            <p>
              We align with international frameworks such as GDPR, DPDPA, and
              ISO/IEC 27701. Our practices include:
            </p>
            <ul className="icon_list unordered_list_block">
              <li>Data inventory and mapping</li>
              <li>User rights management: access, correction, deletion</li>
              <li>Privacy impact assessments and risk analysis</li>
              <li>Regular audits and compliance reviews</li>
              <li>Breach detection, response, and notification procedures</li>
            </ul>

            {/* DPDPA */}
            <h3 className="details_item_info_title">
              Digital Personal Data Protection Act (DPDPA)
            </h3>
            <p>We comply with India’s DPDPA by ensuring:</p>
            <ul className="icon_list unordered_list_block">
              <li>Purpose limitation and minimal data collection</li>
              <li>Clear consent mechanisms</li>
              <li>User empowerment and redressal systems</li>
              <li>Dedicated Data Protection Officers (DPOs)</li>
            </ul>

            {/* Ethical Use of Data */}
            <h3 className="details_item_info_title">Ethical Use of Data</h3>
            <p>
              We design our systems to promote ethical, transparent, and
              accountable data practices. This includes:
            </p>
            <ul className="icon_list unordered_list_block">
              <li>Bias-free, explainable decision-making</li>
              <li>Minimal data collection and strong anonymization</li>
              <li>Respect for user preferences, including opt-out options</li>
            </ul>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default PrivacyPolicyPage;
