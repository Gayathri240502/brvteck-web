import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";

import Image from "next/image";
import {
  PackageCheck,
  TimerReset,
  Truck,
  LocateFixed,
  FileText,
  ShieldCheck,
  Mail,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

const policyCards = [
  {
    title: "Delivery Coverage",
    desc: "Where we ship our products",
    icon: LocateFixed,
    path: "#coverage",
  },
  {
    title: "Processing Time",
    desc: "When we dispatch orders",
    icon: TimerReset,
    path: "#processing",
  },
  {
    title: "Shipping Methods",
    desc: "Standard & express options",
    icon: Truck,
    path: "#methods",
  },
  {
    title: "Order Tracking",
    desc: "Track your shipment status",
    icon: PackageCheck,
    path: "#tracking",
  },
  {
    title: "Shipping Charges",
    desc: "Cost of delivery",
    icon: FileText,
    path: "#charges",
  },
  {
    title: "Delays & Issues",
    desc: "What causes delays",
    icon: AlertTriangle,
    path: "#delays",
  },
  {
    title: "Exchange Policy",
    desc: "Eligibility & process",
    icon: RefreshCcw,
    path: "#exchange",
  },
  {
    title: "Customer Support",
    desc: "Reach us for help",
    icon: Mail,
    path: "#support",
  },
  {
    title: "Policy Updates",
    desc: "Latest changes",
    icon: ShieldCheck,
    path: "#updates",
  },
];

export default function ShippingExchangePolicy() {
  return (
    <Fragment>
      <Head>
        <title>Shipping & Exchange Policy | BRV Technologies</title>
        <meta
          name="description"
          content="Review BRV Technologies’ shipping & exchange policy to understand delivery timelines, charges, tracking, and return/exchange details."
        />
        <meta
          name="keywords"
          content="Shipping Policy, Exchange Policy, Delivery, Order Tracking, BRV Technologies, Courier Services, Logistics, India Delivery, Shipping Charges"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/shipping-exchange-policy"
        />
        <meta
          property="og:title"
          content="Shipping & Exchange Policy | BRV Technologies"
        />
        <meta
          property="og:description"
          content="Read BRV Technologies’ shipping & exchange policy to know about delivery coverage, timeframes, tracking, charges, and exchange process."
        />
        <meta property="og:image" content="/img/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/shipping-exchange-policy"
        />
        <meta
          property="twitter:title"
          content="Shipping & Exchange Policy | BRV Technologies"
        />
        <meta
          property="twitter:description"
          content="Find out how BRV Technologies ships your orders and handles exchanges. Learn about coverage, costs, timelines, and customer support."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        <link
          rel="canonical"
          href="https://www.brvteck.com/shipping-exchange-policy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="page_content about-page">
        <PageTitle
          pageTitle="Shipping & Exchange Policy"
          pagesub="Logistics, Delivery & Returns"
          pageTop="shipping & exchange"
        />

        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <Image
                  src="/img/services/workforce/s1.jpg"
                  alt="Shipping and exchange policy"
                  width={600}
                  height={400}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      Transparent,
                      <span className="badge bg-secondary text-white ms-2">
                        reliable &amp; customer-focused
                      </span>
                    </div>
                    <h1 className="heading_text">
                      Shipping & Exchange with Confidence
                    </h1>
                    <p className="heading_description mb-0">
                      Our policies ensure safe and timely delivery while also
                      providing a simple exchange process if required. Here’s
                      everything you need to know.
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
              {policyCards.map(({ title, desc, icon: Icon, path }, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
                  <a
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <h4 id="coverage" className="details_item_title">
              Delivery Coverage
            </h4>
            <p>
              We currently ship across all serviceable pin codes in India.
              Remote or out-of-service areas may have longer delivery times or
              extra charges. International shipping is available on request.
            </p>

            <h4 id="processing" className="details_item_title">
              Processing Time
            </h4>
            <p>
              Orders are usually packed within{" "}
              <strong>1–2 business days</strong>. A buffer of up to{" "}
              <strong>5 additional business days</strong> may be required during
              peak periods or for custom orders.
            </p>

            <h4 id="methods" className="details_item_title">
              Shipping Methods
            </h4>
            <p>
              <strong>Standard:</strong> 3–5 business days + up to 5 days
              buffer.
              <br />
              <strong>Express:</strong> 1–2 business days + up to 5 days buffer.
              <br />
              Partner couriers include Delhivery, Blue Dart, and India Post.
            </p>

            <h4 id="tracking" className="details_item_title">
              Order Tracking
            </h4>
            <p>
              Once dispatched, tracking details will be shared by email and SMS.
              Use the link provided to track your package in real time.
            </p>

            <h4 id="charges" className="details_item_title">
              Shipping Charges
            </h4>
            <p>
              Charges are based on delivery address and product weight/volume.
              Free shipping may be offered for promotional orders above certain
              values.
            </p>

            <h4 id="delays" className="details_item_title">
              Delays & Issues
            </h4>
            <p>
              While we target on-time delivery, external factors such as
              weather, public holidays, and courier delays may affect timelines.
              All timelines should be considered with a{" "}
              <strong>5-day buffer</strong>.
            </p>

            <h4 id="exchange" className="details_item_title">
              Exchange Policy
            </h4>
            <p>
              If you receive a product that is defective, damaged, or not as
              described, you may request an exchange.
            </p>
            <ul>
              <li>Request must be raised within 7 days of delivery.</li>
              <li>
                Product must be unused, in original packaging, and with tags
                intact.
              </li>
              <li>
                Non-exchangeable: discounted items, personal care, intimate, or
                custom-made products.
              </li>
            </ul>
            <p>
              To request an exchange, contact support at{" "}
              <strong>sales@brvteck.com</strong> or call{" "}
              <strong>+91-8062177256</strong> with your order details. Our team
              will guide you. If the return is due to a defective/incorrect
              product, shipping is free. For preference-based exchanges (size,
              color), customers may need to bear return shipping costs.
            </p>

            <h4 id="support" className="details_item_title">
              Customer Support
            </h4>
            <p>
              For any queries, reach us at <strong>sales@brvteck.com</strong> or
              call <strong>+91-8062177256</strong> (Mon–Fri, 9 AM–6 PM IST).
            </p>

            <h4 id="updates" className="details_item_title">
              Policy Updates
            </h4>
            <p>
              This policy was last updated on <em>June 27, 2025</em>. Changes
              will be posted on this page.
            </p>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}
