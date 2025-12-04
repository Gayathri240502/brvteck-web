import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Head from "next/head";

const productList = [
  {
    title: "AI-Hosptial information Management System",
    image: "/img/products/hms.jpg", 
    route: "/products/AI-HIMS",
  },
  {
    title: "AI-Learning Management System",
    image: "/img/products/crm1.jpg", 
    route: "/products/AI-LMS",
  },

  {
    title: "AI-Driven Customer Relationship Management",
    image: "/img/products/erp.jpg", 
    route: "/products/AI-CRM",
  },
  {
    title: "AI-Based Investory Management System",
    image: "/img/products/hrms.jpg",
    route: "/products/AI-BIM",
  },
  {
    title: "AI-Human Resource Management System",
    image: "/img/products/lms2.jpg",
    route: "/products/AI-HRMS",
  },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Our Products | Brvteck Solutions</title>
        <meta
          name="description"
          content="Explore Brvteck’s powerful product suite including HMS, CRM, ERP, HRMS, LMS, and more. Designed to streamline operations and accelerate digital transformation."
        />
        <meta
          name="keywords"
          content="Brvteck Products, Software Solutions, AI-HIMS,AI-LMS,AI-CRM,AI-BIM,AI-HRMS, Business Tools"
        />
        <meta name="author" content="Brvteck" />
        <link rel="canonical" href="https://www.brvteck.com/products" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta
          property="og:title"
          content="Our Software s | Brvteck Solutions"
        />
        <meta
          property="og:description"
          content="Discover the range of Brvteck's enterprise-ready software including CRM, ERP, HRMS, and more to digitally empower your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brvteck.com/products" />
        <meta
          property="og:image"
          content="https://www.brvteck.com/img/products/erp.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Software Products | Brvteck Solutions"
        />
        <meta
          name="twitter:description"
          content="Explore enterprise-grade software products from Brvteck. Improve workflows with our CRM, ERP, LMS, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.brvteck.com/img/products/erp.jpg"
        />
      </Head>

      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle="Our Products"
          pagesub="Products 😍"
          pageTop="Our"
        />

        <section
          className="portfolio_section section_space bg-light"
          style={{ backgroundColor: "#eaf4ff", padding: "60px 0" }}
        >
          <div className="container">
            <div className="row">
              {productList.map((product, index) => (
                
                <div className="col-lg-6" key={index}>
                  <div
                    className="portfolio_block portfolio_layout_2"
                    style={{
                      minHeight: "420px",
                      maxHeight: "420px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      marginBottom: "32px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="portfolio_image"
                      style={{ height: "240px", overflow: "hidden" }}
                    >
                      <Link
                        href={product.route}
                        className="portfolio_image_wrap bg-light"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        />
                      </Link>
                    </div>
                    <div
                      className="portfolio_content"
                      style={{ padding: "24px" }}
                    >
                      <h3
                        className="portfolio_title"
                        style={{ fontSize: "1.5rem", fontWeight: 700 }}
                      >
                        <Link href={product.route}>{product.title}</Link>
                     </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ProductsPage;
