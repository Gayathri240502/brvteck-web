import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
import CtaSection from "@/components/CtaSection/CtaSection";

// Blog cover images
import blog1 from "/public/img/blog/aib.jpg";
import blog2 from "/public/img/blog/aib2.jpg";

// Meta-icons
import iconCalendar from "/public/images/icons/icon_calendar.svg";

// Static blog data (in place of import from /api/blogs)
const blogDetails = {
  slug: "ai-road-tree-segmentation",
  title: "AI-Based Road and Tree Segmentation Service for Map Services",
  content: {
    requirement: `A client in the map services industry had a service to automatically identify and extract roads and trees from their Geospatial and Aerial Survey (GAS) data. The process involved human operators going through thousands of GeoSpatial data and manually highlighting roads and tree crown segments. This process was manual, making it slow, expensive, and difficult to scale. Client wanted to scale up rapidly across regions and this was becoming a bottleneck. They wanted an automated solution that could accurately segment roads and tree crown, saving time and reducing costs while making their service more scalable.`,
    approach: `We started with open-source geospatial segmentation datasets but found them insufficient for our needs. So, we built a hybrid dataset combining public data, manually segmented images, and GAN-generated samples. Using data augmentation and a custom CNN model, we trained on AWS SageMaker. The model was deployed as a scalable microservice using SageMaker and EKS, and retrained weekly with new human-labeled data to improve accuracy and performance.`,
    outcome: `The model has reached an optimised level where it was producing highly accurate segmentation maps. Our micro services application completely automated the client's workflow, and completely eliminated manual generation. This allowed the client to expand their services globally across three regions in a year. They were able to scale it for different terrains and very high spatial resolutions (till 0.1m).`,
  },
};

const BlogSingle = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          AI-Based Road and Tree Segmentation Service | Success Story | Brvteck
        </title>
        <meta
          name="description"
          content="Discover how Brvteck automated road and tree segmentation for a map services client using AI, deep learning, and scalable cloud microservices."
        />
        <meta
          name="keywords"
          content="AI, Road Segmentation, Tree Segmentation, Geospatial, Deep Learning, Automation, Cloud AI, AWS, Computer Vision, Success Story, Brvteck"
        />
        <meta name="author" content="Brvteck" />
        <meta
          property="og:title"
          content="AI-Based Road and Tree Segmentation Service | Success Story | Brvteck"
        />
        <meta
          property="og:description"
          content="How Brvteck delivered scalable, automated road and tree segmentation for global map services using AI and cloud microservices."
        />
        <meta property="og:image" content="/img/blog/aib.jpg" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.brvteck.com/success-stories/success-story-1"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI-Based Road and Tree Segmentation Service | Success Story | Brvteck"
        />
        <meta
          name="twitter:description"
          content="Read how Brvteck automated geospatial segmentation for a map services client using AI and cloud."
        />
        <meta name="twitter:image" content="/img/blog/aib.jpg" />
        <link
          rel="canonical"
          href="https://www.brvteck.com/success-stories/success-story-1"
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
          {/* Cover image */}
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
                  alt="BRVTeck – Blog cover"
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
            {/* Blog Main */}
            <div className="col-lg-8">
              <h3 className="details_item_info_title mb-4">
                Project Requirement
              </h3>
              <h2 className="details_item_title">{blogDetails.title}</h2>
              <p>{blogDetails.content.requirement}</p>

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
                      alt="BRVTeck – Cloud infrastructure"
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
              <p>{blogDetails.content.approach}</p>

              <h3 className="details_item_info_title">Outcome and Impact</h3>
              <p>{blogDetails.content.outcome}</p>
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
                    style={{ paddingLeft: 0, listStyle: "none" }}
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
                    {[
                      "AI Base",
                      "AI Ecommerce",
                      "Geospatial",
                      "Segmentation",
                      "Deep Learning",
                      "Automation",
                      "Cloud AI",
                      "AWS",
                      "Computer Vision",
                      "Data Science",
                    ].map((tag, index) => (
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
