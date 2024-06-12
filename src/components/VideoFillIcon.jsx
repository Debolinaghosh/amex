import { useMemo } from "react";
import PropTypes from "prop-types";
import "./VideoFillIcon.css";

const VideoFillIcon = ({
  className = "",
  videoFillIconVideoFill,
  videoFillIconWidth,
  videoFillIconOverflow,
  videoFillIconHeight,
  videoFillIconPosition,
  videoFillIconTop,
  videoFillIconLeft,
}) => {
  const videoFillIconStyle = useMemo(() => {
    return {
      width: videoFillIconWidth,
      overflow: videoFillIconOverflow,
      height: videoFillIconHeight,
      position: videoFillIconPosition,
      top: videoFillIconTop,
      left: videoFillIconLeft,
    };
  }, [
    videoFillIconWidth,
    videoFillIconOverflow,
    videoFillIconHeight,
    videoFillIconPosition,
    videoFillIconTop,
    videoFillIconLeft,
  ]);

  return (
    <img
      className={`video-fill-icon ${className}`}
      alt=""
      src={videoFillIconVideoFill}
      style={videoFillIconStyle}
    />
  );
};

VideoFillIcon.propTypes = {
  className: PropTypes.string,
  videoFillIconVideoFill: PropTypes.string,

  /** Style props */
  videoFillIconWidth: PropTypes.any,
  videoFillIconOverflow: PropTypes.any,
  videoFillIconHeight: PropTypes.any,
  videoFillIconPosition: PropTypes.any,
  videoFillIconTop: PropTypes.any,
  videoFillIconLeft: PropTypes.any,
};

export default VideoFillIcon;
