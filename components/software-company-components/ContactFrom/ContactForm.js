import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const ContactForm = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(forms),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus("success");
          setForms({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
          validator.hideMessages();
        } else {
          setSubmitStatus("error");
          console.error("Error:", data.message);
        }
      } catch (error) {
        setSubmitStatus("error");
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      validator.showMessages();
    }
  };

  return (
    <div>
      {submitStatus === "success" && (
        <div className="alert alert-success mb-3">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="alert alert-danger mb-3">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <form
        className="xb-item--form contact-from"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_name">
                <i className="fa-regular fa-user"></i>
              </label>
              <input
                value={forms.name}
                type="text"
                name="name"
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                placeholder="Your Name"
                disabled={isSubmitting}
              />
              {validator.message("name", forms.name, "required|alpha_space")}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                <i className="fa-regular fa-envelope"></i>
              </label>
              <input
                value={forms.email}
                type="email"
                name="email"
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                placeholder="Your Email"
                disabled={isSubmitting}
              />
              {validator.message("email", forms.email, "required|email")}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                <i className="fa-regular fa-phone-volume"></i>
              </label>
              <input
                value={forms.phone}
                type="tel"
                name="phone"
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                placeholder="Your Phone No."
                disabled={isSubmitting}
              />
              {validator.message("phone", forms.phone, "required|phone")}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">
                <i className="fa-regular fa-globe"></i>
              </label>
              <input
                value={forms.company}
                type="text"
                name="company"
                className="form-control"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                placeholder="Your Company Name"
                disabled={isSubmitting}
              />
              {validator.message("company", forms.company, "required")}
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                <i className="fa-regular fa-comments"></i>
              </label>
              <textarea
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
                value={forms.message}
                name="message"
                className="form-control"
                placeholder="How can we help you?"
                disabled={isSubmitting}
              />
              {validator.message("message", forms.message, "required")}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              <span
                className="btn_label"
                data-text={isSubmitting ? "Sending..." : "Send Request"}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
