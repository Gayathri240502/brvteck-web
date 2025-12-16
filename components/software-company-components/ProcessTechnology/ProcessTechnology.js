import React, { useState } from "react";
import shape1 from "/public/images/shapes/shape_line_2.svg";
import shape2 from "/public/images/shapes/shape_line_3.svg";
import shape3 from "/public/images/shapes/shape_line_4.svg";
import shape4 from "/public/images/shapes/shape_space_3.svg";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import TechnologySection from "../TechnologySection/TechnologySection";
import Testimonial from "../Testimonial/Testimonial";
import Image from "next/image";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Working Process
              </div>
              <h2 className="heading_text mb-0">
                Our <mark>Approach</mark>
              </h2>
            </div>
            <Accordion
              open={open}
              toggle={toggle}
              className="accordion"
              id="service_process_faq"
            >
              <AccordionItem className="accordion-item">
                <AccordionHeader targetId="1">
                  01. Strategic Discovery & Consulting
                </AccordionHeader>
                <AccordionBody accordionId="1" className="acc_body">
                  <p className="m-0">
                    We begin by aligning business goals with technology through
                    deep industry analysis, innovation strategy planning, and
                    solution consulting tailored for both enterprises and
                    startups.
                  </p>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem className="accordion-item">
                <AccordionHeader targetId="2">
                  02. Solution Architecture & Design
                </AccordionHeader>
                <AccordionBody accordionId="2" className="acc_body">
                  <p className="m-0">
                    Our experts design scalable, secure, and future-ready
                    systems—from user-centric UX to enterprise-grade
                    architecture—across AI, Cybersecurity, IoT,  SAP,
                    and more.
                  </p>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem className="accordion-item">
                <AccordionHeader targetId="3">
                  03. Agile Development & Integration
                </AccordionHeader>
                <AccordionBody accordionId="3" className="acc_body">
                  <p className="m-0">
                    Using agile methodology, we build robust and efficient
                    applications, integrating seamlessly with existing
                    ecosystems while focusing on speed, quality, and
                    adaptability.
                  </p>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem className="accordion-item">
                <AccordionHeader targetId="4">
                  04. Deployment & Cloud Optimization
                </AccordionHeader>
                <AccordionBody accordionId="4" className="acc_body">
                  <p className="m-0">
                    We deploy solutions across secure and scalable cloud
                    infrastructures—optimizing for performance, cost-efficiency,
                    and global availability with DevOps best practices.
                  </p>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem className="accordion-item">
                <AccordionHeader targetId="5">
                  05. Ongoing Support & Innovation Scaling
                </AccordionHeader>
                <AccordionBody accordionId="5" className="acc_body">
                  <p className="m-0">
                    Post-launch, we provide continuous monitoring, updates,
                    workforce management solutions, and roadmap scaling to keep
                    your digital products ahead in an evolving tech landscape.
                  </p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-lg-5">
            <Accordion
              open={open}
              toggle={toggle}
              className="accordion"
              id="service_process_faq"
            >
              <ul className="content_layer_group unordered_list_block text-center">
                <li>
                  <AccordionHeader targetId="1">
                    <span>Strategic Discovery & Consulting</span>
                  </AccordionHeader>
                </li>
                <li>
                  <AccordionHeader targetId="2">
                    <span>Solution Architecture & Design</span>
                  </AccordionHeader>
                </li>
                <li>
                  <AccordionHeader targetId="3">
                    <span>Agile Development & Integration</span>
                  </AccordionHeader>
                </li>
                <li>
                  <AccordionHeader targetId="4">
                    <span>Deployment & Cloud Optimization</span>
                  </AccordionHeader>
                </li>
                <li>
                  <AccordionHeader targetId="5">
                    <span>Ongoing Support & Innovation </span>
                  </AccordionHeader>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
        {/* <TechnologySection /> */}
        {/* <Testimonial /> */}
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
        <Image src={shape4} alt="Techco Shape" />
      </div>
    </section>
  );
};
export default FaqSection;
