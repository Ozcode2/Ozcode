import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, I'm Øzcode</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A Result-Oriented Full-stack Web Developer who dabbles in building
            and managing Websites and Web Applications that leads to the success
            of the overall product
          </p>
        </div>
        <div className="social-group">
          <div className="social-wrap">
            <div className="social-icons">
              <a href="/" target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faXTwitter}
                  height={20}
                  width={20}
                />
              </a>

              <a href="/" target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faLinkedin}
                  height={20}
                  width={20}
                />
              </a>

              <a href="/" target="_blank">
                <FontAwesomeIcon
                  className="social-link"
                  icon={faFacebook}
                  height={20}
                  width={20}
                />
              </a>

              <a href="/" target="_blank">
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
