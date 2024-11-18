import "./Contact.css";
import React, { useState, useRef, useEffect } from "react";
import axios from "./axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [isError, setIsError] = useState(false); // State for error handling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/sendMessage", formData);
      console.log("Response from server:", response.data);
      setIsError(false); // No error
      setIsModalVisible(true); // Show modal on success
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data : error.message
      );
      setIsError(true); // Error occurred
      setIsModalVisible(true); // Show modal even on error
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the modal
  };

  // scroll animations

  const headingRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Adjust based on how much of the element should be visible before triggering
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (formRef.current) observer.observe(formRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div className="contact sec-pad dynapicBg">
      <div className="wrap-container">
        <h2
          ref={headingRef}
          className="heading heading-sec heading-sec__mb-med"
        >
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div ref={formRef} className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="contact__form-input"
              />
            </div>
            <div className="form-group">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="contact__form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="contact__form-input"
                rows={10}
                cols={30}
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {isError
                ? "Failed to send message!"
                : "Message sent successfully!"}
            </h3>
            <button onClick={handleCloseModal} className="modal-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
