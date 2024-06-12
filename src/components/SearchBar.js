import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({
  className = "",
  searchAlt,
  userCicrleDuotone,
  userCicrleDuotone1,
  courses,
  propPadding,
  propWidth,
  propPadding1,
  propMarginTop,
}) => {
  const searchIconContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const coursesTitleStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
      marginTop: propMarginTop,
    };
  }, [propWidth, propPadding1, propMarginTop]);

  return (
    <header className={`search-bar1 ${className}`}>
      <div className="search-input1">
        <div className="search-icon-container" style={searchIconContainerStyle}>
          <div className="search-icons">
            <div className="search-box" />
            <img className="search-alt-icon2" alt="" src={searchAlt} />
            <a className="search1">Search</a>
          </div>
        </div>
        <div className="notifications">
          <div className="notification-bell">
            <div className="bell-icons">
              <img className="bell-fill-icon4" alt="" src="/bell-fill.svg" />
              <img className="bell-fill-icon5" alt="" src="/bell-fill.svg" />
            </div>
          </div>
          <div className="user-avatar">
            <img
              className="user-cicrle-duotone-icon4"
              alt=""
              src={userCicrleDuotone}
            />
            <img
              className="user-cicrle-duotone-icon5"
              alt=""
              src={userCicrleDuotone1}
            />
          </div>
        </div>
      </div>
      <div className="courses-title" style={coursesTitleStyle}>
        <h1 className="courses10">{courses}</h1>
      </div>
    </header>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  searchAlt: PropTypes.string,
  userCicrleDuotone: PropTypes.string,
  userCicrleDuotone1: PropTypes.string,
  courses: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propMarginTop: PropTypes.any,
};

export default SearchBar;
