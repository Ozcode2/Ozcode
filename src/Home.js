import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const homeRef = useRef(null);
  const socialRef = useRef(null);

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

    if (homeRef.current) observer.observe(homeRef.current);
    if (socialRef.current) observer.observe(socialRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
    };
  }, []);

  const handleEnrollClick = () => {
    const phoneNumber = "2348162066733";
    const message = `Hello, I am from your portfolio`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Opens the WhatsApp link in a new tab
  };

  return (
    <div className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, I'm Øzcode</h1>
        <div ref={homeRef} className="home-hero__info">
          <p className="text-primary">
            A Result-Oriented Full-stack Web Developer who dabbles in building
            and managing Websites and Web Applications that leads to the success
            of the overall product
          </p>
        </div>
        <div ref={socialRef} className="social-group">
          <div className="social-wrap">
            <div className="social-icons">
              <a href="https://twitter.com/Ozcode2" target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faXTwitter}
                  height={20}
                  width={20}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/nzelu-ozioma-90b159277"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="social-link"
                  icon={faLinkedin}
                  height={20}
                  width={20}
                />
              </a>

              <a href="https://web.facebook.com/ozioma.nzelu" target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faFacebook}
                  height={20}
                  width={20}
                />
              </a>

              <a onClick={handleEnrollClick} target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faWhatsapp}
                  height={20}
                  width={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mouse-container">
          <div className="mouse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
