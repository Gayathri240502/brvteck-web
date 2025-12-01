import React from "react";
import Services from "../../../api/service";
import Link from "next/link";
import shape1 from "/public/images/shapes/shape_line_5.svg";
import shape2 from "/public/images/shapes/shape_line_6.svg";
import shape3 from "/public/images/shapes/shape_space_1.svg";
import shape4 from "/public/images/shapes/shape_angle_1.webp";
import shape5 from "/public/images/shapes/shape_angle_2.webp";
import Image from "next/image";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
            }}
          >
            Our Services
          </div>
          <h2 className="heading_text mb-0">
            How We Can <mark>Help</mark> You
          </h2>
        </div>

        <div className="row">
          {Services.map((service, srv) => {
            // Get the icon component from the service object
            const IconComponent = service.icon;

            return (
              <div className="col-lg-4" key={srv}>
                <div
                  className="service_block_2"
                  style={{
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "30px",
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="service_icon">
                    <IconComponent size={48} className="lucide-icon" />
                  </div>
                  <h3 className="service_title">
                    <Link onClick={ClickHandler} href={service.href}>
                      {service.title}
                    </Link>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    {service.features.map((feature, featureitem) => (
                      <li key={featureitem}>
                        <span className="icon_list_icon">
                          <i className="fa-regular fa-circle-dot"></i>
                        </span>
                        <span className="icon_list_text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="decoration_item shape_image_1">
        <Image src={shape1} alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <Image src={shape2} alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_3">
        <Image src={shape3} alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_4">
        <Image src={shape4} alt="Techco Shape Angle" />
      </div>
      <div className="decoration_item shape_image_5">
        <Image src={shape5} alt="Techco Shape Angle" />
      </div>
    </section>
  );
};

export default ServiceSection;
