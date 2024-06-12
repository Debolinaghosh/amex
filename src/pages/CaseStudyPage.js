import { useCallback } from "react";
import "./CaseStudyPage.css";

const CaseStudyPage = () => {
  const onGroupClick = useCallback(() => {
    // Please sync "Case study page 2" to the project
  }, []);

  return (
    <div className="case-study-page-1">
      <section className="animated-intera-690057bd-0b21-parent">
        <img
          className="animated-intera-690057bd-0b21-"
          alt=""
          src="/animated-intera-690057bd0b2145918b1fad10065e83b2-1@2x.png"
        />
        <div className="frame-child" />
      </section>
      <section className="case-study-page-1-inner">
        <div className="title-background-parent">
          <div className="title-background" />
          <h3 className="a-case-study-container">
            <p className="a-case-study">
              {" "}
              A Case Study on: Streamlining Finances
            </p>
            <p className="for-seniors"> for Seniors</p>
          </h3>
        </div>
      </section>
      <section className="case-study-page-1-child">
        <div className="frame-group">
          <div className="this-case-study-wrapper">
            <div className="this-case-study">{`This case study `}</div>
          </div>
          <div className="frame-container">
            <div className="image-6-parent">
              <img
                className="image-6-icon"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img className="image-12-icon" alt="" src="/image-12@2x.png" />
            </div>
            <p className="explores-how-sanjay-container">
              <span className="explores-how-sanjay">
                explores how Sanjay, a professional simplified his aging parents
                finances, by
              </span>
              <span className="prioritizing-ease-of">{`prioritizing ease of use `}</span>
            </p>
          </div>
        </div>
      </section>
      <div className="frame-div">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/group-2152.svg"
          onClick={onGroupClick}
        />
      </div>
    </div>
  );
};

export default CaseStudyPage;
