import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Module.css";

const Module = ({
  className = "",
  line11,
  line12,
  saving,
  ratingStar,
  whatsAppImage20240504At12,
  propPadding,
  propTop,
  propTop1,
  propPadding1,
  propWidth,
  propLeft,
  propRight,
  propOverflow,
  onModuleContainerClick,
}) => {
  const moduleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const lineIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const lineIcon1Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const moduleBodiesStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const whatsAppImage20240504At1Style = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
      right: propRight,
      overflow: propOverflow,
    };
  }, [propWidth, propLeft, propRight, propOverflow]);

  return (
    <div
      className={`module6 ${className}`}
      style={moduleStyle}
      onClick={onModuleContainerClick}
    >
      <div className="module-child15" />
      <div className="module7">
        <div className="module-child16" />
        <img
          className="module-child17"
          alt=""
          src={line11}
          style={lineIconStyle}
        />
        <img
          className="module-child18"
          alt=""
          src={line12}
          style={lineIcon1Style}
        />
      </div>
      <div className="module-bodies" style={moduleBodiesStyle}>
        <div className="retirement-content">
          <div className="retirement-info">
            <h2 className="saving">{saving}</h2>
            <div className="skills-youll-gain4">{`Skills you’ll gain: `}</div>
          </div>
          <div className="retirement-details">
            <div className="retirement-rating">4.7</div>
            <div className="savings-rating">
              <img className="rating-star-icon4" alt="" src={ratingStar} />
            </div>
          </div>
          <div className="beginner-certification4">
            Beginner • Certification • 1 month
          </div>
        </div>
      </div>
      <img
        className="whatsapp-image-2024-05-04-at-14"
        alt=""
        src={whatsAppImage20240504At12}
        style={whatsAppImage20240504At1Style}
      />
    </div>
  );
};

Module.propTypes = {
  className: PropTypes.string,
  line11: PropTypes.string,
  line12: PropTypes.string,
  saving: PropTypes.string,
  ratingStar: PropTypes.string,
  whatsAppImage20240504At12: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propTop: PropTypes.any,
  propTop1: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth: PropTypes.any,
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propOverflow: PropTypes.any,

  /** Action props */
  onModuleContainerClick: PropTypes.func,
};

export default Module;
