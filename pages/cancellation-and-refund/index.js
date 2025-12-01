import React, { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";

const CancellationRefundPolicyPage = () => {
  return (
    <Fragment>
      {/* ─── SEO & Social Metadata ─── */}
      <Head>
        <title>
          Cancellation & Refund Policy | BRV Technologies | IT & Business
          Consulting
        </title>

        {/* Primary meta */}
        <meta
          name="description"
          content="Read BRVTeck’s Cancellation & Refund Policy to understand eligibility, cancellations, request procedures, processing timelines, and contact information."
        />
        <meta
          name="keywords"
          content="Cancellation Policy, Refund Policy, BRV Technologies, BRVTeck, cancellations, returns, Hyderabad IT company"
        />
        <meta name="author" content="BRV Technologies Private Limited" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/cancellation-and-refund"
        />
        <meta
          property="og:title"
          content="Cancellation & Refund Policy | BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="og:description"
          content="Learn how cancellations and refunds are handled for BRVTeck’s software and consulting services, including eligibility criteria and processing timelines."
        />
        <meta property="og:image" content="/img/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/cancellation-and-refund"
        />
        <meta
          property="twitter:title"
          content="Cancellation & Refund Policy | BRV Technologies"
        />
        <meta
          property="twitter:description"
          content="Understand BRVTeck’s cancellation and refund guidelines."
        />
        <meta property="twitter:image" content="/img/logo.png" />

        {/* Contact / misc */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="billing@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/cancellation-and-refund"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ─── Layout ─── */}
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Cancellation & Refund Policy"
          pagesub="Cancellation & Refund"
          pageTop="Legal"
        />

        {/* ─── Policy Content ─── */}
        <section className="team_details_section section_space bg-light">
          <div className="container">
            {/* 1. Scope */}
            <h3 className="details_item_info_title">Scope of This Policy</h3>
            <p>
              This Cancellation & Refund Policy applies to all software
              products, subscriptions, support packages, and
              professional-services engagements purchased directly from BRVTeck
              Technologies Pvt Ltd (“BRVTeck,” “we,” “us,” or “our”).
              Third-party marketplaces or resellers may have their own terms.
            </p>

            {/* 2. Cancellation Policy */}
            <h3 className="details_item_info_title">Cancellation Policy</h3>
            <p>
              Customers may request cancellation of a service or subscription by
              contacting us at{" "}
              <a href="mailto:billing@brvteck.com">billing@brvteck.com</a>{" "}
              before the next billing cycle or before the project has reached an
              irreversible stage of development.
            </p>
            <ul>
              <li>
                Cancellations of ongoing consulting or development projects must
                be requested in writing.
              </li>
              <li>
                Work already completed up to the point of cancellation will be
                billed and is non-refundable.
              </li>
              <li>
                Prepaid subscriptions may qualify for pro-rated refunds (see
                below).
              </li>
            </ul>

            {/* 3. Refund Eligibility */}
            <h3 className="details_item_info_title">Refund Eligibility</h3>
            <p>
              Refund requests are eligible within <strong>45 days</strong> of
              the original invoice date for subscription or one-time software
              license fees, provided:
            </p>
            <ul>
              <li>The product or service has not been materially delivered;</li>
              <li>No irreversible custom development work has commenced;</li>
              <li>
                The request is made by the original contracting entity or its
                authorized representative.
              </li>
            </ul>

            {/* 4. Non-Refundable Items */}
            <h3 className="details_item_info_title">Non-Refundable Items</h3>
            <ul>
              <li>Domain registrations or third-party license costs</li>
              <li>
                Completed consulting hours or milestone-based deliverables
              </li>
              <li>Setup, onboarding, or training fees already rendered</li>
            </ul>

            {/* 5. Request Procedure */}
            <h3 className="details_item_info_title">
              How to Request a Cancellation or Refund
            </h3>
            <p>
              Email <a href="mailto:billing@brvteck.com">billing@brvteck.com</a>{" "}
              with:
            </p>
            <ol>
              <li>Purchase order or invoice number</li>
              <li>Reason for the cancellation/refund request</li>
              <li>Preferred method of reimbursement</li>
            </ol>
            <p>
              Our finance team will acknowledge your request within two (2)
              business days and may request additional information.
            </p>

            {/* 6. Processing Time */}
            <h3 className="details_item_info_title">Processing Time</h3>
            <p>
              Approved refunds are typically processed within{" "}
              <strong>7–10 business days</strong>. Credit will be applied to the
              original method of payment unless otherwise agreed in writing.
            </p>

            {/* 7. Pro-Rated Refunds */}
            <h3 className="details_item_info_title">Pro-Rated Refunds</h3>
            <p>
              For annual or multi-month subscriptions canceled early, refunds
              are pro-rated based on unused full months, less any applicable
              discounts or promotional credits.
            </p>

            {/* 8. Chargebacks */}
            <h3 className="details_item_info_title">Chargebacks</h3>
            <p>
              Initiating a chargeback without first contacting BRVTeck may
              result in suspension of services and additional administrative
              fees.
            </p>

            {/* 9. Changes */}
            <h3 className="details_item_info_title">Changes to This Policy</h3>
            <p>
              BRVTeck reserves the right to amend this Cancellation & Refund
              Policy at any time. Updates will be posted on this page with a
              revised “Last Updated” date. Continued use of our services after
              changes signifies acceptance of the revised terms.
            </p>

            {/* 10. Contact */}
            <h3 className="details_item_info_title">Contact Us</h3>
            <p>
              Questions about cancellations or refunds should be sent to{" "}
              <a href="mailto:billing@brvteck.com">billing@brvteck.com</a> or
              directed to:
            </p>
            <address style={{ lineHeight: 1.6 }}>
              BRV Technologies Pvt Ltd
              <br />
              Survey No. 64, Building Number 9, Mindspace
              <br />
              13th Floor, Madhapur, Hyderabad 500081
              <br />
              Telangana, India
            </address>
          </div>
        </section>

        {/* CTA */}
        <CtaSection />
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CancellationRefundPolicyPage;
