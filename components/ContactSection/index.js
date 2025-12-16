import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  AtSign,
} from "lucide-react";


const ContactSection = () => {
  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
    { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "CLOSED" },
    { day: "Sunday", hours: "CLOSED" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/brvteck/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/brvteck_/",
      icon: Instagram,
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@brvteck_?xmt=AQGzUfUzxdOT_51CegnecxeWcc_Sb3gq5Yz6DsOvx-oHbEo",
      icon: AtSign,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/brvteck/posts/?feedView=all",
      icon: Linkedin,
    },
    {
      name: "Google Maps",
      url: "https://www.google.com/maps/place/13th+Floor+,+Survey+No.+64,+BRV+Technologies+Private+Limited,+Building+Number+9,+Mindspace+Madhapur+Rd,+HITEC+City,+Hyderabad,+Telangana+500081/data=!4m2!3m1!1s0x3bcb9143e8456bdf:0x93efadad8d1cf9c3",
      icon: MapPin,
    },
  ];
  

  return (
    <section className="contact_section section_space bg-light">
      <div className="container">
        {/* First Row - Contact Info */}
        <div className="contact_info_box row mb-4">
          {/* Registered Office */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <MapPin size={40} className="text-primary" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">India Registered Office</h3>
                <p className="mb-0">Survey No. 64,</p>
                <p className="mb-0">Building Number 9, Mindspace,</p>
                <p className="mb-0">13th Floor, Madhapur</p>
                <p className="mb-0">Hyderabad, Telangana 500081</p>
              </div>

              {/* Add space between addresses */}
              <div style={{ height: "1.5rem" }}></div>
                
              <div className="iconbox_content">
                <h3 className="iconbox_title">USA Registered Office</h3>
                <p className="mb-0">5900 Balcones Drive STE 100,</p>
                <p className="mb-0">Austin, TX 78731</p>
              </div>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="bg-white text-center p-4 mb-4">
              <Mail size={50} className="text-primary mb-3" style={{ backgroundColor: "#f0f8ff", borderRadius: "60%", padding: "0.7rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
              <h3 className="iconbox_title">Email</h3>
              <p className="mb-0">
                <a href="mailto:sales@brvteck.com" className="text-decoration-none text-dark">
                  sales@brvteck.com
                </a>
              </p>
            </div>

            <div className="bg-white text-center p-4">
              <Phone size={50} className="text-primary mb-3" style={{ backgroundColor: "#f0f8ff", borderRadius: "60%", padding: "0.7rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
              <h3 className="iconbox_title">Phone</h3>
              <p className="mb-0">
                <a href="tel:+918062177256" className="text-decoration-none text-dark">
                  +91-8062177256
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="text-center bg-white p-4">
              <Clock size={50} className="text-primary mb-3" style={{ backgroundColor: "#f0f8ff", borderRadius: "60%", padding: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} />
              <h3 className="iconbox_title mt-2">Business Hours</h3>
              {businessHours.map((schedule, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: "0.9rem" }}>
                  <span className="fw-medium">{schedule.day}:</span>
                  <span className={schedule.hours === "CLOSED" ? "text-muted" : "text-dark"}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Sales Offices */}
        <div className="contact_info_box row mb-4">
          {[
            {
              title: "Dubai Sales Office",
              lines: ["Building no 11 Damascus Street", "AL Qusais ind 2, Dubai", "United Arab Emirates", "dubai.sales@brvteck.com"],
            },
            {
              title: "Mumbai Sales Office",
              lines: ["201, Hermes Atrium Sector 11", "CBD Belapur, Navi Mumbai", "Maharashtra 400614", "mumbai.sales@brvteck.com"],
            },
            {
              title: "Ireland Sales Office",
              lines: ["BALLYNAKELLY GATE", "NEWCASTLE BOULEVARD", "DUBLIN, D22, Ireland", "ireland.sales@brvteck.com"],
            },
          ].map((office, idx) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <MapPin size={40} className="text-secondary" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{office.title}</h3>
                  {office.lines.map((line, i) => (
                    <p className="mb-0" key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="section_space pb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-7">
              <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
              <p className="mb-5">Give us chance to serve and bring magic to your brand.</p>
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.8797526778176!2d78.38103460000002!3d17.441493599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9143e8456bdf%3A0x93efadad8d1cf9c3!2sBRV%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1750941255323!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="contact_info_box row mb-5">
          <div className="col-12 text-center">
            <h3 className="mb-4">Follow Us</h3>
            <div className="social-links d-flex justify-content-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link d-flex flex-column align-items-center text-decoration-none"
                    style={{
                      padding: "1rem",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      color: "#6c757d",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={32} className="mb-2" />
                    <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
