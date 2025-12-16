import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import icon1 from "/public/images/icons/icon_wifi.svg";
import icon2 from "/public/images/icons/icon_dollar_2.svg";
import icon3 from "/public/images/icons/icon_chart.svg";
import icon4 from "/public/images/icons/icon_tag_2.svg";
import icon5 from "/public/images/icons/icon_user_2.svg";
import icon6 from "/public/images/icons/icon_users.svg";
import icon7 from "/public/images/icons/icon_pen.svg";
import icon8 from "/public/images/clients/client_logo_9.webp";
import icon9 from "/public/images/clients/client_logo_10.webp";
import icon10 from "/public/images/avatar/avatar_7.webp";
import icon11 from "/public/images/icons/icon_quote.svg";
import logo from "/public/images/site_logo/site_logo_2.svg";
import logo2 from "/public/images/site_logo/site_logo_3.svg";
import cases from "/public/images/case/case_image_4.webp";

// Navigation data
const navLinks = [
  { href: "/", label: "Home" },

  {
    href: "/artificial_intelligence",
    label: "Artificial Intelligence",
    children: [
      {
        href: "/artificial_intelligence/nlp-conversational-ai",
        label: "NLP & Conversational AI",
      },
      {
        href: "/artificial_intelligence/computer-vision-image-video-ai",
        label: "Computer Vision & Image/Video AI",
      },
      {
        href: "/artificial_intelligence/speech-audio-processing",
        label: "Speech & Audio Processing",
      },
      {
        href: "/artificial_intelligence/data-predictive-analytics",
        label: "Data & Predictive Analytics",
      },
      {
        href: "/artificial_intelligence/agentic-ai",
        label:"Agentic AI",
      },
      {
        href: "/artificial_intelligence/generative-ai",
        label: "Generative AI",
      },
     {
      href:"/artificial_intelligence/ai-agent",
      label: "AI Agent",
      },
      {
        href:"/artificial_intelligence/llm",
        label: "LLM",
      },

    ],
  },
  {
    href: "/service",
    label: "Services",
    children: [
      {
        href: "/service/technology",
        label: "Technology",
        children: [
          {
            href: "/service/technology/ai-&-ml",
            label: "AI & ML",
            children: [
              {
                href: "/service/technology/ai-&-ml/automation",
                label: "AI-driven Automation",
              },
              {
                href: "/service/technology/ai-&-ml/rpa",
                label: "Robotic Process Automation (RPA)",
              },
              {
                href: "/service/technology/ai-&-ml/enterprise-ai-engineering",
                label: "Enterprise AI Engineering",
              },
              {
                href: "/service/technology/ai-&-ml/responsible-ai",
                label: "Responsible AI",
              },
              {
                href: "/service/technology/ai-&-ml/multi-model-generative-ai",
                label: "Multi Model Generative AI",
              },
              {
                href: "/service/technology/ai-&-ml/advance-ml",
                label: "Advance ML",
              },
            ],
          },
          {
            href: "/service/technology/iot",
            label: "IoT",
            children: [
              {
                href: "/service/technology/iot/device-integration",
                label: "Device Integration",
              },
              {
                href: "/service/technology/iot/sensor-networks",
                label: "Sensor Networks",
              },
              {
                href: "/service/technology/iot/data-monitoring",
                label: "Data Monitoring",
              },
              {
                href: "/service/technology/iot/iot-security",
                label: "IoT Security",
              },
            ],
          },
          { href: "/service/technology/sap", label: "SAP" },
          {
            href: "/service/technology/big-data",
            label: "Big Data Solutions",
          },
          // {
          //   href: "/service/technology/block-chain-management",
          //   label: "Block Chain Management",
          //   children: [
          //     {
          //       href: "/service/technology/block-chain-management/block-chain-integration",
          //       label: "Block Chain Integration",
          //     },
          //     {
          //       href: "/service/technology/block-chain-management/decentralized-application-development",
          //       label: "Decentralized Application Development",
          //     },
          //     {
          //       href: "/service/technology/block-chain-management/smart-contract-development",
          //       label: "Smart Contract Development",
          //     },
          //     {
          //       href: "/service/technology/block-chain-management/tokenization-services",
          //       label: "Tokenization Services",
          //     },
          //   ],
          // },
          // {
          //   href: "/service/technology/cyber-security",
          //   label: "Cyber Security",
          //   children: [
          //     {
          //       href: "/service/technology/cyber-security/digital-security",
          //       label: "Digital Security",
          //     },
          //     {
          //       href: "/service/technology/cyber-security/data-encryption",
          //       label: "Data Encryption",
          //     },
          //     {
          //       href: "/service/technology/cyber-security/hybrid-cloud-services",
          //       label: "Hybrid Cloud Services",
          //     },
          //     {
          //       href: "/service/technology/cyber-security/digital-services",
          //       label: "Digital Services",
          //     },
          //   ],
          // },
          { href: "/service/technology/salesforce", label: "Salesforce" },
          { href: "/service/technology/snowflake", label: "SnowFlake" },
        ],
      },
      {
        href: "/service/software-enterprise",
        label: "Enterprise Software",
        children: [
          {
            href: "/service/software-enterprise/erp-solutions",
            label: "ERP Solutions",
          },
          {
            href: "/service/software-enterprise/crm-systems",
            label: "CRM Systems",
          },
          {
            href: "/service/software-enterprise/cloud-integration",
            label: "Cloud Integration",
          },
          {
            href: "/service/software-enterprise/custom-application",
            label: "Custom Applications",
          },
        ],
      },
      {
        href: "/service/data-engineering-analytics",
        label: "Data Engineering Analytics",
        children: [
          {
            href: "/service/data-engineering-analytics/accelerated-generative-ai",
            label: "Accelerated Generative AI",
          },
          {
            href: "/service/data-engineering-analytics/data-engineering",
            label: "Data Engineering",
          },
          {
            href: "/service/data-engineering-analytics/responsible-ai-for-gen-ai",
            label: "Responsible AI for Gen AI",
          },
          {
            href: "/service/data-engineering-analytics/visualization-and-analytics",
            label: "Visualization and Analytics",
          },
        ],
      },
      {
        href: "/service/work-force-management",
        label: "Work Force Management",
        children: [
          {
            href: "/service/work-force-management/employee-scheduling-and-shift-planning",
            label: "Employee Scheduling and Shift Planning",
          },
          {
            href: "/service/work-force-management/payroll-management",
            label: "Payroll Management",
          },
          {
            href: "/service/work-force-management/people-on-demand",
            label: "People on Demand",
          },
          {
            href: "/service/work-force-management/performance-analytics",
            label: "Performance Analytics",
          },
          {
            href: "/service/work-force-management/staffing-and-recruitment",
            label: "Staffing and Recruitment",
          },
        ],
      },
      {
        href: "/service/it-infrastructure-and-networking",
        label: "IT Infrastructure & Networking",
      },
      {
        href: "/service/application-integration",
        label: "Application Integration",
      },
      { href: "/service/cloud", label: "Cloud" },
      { href: "/service/consulting", label: "Consulting" },
      { href: "/service/devops", label: "DevOps" },
      {
        href: "/service/custom-software-development",
        label: "Custom Software development",
      },
      {
        href: "/service/custom-embedded-solutions",
        label: "Custom Embedded Solutions",
      },
    ],
  },
  {
    href: "/",
    label: "Products",
    children: [
      {
        href: "/products/hims",
        label: "AI-Hospital Information Management System",
      },
      {
        href: "/products/lms",
        label: "AI-Learning Management System",
      },
     {
        href: "/products/dcrm",
        label: "AI-Driven Customer Relationship Management",
      },
      {
        href: "/products/erp",
        label: "AI-Enterprise Resource Planning",
      },
 
     
         
      

 
      {
        href: "/products/hrms",
        label: "AI Human Resource Management System",
      },
      // {
      //   href: "/products/crypto",
      //   label: "Crypto Currency",
      // },
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    children: [
      {
        href: "/industries/banking-and-financial-services",
        label: "Banking and Financial Services",
      },
      { href: "/industries/health-care", label: "Health Care" },
      { href: "/industries/hi-end-engineering", label: "Hi-End Engineering" },
      {
        href: "/industries/media-and-technology",
        label: "Media and Technology",
      },
      { href: "/industries/insurance", label: "Insurance" },
      { href: "/industries/robotic", label: "Robotic" },
      { href: "/industries/telecom", label: "Telecom" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

const Header2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdowns({}); // Reset all dropdowns when menu is toggled
  };

  const toggleDropdown = (index, level = 0) => {
    const key = `${level}-${index}`;
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  // Helper function for desktop dropdown items
  const renderDropdownItems = (items, level = 0) => {
    return items.map((item, index) => {
      if (item.children && item.children.length > 0) {
        return (
          <li key={index} className="dropdown">
            <Link
              onClick={ClickHandler}
              className="nav-link"
              href={item.href}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {item.label}
            </Link>
            <ul className="dropdown-menu">
              {renderDropdownItems(item.children, level + 1)}
            </ul>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <Link onClick={ClickHandler} href={item.href}>
              {item.label}
            </Link>
          </li>
        );
      }
    });
  };

  // Mobile menu item renderer
  const renderMobileMenuItem = (item, index, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const dropdownKey = `${level}-${index}`;
    const isOpen = openDropdowns[dropdownKey];

    if (hasChildren) {
      return (
        <li key={index} className="nav-item">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              className="nav-link flex-grow-1"
              href={item.href}
              onClick={(e) => {
                ClickHandler();
                closeMobileMenu();
              }}
              style={{ paddingLeft: `${level * 15 + 12}px` }}
            >
              {item.label}
            </Link>
            <button
              className="btn btn-link p-2 text-decoration-none"
              onClick={() => toggleDropdown(index, level)}
              aria-expanded={isOpen}
            >
              <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
            </button>
          </div>
          {isOpen && (
            <ul className="list-unstyled">
              {item.children.map((child, childIndex) =>
                renderMobileMenuItem(child, childIndex, level + 1)
              )}
            </ul>
          )}
        </li>
      );
    } else {
      return (
        <li key={index} className="nav-item">
          <Link
            className="nav-link"
            href={item.href}
            onClick={(e) => {
              ClickHandler();
              closeMobileMenu();
            }}
            style={{ paddingLeft: `${level * 15 + 12}px` }}
          >
            {item.label}
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="bg-white">
      <header className="site_header site_header_2  ">
        <div
          className={`header_bottom stricky ${
            isSticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-5">
                <div className="site_logo">
                  <Link onClick={ClickHandler} className="site_link" href="/">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/img/2.png"
                        width={150}
                        height={80}
                        alt="brvteck-logo"
                      />
                    </div>

                    <Image
                      width={150}
                      height={50}
                      src="/img/logo.png"
                      alt="brvteck-logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="col-xl-8 col-lg-7 d-none d-lg-block">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center">
                    <ul className="main_menu_list unordered_list justify-content-center list-unstyled d-flex mb-0">
                      {navLinks.map((navItem, index) => {
                        if (navItem.label === "Home") {
                          return (
                            <li key={index} className="me-3">
                              <Link
                                onClick={ClickHandler}
                                className="nav-link text-decoration-none"
                                href={navItem.href}
                              >
                                {navItem.label}
                              </Link>
                            </li>
                          );
                        }

                        if (navItem.children && navItem.children.length > 0) {
                          return (
                            <li
                              key={index}
                              className="dropdown me-3 position-relative"
                            >
                              <Link
                                onClick={ClickHandler}
                                className="nav-link text-decoration-none dropdown-toggle"
                                href={navItem.href}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {navItem.label}
                              </Link>
                              <ul className="dropdown-menu position-absolute">
                                {renderDropdownItems(navItem.children)}
                              </ul>
                            </li>
                          );
                        }

                        return (
                          <li key={index} className="me-3">
                            <Link
                              onClick={ClickHandler}
                              href={navItem.href}
                              className="nav-link text-decoration-none"
                            >
                              {navItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="col-xl-2 col-lg-3 col-7">
                <ul className="header_btns_group unordered_list justify-content-end list-unstyled d-flex align-items-center mb-0">
                  {/* Mobile Menu Toggle Button */}
                  <li>
                    <button className="menu-toggle" onClick={toggleMobileMenu}>
                      <i className="icon-menu" />
                      {/* </button> */}
                      <i
                        className={`far fa-${
                          isMobileMenuOpen ? "times" : "bars"
                        }`}
                        style={{
                          fontSize: "24px",
                          color: isSticky ? "#000000" : "#ffffff",
                          transition: "color 0.3s ease",
                        }}
                      ></i>
                    </button>
                  </li>

                  <li className="dropdown d-none d-lg-block">
                    <Link
                      onClick={ClickHandler}
                      className="nav-link"
                      href="/"
                      id="company_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="btn btn-primary">
                        <span className="btn_label" data-text="Get Started">
                          Company
                        </span>
                        <span className="btn_icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </div>
                    </Link>
                    <div
                      className="dropdown-menu mega_menu_wrapper"
                      aria-labelledby="company_submenu"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="megamenu_pages_wrapper mb-5">
                              <div className="row">
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/about"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon1}
                                          alt="Wifi SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        About Us
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      Learn more about BRVTECK
                                    </span>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/stipend"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon2}
                                          alt="Dollar SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        Stipend Program
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      Growth Journey
                                    </span>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/success-stories/success-story-1"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon3}
                                          alt="Chart SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        Success Stories
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      Explore
                                    </span>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/products"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon4}
                                          alt="Event Tag SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        Products
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      Our Products
                                    </span>
                                  </Link>
                                </div>
                                {/* <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/team"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon5}
                                          alt="User Check SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        Team
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      We are friendly Join our team
                                    </span>
                                  </Link>
                                </div> */}
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/industries"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image
                                          src={icon6}
                                          alt="Users SVG Icon"
                                        />
                                      </small>
                                      <small className="iconbox_title">
                                        Industries
                                      </small>
                                    </span>
                                    <span className="description mb-0">
                                      Our Specialization
                                    </span>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/service"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image src={icon7} alt="Pen SVG Icon" />
                                      </small>
                                      <small className="iconbox_title">
                                        Services
                                      </small>
                                    </span>
                                    <small className="description mb-0">
                                      Featured Services
                                    </small>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/startups"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image src={icon7} alt="Pen SVG Icon" />
                                      </small>
                                      <small className="iconbox_title">
                                        Startups
                                      </small>
                                    </span>
                                    <small className="description mb-0">
                                      Brvteck startup program
                                    </small>
                                  </Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                  <Link
                                    onClick={ClickHandler}
                                    className="iconbox_block_2"
                                    href="/careers"
                                  >
                                    <span className="icon_title_wrap">
                                      <small className="iconbox_icon">
                                        <Image src={icon1} alt="Pen SVG Icon" />
                                      </small>
                                      <small className="iconbox_title">
                                        Careers
                                      </small>
                                    </span>
                                    <small className="description mb-0">
                                      Join our team
                                    </small>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <ul className="btns_group p-0 unordered_list justify-content-start">
                              <li>
                                <Link
                                  onClick={ClickHandler}
                                  className="btn btn-primary"
                                  href="/contact"
                                >
                                  <span
                                    className="btn_label"
                                    data-text="Free Consultation"
                                  >
                                    Free Consultation
                                  </span>
                                  <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                  </span>
                                </Link>
                              </li>
                              {/* <li>
                                <div className="review_short_info_2">
                                  <div className="review_admin_logo">
                                    <Image src={icon8} alt="Client Logo" />
                                  </div>
                                  <div className="review_info_content">
                                    <ul className="rating_block unordered_list">
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                    </ul>
                                    <div className="review_counter">
                                      From <b>200+</b> reviews
                                    </div>
                                  </div>
                                </div>
                              </li> */}
                              {/* <li>
                                <div className="review_short_info_2">
                                  <div className="review_admin_logo">
                                    <Image src={icon9} alt="Client Logo" />
                                  </div>
                                  <div className="review_info_content">
                                    <ul className="rating_block unordered_list">
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                      <li>
                                        <i className="fa-solid fa-star fa-fw"></i>
                                      </li>
                                    </ul>
                                    <div className="review_counter">
                                      From <b>200+</b> reviews
                                    </div>
                                  </div>
                                </div>
                              </li> */}
                            </ul>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className="site_author border-2 border-dark  "
                              style={{ border: "2px solid #000" }}
                            >
                              <div>
                                <div>
                                  <Image
                                    src="/img/logo.png"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                                {/* <div className="author_box_content">
                                  <h3 className="author_name text-white">
                                    Maverick Phoenix
                                  </h3>
                                  <span className="author_designation text-white">
                                    CEO At Techco
                                  </span>
                                </div> */}
                                {/* <div className="quote_icon">
                                  <Image src={icon11} alt="Quote Icon" />
                                </div> */}
                              </div>
                              <p className="mb-0 ">
                                AI & ML-powered enterprise solutions
                              </p>
                              <p className="mb-0 ">
                                At BRVTECK, our mission is to empower businesses
                                through innovative software solutions that
                                streamline operations, foster growth, and drive
                                success. With a commitment to excellence and
                                customer satisfaction
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="row d-lg-none">
                <div className="col-12">
                  <div className="mobile-menu-container bg-light rounded mt-3 p-3">
                    <ul className="navbar-nav list-unstyled">
                      {navLinks.map((navItem, index) =>
                        renderMobileMenuItem(navItem, index)
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
