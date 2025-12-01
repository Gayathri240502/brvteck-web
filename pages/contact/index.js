import React, { Fragment } from 'react';
import Head from 'next/head'; // ← Required for metadata
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ContactSection from '../../components/ContactSection';

const ContactPage = (props) => {
  return (
    <Fragment>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Contact Us | BRV Technologies</title>
        <meta
          name="description"
          content="Get in touch with BRV Technologies for business inquiries, partnerships, or support. Reach our offices in Hyderabad, Dubai, Mumbai, and Ireland."
        />
        <meta
          name="keywords"
          content="Contact BRV Technologies, Office Address, Business Hours, BRV Support, Hyderabad, Dubai, Mumbai, Ireland"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact BRV Technologies" />
        <meta
          property="og:description"
          content="Reach out to BRV Technologies via email, phone, or by visiting our global offices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/contact" />
        <meta property="og:image" content="https://www.brvteck.com/img/contact-banner.jpg" />
        <link rel="canonical" href="https://www.brvteck.com/contact" />
      </Head>

      <Header />
      <main className="page_content about-page">
        <PageTitle pageTitle={'Contact Us'} pagesub={'Us 😍'} pageTop={'Contact'} />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;
