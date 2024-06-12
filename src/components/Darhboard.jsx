import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Darhboard.css";

const Darhboard = ({
  className = "",
  darhboardPosition,
  darhboardTop,
  darhboardLeft,
}) => {
  const darhboardStyle = useMemo(() => {
    return {
      position: darhboardPosition,
      top: darhboardTop,
      left: darhboardLeft,
    };
  }, [darhboardPosition, darhboardTop, darhboardLeft]);

  return (
    <div className={`darhboard1 ${className}`} style={darhboardStyle}>
      <div className="darhboard-child1" />
      <div className="darhboard-child2" />
      <div className="darhboard-child3" />
      <div className="darhboard-child4" />
    </div>
  );
};

Darhboard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  darhboardPosition: PropTypes.any,
  darhboardTop: PropTypes.any,
  darhboardLeft: PropTypes.any,
};

export default Darhboard;
