"use client";
import React from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import CtaSection from "@/components/CtaSection/CtaSection";

const InvestorConnect = () => {
  return (
    <main className="page_content about-page">
      <Head>
        <title>Investor Connect | BRVTECK</title>
        <meta
          name="description"
          content="Learn why BRVTECK is actively seeking investment to scale operations, strengthen market leadership, and build a global technology brand."
        />
        <meta
          name="keywords"
          content="Investor Connect, BRVTECK Investment, Business Growth, Tech Funding, Venture Capital"
        />
        <link rel="canonical" href="https://www.brvteck.com/investor-connect" />
      </Head>

      <Header />
      <PageTitle
        pageTitle="Investor Connect"
        pagesub="Partner in Our Growth Journey"
        pageTop="Investor Connect"
      />

      {/* === Investor Content Section === */}
      <section className="portfolio_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_content">
            <h2 className="details_item_title text-center mb-3">
              Why We Are Seeking Investment
            </h2>
            <p className="mb-4 text-center">
              At <strong>BRVTECK</strong>, we are driven by a mission to
              accelerate innovation and empower businesses globally through
              cutting-edge technology solutions. Strategic investment will enable us to
              expand faster, attract top talent, and capture greater market share
              across industries.
            </p>

            <h4 className="text-dark mb-3">Our Funding Goals</h4>
            <ul className="icon_list unordered_list_block">
              <li>🔹 Rapidly expand operations across India and global markets</li>
              <li>🔹 Strengthen R&D to build scalable, AI-driven tech platforms</li>
              <li>🔹 Launch advanced service lines in cybersecurity, and cloud-native apps</li>
              <li>🔹 Invest in high-impact marketing to establish a nationwide brand presence</li>
              <li>🔹 Hire top industry talent to scale delivery, product, and engineering teams</li>
              <li>🔹 Enhance infrastructure and DevOps automation for better delivery velocity</li>
            </ul>

            <h4 className="text-dark mt-5 mb-3">Why Partner with BRVTECK?</h4>
            <ul className="icon_list unordered_list_block">
              <li>✅ Strong foundation with recurring revenue and happy enterprise clients</li>
              <li>✅ Agile and scalable business model with rapid project deployment</li>
              <li>✅ Founder-led leadership with deep domain expertise</li>
              <li>✅ Transparent, metrics-driven approach to scaling sustainably</li>
              <li>✅ Commitment to innovation, diversity, and responsible tech</li>
            </ul>

            <p className="mt-4">
              We are actively exploring partnerships with investors, venture
              capital firms, and growth-stage accelerators who align with our
              long-term vision. Let’s build the future of tech together.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </main>
  );
};

export default InvestorConnect;
