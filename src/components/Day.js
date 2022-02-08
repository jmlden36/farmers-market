import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
        <p><strong>{props.day}</strong></p>
        <p>{props.location}</p>
        <p>{props.hours}</p>
        <p>{props.booth}</p>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};
export default Day;
