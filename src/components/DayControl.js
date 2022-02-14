import React from "react";
import Day from "./Day";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Friday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class DayControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dayVisibleOnPage: 0
    // };
  }
  handleClickDayNext = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'NEXT_DAY',
      dayVisibleOnPage: this.props.dayVisibleOnPage
    }
    dispatch(action);
  }
  handleClickDayPrev = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'PREV_DAY',
      dayVisibleOnPage: this.props.dayVisibleOnPage
    }
    dispatch(action);
  }
  resetDay = () => {
    const { dispatch } = this.props;
    const resetDay = 0;
    const action = {
      type: 'RESET_DAY',
      dayVisibleOnPage: resetDay
    }
    dispatch(action);
  }
  render(){
    
    let currentlyVisibleState = null;
    let index = this.props.dayVisibleOnPage
    currentlyVisibleState = <Day day={marketSchedule[index].day}
    location={marketSchedule[index].location}
    hours={marketSchedule[index].hours}
    booth={marketSchedule[index].booth}/>
    return ( 
      <React.Fragment>
        <div id="day-box">
        <h4 style={{fontSize:"1.25rem"}}>Daily Market Schedule</h4>
        {currentlyVisibleState}
               
        {/* {index===0 ?  <button inactive>Previous Day</button>  : <button onClick={this.handleClickDayPrev}>Previous Day</button> } */}
        {index===6 ? <button onClick={this.resetDay}>Next</button> : <button onClick={this.handleClickDayNext}>Next Day</button> }
        </div>
      </React.Fragment>
    );
  }
}

DayControl.propTypes = {
  dayVisibleOnPage: PropTypes.number
}
const mapStateToProps = state => {
  return {
    dayVisibleOnPage: state.dayVisibleOnPage
  }
}

DayControl = connect(mapStateToProps)(DayControl);

export default DayControl;