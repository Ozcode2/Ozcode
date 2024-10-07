import "./About.css";
import React, { useEffect, useRef } from "react";

const About = () => {
  const headingRef = useRef(null);
  const aboutContentRef = useRef(null);
  const lottieRef = useRef(null);
  const skillsRef = useRef(null);

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
    if (aboutContentRef.current) observer.observe(aboutContentRef.current);
    if (lottieRef.current) observer.observe(lottieRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (aboutContentRef.current) observer.unobserve(aboutContentRef.current);
      if (lottieRef.current) observer.unobserve(lottieRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div className="about sec-pad">
      <div className="main-container">
        <h2
          ref={headingRef}
          className="heading heading-sec heading-sec__mb-med"
        >
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub1">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div ref={lottieRef} className="lottie-container">
          <iframe
            src="https://lottie.host/embed/168e8f88-0f9b-48dd-9ae1-ed6a1f4cb47e/vVvKYmryV1.json"
            style={{ width: "400px", height: "400px", border: "none" }}
            title="Lottie Animation"
          ></iframe>
        </div>
        <div ref={aboutContentRef} className="about-content">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <p className="about__content-details-para">
              My name is Nzelu Ozioma, I'm a{" "}
              <strong>Full-stack Web Developer with 3 years experience</strong>{" "}
              of building and managing both front-end and back-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the{" "}
              <strong>Projects</strong> section.
            </p>
            <p className="about__content-details-para">
              I'm open to <strong>Job</strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to
              <strong> contact</strong> me.
            </p>
          </div>
          <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">
            Contact
          </a>
        </div>
        <div ref={skillsRef} className="about__content-skills">
          <h3 className="about__content-title">My Skills</h3>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">React</div>
            <div className="skills__skill">Photoshop</div>
            <div className="skills__skill">Bootstrap</div>
            <div className="skills__skill">Node.js</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
            <div className="skills__skill">Responsive Design</div>
            <div className="skills__skill">MongoDB</div>
            <div className="skills__skill">Figma</div>
            <div className="skills__skill">Firebase</div>
            <div className="skills__skill">API</div>
            <div className="skills__skill">Vercel</div>
            <div className="skills__skill">Netlify</div>
            <div className="skills__skill">Terminal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
