import VideoFillIcon from "./VideoFillIcon";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent8 ${className}`}>
      <div className="frame-child18" />
      <b className="new-case-study">NEW CASE STUDY</b>
      <div className="vandermeer-content-wrapper">
        <div className="vandermeer-content">
          <div className="the-vandermeer-company-container">
            <p className="the-vandermeer-company">{`The Vandermeer Company : `}</p>
            <p className="risk-analysis">Risk Analysis</p>
          </div>
          <VideoFillIcon
            videoFillIconVideoFill="/video-fill1@2x.png"
            videoFillIconWidth="74.9px"
            videoFillIconOverflow="unset"
            videoFillIconHeight="58px"
            videoFillIconPosition="absolute"
            videoFillIconTop="-7.4px"
            videoFillIconLeft="122.3px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
