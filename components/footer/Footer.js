import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon1 from "/public/images/icons/icon_mail.svg";
import icon2 from "/public/images/icons/icon_calling.svg";
import icon3 from "/public/images/icons/icon_map_mark.svg";
import icon4 from "/public/images/icons/icon_mail_2.svg";

import { navLinks } from "@/components/footer/NavLinks";

const ClickHandler = () => window.scrollTo(10, 0);
const SubmitHandler = (e) => e.preventDefault();

const findSubLinks = (mainLabel, subLabel = null) => {
  const main = navLinks.find((item) => item.label === mainLabel);
  if (!main) return [];

  if (subLabel) {
    const sub = main.children?.find((child) => child.label === subLabel);
    return sub?.children || [];
  }

  return main.children || [];
};

const Footer = () => {
  const services = findSubLinks("Services");
  const technology = findSubLinks("Services", "Technology");
  const aiML = technology.find((t) => t.label === "AI & ML")?.children || [];
  const iot = technology.find((t) => t.label === "IoT")?.children || [];
  const blockChain =
    technology.find((t) => t.label === "Block Chain Management")?.children ||
    [];
  const cyber =
    technology.find((t) => t.label === "Cyber Security")?.children || [];

  const enterPrises = findSubLinks("Services", "Enterprise Software");
  const dataEng = findSubLinks("Services", "Data Engineering Analytics");
  const workforce = findSubLinks("Services", "Work Force Management") || [];

  const products = findSubLinks("Products");
  const industries = findSubLinks("Industries");

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cancellation and Refund", href: "/cancellation-and-refund" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: " Shipping and Exchange", href: "/shipping-and-exchange" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Stipend", href: "/stipend" },
    { label: "StartUps", href: "/startups" },
    { label: "Invester Connect", href: "/invester-connect" },
  ];
  const quickLinks1 = [
    { label: "Artificial Intelligence", href: "/artificial_intelligence" },
    {
      label: "NLP & Conversational AI",
      href: "/artificial_intelligence/nlp-conversational-ai",
    },
    {
      label: "Computer Vision & Image/Video AI",
      href: "/artificial_intelligence/computer-vision-image-video-ai",
    },
    {
      label: "Speech & Audio Processing",
      href: "/artificial_intelligence/speech-audio-processing",
    },
    {
      label: "Data & Predictive Analytics",
      href: "/artificial_intelligence/data-predictive-analytics",
    },
  ];

  return (
    <footer className="site_footer footer_layout_1">
      <div
        className="content_box"
        style={{ backgroundImage: `url(/images/shapes/bg_pattern_3.svg)` }}
      >
        <div className="container">
          {/* Contact Info */}
          <div className="diract_contact_links text-white">
            {[
              { icon: icon1, title: "Write to us", text: "sales@brvteck.com" },
              { icon: icon2, title: "Call Us", text: "+91-8062177256" },
              {
                icon: icon3,
                title: "Our Office",
                text: "Mindspace, Hyderabad",
                link: "https://maps.app.goo.gl/E6BHJyP7fmfusNFu6?g_st=aw",
              },
            ].map((item, i) => (
              <div className="iconbox_block layout_icon_left" key={i}>
                <div className="iconbox_icon">
                  <Image src={item.icon} alt="" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link}>
                      <p className="mb-0">{item.text}</p>
                    </a>
                  ) : (
                    <p className="mb-0">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Footer Content */}
          <div className="footer_main_content">
            <div className="row">
              {/* Quick Links */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Quick Links</h3>
                  <ul className="icon_list unordered_list_block">
                    {quickLinks.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {services.map((s, i) => (
                      <li key={i}>
                        <Link href={s.href}>
                          <span>{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Products */}
              <div className="col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Products</h3>
                  <ul className="icon_list unordered_list_block">
                    {products.map((prod, i) => (
                      <li key={i}>
                        <Link href={prod.href}>
                          <span>{prod.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Industries */}
              <div className="col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Industries</h3>
                  <ul className="icon_list unordered_list_block">
                    {industries.map((ind, i) => (
                      <li key={i}>
                        <Link href={ind.href}>
                          <span>{ind.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technology */}
              <div className="col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Technology</h3>
                  <ul className="icon_list unordered_list_block">
                    {technology.map((tech, i) => (
                      <li key={i}>
                        <Link href={tech.href}>
                          <span>{tech.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sub-sections Row */}
            <div className="row mt-4">
              {/* Enterprise Software */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Enterprise Softwares</h3>
                  <ul className="icon_list unordered_list_block">
                    {enterPrises.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data Engineering */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">
                    Data Engineering Analytics
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    {dataEng.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Workforce Management */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Workforce Management</h3>
                  <ul className="icon_list unordered_list_block">
                    {workforce.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AI & ML */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">AI & ML Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {aiML.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IoT */}
              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">IoT Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {iot.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Artificial Intelligence</h3>
                  <ul className="icon_list unordered_list_block">
                    {quickLinks1.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Block Chain */}
              {/* <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Block Chain Management</h3>
                  <ul className="icon_list unordered_list_block">
                    {blockChain.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* Cyber Security */}
              {/* <div className="col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Cyber Security</h3>
                  <ul className="icon_list unordered_list_block">
                    {cyber.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* Newsletter / Logo */}
              <div className="col-lg-3 col-md-4">
                <div className="footer_widget pe-md-3 text-center">
                  <div className="footer_logo mb-2">
                    <Image
                      src="/img/logo1.png"
                      width={40}
                      height={40}
                      alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                    />
                    <span
                      style={{
                        color: "#ffffff",
                        marginLeft: "3px",
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginTop: "3px",
                        textAlign: "left",
                      }}
                    >
                      BRVTECK
                    </span>
                  </div>
                  {/* <p>
                    BRVTECK makes keen Information Technology answers for
                    organizations in each industry...
                  </p> */}
                  <ul
                    className="social_links_block unordered_list d-flex justify-content-center mt-3"
                    style={{ gap: "10px" }}
                  >
                    <li>
                      <Link
                        href="https://www.facebook.com/brvteck/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://www.linkedin.com/company/brvteck/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://www.instagram.com/brvteck_/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://www.threads.net/@brvteck_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/img/threads.svg"
                          alt="Threads"
                          style={{
                            width: "16px",
                            height: "16px",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://maps.app.goo.gl/RX8C5V6QSWNFznen6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-location-dot"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            © Copyright BRV Technologies Private Limited. All Rights Reserved.
          </p>
          <p className="copyright_text m-0">
            Developed by <Link href="/">BRVTECK</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
