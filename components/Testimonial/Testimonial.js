import React from "react";
import tImg1 from "/public/images/avatar/avatar_4.webp";
import tImg2 from "/public/images/avatar/avatar_6.webp";
import tImg3 from "/public/images/avatar/avatar_5.webp";
import tImg4 from "/public/images/avatar/avatar_7.webp";
import Bg from "/public/images/shapes/bg_pattern_2.svg";
import dynamic from "next/dynamic";
import Image from "next/image";

const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);

const testimonial = [
  {
    id: "01",
    tImg: tImg1,
    Title: "Reliable Technology Partner",
    Des: "BRVTeck helped us modernize our enterprise systems with a clear roadmap and timely execution. Their understanding of business challenges and technical expertise made a measurable impact on our operations.",
    Name: "Rakesh Sharma",
    sub: "IT Head, Manufacturing Company (India)",
  },
  {
    id: "02",
    tImg: tImg2,
    Title: "Excellent Support & Delivery",
    Des: "As a growing startup, we needed scalable and cost-effective solutions. BRVTeck delivered exactly that. Their team was responsive, professional, and focused on results from day one.",
    Name: "Ananya Rao",
    sub: "Founder, Tech Startup (Bangalore)",
  },
  {
    id: "03",
    tImg: tImg3,
    Title: "Strong Domain Expertise",
    Des: "The BRVTeck team demonstrated strong expertise in cloud and enterprise application integration. Their approach helped us improve performance and reduce operational overhead.",
    Name: "Vikram Mehta",
    sub: "Operations Manager, Enterprise Services",
  },
  {
    id: "04",
    tImg: tImg4,
    Title: "Highly Recommended",
    Des: "We partnered with BRVTeck for custom software development, and the experience was smooth and transparent. They delivered on time and aligned well with our business goals.",
    Name: "Priya Nair",
    sub: "Product Manager, IT Solutions Firm",
  },
];

const Testimonial = () => {
  return (
    <section
      className="review_section section_space bg-light"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            <span className="badge bg-secondary text-white">Client</span>
            Testimonial 🙂
          </div>
          <h2 className="heading_text mb-0">What our Indian clients say</h2>
        </div>

        <div className="row">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}
          >
            <Masonry columnsCount={4} gutter="30px">
              {testimonial.map((item, index) => (
                <div className="review_block pb-0" key={index}>
                  <h3 className="review_title">“{item.Title}”</h3>
                  <p className="review_commtent">{item.Des}</p>
                  <div className="review_admin">
                    <div className="review_admin_image">
                      <Image src={item.tImg} alt={item.Name} />
                    </div>
                    <div className="review_admin_info">
                      <h4 className="review_admin_name">{item.Name}</h4>
                      <span className="review_admin_designation">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
