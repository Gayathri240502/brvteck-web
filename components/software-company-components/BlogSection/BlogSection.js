import React from "react";
import Link from "next/link";
import icon1 from "/public/images/icons/icon_calendar.svg";
import shape1 from "/public/images/shapes/shape_line_7.svg";
import shape2 from "/public/images/shapes/shape_angle_4.webp";
import Image from "next/image";

// Success stories data
const successStories = [
  {
    id: 1,
    title: "AI-Based Road & Tree Segmentation Service for Map Services",
    excerpt:
      "Automated geospatial data processing using custom CNN models, eliminating manual segmentation and enabling global expansion across three regions.",
    screens: "/img/services/ai-ml/ai1.jpg", // You'll need to add appropriate images
    author: "AI Solutions Team",
    create_at: "2024",
    category: "Computer Vision",
    tags: ["AI", "CNN", "AWS", "Geospatial"],
    impact: "Completely automated workflow, global expansion across 3 regions",
    technology: "Custom CNN, AWS SageMaker, GANs",
    url: "/success-stories/success-story-1",
  },
  {
    id: 2,
    title: "Revolutionizing Grocery E-Commerce Experience with AI",
    excerpt:
      "Enhanced online grocery shopping with intelligent recommendation system and AI chatbot, driving higher conversion rates and customer satisfaction.",
    screens: "/img/services/ai-ml/ai1.jpg", // You'll need to add appropriate images
    author: "E-Commerce AI Team",
    create_at: "2024",
    category: "Recommendation Systems",
    tags: ["AI", "Amazon Personalize", "Chatbot", "E-commerce"],
    impact:
      "Increased conversion rates, improved customer engagement, cost savings",
    technology: "Amazon Personalize, Amazon Lex, AWS EKS",
    url: "/success-stories/success-story-2",
  },
];

const SuccessStorySection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="blog_section blog_section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
            }}
          >
            Success Stories
          </div>
          <h2 className="heading_text mb-0">
            Our Latest <mark>Success Stories</mark>
          </h2>
        </div>

        <div className="row justify-content-center">
          {successStories.map((story, index) => (
            <div className="col-lg-5" key={index}>
              <div className="blog_post_block layout_2">
                <div className="blog_post_image">
                  <Link
                    onClick={ClickHandler}
                    href={story.url}
                    className="image_wrap"
                  >
                    <Image
                      src={story.screens}
                      alt={story.title}
                      width={500}
                      height={600}
                    />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="blog_post_content p-0">
                  <div className="category_badge mb-2">
                    <span className="badge bg-primary">{story.category}</span>
                  </div>
                  <h3 className="blog_post_title mb-2">
                    <Link onClick={ClickHandler} href={story.url}>
                      {story.title}
                    </Link>
                  </h3>
                  {/* <p className="story_excerpt mb-3">{story.excerpt}</p> */}
                  {/* <div className="impact_highlight mb-3">
                    <strong>Impact:</strong> {story.impact}
                  </div>
                  <div className="technology_used mb-3">
                    <strong>Technology:</strong> {story.technology} */}
                  {/* </div> */}
                  <ul className="post_meta unordered_list">
                    <li>
                      <Link onClick={ClickHandler} href={story.url}>
                        <i className="fa-regular fa-circle-user"></i> By{" "}
                        <b>{story.author}</b>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href={story.url}>
                        <Image src={icon1} alt="Icon Calendar" />{" "}
                        {story.create_at}
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        onClick={ClickHandler}
                        href={story.url}
                      >
                        <i className="fa-regular fa-tags"></i> {story.category}
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image src={shape1} alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <Image src={shape2} alt="Techco Shape Angle" />
      </div>
    </section>
  );
};

export default SuccessStorySection;
