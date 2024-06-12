import { useCallback } from "react";
import Darhboard from "../components/Darhboard";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Case.css";

const Case = () => {
  const navigate = useNavigate();

  const onStreamlingFinancesForClick = useCallback(() => {
    navigate("/case-study-page-1");
  }, [navigate]);

  return (
    <div className="case">
      <div className="case-child" />
      <div className="case-item" />
      <div className="home8">Home</div>
      <div className="courses7">Courses</div>
      <div className="case-studies8">Case Studies</div>
      <div className="tools7">Tools</div>
      <Darhboard
        darhboardPosition="relative"
        darhboardTop="unset"
        darhboardLeft="unset"
      />
      <img className="sertificate-icon8" alt="" src="/sertificate.svg" />
      <div className="finverse7">FinVerse</div>
      <div className="logo-wrapper">
        <div className="logo4">LOGO</div>
      </div>
      <div className="games7">Games</div>
      <div className="community7">Community</div>
      <div className="profile3">Profile</div>
      <div className="settings7">Settings</div>
      <img className="sertificate-icon9" alt="" src="/sertificate1.svg" />
      <img className="vector-icon27" alt="" src="/vector11.svg" />
      <img className="chat-alt-3-icon5" alt="" src="/chat-alt-31@2x.png" />
      <img className="book-open-alt-icon4" alt="" src="/book-open-alt.svg" />
      <img className="book-duotone-icon5" alt="" src="/book-duotone.svg" />
      <img className="setting-line-icon5" alt="" src="/setting-line1@2x.png" />
      <div className="log-out7">Log Out</div>
      <img className="sign-out-squre-icon7" alt="" src="/sign-out-squre1.svg" />
      <div className="case-inner" />
      <div className="case-child1" />
      <div className="home9">Home</div>
      <div className="courses8">Courses</div>
      <div className="case-studies9">Case Studies</div>
      <div className="tools8">Tools</div>
      <Darhboard
        darhboardPosition="relative"
        darhboardTop="unset"
        darhboardLeft="unset"
      />
      <img className="sertificate-icon10" alt="" src="/sertificate.svg" />
      <div className="finverse8">FinVerse</div>
      <div className="logo-container">
        <div className="logo5">LOGO</div>
      </div>
      <div className="games8">Games</div>
      <div className="community8">Community</div>
      <div className="settings8">Settings</div>
      <img className="vector-icon28" alt="" src="/vector11.svg" />
      <img className="chat-alt-3-icon6" alt="" src="/chat-alt-31@2x.png" />
      <img className="book-open-alt-icon5" alt="" src="/book-open-alt.svg" />
      <img className="book-duotone-icon6" alt="" src="/book-duotone.svg" />
      <img className="setting-line-icon6" alt="" src="/setting-line2@2x.png" />
      <div className="log-out8">Log Out</div>
      <img className="sign-out-squre-icon8" alt="" src="/sign-out-squre1.svg" />
      <header className="case-studies-parent">
        <h3 className="case-studies10">Case Studies</h3>
        <div className="bell-fill-parent">
          <img className="bell-fill-icon2" alt="" src="/bell-fill.svg" />
          <img className="bell-fill-icon3" alt="" src="/bell-fill.svg" />
        </div>
        <div className="user-cicrle-duotone-parent">
          <img
            className="user-cicrle-duotone-icon2"
            alt=""
            src="/user-cicrle-duotone1@2x.png"
          />
          <img
            className="user-cicrle-duotone-icon3"
            alt=""
            src="/user-cicrle-duotone1@2x.png"
          />
        </div>
        <a className="finance-analysis1">Finance Analysis</a>
        <div className="finance-fundamentals-parent">
          <b className="finance-fundamentals">Finance Fundamentals</b>
          <a className="finance-planning">Finance Planning</a>
        </div>
        <div className="capital-management">Capital Management</div>
        <div className="international-finance">International Finance</div>
        <div className="rectangle-parent2">
          <div className="frame-child10" />
          <div
            className="streamling-finances-for"
            onClick={onStreamlingFinancesForClick}
          >
            Streamling Finances for Seniors
          </div>
        </div>
        <div className="rectangle-parent3">
          <div className="frame-child11" />
          <div className="dunham-cosmetics-financial">
            Dunham Cosmetics: Financial Evaluation
          </div>
        </div>
        <div className="management-content">
          <div className="management-content-child" />
          <div className="friends-break-even-analysis-container">
            <p className="friends"> Friends:</p>
            <p className="break-even-analysis"> Break-even Analysis</p>
          </div>
        </div>
        <div className="management-content1">
          <div className="management-content-item" />
          <div className="palmetto-soups-break-even">
            Palmetto Soups: Break-even analysis
          </div>
        </div>
        <div className="rectangle-parent4">
          <div className="frame-child12" />
          <div className="delaware-pipe-make-container">
            <p className="delaware-pipe">{`Delaware Pipe: `}</p>
            <p className="make-or-buy">Make or Buy</p>
          </div>
        </div>
        <div className="frame-child13" />
        <div className="rectangle-parent5">
          <div className="frame-child14" />
          <div className="search-alt-wrapper">
            <img className="search-alt-icon1" alt="" src="/search-alt.svg" />
          </div>
          <a className="search">Search</a>
        </div>
        <FrameComponent1 />
        <FrameComponent />
        <div className="rectangle-parent6">
          <div className="frame-child15" />
          <img
            className="image-7-icon"
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
      </header>
      <div className="case-child2" />
      <div className="case-child3" />
      <div className="home10">Home</div>
      <div className="courses9">Courses</div>
      <div className="case-studies11">Case Studies</div>
      <div className="tools9">Tools</div>
      <Darhboard
        darhboardPosition="relative"
        darhboardTop="unset"
        darhboardLeft="unset"
      />
      <img className="sertificate-icon11" alt="" src="/sertificate2.svg" />
      <div className="finverse9">FinVerse</div>
      <div className="logo-frame">
        <div className="logo6">LOGO</div>
      </div>
      <div className="games9">Games</div>
      <div className="community9">Community</div>
      <div className="profile4">Profile</div>
      <div className="settings9">Settings</div>
      <img className="sertificate-icon12" alt="" src="/sertificate3.svg" />
      <img className="vector-icon29" alt="" src="/vector.svg" />
      <img className="chat-alt-3-icon7" alt="" src="/chat-alt-3@2x.png" />
      <img className="book-open-alt-icon6" alt="" src="/book-open-alt1.svg" />
      <img className="book-duotone-icon7" alt="" src="/book-duotone1.svg" />
      <img className="setting-line-icon7" alt="" src="/setting-line@2x.png" />
      <div className="log-out9">Log Out</div>
      <img className="sign-out-squre-icon9" alt="" src="/sign-out-squre2.svg" />
      <div className="fort-greenworld-capital-budge-wrapper">
        <div className="fort-greenworld-capital-container">
          <p className="fort-greenworld">Fort Greenworld:</p>
          <p className="capital-budgetng">Capital budgetng</p>
        </div>
      </div>
    </div>
  );
};

export default Case;
