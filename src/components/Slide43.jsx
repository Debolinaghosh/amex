import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Darhboard from "./Darhboard";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Slide43.css";

const Slide43 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCoursesTextClick = useCallback(() => {
    navigate("/course");
  }, [navigate]);

  const onCaseStudiesTextClick = useCallback(() => {
    navigate("/case");
  }, [navigate]);

  const onToolsTextClick = useCallback(() => {
    // Please sync "Slide 4:3 - 13" to the project
  }, []);

  return (
    <div className={`home ${className}`}>
      <img
        className="magedashboard-fill-icon"
        loading="lazy"
        alt=""
        src="/magedashboardfill.svg"
      />
      <div className="darhboard">
        <div className="darhboard-child" />
        <div className="darhboard-item" />
        <div className="darhboard-inner" />
        <div className="rectangle-div" />
      </div>
      <img className="home-child" alt="" />
      <img
        className="chatbot-1-icon"
        loading="lazy"
        alt=""
        src="/chatbot-1@2x.png"
      />
      <div className="content">
        <div className="finverse-wrapper">
          <a className="finverse">
            <span>Fin</span>
            <span className="verse">Verse</span>
          </a>
        </div>
        <div className="content-right">
          <div className="content-navigation">
            <div className="navigation-items">
              <div className="navigation-item-container">
                <Darhboard
                  darhboardPosition="relative"
                  darhboardTop="unset"
                  darhboardLeft="unset"
                />
              </div>
              <div className="home-container">
                <div className="home-icon" />
                <a className="home1">Home</a>
              </div>
            </div>
          </div>
          <div className="resources">
            <a className="courses" onClick={onCoursesTextClick}>
              Courses
            </a>
            <a className="case-studies" onClick={onCaseStudiesTextClick}>
              Case Studies
            </a>
            <a className="tools" onClick={onToolsTextClick}>
              Tools
            </a>
            <a className="games">Games</a>
            <a className="community">Community</a>
            <div className="settings-container">
              <div className="settings">Settings</div>
            </div>
          </div>
        </div>
        <div className="user-actions">
          <div className="sign-out-container">
            <img
              className="sign-out-squre-icon"
              loading="lazy"
              alt=""
              src="/sign-out-squre.svg"
            />
          </div>
          <div className="log-out">Log Out</div>
        </div>
        <div className="toolbar">
          <div className="toolbar-separator" />
          <img
            className="toolbar-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img
            className="toolbar-icons"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className="mditools-icon"
            loading="lazy"
            alt=""
            src="/mditools.svg"
          />
          <img
            className="toolbar-icons1"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <img
            className="toolbar-icons2"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <img className="toolbar-icons3" alt="" src="/vector-4.svg" />
          <input className="toolbar-icon1" type="checkbox" />
          <img
            className="screenshot-2024-05-04-at-345"
            loading="lazy"
            alt=""
            src="/screenshot-20240504-at-345-1@2x.png"
          />
        </div>
      </div>
      <section className="header">
        <div className="header-content">
          <div className="user-actions-container">
            <div className="user-actions-icons">
              <div className="notification-container">
                <img
                  className="bell-fill-icon"
                  loading="lazy"
                  alt=""
                  src="/bell-fill.svg"
                />
              </div>
              <img
                className="user-cicrle-duotone-icon"
                loading="lazy"
                alt=""
                src="/user-cicrle-duotone@2x.png"
              />
            </div>
          </div>
          <div className="banner">
            <div className="financial-literacy-for-all-parent">
              <h2 className="financial-literacy-for">
                Financial Literacy for all
              </h2>
              <div className="banner-description-container">
                <p className="embark-on-a">
                  Embark on a dynamic financial learning experience with our
                  interactive platform, where education meets innovation to
                  empower financial literacy for all.
                </p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="frame-parent">
              <div className="news-separator-parent">
                <img className="news-separator-icon" alt="" />
                <div className="latest-news">Latest News</div>
                <div className="news-content">
                  <div className="news-items">
                    <img
                      className="news-items-child"
                      loading="lazy"
                      alt=""
                      src="/group-13.svg"
                    />
                    <img
                      className="news-items-item"
                      loading="lazy"
                      alt=""
                      src="/group-3.svg"
                    />
                    <img
                      className="news-items-inner"
                      loading="lazy"
                      alt=""
                      src="/group-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="description-content-wrapper">
                <div className="description-content">
                  <p className="master-the-art-container">
                    <span className="master-the-art">{`Master the art of effective money management and gain the insights needed `}</span>
                    <span className="to-make-informed">
                      to make informed financial decisions with us.
                    </span>
                  </p>
                  <div className="action-buttons">
                    <div className="buttons-container">
                      <div className="about-us-container">
                        <div className="about-us-icon" />
                        <a className="about-us">About Us</a>
                      </div>
                      <div className="get-started-wrapper">
                        <div className="get-started">Get Started</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommendations-content-wrapper">
              <div className="recommendations-content">
                <div className="recommendations-containers">
                  <div className="recommendations-icons" />
                  <div className="top-recommendations-for">
                    Top Recommendations for you
                  </div>
                  <img
                    className="add-round-duotone-fill-line-icon"
                    loading="lazy"
                    alt=""
                    src="/add-round-duotone-fill-line.svg"
                  />
                </div>
                <div className="recommendations-containers1">
                  <div className="recommendations-containers-child" />
                  <div className="recommended-games-for">
                    Recommended games for you
                  </div>
                  <img
                    className="add-round-duotone-fill-line-icon1"
                    loading="lazy"
                    alt=""
                    src="/add-round-duotone-fill-line-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-background" />
        <Form.Group className="footer-separator-formgroup">
          <Form.Control as="textarea" defaultValue="" />
        </Form.Group>
        <div className="footer-content">
          <img
            className="phbook-fill-icon"
            loading="lazy"
            alt=""
            src="/phbookfill.svg"
          />
          <div className="footer-separator" />
          <div className="footer-separator1" />
          <img className="footer-content-child" alt="" src="/line-33.svg" />
          <img
            className="image-16-icon"
            loading="lazy"
            alt=""
            src="/image-16@2x.png"
          />
          <div className="footer-screenshot-container">
            <img
              className="screenshot-2024-05-04-at-1151"
              alt=""
              src="/screenshot-20240504-at-1151-2@2x.png"
            />
            <div className="footer-screenshot-background">
              <div className="footer-screenshot-background-child" />
              <div className="footer-screenshot" />
            </div>
            <img
              className="screenshot-2024-05-05-at-318"
              alt=""
              src="/screenshot-20240505-at-318-1@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

Slide43.propTypes = {
  className: PropTypes.string,
};

export default Slide43;
