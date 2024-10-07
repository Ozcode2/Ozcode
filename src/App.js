import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { useRef } from "react";
import Footer from "./Footer";

function App() {
  // Define refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to a specific section
  const scrollToSection = (section) => {
    if (section === "home")
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "projects")
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <Header scrollToSection={scrollToSection} />
        {/* Use refs on sections to scroll into view */}
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={projectsRef} id="projects">
          <Project />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
