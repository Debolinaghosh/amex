import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Module.css";

const Module = () => {
  const navigate = useNavigate();

  const onHomeText3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesText3Click = useCallback(() => {
    navigate("/course");
  }, [navigate]);

  const onCaseStudiesText3Click = useCallback(() => {
    navigate("/case");
  }, [navigate]);

  const onGamesText3Click = useCallback(() => {
    // Please sync "escape room page 1" to the project
  }, []);

  return (
    <div className="module5">
      <div className="module-child10" />
      <div className="module-child11" />
      <div className="home4">Home</div>
      <div className="courses3">Courses</div>
      <div className="case-studies4">Case Studies</div>
      <div className="tools3">Tools</div>
      <div className="darhboard3">
        <div className="darhboard-child9" />
        <div className="darhboard-child10" />
        <div className="darhboard-child11" />
        <div className="darhboard-child12" />
      </div>
      <img className="sertificate-icon3" alt="" src="/sertificate.svg" />
      <div className="finverse3">FinVerse</div>
      <div className="rectangle-container">
        <div className="frame-child2" />
        <div className="logo1">LOGO</div>
      </div>
      <div className="games3">Games</div>
      <div className="community3">Community</div>
      <div className="profile1">Profile</div>
      <div className="settings3">Settings</div>
      <img className="sertificate-icon4" alt="" src="/sertificate1.svg" />
      <img className="vector-icon7" alt="" src="/vector11.svg" />
      <img className="chat-alt-3-icon2" alt="" src="/chat-alt-3@2x.png" />
      <img className="book-open-alt-icon1" alt="" src="/book-open-alt.svg" />
      <img className="book-duotone-icon2" alt="" src="/book-duotone.svg" />
      <img className="setting-line-icon2" alt="" src="/setting-line@2x.png" />
      <div className="log-out3">Log Out</div>
      <img className="sign-out-squre-icon3" alt="" src="/sign-out-squre1.svg" />
      <div className="design" />
      <div className="module-child12" />
      <div className="home5">Home</div>
      <div className="courses4">Courses</div>
      <div className="case-studies5">Case Studies</div>
      <div className="tools4">Tools</div>
      <div className="darhboard4">
        <div className="darhboard-child13" />
        <div className="darhboard-child14" />
        <div className="darhboard-child15" />
        <div className="darhboard-child16" />
      </div>
      <img className="sertificate-icon5" alt="" src="/sertificate.svg" />
      <div className="finverse4">FinVerse</div>
      <div className="group-div">
        <div className="frame-child3" />
        <div className="logo2">LOGO</div>
      </div>
      <div className="games4">Games</div>
      <div className="community4">Community</div>
      <div className="settings4">Settings</div>
      <img className="setting-line-icon3" alt="" src="/setting-line@2x.png" />
      <img className="vector-icon8" alt="" src="/vector11.svg" />
      <img className="chat-alt-3-icon3" alt="" src="/chat-alt-3@2x.png" />
      <img className="book-open-alt-icon2" alt="" src="/book-open-alt.svg" />
      <img className="book-duotone-icon3" alt="" src="/book-duotone.svg" />
      <div className="log-out4">Log Out</div>
      <img className="sign-out-squre-icon4" alt="" src="/sign-out-squre1.svg" />
      <div className="module-child13" />
      <div className="module-child14" />
      <div className="home6">Home</div>
      <div className="courses5">Courses</div>
      <div className="case-studies6">Case Studies</div>
      <div className="tools5">Tools</div>
      <div className="darhboard5">
        <div className="darhboard-child17" />
        <div className="darhboard-child18" />
        <div className="darhboard-child19" />
        <div className="darhboard-child20" />
      </div>
      <img className="sertificate-icon6" alt="" src="/sertificate4.svg" />
      <div className="finverse5">FinVerse</div>
      <div className="rectangle-parent1">
        <div className="frame-child4" />
        <div className="logo3">LOGO</div>
      </div>
      <div className="games5">Games</div>
      <div className="community5">Community</div>
      <div className="profile2">Profile</div>
      <div className="settings5">Settings</div>
      <img className="sertificate-icon7" alt="" src="/sertificate3.svg" />
      <img className="chat-alt-3-icon4" alt="" src="/chat-alt-3@2x.png" />
      <img className="book-open-alt-icon3" alt="" src="/book-open-alt1.svg" />
      <img className="book-duotone-icon4" alt="" src="/book-duotone1.svg" />
      <img className="setting-line-icon4" alt="" src="/setting-line@2x.png" />
      <div className="log-out5">Log Out</div>
      <img className="sign-out-squre-icon5" alt="" src="/sign-out-squre2.svg" />
      <div className="content1">
        <div className="menu">
          <div className="page-content">
            <div className="homepage">
              <a className="home7" onClick={onHomeText3Click}>
                Home
              </a>
            </div>
            <div className="learning">
              <div className="courses-parent">
                <a className="courses6" onClick={onCoursesText3Click}>
                  Courses
                </a>
                <div className="course-icons">
                  <div className="course-icon" />
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
              </div>
              <div className="case-studies-wrapper">
                <a className="case-studies7" onClick={onCaseStudiesText3Click}>
                  Case Studies
                </a>
              </div>
            </div>
          </div>
          <div className="links">
            <a className="tools6">Tools</a>
          </div>
          <div className="links1">
            <img className="vector-icon10" alt="" src="/vector-11.svg" />
            <div className="game-link">
              <a className="games6" onClick={onGamesText3Click}>
                Games
              </a>
            </div>
          </div>
          <div className="links2">
            <a className="community6">Community</a>
          </div>
          <div className="links3">
            <div className="settings6">Settings</div>
          </div>
        </div>
        <div className="user-actions1">
          <div className="log-out6">Log Out</div>
          <img
            className="sign-out-squre-icon6"
            loading="lazy"
            alt=""
            src="/sign-out-squre3.svg"
          />
        </div>
        <div className="finverse-banner">
          <div className="finverse-logo1">
            <img
              className="finverse-logo-item"
              alt=""
              src="/rectangle-42881.svg"
            />
            <a className="finverse6">
              <span>Fin</span>
              <span className="verse2">Verse</span>
            </a>
          </div>
          <img className="vector-icon11" alt="" src="/vector-11.svg" />
          <img className="vector-icon12" alt="" src="/vector-31.svg" />
          <img className="vector-icon13" alt="" src="/vector-41.svg" />
          <img className="vector-icon14" alt="" src="/vector4.svg" />
          <img className="vector-icon15" alt="" src="/vector5.svg" />
          <img className="vector-icon16" alt="" src="/vector-7.svg" />
          <img
            className="mditools-icon2"
            loading="lazy"
            alt=""
            src="/mditools.svg"
          />
          <img
            className="screenshot-2024-05-04-at-3452"
            loading="lazy"
            alt=""
            src="/screenshot-20240504-at-345-3@2x.png"
          />
        </div>
      </div>
      <div className="income-analysis-banner">
        <div className="l2-income-analysis-container">
          <p className="l2-income">{`L2: Income `}</p>
          <p className="analysis">Analysis</p>
        </div>
        <img
          className="treasure-chest-1-2"
          loading="lazy"
          alt=""
          src="/treasurechest-1-2@2x.png"
        />
      </div>
      <img
        className="group-icon"
        loading="lazy"
        alt=""
        src="/group-2185@2x.png"
      />
      <section className="search-bar-wrapper">
        <div className="search-bar">
          <div className="search-input">
            <div className="search-field">
              <SearchBar
                searchAlt="/search-alt.svg"
                userCicrleDuotone="/user-cicrle-duotone@2x.png"
                userCicrleDuotone1="/user-cicrle-duotone@2x.png"
                courses="Courses :  Trading"
                propPadding="0px 0px var(--padding-6xs-8)"
                propWidth="486.1px"
                propPadding1="0px 37px"
                propMarginTop="-0.1px"
              />
              <div className="search-field-inner">
                <div className="frame-parent2">
                  <div className="children-wrapper">
                    <a className="children1">Children</a>
                  </div>
                  <div className="teenagers-wrapper">
                    <a className="teenagers1">Teenagers</a>
                  </div>
                  <div className="adults1">Adults</div>
                  <div className="senior-citizens-container-parent">
                    <div className="senior-citizens-container">
                      <div className="senior-citizens1">Senior Citizens</div>
                    </div>
                    <div className="line-div" />
                  </div>
                </div>
              </div>
              <div className="prelearning-challenge-containe-wrapper">
                <div className="prelearning-challenge-containe">
                  <div className="prelearning-challenge-content">
                    <div className="pre-learning-challenge">
                      <p className="pre-learning">{`Pre-learning `}</p>
                      <p className="challenge">Challenge</p>
                    </div>
                  </div>
                  <div className="progress-indicators">
                    <div className="progress-indicators-child" />
                    <div className="progress-bars" />
                    <div className="progress-bars1" />
                    <div className="progress-bars2" />
                    <div className="progress-bars3" />
                    <div className="progress-bars4" />
                    <div className="progress-bars5" />
                    <div className="progress-bars6" />
                    <div className="progress-bars7" />
                    <div className="progress-bars8" />
                    <div className="progress-bars9" />
                    <div className="angle-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="learning-content-parent">
            <div className="learning-content">
              <div className="learning-modules">
                <div className="learning-module">
                  <div className="module-header">
                    <div className="module-icons">
                      <img
                        className="module-icons-child"
                        alt=""
                        src="/group-44.svg"
                      />
                      <img
                        className="vector-icon17"
                        alt=""
                        src="/vector-8.svg"
                      />
                    </div>
                    <div className="module-icons1">
                      <img
                        className="module-icons-item"
                        alt=""
                        src="/group-45.svg"
                      />
                      <img
                        className="vector-icon18"
                        alt=""
                        src="/vector-8.svg"
                      />
                    </div>
                  </div>
                  <div className="module-content1">
                    <div className="basics-of-trading">
                      <div className="l1-basics-of-container">
                        <p className="l1-basics-of">L1: Basics Of Trading</p>
                      </div>
                      <div className="trading-duration">
                        <div className="trading-duration-icons">
                          <div className="duration-icons">
                            <img
                              className="vector-icon19"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <div className="min">12min</div>
                          </div>
                          <div className="duration-icons1">
                            <img
                              className="vector-icon20"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <div className="min1">12min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="escape-room-container-wrapper">
                <div className="escape-room-container">
                  <div className="escape-room-content">
                    <div className="level-1-escape-container">
                      <p className="level-1">Level 1:</p>
                      <p className="escape-room">Escape Room</p>
                    </div>
                  </div>
                  <div className="escape-room-description-container">
                    <p className="blank-line">&nbsp;</p>
                  </div>
                </div>
              </div>
              <div className="case-study-container-parent">
                <div className="case-study-container">
                  <div className="case-study-content">
                    <img
                      className="case-study-1-icon"
                      loading="lazy"
                      alt=""
                      src="/casestudy-1@2x.png"
                    />
                    <div className="case-study-details">
                      <img
                        className="case-study-details-child"
                        alt=""
                        src="/group-44-1.svg"
                      />
                      <img
                        className="vector-icon21"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="explore-case-study">
                  <div className="explore-case-study-link">
                    <div className="explore-related-case-container">
                      <p className="explore-related-case">
                        Explore Related case study
                      </p>
                    </div>
                  </div>
                  <div className="l7-basics-of-trading-parent">
                    <div className="l7-basics-of-container">
                      <p className="l7-basics-of">L7: Basics Of Trading</p>
                    </div>
                    <div className="trading-basics-duration">
                      <div className="trading-basics-minutes">
                        <img
                          className="trading-basics-minutes-icon"
                          alt=""
                          src="/vector-10.svg"
                        />
                        <div className="min2">12min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="income-analysis-content-parent">
              <div className="income-analysis-content">
                <div className="income-analysis-icon">
                  <img
                    className="income-analysis-icon-child"
                    alt=""
                    src="/group-45-1.svg"
                  />
                  <img
                    className="income-analysis-icon-image"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="income-analysis-details">
                <div className="income-analysis-title">
                  <a className="l8-income-analysis-container">
                    <p className="l8-income">{`L8: Income `}</p>
                    <p className="analysis1">Analysis</p>
                  </a>
                  <div className="income-analysis-level">
                    <div className="level-2-escape-container">
                      <p className="level-2">Level 2:</p>
                      <p className="escape-room1">Escape room</p>
                    </div>
                  </div>
                </div>
                <div className="income-analysis-duration">
                  <div className="income-analysis-minutes">
                    <img
                      className="income-analysis-minutes-icon"
                      alt=""
                      src="/vector-15.svg"
                    />
                    <div className="min3">12min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chatbot-3-parent">
            <img
              className="chatbot-3-icon"
              loading="lazy"
              alt=""
              src="/chatbot-3@2x.png"
            />
            <img className="frame-child5" alt="" src="/group-2185-1@2x.png" />
            <img
              className="frame-child6"
              loading="lazy"
              alt=""
              src="/group-2187@2x.png"
            />
            <div className="chatbot-content">
              <div className="chatbot-escape-room">
                <div className="level-3-escape-container">
                  <p className="level-3">Level 3:</p>
                  <p className="escape-room2">Escape room</p>
                </div>
                <div className="chatbot-details">
                  <div className="chatbot-details-inner">
                    <div className="frame-parent3">
                      <img
                        className="frame-child7"
                        alt=""
                        src="/group-45-1.svg"
                      />
                      <img
                        className="vector-icon22"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-parent4">
                    <div className="l8-income-analysis-parent">
                      <a className="l8-income-analysis-container1">
                        <p className="l8-income1">{`L8: Income `}</p>
                        <p className="analysis2">Analysis</p>
                      </a>
                      <div className="level-4-escape-room-wrapper">
                        <div className="level-4-escape-container">
                          <p className="level-4">Level 4:</p>
                          <p className="escape-room3">Escape room</p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper2">
                      <div className="vector-group">
                        <img
                          className="vector-icon23"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="min4">12min</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent5">
                  <div className="frame-wrapper3">
                    <div className="frame-parent6">
                      <img
                        className="frame-child8"
                        loading="lazy"
                        alt=""
                        src="/group-2183@2x.png"
                      />
                      <div className="frame-wrapper4">
                        <div className="frame-parent7">
                          <img
                            className="frame-child9"
                            alt=""
                            src="/group-44-1.svg"
                          />
                          <img
                            className="vector-icon24"
                            alt=""
                            src="/vector-12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="explore-related-case-study-parent">
                    <div className="explore-related-case-container1">
                      <p className="explore-related-case1">
                        Explore Related case study
                      </p>
                    </div>
                    <div className="frame-wrapper5">
                      <div className="l7-basics-of-trading-group">
                        <div className="l7-basics-of-container1">
                          <p className="l7-basics-of1">L7: Basics Of Trading</p>
                        </div>
                        <div className="frame-wrapper6">
                          <div className="vector-container">
                            <img
                              className="vector-icon25"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <div className="min5">12min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trading-content-parent">
                  <div className="trading-content">
                    <div className="trading-icons">
                      <div className="trading-icons-content">
                        <img
                          className="trading-icons-content-child"
                          alt=""
                          src="/group-44-1.svg"
                        />
                        <img
                          className="trading-icons-images"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                      <div className="trading-icons-content1">
                        <img
                          className="trading-icons-content-item"
                          alt=""
                          src="/group-45-1.svg"
                        />
                        <img
                          className="vector-icon26"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="trading-details">
                    <div className="trading-basics">
                      <div className="trading-basics-details">
                        <div className="l7-basics-of-container2">
                          <p className="l7-basics-of2">L7: Basics Of Trading</p>
                        </div>
                        <div className="trading-basics-duration-contai">
                          <div className="trading-basics-minutes-image-parent">
                            <img
                              className="trading-basics-minutes-image"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <div className="min6">12min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="trading-income-analysis">
                      <div className="l8-income-analysis-container2">
                        <p className="l8-income2">{`L8: Income `}</p>
                        <p className="analysis3">Analysis</p>
                      </div>
                      <div className="trading-income-analysis-detail">
                        <div className="trading-income-analysis-minute">
                          <img
                            className="trading-income-analysis-minute1"
                            alt=""
                            src="/vector-23.svg"
                          />
                          <div className="min7">12min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="postlearning-challenge">
                <div className="postlearning-challenge-content">
                  <div className="postlearning-challenge-title">
                    <p className="post-learning-challenge">
                      <span className="post-learning">{`Post-learning `}</span>
                      <span className="challenge1">Challenge</span>
                    </p>
                  </div>
                  <div className="postlearning-challenge-progres">
                    <div className="postlearning-challenge-progres-child" />
                    <div className="postlearning-challenge-progres1" />
                    <div className="postlearning-challenge-progres2" />
                    <div className="postlearning-challenge-progres3" />
                    <div className="postlearning-challenge-progres4" />
                    <div className="postlearning-challenge-progres5" />
                    <div className="postlearning-challenge-progres6" />
                    <div className="postlearning-challenge-progres7" />
                    <div className="postlearning-challenge-progres8" />
                    <div className="postlearning-challenge-progres9" />
                    <div className="postlearning-challenge-progres10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module;
