import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";

const TermsAndConditionsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Terms and Conditions | BRV Technologies | IT & Business Consulting
        </title>
        <meta
          name="description"
          content="Review the Terms and Conditions of BRV Technologies covering website usage, legal rights, responsibilities, and data use."
        />
        <meta
          name="keywords"
          content="Terms and Conditions, BRV Technologies, IT Consulting, Software Services, Legal Terms, User Agreement, Hyderabad IT Company"
        />
        <meta name="author" content="BRV Technologies Private Limited" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/terms-and-conditions"
        />
        <meta
          property="og:title"
          content="Terms and Conditions | BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="og:description"
          content="Understand the terms that govern the use of BRVTeck services and website, including responsibilities, limitations, and rights."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.brvteck.com/terms-and-conditions"
        />
        <meta
          property="twitter:title"
          content="Terms and Conditions | BRV Technologies | IT & Business Consulting"
        />
        <meta
          property="twitter:description"
          content="These terms govern your use of BRVTeck's website and services. Review your rights and obligations."
        />
        <meta property="twitter:image" content="/img/logo.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="contact" content="+91-8062177256" />
        <meta name="email" content="info@brvteck.com" />
        <meta name="location" content="Mindspace, Hyderabad" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/terms-and-conditions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle="Terms and Conditions"
          pagesub="Terms"
          pageTop="Legal"
        />

        <section className="team_details_section section_space bg-light">
          <div className="container">
            {/* Section 1 */}
            <h3 className="details_item_info_title">Terms of Use</h3>
            <p>
              This website is owned and operated by BRV Technologies Pvt Ltd. By
              accessing or using brvteck.com, you agree to comply with these
              Terms and all applicable laws.
            </p>

            {/* Section 2 */}
            <h3 className="details_item_info_title">Website Access</h3>
            <p>
              We grant you a limited, revocable license to use this site for
              lawful purposes. Copying, distributing, or exploiting content
              without authorization is prohibited. Access may be revoked at any
              time.
            </p>

            {/* Section 3 */}
            <h3 className="details_item_info_title">User Responsibilities</h3>
            <p>
              You agree that all information you provide is accurate and
              complete. You must not use the website for unlawful, harmful,
              defamatory, or obscene activities. You must be at least 13 years
              old to use this website.
            </p>
            <p>
              You may not upload viruses, attempt unauthorized access,
              impersonate others, or submit infringing content. Submitted
              materials must be original or legally usable. By posting content,
              you grant BRV Technologies a royalty-free, irrevocable license to
              use, modify, and distribute it.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and
              all activity under your account.
            </p>

            {/* Section 4 */}
            <h3 className="details_item_info_title">Intellectual Property</h3>
            <p>
              All site content, including text, graphics, images, software, and
              branding, is the property of BRV Technologies or its providers.
              Use of these materials without prior written consent is
              prohibited.
            </p>

            {/* Section 5 */}
            <h3 className="details_item_info_title">Liability Disclaimer</h3>
            <p>
              The website is provided on an “as is” basis without warranties of
              any kind. We do not guarantee uninterrupted or error-free service.
              BRV Technologies shall not be liable for damages arising from your
              use of the site.
            </p>

            {/* Section 6 */}
            <h3 className="details_item_info_title">Data and Privacy</h3>
            <p>
              Any data or suggestions submitted are treated as non-confidential
              unless otherwise specified. Personal data is handled in line with
              our Privacy Policy. No system is fully secure, and BRV
              Technologies is not liable for breaches beyond reasonable control.
            </p>

            {/* Section 7 */}
            <h3 className="details_item_info_title">
              Intellectual Property Concerns
            </h3>
            <p>
              If you believe your rights are infringed, contact us at{" "}
              <a href="mailto:sales@brvteck.com">sales@brvteck.com</a> with
              details of the work, infringement, and supporting evidence. We
              will review complaints in accordance with law.
            </p>

            {/* Section 8 */}
            <h3 className="details_item_info_title">Indemnification</h3>
            <p>
              You agree to indemnify BRV Technologies, its employees, and
              partners from claims, damages, or expenses arising from your use
              of the website or breach of these terms. This obligation survives
              termination of use.
            </p>

            {/* Section 9 */}
            <h3 className="details_item_info_title">Third-Party Links</h3>
            <p>
              External links may be provided for convenience. BRV Technologies
              is not responsible for third-party sites or their content. Access
              them at your own risk.
            </p>

            {/* Section 10 */}
            <h3 className="details_item_info_title">Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes are
              subject to the jurisdiction of courts in Hyderabad, Telangana. If
              a provision is deemed unenforceable, the remainder remains valid.
            </p>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TermsAndConditionsPage;
