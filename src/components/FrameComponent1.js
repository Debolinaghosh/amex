import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesText1Click = useCallback(() => {
    navigate("/course");
  }, [navigate]);

  const onToolsText1Click = useCallback(() => {
    // Please sync "Slide 4:3 - 13" to the project
  }, []);

  return (
    <div className={`frame-parent8 ${className}`}>
      <div className="frame-parent9">
        <div className="home-wrapper">
          <a className="home11" onClick={onHomeText1Click}>
            Home
          </a>
        </div>
        <div className="menu-options-parent">
          <div className="menu-options">
            <a className="courses11" onClick={onCoursesText1Click}>
              Courses
            </a>
          </div>
          <div className="frame-parent10">
            <div className="case-studies-group">
              <a className="case-studies12">Case Studies</a>
              <div className="rectangle-parent7">
                <div className="frame-child16" />
                <img className="vector-icon30" alt="" src="/vector3.svg" />
              </div>
            </div>
            <div className="tools-container">
              <a className="tools10" onClick={onToolsText1Click}>
                Tools
              </a>
            </div>
          </div>
          <div className="menu-options1">
            <a className="games10">Games</a>
          </div>
          <div className="menu-options2">
            <a className="community10">Community</a>
          </div>
          <div className="menu-options3">
            <a className="settings10">Settings</a>
          </div>
        </div>
      </div>
      <div className="log-out-parent">
        <div className="log-out10">Log Out</div>
        <img
          className="sign-out-squre-icon10"
          loading="lazy"
          alt=""
          src="/sign-out-squre3.svg"
        />
      </div>
      <div className="frame-parent11">
        <div className="vector-parent1">
          <img className="rectangle-icon" alt="" src="/rectangle-4288.svg" />
          <a className="finverse10">
            <span>Fin</span>
            <span className="verse3">Verse</span>
          </a>
        </div>
        <img className="vector-icon31" alt="" src="/vector.svg" />
        <img className="vector-icon32" alt="" src="/vector2.svg" />
        <div className="frame-child17" />
        <img className="header-icons" alt="" src="/vector4.svg" />
        <img className="header-icons1" alt="" src="/vector5.svg" />
        <img className="header-icons2" alt="" src="/vector6.svg" />
        <img
          className="mditools-icon3"
          loading="lazy"
          alt=""
          src="/mditools.svg"
        />
        <img className="header-icons3" alt="" src="/vector7.svg" />
        <img
          className="screenshot-2024-05-04-at-3453"
          loading="lazy"
          alt=""
          src="/screenshot-20240504-at-345-2@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
