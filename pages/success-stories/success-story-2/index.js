import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
import CtaSection from "@/components/CtaSection/CtaSection";

import blog1 from "/public/img/blog/aie.jpg";
import blog2 from "/public/img/blog/aie2.jpg";

const BlogSingle = () => {
  const blogDetails = {
    title: "Revolutionizing the Grocery E-Commerce Experience with AI",
    requirement: `The client wanted to enhance their online grocery shopping experience by integrating an intelligent recommendation system and a customer support chatbot. The aim was to improve user engagement, increase sales, and streamline customer service while making the solution scalable and easy to maintain.`,
    approach: `We designed a personalized recommendation system using collaborative filtering and content-based models, leveraging Amazon Personalize and user data to deliver real-time product suggestions. An AI-driven chatbot, built with Amazon Lex and integrated with Amazon Connect, handled customer queries about products and orders, providing instant support. All AI services were containerized and deployed on AWS EKS for scalability and efficiency.`,
    outcome: `Implementing the AI-powered recommendation system and chatbot led to higher conversion rates, improved customer engagement, reduced operational costs, better business insights, and increased customer satisfaction and retention.`,
    tags: [
      "AI Ecommerce",
      "Product Recommendation",
      "Chatbot",
      "Personalization",
      "Customer Support",
      "Amazon Lex",
      "Amazon Personalize",
      "Grocery AI",
      "Conversion Rate",
      "Customer Engagement",
    ],
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          Revolutionizing the Grocery E-Commerce Experience with AI | Success
          Story | Brvteck
        </title>
        <meta
          name="description"
          content="Discover how Brvteck transformed a grocery e-commerce platform with AI-powered recommendations and chatbot, driving engagement and sales."
        />
        <meta
          name="keywords"
          content="AI, Ecommerce, Product Recommendation, Chatbot, Personalization, Customer Support, Amazon Lex, Amazon Personalize, Brvteck, Success Story"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="Revolutionizing the Grocery E-Commerce Experience with AI | Success Story | Brvteck"
        />
        <meta
          property="og:description"
          content="How Brvteck implemented AI-driven recommendations and chatbots for a grocery e-commerce client, boosting conversions and customer satisfaction."
        />
        <meta property="og:image" content="/img/blog/aie.jpg" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/success-stories/success-story-2"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Revolutionizing the Grocery E-Commerce Experience with AI | Success Story | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Read how Brvteck used AI to transform grocery e-commerce with recommendations and chatbots."
        />
        <meta name="twitter:image" content="/img/blog/aie.jpg" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/success-stories/success-story-2"
        />
      </Head>
      <Header />
      <PageTitle
        pageTitle={blogDetails.title}
        pagesub="blogs"
        pageTop="blogs"
      />

      <section className="blog_details_section section_space bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div
                className="details_item_image"
                style={{
                  height: "520px",
                  overflow: "hidden",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={blog1}
                  alt="E-Commerce AI Blog Cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <h3 className="details_item_info_title mb-4">
                Project Requirement
              </h3>
              <h2 className="details_item_title">{blogDetails.title}</h2>
              <p>{blogDetails.requirement}</p>

              <h3 className="details_item_info_title mb-5">Our Approach</h3>
              <div className="row mb-4">
                <div className="col-12">
                  <div
                    className="details_item_image m-0"
                    style={{
                      maxWidth: "100%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={blog2}
                      alt="Cloud infrastructure"
                      style={{
                        width: "100%",
                        maxWidth: "700px",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
              <p>{blogDetails.approach}</p>

              <h3 className="details_item_info_title">Outcome and Impact</h3>
              <p>{blogDetails.outcome}</p>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="sidebar ps-lg-5" style={{ marginLeft: "40px" }}>
                {/* Related Posts */}
                <div
                  className="post_list_block"
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "24px",
                    marginBottom: "32px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    maxWidth: "600px",
                    width: "100%",
                  }}
                >
                  <h3 className="sidebar_widget_title">Related Posts</h3>
                  <ul
                    className="unordered_list_block"
                    style={{ listStyle: "none", paddingLeft: 0 }}
                  >
                    <li
                      style={{
                        marginBottom: "18px",
                        paddingBottom: "18px",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <h3
                        className="post_title"
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: "6px",
                        }}
                      >
                        <Link onClick={handleLinkClick} href="/success-stories/success-story-1">
                          AI Base: Road and Tree Segmentation
                        </Link>
                      </h3>
                    </li>
                    <li
                      style={{
                        marginBottom: "18px",
                        paddingBottom: "18px",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <h3
                        className="post_title"
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: "6px",
                        }}
                      >
                        <Link onClick={handleLinkClick} href="/success-stories/success-story-2">
                          AI Ecommerce: Product Recommendation
                        </Link>
                      </h3>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div
                  className="popular_tags"
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    maxWidth: "600px",
                    width: "100%",
                  }}
                >
                  <h3 className="sidebar_widget_title">Popular Tags</h3>
                  <ul
                    className="tags_list unordered_list"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      paddingLeft: 0,
                      listStyle: "none",
                    }}
                  >
                    {blogDetails.tags.map((tag, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "6px 12px",
                            backgroundColor: "#f8f9fa",
                            color: "#495057",
                            borderRadius: "20px",
                            fontSize: "0.85rem",
                            border: "1px solid #e9ecef",
                          }}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
};

export default BlogSingle;
