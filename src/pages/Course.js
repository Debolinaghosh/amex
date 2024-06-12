import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Module from "../components/Module";
import "./Course.css";

const Course = () => {
  const navigate = useNavigate();

  const onModuleContainerClick = useCallback(() => {
    navigate("/module");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCaseStudiesText1Click = useCallback(() => {
    navigate("/case");
  }, [navigate]);

  const onToolsText1Click = useCallback(() => {
    // Please sync "Slide 4:3 - 13" to the project
  }, []);

  return (
    <div className="course">
      <div className="course-child" />
      <div className="course-item" />
      <div className="home2">Home</div>
      <div className="courses1">Courses</div>
      <div className="case-studies1">Case Studies</div>
      <div className="tools1">Tools</div>
      <div className="darhboard2">
        <div className="darhboard-child5" />
        <div className="darhboard-child6" />
        <div className="darhboard-child7" />
        <div className="darhboard-child8" />
      </div>
      <img className="sertificate-icon1" alt="" src="/sertificate2.svg" />
      <div className="finverse1">FinVerse</div>
      <div className="rectangle-parent">
        <div className="frame-inner" />
        <div className="logo">LOGO</div>
      </div>
      <div className="games1">Games</div>
      <div className="community1">Community</div>
      <div className="profile">Profile</div>
      <div className="settings1">Settings</div>
      <img className="sertificate-icon2" alt="" src="/sertificate3.svg" />
      <img className="chat-alt-3-icon1" alt="" src="/chat-alt-3@2x.png" />
      <img className="book-open-alt-icon" alt="" src="/book-open-alt1.svg" />
      <img className="book-duotone-icon1" alt="" src="/book-duotone1.svg" />
      <img className="setting-line-icon1" alt="" src="/setting-line@2x.png" />
      <div className="log-out1">Log Out</div>
      <img className="sign-out-squre-icon1" alt="" src="/sign-out-squre2.svg" />
      <div className="navigation-parent">
        <div className="navigation">
          <div className="home-link-parent">
            <div className="home-link">
              <a className="home3" onClick={onHomeText1Click}>
                Home
              </a>
            </div>
            <div className="account-options-parent">
              <div className="account-options">
                <h1 className="courses2">Courses</h1>
                <div className="design-tools">
                  <div className="design-tools-child" />
                  <img
                    className="vector-icon"
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
              <div className="case-studies2">
                <h1 className="case-studies3" onClick={onCaseStudiesText1Click}>
                  Case Studies
                </h1>
              </div>
            </div>
          </div>
          <div className="tools-wrapper">
            <h1 className="tools2" onClick={onToolsText1Click}>
              Tools
            </h1>
          </div>
          <div className="vector-parent">
            <img className="vector-icon1" alt="" src="/vector.svg" />
            <div className="games-link">
              <h1 className="games2">Games</h1>
            </div>
          </div>
          <div className="community-wrapper">
            <h1 className="community2">Community</h1>
          </div>
          <div className="settings-wrapper">
            <a className="settings2">Settings</a>
          </div>
        </div>
        <div className="session">
          <h1 className="log-out2">Log Out</h1>
          <img
            className="sign-out-squre-icon2"
            loading="lazy"
            alt=""
            src="/sign-out-squre3.svg"
          />
        </div>
        <div className="magedashboard-fill" />
        <div className="footer1">
          <div className="finverse-logo">
            <img
              className="finverse-logo-child"
              alt=""
              src="/rectangle-4288.svg"
            />
            <a className="finverse2">
              <span>Fin</span>
              <span className="verse1">Verse</span>
            </a>
          </div>
          <img className="vector-icon2" alt="" src="/vector.svg" />
          <img className="vector-icon3" alt="" src="/vector2.svg" />
          <div className="footer-child" />
          <Form.Check className="vector-formcheck" />
          <img className="vector-icon4" alt="" src="/vector-5.svg" />
          <img className="vector-icon5" alt="" src="/vector-6.svg" />
          <img className="vector-icon6" alt="" src="/vector6.svg" />
          <img
            className="mditools-icon1"
            loading="lazy"
            alt=""
            src="/mditools.svg"
          />
          <img
            className="screenshot-2024-05-04-at-3451"
            loading="lazy"
            alt=""
            src="/screenshot-20240504-at-345-11@2x.png"
          />
        </div>
      </div>
      <section className="header1">
        <div className="search-bar-parent">
          <SearchBar
            searchAlt="/search-alt1.svg"
            userCicrleDuotone="/user-cicrle-duotone1@2x.png"
            userCicrleDuotone1="/user-cicrle-duotone1@2x.png"
            courses="Courses"
          />
          <div className="filters">
            <div className="age-filters">
              <div className="adults-senior-parent">
                <div className="adults-senior">
                  <div className="children-filter">
                    <a className="children">Children</a>
                  </div>
                  <div className="finance-filter">
                    <div className="finance-teenagers">
                      <div className="finance-teenagers1">
                        <div className="finance-analysis">Finance Analysis</div>
                        <a className="teenagers">Teenagers</a>
                      </div>
                      <div className="filter-divider" />
                    </div>
                  </div>
                  <h3 className="adults">Adults</h3>
                  <h3 className="senior-citizens">Senior Citizens</h3>
                </div>
                <div className="modules">
                  <div className="module-list">
                    <div className="module">
                      <div className="module-child" />
                      <div className="module1">
                        <div className="module-item" />
                        <img className="module-inner" loading="lazy" alt="" />
                        <img className="line-icon" alt="" />
                      </div>
                      <div className="module-content">
                        <div className="module-info">
                          <h2 className="budgeting">{`Budgeting `}</h2>
                          <div className="skills-youll-gain">{`Skills you’ll gain: `}</div>
                          <div className="module-details">
                            <div className="placeholder-parent">
                              <div className="placeholder">4.7</div>
                              <div className="rating-stars">
                                <img
                                  className="rating-star-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/rating-star.svg"
                                />
                              </div>
                            </div>
                            <div className="beginner-certification">
                              Beginner • Certification • 1 month
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="whatsapp-image-2024-05-04-at-1"
                        alt=""
                        src="/whatsapp-image-20240504-at-1251-1@2x.png"
                      />
                    </div>
                    <div className="debt-module">
                      <div className="debt-content">
                        <div className="debt-info">
                          <h2 className="debt-management">Debt Management</h2>
                          <div className="debt-details">
                            <div className="debt-image" />
                            <div className="module2">
                              <div className="module-child1" />
                              <img className="module-child2" alt="" />
                              <img className="module-child3" alt="" />
                            </div>
                            <img
                              className="rating-star-icon1"
                              alt=""
                              src="/rating-star.svg"
                            />
                          </div>
                        </div>
                        <div className="debt-skills">
                          <div className="skills-youll-gain1">{`Skills you’ll gain: `}</div>
                        </div>
                      </div>
                      <div className="debt-meta">
                        <div className="placeholder-two">4.7</div>
                        <div className="beginner-certification1">
                          Beginner • Certification • 1 month
                        </div>
                      </div>
                      <img
                        className="whatsapp-image-2024-05-04-at-11"
                        alt=""
                        src="/whatsapp-image-20240504-at-1257-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="savings-retirement">
                    <Module
                      line11="pending_95:919"
                      line12="pending_95:920"
                      saving="Saving"
                      ratingStar="/rating-star.svg"
                      whatsAppImage20240504At12="/whatsapp-image-20240504-at-1253-1@2x.png"
                    />
                    <div className="savings-retirement-modules">
                      <div className="savings-retirement-modules-child" />
                      <div className="module3">
                        <div className="module-child4" />
                        <img className="module-child5" alt="" />
                        <img className="module-child6" alt="" />
                      </div>
                      <div className="savings-retirement-modules-inner">
                        <div className="retirement-planning-parent">
                          <h2 className="retirement-planning">
                            Retirement Planning
                          </h2>
                          <div className="frame-wrapper">
                            <div className="retirement-beginner-parent">
                              <div className="retirement-beginner">
                                <div className="skills-youll-gain2">{`Skills you’ll gain: `}</div>
                                <div className="retirement-month">
                                  <div className="empty-retirement">4.7</div>
                                  <div className="retirement-stars">
                                    <img
                                      className="rating-star-icon2"
                                      alt=""
                                      src="/rating-star-3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="beginner-certification2">
                                Beginner • Certification • 1 month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="whatsapp-image-2024-05-04-at-12"
                        alt=""
                        src="/whatsapp-image-20240504-at-1258-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="trading-modules-wrapper">
                <div className="trading-modules">
                  <Module
                    line11="pending_95:931"
                    line12="pending_95:932"
                    saving="Trading"
                    ratingStar="/rating-star-4.svg"
                    whatsAppImage20240504At12="/whatsapp-image-20240504-at-1255-1@2x.png"
                    propPadding="0.5px 0px 7.1px"
                    propTop="8.9px"
                    propTop1="8.9px"
                    propPadding1="0px var(--padding-xs)"
                    propWidth="100%"
                    propLeft="0px"
                    propRight="0px"
                    propOverflow="hidden"
                    onModuleContainerClick={onModuleContainerClick}
                  />
                  <div className="rectangle-group">
                    <div className="frame-child1" />
                    <div className="module4">
                      <div className="module-child7" />
                      <img className="module-child8" alt="" />
                      <img className="module-child9" alt="" />
                    </div>
                    <div className="frame-wrapper1">
                      <div className="crypto-trading-parent">
                        <a className="crypto-trading">Crypto Trading</a>
                        <div className="frame-parent1">
                          <div className="skills-youll-gain-parent">
                            <div className="skills-youll-gain3">{`Skills you’ll gain: `}</div>
                            <div className="crypto-beginner">
                              <div className="empty-crypto">4.7</div>
                              <div className="crypto-stars">
                                <img
                                  className="rating-star-icon3"
                                  alt=""
                                  src="/rating-star-5.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="beginner-certification3">
                            Beginner • Certification • 1 month
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="whatsapp-image-2024-05-04-at-13"
                      alt=""
                      src="/whatsapp-image-20240504-at-1259-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="chatbot-1-icon1"
            loading="lazy"
            alt=""
            src="/chatbot-11@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Course;
