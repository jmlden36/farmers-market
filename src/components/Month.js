import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return (
    <React.Fragment>
        <p><strong>{props.month}</strong></p>
        <p>{props.selection}</p>
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Month;