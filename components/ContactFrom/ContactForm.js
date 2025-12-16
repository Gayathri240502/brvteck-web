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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

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
      setSubmitMessage("");

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
          setSubmitMessage("Message sent successfully!");
          setForms({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
          validator.hideMessages();
        } else {
          setSubmitMessage(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_name">
              Full Name
            </label>
            <input
              value={forms.name}
              type="text"
              name="name"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_email">
              Your Email
            </label>
            <input
              value={forms.email}
              type="email"
              name="email"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Email Address"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_company">
              Company
            </label>
            <input
              value={forms.company}
              type="text"
              name="company"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Company Name"
            />
            {validator.message("company", forms.company, "required")}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_phone">
              Your Phone
            </label>
            <input
              value={forms.phone}
              type="tel"
              name="phone"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Phone Number"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title" htmlFor="input_textarea">
              Message
            </label>
            <textarea
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.message}
              name="message"
              className="form-control"
              placeholder="How can we help you?"
              rows="5"
            ></textarea>
            {validator.message("message", forms.message, "required")}
          </div>

          {submitMessage && (
            <div
              className={`alert ${
                submitMessage.includes("successfully")
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            <span
              className="btn_label"
              data-text={isSubmitting ? "Sending..." : "Send Message"}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right" ></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
